# Link Checker Skill

## Skill Summary

The Link Checker crawls your entire website, validates every internal and external link, image, and asset reference, and identifies broken links, mixed content issues, redirect chains, orphaned pages, and email/social media link problems. It generates a comprehensive fix-it report with severity levels and remediation guidance.

**Business Value**: Broken links damage user experience, reduce SEO rankings (Google penalizes broken links), and suggest an abandoned or poorly maintained site. This skill prevents customer frustration and maintains your technical SEO health.

---

## What This Skill Does

The Link Checker performs comprehensive link auditing:

1. **Internal Link Validation** - Checks all links between pages on your domain
2. **External Link Checking** - Validates all outbound links to third-party sites
3. **Image/Asset Reference Validation** - Ensures all images and resources load correctly
4. **Mixed Content Detection** - Flags insecure content on secure pages (HTTP on HTTPS)
5. **Redirect Chain Detection** - Identifies inefficient redirect chains (301 → 301 → 200)
6. **Orphan Page Detection** - Finds pages not linked from anywhere (unreachable)
7. **Anchor Link Validation** - Checks that hashtag links point to existing page sections
8. **Email Link Validation** - Verifies mailto: links have proper email addresses
9. **Social Media Link Validation** - Checks social media profiles are reachable
10. **Reports and Prioritization** - Generates fix-it report organized by severity

---

## Why This Matters (Business Impact)

**SEO Rankings**: Google crawls links and penalizes broken links
- Broken links increase bounce rate (bad signal to search engines)
- Mixed content warnings prevent page indexing
- Redirect chains waste crawl budget and slow page load
- Orphaned pages don't rank because they're not discoverable

**User Experience**: Broken links frustrate visitors
- Users land on 404 pages and leave (high bounce rate)
- "Page not found" errors reduce trust
- Slow redirects feel like broken links
- Inaccessible resources prevent task completion

**Technical Health**: Link issues indicate poor maintenance
- Broken external links suggest outdated content
- Mixed content warnings indicate security issues
- Excessive redirects suggest poor URL planning

**Trust and Credibility**: Broken links look unprofessional
- One broken link suggests site is abandoned
- Multiple broken links damage brand trust
- Poor technical health correlates with low quality

**Analytics**: Broken links create data gaps
- 404 errors complicate traffic analysis
- Link redirects obscure traffic sources
- Orphaned pages never appear in analytics

---

## How to Use This Skill

### Basic Usage

```
Check all links on my website
```

### Common Scenarios

**Before Launch**:
```
Find all broken links on my site before we go live
Check for mixed content issues on my HTTPS site
```

**Specific Issues**:
```
Find all external links that are broken or slow to load
Check for redirect chains on my site
Find any pages that aren't linked from the homepage
```

**Link Audits**:
```
Validate all email links in my contact pages
Check if my social media links work
Find images that are missing or broken
```

**Ongoing Monitoring**:
```
Check for new broken links since our last audit
Identify pages that have become orphaned
```

---

## What You'll Get

The Link Checker produces a comprehensive report with:

1. **Executive Summary**
   - Total links checked
   - Broken links found (count by type)
   - Issues by severity (critical, high, medium, low)
   - Quick wins (issues that take <5 min to fix)

2. **Critical Issues Report**
   - Broken internal links (must fix immediately)
   - Pages returning 500/502/503 errors
   - Mixed content warnings on HTTPS pages
   - Non-functional contact forms or CTAs

3. **High Priority Issues**
   - External links returning 404 (broken partner links)
   - Slow external links (>5 second load)
   - Redirect chains (301 → 301 → 200)
   - Email links with invalid addresses

4. **Medium Priority Issues**
   - Missing or slow-loading images
   - Orphaned pages (not linked from elsewhere)
   - Anchor links to non-existent page sections
   - Social media links that don't load

5. **Detailed Fix-It Report**
   - Page location of each broken link
   - Current URL and destination
   - Status code/error message
   - Recommended fix (update link, delete, redirect)
   - Estimated time to fix

6. **Analytics**
   - Pages with most broken links
   - Most frequently broken external domains
   - Link types with highest failure rates
   - Recommended redirect strategy

---

## Link Types Checked

### Internal Links
- Navigation menu links
- Footer links
- In-content links to other pages
- Sidebar navigation
- Breadcrumb links
- Related posts/articles links

### External Links
- Links to partner websites
- Links to resources and tools
- Links to social media profiles
- Links to documentation
- Links to external integrations

### Assets
- Images (IMG src)
- Favicons
- CSS stylesheets
- JavaScript files
- Fonts and web resources
- PDF and document links
- Videos and media embeds

### Special Links
- Email links (mailto:)
- Phone links (tel:)
- SMS links (sms:)
- Social media profiles
- Anchor links (page.html#section)

---

## Checklist: Before Running Link Checker

- [ ] Site is publicly accessible or you have a staging URL
- [ ] Site is crawlable (robots.txt doesn't block all crawlers)
- [ ] Site isn't behind login/authentication (or you have credentials)
- [ ] Expected page count is reasonable (under 1000 for best results)
- [ ] You've identified any external sites that might block crawler traffic

---

## Understanding Link Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| **200** | OK - Link works | No action needed |
| **301** | Moved Permanently | Update link to new URL |
| **302** | Found (Temporary Redirect) | Link works but wait for permanent redirect |
| **304** | Not Modified | Link works (cached) |
| **400** | Bad Request | Invalid URL format - fix it |
| **401** | Unauthorized | Link requires authentication - may be OK |
| **403** | Forbidden | Site blocking crawler - may be OK |
| **404** | Not Found | Link is broken - fix or delete |
| **410** | Gone | Page permanently deleted - remove link |
| **500** | Server Error | Target site has problems - try again later |
| **502/503** | Bad Gateway/Unavailable | Target site temporarily down - try again |
| **Timeout** | Connection Timeout | Link too slow to load - investigate |
| **SSL Error** | Certificate Issues | HTTPS problem - contact site owner |

---

## Issue Severity Levels

### Critical (Fix immediately)
- Broken internal links (404 on your site)
- Mixed content warnings (HTTP on HTTPS site)
- Links to pages returning 500 errors
- Missing images on critical pages (homepage, pricing, CTA)

### High (Fix within 1 week)
- Broken external links on high-traffic pages
- Email links with invalid addresses
- Redirect chains (multiple 301 redirects)
- Non-functional social media links

### Medium (Fix within 2-4 weeks)
- Missing images on secondary pages
- Slow external links (but still working)
- Orphaned pages (not linked from anywhere)
- Broken anchor links (to non-existent sections)

### Low (Fix when you have capacity)
- Slow-loading external resources
- External links to deprecated pages (working but outdated)
- Social media links that require login to verify

---

## Common Issues and Fixes

### Issue: Broken Internal Link
**Symptom**: Link to /products returns 404
**Fix**: 
1. Verify the target page exists
2. Check the URL is spelled correctly
3. Update link or restore deleted page
**Time to fix**: 2-5 minutes

### Issue: Mixed Content Warning
**Symptom**: "Mixed Content" error on HTTPS page
**Fix**:
1. Find HTTP resources on HTTPS page
2. Change HTTP to HTTPS in src/href
3. Or use protocol-relative URLs (//domain.com)
**Time to fix**: 5-10 minutes

### Issue: Redirect Chain
**Symptom**: /old-page → /legacy → /current-page
**Fix**:
1. Update all links to point to /current-page directly
2. Or change 301 redirect to point directly to /current-page
**Time to fix**: 5-15 minutes

### Issue: Broken External Link
**Symptom**: Link to partner site returns 404
**Fix**:
1. Verify the external URL still exists
2. Update to new URL if moved
3. Remove link or replace with alternative
**Time to fix**: 5-20 minutes

### Issue: Orphaned Page
**Symptom**: /blog/old-article exists but no links to it
**Fix**:
1. Check if page is still relevant
2. Add internal links if still useful
3. Delete or redirect if outdated
**Time to fix**: 10-30 minutes

### Issue: Broken Anchor Link
**Symptom**: Link to #section-name but no matching ID on page
**Fix**:
1. Add ID to target section: <section id="section-name">
2. Or update link to correct anchor ID
**Time to fix**: 2-5 minutes

---

## Optimization Tips

### For Best Results
1. **Run before launch** - Catch broken links before users do
2. **Run monthly** - New links break all the time as sites change
3. **Run after content updates** - New content may create new issues
4. **Run after major redesigns** - URL changes create redirect needs

### Interpreting Results
- **Critical issues** must be fixed before launch
- **High priority** issues should be fixed within 1 week
- **Medium priority** issues are important but less urgent
- **Low priority** issues are optimizations, not blockers

### Making Fixes Efficient
1. Group fixes by page for batch editing
2. Use URL redirects for moved pages rather than updating all links
3. Create a redirect map for all changed URLs
4. Test fixes by visiting page yourself
5. Schedule monthly checks to catch new issues

---

## Output & Deliverables

Your link audit produces:

1. **Audit Report** (HTML or PDF)
   - Summary of all issues by severity
   - Broken links by type (internal, external, assets)
   - Page-by-page breakdown of issues

2. **Detailed Findings**
   - Page location of each broken link
   - Current URL and error
   - Recommended fix

3. **Fix-It Checklist**
   - Organized by severity
   - Estimated time to fix each issue
   - Quick wins first

4. **Redirect Map** (if applicable)
   - Old URLs that need redirects
   - New destination URLs
   - Redirect type (301 permanent, 302 temporary)

5. **Testing Report**
   - Before and after comparison
   - Verification that fixes work

---

## FAQ

**Q: How long does a link check take?**
A: Depends on site size. Small site (50 pages): 5-10 minutes. Medium site (100-500 pages): 15-30 minutes. Large site (500+ pages): 30 minutes to 1 hour. Sites with slow external links take longer.

**Q: Will this check external sites that block crawlers?**
A: Some sites block automated crawlers. If external links timeout, we'll report them but you may need to verify manually.

**Q: Can you check links behind authentication?**
A: The standard link checker can't access password-protected pages. For authenticated sections, you may need manual verification.

**Q: What about links in PDFs or documents?**
A: The standard checker validates PDF files themselves but doesn't check links inside PDFs. For that, you'd need additional tools.

**Q: How do I know if an external link is broken or just slow?**
A: The report distinguishes between broken links (404 errors) and slow links (working but slow). Slow links aren't broken but impact user experience.

**Q: Should I worry about all broken external links?**
A: Only if they're on your pages. Links you're pointing to should work. If an external site breaks their links, that's their problem, but users will blame you.

**Q: How do I fix an orphaned page?**
A: Either delete it (if no longer useful), add internal links to it (if still valuable), or keep it if it's meant to be accessed directly (e.g., thank you page for email signups).

**Q: What about redirect chains?**
A: Redirect chains slow down page load and waste crawl budget. Example: /old → /legacy → /current. Better to redirect /old directly to /current.

**Q: Can I exclude certain links from checking?**
A: Yes, you can specify patterns to ignore (e.g., exclude all external links, exclude certain domains, exclude anchor links only).

---

## Next Steps

1. **Run your first link check** to identify current issues
2. **Fix critical and high-priority issues** immediately
3. **Schedule monthly checks** to catch new problems
4. **Create a redirect strategy** for all URL changes
5. **Document your link conventions** to prevent future issues

---

*Last updated: 2024*
