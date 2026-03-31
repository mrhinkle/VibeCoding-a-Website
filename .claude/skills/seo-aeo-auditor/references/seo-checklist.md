# SEO Checklist

## Meta Tags

### Page Title
- [ ] Title tag present and unique for each page
- [ ] Length: 50-60 characters (longer titles get cut off in search results)
- [ ] Keyword present, ideally near beginning
- [ ] Brand name at end if space allows: "Keyword | Brand Name"
- [ ] Avoid keyword stuffing (don't repeat keyword)
- [ ] Avoid generic titles like "Home" or "Welcome"
- [ ] Format clear: "Benefit - Topic | Brand" is ideal

**Example**: "Responsive Image Optimization Guide | Performance Tips"

### Meta Description
- [ ] Description present and unique for each page
- [ ] Length: 150-160 characters (longer cuts off)
- [ ] Directly answer what searcher will find
- [ ] Include call-to-action ("Learn how to...", "Discover...", "Get started...")
- [ ] Natural language, not keyword-stuffed
- [ ] Compelling enough to click (not generic)
- [ ] No duplicate descriptions across pages

**Example**: "Learn how to optimize images for web performance. Reduce file size by 60-80% with our guide to compression, WebP conversion, and responsive srcset implementation."

### Canonical Tag
- [ ] Canonical tag present on every page
- [ ] Points to preferred version (www vs. non-www, HTTPS, etc.)
- [ ] Self-referential on unique pages
- [ ] Uses absolute URL, not relative
- [ ] Matches actual page URL exactly (or intentional redirect target)

**Example**: `<link rel="canonical" href="https://example.com/guides/image-optimization">`

### Robots Meta Tag
- [ ] Robots tag allows indexing on public pages: `<meta name="robots" content="index, follow">`
- [ ] Use `noindex` on: draft pages, admin pages, duplicate pages, private content
- [ ] Use `nofollow` on: untrusted external links, affiliate links, ads
- [ ] Standard format: `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`

---

## Heading Structure

### H1 Tags
- [ ] Exactly ONE H1 per page
- [ ] H1 matches or closely reflects page title
- [ ] H1 includes primary keyword
- [ ] H1 is descriptive (not generic like "Welcome")
- [ ] H1 is first heading on page (near top)
- [ ] H1 is actual `<h1>` tag, not styled `<div>`

### H2-H4 Hierarchy
- [ ] H2 follows H1 (no gaps like H1 → H3)
- [ ] H3 follows H2 (logical nesting)
- [ ] No H4 without H3, etc.
- [ ] Multiple H2s are fine (typically 3-5 per page)
- [ ] Each heading describes its section content
- [ ] Headings are scannable (users skim headings)

### Heading Content
- [ ] Headings include keywords where natural
- [ ] No keyword stuffing in headings
- [ ] Headings are descriptive and useful
- [ ] No duplicate headings on single page
- [ ] Heading copy matches table of contents (if present)

---

## Open Graph Tags

### Basic Tags
- [ ] `<meta property="og:title">` - Same as page title (55 chars max)
- [ ] `<meta property="og:description">` - Compelling preview (95 chars max)
- [ ] `<meta property="og:image">` - 1200x630px JPG/PNG (< 8MB)
- [ ] `<meta property="og:url">` - Absolute canonical URL
- [ ] `<meta property="og:type">` - website, article, product, etc.
- [ ] `<meta property="og:locale">` - Language code (e.g., en_US)

### Twitter Card Tags
- [ ] `<meta name="twitter:card" content="summary_large_image">`
- [ ] `<meta name="twitter:title">` - Max 70 characters
- [ ] `<meta name="twitter:description">` - Max 200 characters
- [ ] `<meta name="twitter:image">` - 1200x628px recommended
- [ ] `<meta name="twitter:site">` - Your @handle
- [ ] `<meta name="twitter:creator">` - Author @handle (if article)

### Image Optimization
- [ ] OG image is original, not duplicated
- [ ] Image quality is high (no compression artifacts)
- [ ] Image clearly represents content
- [ ] Image is readable at small size
- [ ] Image has proper aspect ratio (1.91:1 for best display)

---

## Structured Data / Schema.org

### Schema Validation
- [ ] All schema is valid JSON-LD format
- [ ] Schema validates without errors on schema.org validator
- [ ] Schema validates on Google's Structured Data Testing Tool
- [ ] No duplicate schemas (don't mark same item twice)
- [ ] All required properties are present

### Organization Schema
- [ ] Present on homepage and footer
- [ ] Includes: name, logo, contactPoint, sameAs (social profiles)
- [ ] Logo is 112x112px minimum, square format
- [ ] Contact point includes phone and/or email
- [ ] Social profiles link to verified accounts

### LocalBusiness Schema (if applicable)
- [ ] Includes: name, address, phone, hours
- [ ] Address formatted with: streetAddress, addressLocality, addressRegion, postalCode, addressCountry
- [ ] Hours in ISO 8601 format: Mo-Su 09:00-17:00
- [ ] Includes geo coordinates (latitude/longitude)
- [ ] Service area defined (if service business)

### WebSite Schema
- [ ] Includes: name, url, searchAction
- [ ] Search action points to actual search page
- [ ] Format correct for query parameter

### BreadcrumbList Schema
- [ ] Present on all pages except homepage
- [ ] Lists path: Home > Category > Subcategory > Current Page
- [ ] Each breadcrumb has name, item, position
- [ ] Position numbers are sequential (1, 2, 3...)

### Content-Type Schemas
- [ ] Article schema for blog posts (headline, image, datePublished, author)
- [ ] NewsArticle for news content
- [ ] Product schema for product pages (name, price, rating)
- [ ] FAQPage for Q&A pages
- [ ] Event schema for events
- [ ] VideoObject for videos

---

## Images & Alt Text

### Alt Text Requirements
- [ ] Every image has `alt` attribute
- [ ] Alt text is descriptive (10-125 characters)
- [ ] Alt text describes image content, not filename
- [ ] Decorative images have empty alt: `alt=""`
- [ ] Alt text includes keyword naturally (where appropriate)
- [ ] No alt text keyword stuffing

### Image Filenames
- [ ] Filenames are descriptive: `image-optimization-guide.jpg`
- [ ] NOT generic: `image-1.jpg`, `photo.jpg`, `screenshot.png`
- [ ] Use hyphens, not underscores: `my-image.jpg` not `my_image.jpg`
- [ ] Include keyword when relevant

### Image Technical
- [ ] Images are optimized (compressed)
- [ ] Images are modern format (JPEG, PNG, WebP, SVG)
- [ ] Images are not CSS background images (unless decorative)
- [ ] Image dimensions match display size
- [ ] Images have srcset for responsive display
- [ ] Images have loading="lazy" when below-the-fold

---

## Links

### Internal Links
- [ ] Anchor text is descriptive, not "click here"
- [ ] Anchor text includes keyword where natural
- [ ] Links go to relevant pages (contextual)
- [ ] No excessive linking (not > 100+ per page)
- [ ] Link hierarchy supports user flow (breadcrumbs, navigation)
- [ ] Important pages linked from multiple places
- [ ] Internal links use absolute or protocol-relative URLs

### External Links
- [ ] External links point to authoritative sources
- [ ] External links open in same tab (not new tab by default)
- [ ] Use `rel="noopener noreferrer"` for new tab links
- [ ] No excessive outbound linking dilutes authority
- [ ] Outbound links are contextual, not random
- [ ] Affiliate links marked with `rel="sponsored"`
- [ ] UGC links marked with `rel="ugc"`

### Link Text Quality
- [ ] Not keyword-stuffed anchor text
- [ ] Anchor text is relevant to link destination
- [ ] Variation in anchor text (not identical throughout)
- [ ] Descriptive linking: "guide to image optimization" not "this guide"
- [ ] No over-optimization with exact-match keywords

---

## URL Structure

### URL Format
- [ ] URLs are descriptive, not numeric: `/guides/image-optimization` not `/p/1234`
- [ ] URLs are lowercase: `/my-page` not `/My-Page`
- [ ] URLs use hyphens, not underscores: `/my-page` not `/my_page`
- [ ] URLs use forward slashes, proper hierarchy
- [ ] No excessive parameters in URL
- [ ] URLs don't include date (except necessary: /2026/03/article)

### URL Structure Hierarchy
- [ ] Logical hierarchy: `/blog/topic/subtopic/article-title`
- [ ] Not too deep: Keep to 3 levels max
- [ ] Root domain includes primary pages: example.com/services, example.com/about
- [ ] Consistent structure across site type

### Mobile URLs
- [ ] Responsive design (no m. subdomain necessary)
- [ ] If using m. subdomain: properly configured in Search Console
- [ ] Mobile URLs match desktop (except protocol)

---

## Sitemap & Robots

### Sitemap.xml
- [ ] File exists at root: example.com/sitemap.xml
- [ ] Valid XML format (no errors)
- [ ] Includes all important pages
- [ ] Excludes: archive pages, duplicate pages, noindex pages
- [ ] Includes: loc (URL), lastmod (date), changefreq, priority
- [ ] Updates regularly (at least monthly)
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools

### Robots.txt
- [ ] File exists at root: example.com/robots.txt
- [ ] Proper syntax (no errors)
- [ ] Allows crawling of important pages
- [ ] Disallows: admin pages, drafts, duplicate pages
- [ ] Disallow paths are specific (not overly broad)
- [ ] No conflicting rules
- [ ] Specifies crawl-delay if server is slow: `Crawl-delay: 2`
- [ ] Specifies User-agent: * for general rules

### Search Console
- [ ] Site added to Google Search Console
- [ ] Sitemap submitted
- [ ] Mobile usability checked
- [ ] Security issues resolved (if any)
- [ ] Structured data validation passed
- [ ] Coverage report reviewed

---

## Technical SEO

### HTTPS & Security
- [ ] Site uses HTTPS (lock icon visible)
- [ ] All assets load over HTTPS (no mixed content)
- [ ] SSL certificate is valid and current
- [ ] Redirects from HTTP to HTTPS

### Mobile Responsiveness
- [ ] Site is mobile-responsive (no separate mobile site)
- [ ] Mobile viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Text is readable on mobile (no pinch-to-zoom required)
- [ ] Buttons are touch-friendly (minimum 44x44px)
- [ ] Mobile load time is fast (< 3 seconds)

### Site Speed
- [ ] Lighthouse Performance score >= 90
- [ ] First Contentful Paint <= 1.8 seconds
- [ ] Largest Contentful Paint <= 2.5 seconds
- [ ] Cumulative Layout Shift <= 0.1
- [ ] Images are optimized
- [ ] CSS/JS are minified

### Crawlability
- [ ] No JavaScript blocking crawlers (use dynamic rendering if needed)
- [ ] No noindex tags on indexable pages
- [ ] No robots.txt blocking important pages
- [ ] XML sitemap error-free
- [ ] No redirect chains (redirect once, not multiple times)
- [ ] Pagination: use rel="next" / rel="prev" or view-all option

---

## Content Quality

### Content Relevance
- [ ] Content matches search intent
- [ ] Content is comprehensive (better than competitors)
- [ ] Content is original (not scraped or thin)
- [ ] Content is updated regularly
- [ ] Content is well-researched and accurate
- [ ] Citations provided for claims

### Content Freshness
- [ ] Last updated date visible
- [ ] Content updated within last 6 months
- [ ] Outdated information marked or updated
- [ ] No "legacy" or "archived" content ranking

### Keyword Optimization
- [ ] Primary keyword in: title, H1, first paragraph
- [ ] Related keywords used naturally throughout
- [ ] Keyword density 0.5-2.5% (not stuffed)
- [ ] Long-tail keyword variations included
- [ ] LSI keywords (semantic variations) included

---

## Local SEO (if applicable)

### Google My Business
- [ ] Business listed on Google My Business
- [ ] Complete profile: photo, hours, description, address
- [ ] Verified and claimed by business owner
- [ ] Category is specific and accurate
- [ ] Regular updates and posts

### Local Citations
- [ ] Listed on: Apple Maps, Bing Places, Yelp (as applicable)
- [ ] Name, address, phone consistent across all listings
- [ ] "NAP" (Name, Address, Phone) matches website
- [ ] Reviews encouraged and monitored

### Local Keywords
- [ ] City/region keywords in: title, description, headings
- [ ] Schema includes address and service area
- [ ] Content targets local search intent
