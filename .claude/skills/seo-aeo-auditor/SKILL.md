---
name: seo-aeo-auditor
description: "Comprehensive SEO and Answer Engine Optimization (AEO) auditor. Use when analyzing: SEO audit, search ranking, Google ranking, keywords, structured data, schema markup, AEO, AI search, answer engines, get found on Google, improve search ranking, local SEO, competitor SEO, keyword research, content gaps, rich snippets, Core Web Vitals SEO, featured snippets, voice search optimization."
---

# SEO & AEO Auditor (v2)

Complete website optimization for search engines and answer engines (Google, Perplexity, Claude, etc).

## Core Audit Areas (v1 Coverage Maintained)

### 1. On-Page SEO Fundamentals
- **Meta Tags**: Title (50-60 chars), Description (150-160 chars), character encoding, viewport
- **Heading Hierarchy**: H1 presence/uniqueness, H2-H6 logical flow, keyword incorporation
- **Open Graph Tags**: og:title, og:description, og:image, og:type, og:url (critical for social)
- **Twitter Card Tags**: twitter:card, twitter:title, twitter:description for X/Twitter
- **JSON-LD Structured Data**: Valid markup, no syntax errors, proper schema nesting
- **Image Alt Text**: All images have descriptive alt text (>10 chars, keyword-relevant)
- **Link Audit**: Internal link structure, broken links, anchor text quality, orphaned pages
- **URL Structure**: Lowercase, hyphens (not underscores), descriptive slugs, no parameters when possible
- **Sitemap & Robots.txt**: Present, accessible, valid XML, proper directives

### 2. AEO Patterns (7 Covered)
- **Direct Answer Blocks**: Lead paragraph answers the user query directly
- **Q&A Format**: Structured question-answer pairs visible in markup
- **Comparison Tables**: Side-by-side feature/product comparisons with clear headers
- **Step-by-Step Guides**: Numbered instructions with clarity, detail, estimated time
- **Citations & Sources**: Linked references, attributed quotes, credible sources
- **Content Freshness**: Last updated dates, recency indicators, evergreen vs timely content
- **Fact-Checking Markers**: Data sources, statistics attribution, expert quotes

---

## NEW v2 Capabilities

### 3. Keyword Research Workflow

**Seed → Expansion → Intent Mapping**

1. **Seed Keyword Discovery**
   - Start with your primary business/product keywords
   - Search volume estimates (local vs global)
   - Competition level (green/yellow/red)

2. **Keyword Expansion**
   - Related keywords and synonyms
   - Long-tail variations (3-5+ word phrases)
   - Question-based keywords (who, what, when, where, why, how)
   - Seasonal and trending variations

3. **Search Intent Classification**
   - **Informational**: User wants to learn ("how to", "what is", "guide to")
   - **Navigational**: User wants a specific site/page ("go to", brand names)
   - **Transactional**: User wants to buy/do ("best", "cheap", "buy online")
   - **Commercial**: User researching before purchase ("reviews", "comparison")

4. **Keyword-to-Page Mapping**
   - Which keywords target which pages
   - Primary vs secondary keywords per page
   - Keyword cannibalization detection (same keyword on 2+ pages)

5. **Content Gap Identification**
   - High-volume keywords you don't rank for
   - Topics competitors rank for that you miss
   - Pages needed to compete in your space
   - Prioritization by volume × relevance × competition

---

### 4. Competitor Benchmarking

**Compare 2-3 Competitor URLs Against Your Site**

| Metric | Your Site | Competitor A | Competitor B | Gap Analysis |
|--------|-----------|--------------|--------------|--------------|
| Meta Tag Quality | 85 | 92 | 78 | Competitor A stronger |
| Heading Structure | 90 | 88 | 81 | You lead here |
| Schema Coverage | 72 | 95 | 88 | Major gap |
| Content Depth | 8/10 | 9/10 | 7/10 | Competitors more detailed |
| Backlink Count | 145 | 312 | 187 | Major gap |
| Domain Authority | 28 | 41 | 35 | Significant gap |

**Competitive Analysis Questions:**
- What keywords do competitors rank for that you don't?
- Which content types do they use (blogs, videos, guides, tools)?
- How is their heading structure organized?
- What schema types do they implement?
- Citation patterns and external links?
- Mobile-first optimization level?

---

### 5. Local SEO

**Google Business Profile + NAP Consistency + Local Authority**

**Google Business Profile Checklist:**
- ✓ Complete profile (name, address, phone, hours, categories)
- ✓ Accurate NAP (Name, Address, Phone) consistency
- ✓ High-quality photos (5+ business/service photos)
- ✓ Current posts and updates
- ✓ Customer reviews (quality and response rate)
- ✓ Q&A section maintained

**On-Site Local SEO:**
- LocalBusiness schema (address, phone, geo-coordinates)
- Service area markup (cities served)
- Local keywords (city + service, "near me" variations)
- NAP consistency on every page
- Local citations (directories, Yelp, industry lists)
- Review strategy and response process

---

### 6. Content Gap Analysis

**Map Existing Pages → Identify Missing Topics**

**Process:**
1. Audit existing pages and their target keywords
2. Map coverage: High (multiple pages), Medium (1 page), Low (0 pages)
3. Identify missing pages: High-volume keywords with no dedicated page
4. Prioritize by: Search volume × competition level × business relevance

**Output Table:**

| Topic/Keyword | Search Vol | Competition | Current Coverage | Priority | Recommended |
|---------------|-----------|------------|------------------|----------|------------|
| "best project management tools" | 4,200 | High | 0 pages | HIGH | New comparison guide |
| "Asana tutorial" | 1,800 | Medium | 1 blog | MEDIUM | Expand with video |
| "remote team collaboration" | 6,100 | Medium | 1 page | HIGH | New guide needed |
| "Asana pricing" | 900 | Low | 0 pages | MEDIUM | Pricing page/post |

---

### 7. Audit Tracking Over Time

**Save Results to `seo-audit-history.json` for Trend Analysis**

**Structure:**
```json
{
  "audits": [
    {
      "date": "2026-04-03",
      "overall_score": 76,
      "meta_tags": 85,
      "headings": 90,
      "schema": 72,
      "local_seo": 88,
      "aeo_patterns": 68,
      "technical": 79,
      "keywords": 71,
      "content_gaps": 3,
      "regressions": ["schema score dropped 8 points"]
    }
  ],
  "trends": {
    "improving": ["headings", "meta_tags"],
    "declining": ["schema", "keywords"],
    "stable": ["local_seo"]
  }
}
```

**Comparison & Reporting:**
- Current audit vs previous audit (month-over-month)
- Trend scoring: ↑ Improving, ↓ Declining, → Stable
- Flag regressions immediately
- Quarterly comparison reports
- Actionable next steps per category

---

### 8. Enhanced AEO Section

**Answer Engine Optimization for AI Search Systems**

**AI Search Testing Methodology:**
1. **Query AI Search Engines**: Perplexity, Claude, Microsoft Copilot, Google SGE
   - Test target keywords and queries
   - Check if your content surfaces in citations
   - Verify content accuracy for AI consumption
   - Measure citation frequency

2. **Entity Recognition & Knowledge Graph Alignment**
   - Are you properly identified as an entity in your domain?
   - Knowledge graph markup (Person, Organization, Brand)
   - Entity relationships and connections
   - Fact accuracy for AI indexing

3. **Featured Snippet Optimization**
   - Target featured snippet-worthy content (definitions, lists, tables)
   - Format for quick AI extraction (bullet points, short paragraphs)
   - Use semantic HTML5 tags (`<ul>`, `<ol>`, `<table>`)
   - Keep answers concise (40-60 words for definitions)

4. **Voice Search Optimization**
   - Natural language phrasing (conversational, not keyword-stuffed)
   - Question-based content ("What is...", "How do I...")
   - Long-tail keywords and phrase variations
   - Clear pronunciation guidance for technical terms

5. **AI Citation Likelihood Score**
   - Scoring factors:
     - Content recency (recent = higher score)
     - Source authority and domain age
     - Citation count in other AEO-optimized sites
     - Fact-check badges and verification
     - Structured data completeness
   - Target: 70+ score for reliable AI citation

---

### 9. Enhanced Schema Validation

**Validate Against Google Rich Results Requirements**

**Supported Schema Types & Rich Results:**
- **FAQ Schema**: FAQ page rich result in search
- **HowTo Schema**: Step-by-step guide with thumbnail
- **LocalBusiness Schema**: Local knowledge panel, local pack
- **Product Schema**: Product rich result (price, rating, availability)
- **Article Schema**: Article rich result with byline, date, image
- **Review/Rating Schema**: Aggregate rating display
- **Event Schema**: Event information card
- **Recipe Schema**: Recipe rich result with rating, cook time

**Validation Checklist:**
- ✓ Valid JSON-LD syntax (no parsing errors)
- ✓ Required properties present (title, description, URL)
- ✓ Recommended properties included (image, author, datePublished)
- ✓ Proper nesting and data types
- ✓ Rich Results Test passes (Google's official validator)

**Rich Snippet Preview:**
- Show what the actual search result will look like
- Display card with title, image, rating, price, availability
- Verify truncation and formatting

---

### 10. Technical SEO Enhancements

**Core Web Vitals + Mobile-First + Crawlability**

**Core Web Vitals (CWV) & SEO Impact:**
- **Largest Contentful Paint (LCP)**: < 2.5s (critical for ranking)
- **First Input Delay (FID)**: < 100ms (responsiveness)
- **Cumulative Layout Shift (CLS)**: < 0.1 (visual stability)

**Mobile-First Indexing Readiness:**
- ✓ Mobile viewport configured
- ✓ Readable text without zooming
- ✓ Touch elements spaced (minimum 48x48px)
- ✓ Mobile-first CSS media queries
- ✓ Responsive images (srcset, picture elements)

**Crawl Budget Optimization (Larger Sites):**
- Reduce crawl time per page (minimize redirects, fast server)
- Block low-value pages from crawling (admin, duplicate content)
- Use internal linking to prioritize important pages
- Submit XML sitemap with priority scores

**Canonical Tag Strategy:**
- Self-referential canonicals on all pages
- Canonicalize duplicate content to preferred version
- Use absolute URLs (not relative)
- Avoid canonical chains (A → B → C)

**Hreflang for Multilingual Sites:**
- Declare language variants (en, es, fr, etc.)
- Include return tags (mutual references)
- Use x-default for fallback language
- Place in <head> or XML sitemap

---

## Scoring Rubric (0-100 per Category)

| Category | 90-100 | 70-89 | 50-69 | Below 50 |
|----------|--------|-------|-------|----------|
| **Meta Tags** | All present, optimized | Some gaps | Several missing | Minimal/broken |
| **Headings** | Logical H1-H6 flow | Minor issues | Missing levels | Poor structure |
| **Schema Markup** | Complete, valid, tested | Most valid | Partial/errors | Missing/invalid |
| **Local SEO** | Full GBP + NAP + schema | 2 of 3 areas | 1 area covered | Minimal effort |
| **Keywords** | Comprehensive mapping | Good coverage | Partial | No research |
| **Content Gaps** | Clear roadmap | Identified | Basic list | Not analyzed |
| **Technical SEO** | CWV pass, mobile-ready | Minor issues | Some failures | Multiple issues |
| **AEO Patterns** | 6+ patterns | 4-5 patterns | 2-3 patterns | 0-1 pattern |

---

## Unified Health Score (0-100)

**Formula:**
```
Overall = (Meta Tags × 0.15) + (Headings × 0.10) + (Schema × 0.15) + 
          (Local SEO × 0.10) + (Keywords × 0.15) + (Content Gaps × 0.10) + 
          (Technical × 0.10) + (AEO Patterns × 0.15)
```

**Score Interpretation:**
- **80-100**: Excellent (top 10% of sites in your niche)
- **65-79**: Good (competitive, some optimization needed)
- **50-64**: Fair (significant gaps, clear action items)
- **Below 50**: Poor (major overhaul recommended)

---

## Prioritized Action Plan

**Output as Numbered, Actionable Items:**

1. **High Priority (Implement This Week)**
   - Fix critical issues (broken links, missing alt text, CWV failures)
   - Update outdated meta descriptions
   - Add missing schema (FAQ, LocalBusiness, Article)

2. **Medium Priority (Next 2-4 Weeks)**
   - Expand high-gap keywords with new content
   - Improve heading structure
   - Optimize for local SEO (NAP, GBP, citations)

3. **Long-Term (Quarterly Projects)**
   - Content depth expansion
   - Backlink strategy execution
   - Competitive positioning refinement
   - AI search optimization

---

## How to Use This Skill

1. **Quick Audit**: Provide website URL, get 5-minute snapshot
2. **Deep Dive**: Request keyword research, competitor analysis, gap analysis
3. **Ongoing Tracking**: Run monthly audits, track trends, compare to history
4. **Actionable Focus**: Ask for "Top 10 action items" or "Quick wins"
5. **AI Optimization**: Test your content on AI search engines in real-time

**Best Practices:**
- Run audits monthly minimum
- Track 2-3 main competitors
- Focus on 3-5 keywords per page (avoid cannibalization)
- Test schema with Google Rich Results Test
- Monitor Core Web Vitals monthly
- Update content gap analysis quarterly
