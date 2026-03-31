#!/usr/bin/env python3
"""
Link Checker Script
Crawls website and validates all links, images, assets, and resources.
Identifies broken links, mixed content, redirect chains, and orphaned pages.
"""

import sys
import requests
import json
import time
from urllib.parse import urljoin, urlparse
from collections import defaultdict
from datetime import datetime
from bs4 import BeautifulSoup
import argparse
from dataclasses import dataclass
from typing import Set, List, Dict, Tuple

# Suppress SSL warnings for sites with certificate issues
requests.packages.urllib3.disable_warnings()

@dataclass
class LinkIssue:
    """Represents a single link issue found during audit"""
    url: str
    source_page: str
    link_text: str
    link_type: str  # 'internal', 'external', 'image', 'asset', 'email', 'social', 'anchor'
    status_code: int
    error_message: str
    severity: str  # 'critical', 'high', 'medium', 'low'
    is_redirect: bool = False
    redirect_chain: List[str] = None
    recommendation: str = ""

class LinkChecker:
    def __init__(self, base_url: str, max_pages: int = 1000, timeout: int = 10):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.max_pages = max_pages
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        # Track visited pages and found issues
        self.visited_pages: Set[str] = set()
        self.links_to_check: Set[str] = set()
        self.issues: List[LinkIssue] = []
        self.page_links: Dict[str, List[str]] = defaultdict(list)
        self.external_link_cache: Dict[str, Tuple[int, str]] = {}
        
    def normalize_url(self, url: str, source_page: str) -> Tuple[str, str]:
        """Normalize URL and return (normalized_url, url_type)"""
        # Handle email links
        if url.startswith('mailto:'):
            return url, 'email'
        
        # Handle phone links
        if url.startswith('tel:') or url.startswith('sms:'):
            return url, 'phone'
        
        # Handle social media patterns
        social_patterns = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com', 'youtube.com']
        if any(pattern in url for pattern in social_patterns):
            return url, 'social'
        
        # Handle anchor links
        if url.startswith('#'):
            full_url = urljoin(source_page, url)
            return full_url, 'anchor'
        
        # Handle protocol-relative URLs
        if url.startswith('//'):
            url = 'https:' + url
        
        # Convert relative URLs to absolute
        try:
            full_url = urljoin(source_page, url)
            return full_url, 'url'
        except:
            return None, 'invalid'
    
    def is_internal_link(self, url: str) -> bool:
        """Check if URL is internal (same domain)"""
        parsed = urlparse(url)
        return parsed.netloc == self.domain or parsed.netloc == ""
    
    def crawl_page(self, url: str) -> None:
        """Crawl a single page and extract all links"""
        if url in self.visited_pages or len(self.visited_pages) >= self.max_pages:
            return
        
        if not self.is_internal_link(url):
            return
        
        self.visited_pages.add(url)
        
        try:
            response = self.session.get(url, timeout=self.timeout, allow_redirects=True, verify=False)
            
            # Check for mixed content warning
            if url.startswith('https') and any(href.startswith('http://') for href, _ in self.extract_links(response.text, url)):
                self.add_issue(
                    url=url,
                    source_page=url,
                    link_text='[page content]',
                    link_type='mixed_content',
                    status_code=response.status_code,
                    error_message='Mixed Content Warning: Page contains HTTP resources on HTTPS',
                    severity='critical',
                    recommendation='Change all HTTP resources to HTTPS or use protocol-relative URLs (//domain.com)'
                )
            
            # Extract all links from page
            links = self.extract_links(response.text, url)
            self.page_links[url] = [link[1] for link in links]
            
            for link_text, link_url in links:
                if link_url:
                    normalized_url, url_type = self.normalize_url(link_url, url)
                    if normalized_url and url_type != 'invalid':
                        self.links_to_check.add(normalized_url)
                        
                        # Crawl internal links
                        if self.is_internal_link(normalized_url) and url_type == 'url':
                            self.crawl_page(normalized_url)
        
        except requests.exceptions.Timeout:
            self.add_issue(
                url=url,
                source_page=url,
                link_text='[page]',
                link_type='page',
                status_code=0,
                error_message='Request Timeout: Page took too long to load',
                severity='high',
                recommendation='Check server performance or network connectivity'
            )
        except Exception as e:
            self.add_issue(
                url=url,
                source_page=url,
                link_text='[page]',
                link_type='page',
                status_code=0,
                error_message=f'Crawl Error: {str(e)}',
                severity='high',
                recommendation='Verify page is accessible and not behind authentication'
            )
    
    def extract_links(self, html: str, source_url: str) -> List[Tuple[str, str]]:
        """Extract all links and resources from HTML"""
        links = []
        
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Extract anchor links
            for tag in soup.find_all('a', href=True):
                links.append((tag.get_text(strip=True)[:100], tag['href']))
            
            # Extract image links
            for img in soup.find_all('img', src=True):
                links.append(('img: ' + img.get('alt', 'image')[:50], img['src']))
            
            # Extract stylesheet links
            for link in soup.find_all('link', href=True):
                if link.get('rel') and 'stylesheet' in link['rel']:
                    links.append(('stylesheet', link['href']))
            
            # Extract script sources
            for script in soup.find_all('script', src=True):
                links.append(('script', script['src']))
            
        except Exception as e:
            print(f"Error parsing HTML from {source_url}: {str(e)}", file=sys.stderr)
        
        return links
    
    def check_link(self, url: str, source_page: str) -> Tuple[int, str, bool, List[str]]:
        """Check if a link is valid and return status code, error message, redirect status, and redirect chain"""
        # Handle special link types
        if url.startswith('mailto:'):
            # Basic email validation
            email = url.replace('mailto:', '')
            if '@' in email and '.' in email.split('@')[1]:
                return 200, 'OK', False, []
            else:
                return 400, 'Invalid email address', False, []
        
        if url.startswith('tel:') or url.startswith('sms:'):
            return 200, 'OK', False, []  # Assume valid
        
        # Check external link cache
        if url in self.external_link_cache:
            status, msg = self.external_link_cache[url]
            return status, msg, False, []
        
        # Track redirect chain
        redirect_chain = []
        
        try:
            response = self.session.head(url, timeout=self.timeout, allow_redirects=False, verify=False)
            redirect_count = 0
            current_url = url
            
            # Follow redirect chain
            while response.status_code in [301, 302, 307, 308] and redirect_count < 5:
                redirect_chain.append(current_url)
                current_url = response.headers.get('Location')
                if not current_url:
                    break
                redirect_count += 1
                try:
                    response = self.session.head(current_url, timeout=self.timeout, allow_redirects=False, verify=False)
                except:
                    break
            
            is_redirect = len(redirect_chain) > 0
            redirect_chain.append(current_url)
            
            status = response.status_code
            msg = 'OK' if status == 200 else f'HTTP {status}'
            
            # Cache external links
            if not self.is_internal_link(url):
                self.external_link_cache[url] = (status, msg)
            
            return status, msg, is_redirect, redirect_chain
        
        except requests.exceptions.Timeout:
            return 0, 'Timeout', False, []
        except requests.exceptions.ConnectionError:
            return 0, 'Connection Error', False, []
        except Exception as e:
            return 0, f'Error: {str(e)}', False, []
    
    def add_issue(self, url: str, source_page: str, link_text: str, link_type: str, 
                  status_code: int, error_message: str, severity: str, recommendation: str = ""):
        """Add an issue to the list"""
        issue = LinkIssue(
            url=url,
            source_page=source_page,
            link_text=link_text,
            link_type=link_type,
            status_code=status_code,
            error_message=error_message,
            severity=severity,
            recommendation=recommendation
        )
        self.issues.append(issue)
    
    def run_audit(self) -> None:
        """Run the complete link audit"""
        print(f"\n{'='*70}")
        print(f"LINK CHECKER AUDIT")
        print(f"{'='*70}")
        print(f"Starting audit of {self.base_url}")
        print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        
        # Step 1: Crawl all pages
        print(f"[Step 1] Crawling pages...")
        self.crawl_page(self.base_url)
        print(f"Found {len(self.visited_pages)} pages\n")
        
        # Step 2: Check all links
        print(f"[Step 2] Checking {len(self.links_to_check)} links...")
        for i, link in enumerate(self.links_to_check, 1):
            if i % 50 == 0:
                print(f"  Checked {i}/{len(self.links_to_check)} links...")
            
            normalized_url, url_type = self.normalize_url(link, self.base_url)
            if not normalized_url:
                continue
            
            status, msg, is_redirect, redirect_chain = self.check_link(normalized_url, self.base_url)
            
            # Determine severity based on status code
            if status == 200 and not is_redirect:
                continue  # No issue
            
            if self.is_internal_link(normalized_url):
                if status in [301, 302, 307, 308]:
                    severity = 'high' if len(redirect_chain) > 2 else 'medium'
                elif status == 404:
                    severity = 'critical'
                else:
                    severity = 'high'
            else:
                severity = 'high' if status == 404 else 'medium'
            
            # Generate recommendation
            rec = ""
            if status == 404:
                rec = "Link is broken. Update to correct URL or remove link."
            elif len(redirect_chain) > 2:
                rec = f"Redirect chain detected: {' -> '.join(redirect_chain[:3])}... Update link to final destination."
            elif is_redirect:
                rec = f"Link redirects to {redirect_chain[-1]}. Update link to new URL."
            
            self.add_issue(
                url=normalized_url,
                source_page=self.base_url,
                link_text='[link]',
                link_type=url_type,
                status_code=status,
                error_message=msg,
                severity=severity,
                recommendation=rec
            )
        
        print(f"  Checked all {len(self.links_to_check)} links\n")
        
        # Step 3: Detect orphaned pages
        print(f"[Step 3] Detecting orphaned pages...")
        self.detect_orphaned_pages()
        print(f"  Orphan detection complete\n")
        
        self.generate_report()
    
    def detect_orphaned_pages(self) -> None:
        """Detect pages that aren't linked from anywhere"""
        all_linked_pages = set()
        
        for source, links in self.page_links.items():
            for link in links:
                normalized, _ = self.normalize_url(link, source)
                if normalized and self.is_internal_link(normalized):
                    all_linked_pages.add(urlparse(normalized).path)
        
        homepage_path = urlparse(self.base_url).path or '/'
        
        for page in self.visited_pages:
            page_path = urlparse(page).path or '/'
            if page_path != homepage_path and page_path not in all_linked_pages:
                self.add_issue(
                    url=page,
                    source_page=page,
                    link_text='[page]',
                    link_type='orphaned',
                    status_code=200,
                    error_message='Page is not linked from any other page',
                    severity='medium',
                    recommendation='Add internal links to this page or delete if no longer needed.'
                )
    
    def generate_report(self) -> None:
        """Generate and display audit report"""
        print(f"\n{'='*70}")
        print(f"AUDIT REPORT")
        print(f"{'='*70}\n")
        
        # Summary statistics
        critical = sum(1 for i in self.issues if i.severity == 'critical')
        high = sum(1 for i in self.issues if i.severity == 'high')
        medium = sum(1 for i in self.issues if i.severity == 'medium')
        low = sum(1 for i in self.issues if i.severity == 'low')
        
        print(f"Summary:")
        print(f"  Pages audited: {len(self.visited_pages)}")
        print(f"  Links checked: {len(self.links_to_check)}")
        print(f"  Total issues: {len(self.issues)}")
        print(f"  Critical: {critical}")
        print(f"  High: {high}")
        print(f"  Medium: {medium}")
        print(f"  Low: {low}\n")
        
        # Group issues by severity
        for severity_level in ['critical', 'high', 'medium', 'low']:
            severity_issues = [i for i in self.issues if i.severity == severity_level]
            if not severity_issues:
                continue
            
            print(f"\n{severity_level.upper()} PRIORITY ISSUES ({len(severity_issues)}):")
            print(f"{'-'*70}")
            
            for issue in severity_issues[:10]:  # Show first 10 of each severity
                print(f"\nURL: {issue.url}")
                print(f"Type: {issue.link_type}")
                print(f"Error: {issue.error_message}")
                print(f"Recommendation: {issue.recommendation}")
            
            if len(severity_issues) > 10:
                print(f"\n... and {len(severity_issues) - 10} more {severity_level} issues")
        
        print(f"\n{'='*70}")
        print(f"Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*70}\n")
        
        # Export JSON report
        self.export_json_report()
    
    def export_json_report(self) -> None:
        """Export detailed report as JSON"""
        report = {
            'audit_date': datetime.now().isoformat(),
            'base_url': self.base_url,
            'summary': {
                'pages_audited': len(self.visited_pages),
                'links_checked': len(self.links_to_check),
                'total_issues': len(self.issues),
                'critical': sum(1 for i in self.issues if i.severity == 'critical'),
                'high': sum(1 for i in self.issues if i.severity == 'high'),
                'medium': sum(1 for i in self.issues if i.severity == 'medium'),
                'low': sum(1 for i in self.issues if i.severity == 'low'),
            },
            'issues': [
                {
                    'url': i.url,
                    'source_page': i.source_page,
                    'type': i.link_type,
                    'status_code': i.status_code,
                    'error': i.error_message,
                    'severity': i.severity,
                    'recommendation': i.recommendation
                }
                for i in sorted(self.issues, key=lambda x: ['critical', 'high', 'medium', 'low'].index(x.severity))
            ]
        }
        
        # Save to file
        report_file = 'link_audit_report.json'
        with open(report_file, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"Detailed report saved to: {report_file}\n")

def main():
    parser = argparse.ArgumentParser(description='Check all links on a website')
    parser.add_argument('url', help='Website URL to audit')
    parser.add_argument('--max-pages', type=int, default=1000, help='Maximum pages to crawl')
    parser.add_argument('--timeout', type=int, default=10, help='Request timeout in seconds')
    
    args = parser.parse_args()
    
    checker = LinkChecker(args.url, max_pages=args.max_pages, timeout=args.timeout)
    checker.run_audit()

if __name__ == '__main__':
    main()
