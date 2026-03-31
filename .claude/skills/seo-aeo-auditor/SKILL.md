# SEO & Answer Engine Optimization (AEO) Auditor Skill

## Overview
This skill runs comprehensive SEO and Answer Engine Optimization audits on your website. It checks meta tags, heading structure, Open Graph tags, structured data, link quality, image alt text, and AEO-specific patterns that help AI search engines (like ChatGPT, Claude, Gemini) surface your content as direct answers.

## Why SEO + AEO Matter

### SEO (Search Engine Optimization)
- **Google Ranking**: 90% of click traffic comes from search results
- **Organic Traffic**: First position gets 28% of clicks; second position 15%
- **Long-term Value**: SEO traffic is permanent; paid traffic stops when budget ends
- **Trust Signal**: High-ranking sites are perceived as more authoritative

### AEO (Answer Engine Optimization)
- **AI Search Growth**: 64% of Gen Z uses AI for search instead of Google
- **Direct Answers**: AI search returns your content directly (not just links)
- **New Traffic Channel**: AI search driving significant referral traffic (increasing 3x year-over-year)
- **Future-Proofing**: AEO is emerging as critical alongside traditional SEO

## SEO Audit Areas

### 1. Meta Tags
**Why it matters**: Meta tags appear in search results and tell search engines what your page is about.

**Checks performed**:
- Title tag length (50-60 characters for full display)
- Meta description length (150-160 characters for full display)
- Title contains target keyword near beginning
- Description includes compelling call-to-action
- No keyword stuffing or misleading titles
- Canonical tag present (prevents duplicate content issues)
- Robots meta tag correct (allow index on public pages)

**Deliverables**:
- Optimized title and meta descriptions
- Canonical tag implementations
- Robots.txt rules

### 2. Heading Hierarchy
**Why it matters**: Proper heading structure helps search engines understand page structure and indicates importance.

**Checks performed**:
- Single H1 per page (primary topic)
- H2 follows H1 (logical structure)
- No skipped heading levels (H1 → H3 is incorrect; should be H1 → H2 → H3)
- All headings include keywords naturally
- Headings are descriptive, not clickbait
- Sufficient heading levels (minimum 3+ for longer pages)

**Deliverables**:
- Heading structure recommendations
- Before/after markup samples

### 3. Open Graph Tags
**Why it matters**: OG tags control how your content appears in social media and messaging apps, affecting click-through rate.

**Checks performed**:
- og:title present and optimized
- og:description compelling and complete
- og:image present (1200x630px recommended)
- og:url matches canonical URL
- og:type appropriate for content
- Twitter Card tags present (twitter:card, twitter:title, twitter:description, twitter:image)

**Deliverables**:
- HTML meta tags ready to copy
- Image optimization recommendations
- Social media preview templates

### 4. Structured Data / JSON-LD
**Why it matters**: Structured data helps search engines understand content type and displays rich snippets in results (increase CTR by 30%).

**Checks performed**:
- Schema.org markup present and valid
- Organization schema with contact info
- LocalBusiness schema (for local businesses)
- WebSite schema with search action
- BreadcrumbList for navigation hierarchy
- FAQPage schema for Q&A content
- Product/Article/NewsArticle schema where applicable
- Schema validation (no errors reported by schema.org validator)

**Deliverables**:
- Valid JSON-LD templates for your content types
- Schema validation reports
- Rich snippet previews

### 5. Image Alt Text & Accessibility
**Why it matters**: Alt text describes images for accessibility and helps Google understand image context.

**Checks performed**:
- Every image has descriptive alt text (10-125 characters)
- Alt text is descriptive, not keyword-stuffed
- Decorative images marked with empty alt (alt="")
- Alt text includes target keywords naturally where appropriate
- Image filenames are descriptive (image-name.jpg not image-1.jpg)
- Images use semantic HTML (not CSS backgrounds for content)

**Deliverables**:
- Alt text recommendations by image
- Automated alt text suggestions (can be refined)

### 6. Link Audit
**Why it matters**: Links signal authority to Google. Internal links guide user flow; external links establish authority.

**Checks performed**:
- Internal links have descriptive anchor text (not "click here")
- External links point to authoritative sources
- No excessive internal linking (more than 100+ on single page)
- Link structure creates logical content hierarchy
- Outbound links are contextual (not random or for SEO gaming)
- Brand mentions without backlinks identified for outreach
- Broken internal links detected

**Deliverables**:
- Link audit report
- Broken link fixes
- Outreach opportunities (unlinked mentions)

### 7. URL Structure
**Why it matters**: URLs should be descriptive and indicate content hierarchy.

**Checks performed**:
- URLs are descriptive (not /p/12345)
- URLs are lowercase and hyphen-separated
- No excessive URL parameters
- Consistent URL structure across site
- Appropriate URL depth (not /products/category/subcategory/sub-subcategory/product)
- Mobile URL structure matches desktop

**Deliverables**:
- URL structure recommendations
- Redirect plan if changes needed

### 8. Sitemap & Robots
**Why it matters**: Sitemaps guide search engine crawlers; robots.txt manages crawl efficiency.

**Checks performed**:
- Sitemap.xml exists and is valid
- All important pages included in sitemap
- Sitemap lastmod dates are current
- Sitemap submitted to Google Search Console
- Robots.txt properly formatted
- Robots.txt allows crawling of important pages
- No conflicting rules in robots.txt and meta tags

**Deliverables**:
- Generated sitemap.xml
- Optimized robots.txt
- Google Search Console submission instructions

## AEO (Answer Engine Optimization) Audit Areas

AEO focuses on patterns that AI search engines use to surface content as direct answers.

### 1. Direct Answer Blocks
**Why it matters**: AI searches for concise, direct answers. Pages with clear answer blocks rank higher.

**Checks performed**:
- Content includes 1-2 sentence direct answer near top
- Answer is boxed/highlighted visually
- Answer directly addresses the searcher's intent
- Answer is factual, not opinion (unless opinion piece)
- Answer is between 50-100 words (optimal for AI)

**Example**:
```
<p><strong>What is machine learning?</strong> Machine learning is a 
type of artificial intelligence that enables computers to learn from 
data without being explicitly programmed. Systems improve through 
experience rather than following pre-written rules.</p>
```

### 2. Question & Answer Format
**Why it matters**: AI models are trained on Q&A patterns. Explicit Q&A formatting improves extraction.

**Checks performed**:
- Content uses H2 for questions (e.g., "How do I optimize images?")
- Answers follow immediately after questions
- Multiple related questions addressed per page
- FAQPage schema implemented for Q&A sections
- Questions are natural language, not keyword-stuffed

**Example**:
```html
<h2>How do I optimize images for web?</h2>
<p>Image optimization involves compression, format selection, and 
responsive sizing. Start by choosing the right format (JPEG for photos, 
PNG for graphics), then compress to 70% quality, and finally create 
srcset variants for different screen sizes.</p>
```

### 3. Comparison Tables & Lists
**Why it matters**: AI searches for comparative information. Tables make comparisons scannable.

**Checks performed**:
- Comparison tables have clear headers
- Rows compare same factors (apples-to-apples)
- Columns represent different options/products
- Tables use semantic HTML (thead, tbody, th, td)
- Pros/cons lists are complete and balanced

**Example**:
```html
<table>
  <thead><tr><th>Format</th><th>Size</th><th>Quality</th><th>Use Case</th></tr></thead>
  <tbody>
    <tr><td>JPEG</td><td>Small</td><td>Good</td><td>Photography</td></tr>
    <tr><td>PNG</td><td>Medium</td><td>Excellent</td><td>Graphics</td></tr>
    <tr><td>WebP</td><td>Smallest</td><td>Excellent</td><td>Modern browsers</td></tr>
  </tbody>
</table>
```

### 4. Step-by-Step Instructions
**Why it matters**: AI values actionable, sequential content. How-to guides are frequently surfaced.

**Checks performed**:
- Instructions numbered (1, 2, 3...) for clarity
- Each step is a single action (not multiple actions)
- Steps are in logical order
- Prerequisites mentioned upfront
- Common mistakes or tips included
- Estimated time to complete provided

**Example**:
```
<h2>How to Compress Images</h2>
<ol>
  <li>Open ImageMagick terminal</li>
  <li>Navigate to image directory: <code>cd /path/to/images</code></li>
  <li>Run compression: <code>convert photo.jpg -quality 75 photo-compressed.jpg</code></li>
  <li>Verify file size reduced: <code>ls -lh photo*.jpg</code></li>
</ol>
```

### 5. Citation & Source Attribution
**Why it matters**: AI models check source credibility. Proper citations build trust.

**Checks performed**:
- Claims are cited to authoritative sources
- Links to primary sources (not just other blogs)
- Citation format is consistent throughout
- Quote marks used for direct quotes
- Author/source name clearly visible
- Publication date included where relevant

**Example**:
```html
<p>According to a 2023 study by Google (cite), 53% of users abandon 
sites that take over 3 seconds to load. This <a href="...">research</a> 
demonstrates the direct business impact of performance optimization.</p>
```

### 6. Content Freshness & Recency
**Why it matters**: AI models prefer recently updated content. Stale content ranks lower.

**Checks performed**:
- Last updated date visible and current (within 6 months recommended)
- Statistics and data are recent (cite publication date)
- Outdated references updated
- Content versioning shows evolution
- No "as of [old date]" language

**Example**:
```html
<p><time datetime="2026-03-30">Last updated March 30, 2026</time></p>
```

### 7. Fact-Checking & Accuracy
**Why it matters**: AI models detect and penalize false or misleading claims.

**Checks performed**:
- All factual claims are verifiable
- No contradictions within content
- Statistics cite sources
- Industry terminology used correctly
- Opinions labeled as such (vs. facts)
- No sensationalism or exaggeration

## How to Use This Skill

### Step 1: Provide Site Information
Give me:
- Site URL (or directory for local site)
- Primary business/content focus
- Target keywords (if known)
- Current SEO concerns

### Step 2: Comprehensive Audit
I will:
- Crawl all pages and extract meta data
- Validate all HTML markup and schema
- Check heading structure and content hierarchy
- Analyze link patterns and anchor text
- Audit all images for alt text
- Check for AEO optimization patterns

### Step 3: Audit Report
I provide:
- Score by category (0-100)
- Specific issues with locations
- Priority fixes (quick wins first)
- Estimated impact of each fix

### Step 4: Implementation
I deliver:
- HTML/JSON-LD ready to implement
- Updated meta tags for each page
- Schema markup templates
- Sitemap and robots.txt files

## Output Deliverables

### SEO Audit Report
- Meta tag analysis and recommendations
- Heading hierarchy map
- Broken link report
- Image alt text audit
- URL structure review
- Schema validation report

### AEO Recommendations
- Content pattern gaps (missing Q&A, steps, comparisons)
- Direct answer block suggestions
- Comparison table placement recommendations
- Citation opportunities

### Implementation Files
- Sitemap.xml (auto-generated)
- Robots.txt (optimized)
- JSON-LD templates for all content types
- Meta tag updates (copy-paste ready)
- OG tag updates for social sharing

### Monitoring Plan
- Search Console setup instructions
- Ranking tracking recommendations
- Monthly audit schedule

## Scoring Criteria

Each category is scored 0-100:
- 90-100: Excellent (production ready)
- 70-89: Good (minor improvements needed)
- 50-69: Fair (moderate improvements recommended)
- 0-49: Needs work (significant issues)

Target: All categories above 70; Priority categories (SEO basics) above 80.

## Common Questions

**Q: How long to see SEO results?**
A: Technical SEO fixes (schema, meta tags) show results in 1-4 weeks. Content ranking takes 3-6 months as Google reindexes.

**Q: Does AEO replace SEO?**
A: No. SEO is foundational. AEO is complementary for AI search engines.

**Q: Should I optimize for both SEO and AEO?**
A: Yes. Many optimizations help both. Good content structure benefits all search types.

**Q: How often should I audit?**
A: Initial audit, then quarterly. Monthly checks after major changes.

**Q: Can I implement everything at once?**
A: No. Implement high-priority fixes first, then medium, then low-priority improvements.
