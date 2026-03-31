# Performance Optimization Checklist

## Image Optimization Checklist

### Image Format & Size
- [ ] Remove images larger than 1920px width (no monitor wider than 2K)
- [ ] Convert all photography to JPEG (or WebP with JPEG fallback)
- [ ] Convert all graphics to PNG or SVG (or WebP with PNG fallback)
- [ ] Use SVG for all icons (smallest file size, infinitely scalable)
- [ ] Replace icons made from images with icon fonts or SVG sprites
- [ ] Compress all images through TinyPNG, ImageMagick, or similar
- [ ] For lossy compression: target 70-80% quality in JPEG
- [ ] For lossless compression: target 8-bit palette PNG where possible

### Responsive Images
- [ ] Add srcset to all images with multiple sizes needed
- [ ] Define breakpoints: mobile (320px), tablet (768px), desktop (1200px), ultra-wide (1920px)
- [ ] Provide 1x and 2x versions for retina displays (@2x)
- [ ] Example: `<img src="hero.jpg" srcset="hero-sm.jpg 640w, hero-md.jpg 1200w, hero-lg.jpg 1920w">`

### Lazy Loading
- [ ] Add loading="lazy" to all below-the-fold images
- [ ] Keep hero/above-the-fold images loading="eager" or omit attribute
- [ ] Use decoding="async" on all images to prevent blocking
- [ ] Consider IntersectionObserver for custom lazy-load behavior

### WebP Conversion
- [ ] Convert all JPEG images to WebP (25-35% smaller)
- [ ] Convert all PNG images to WebP (20-30% smaller)
- [ ] Provide fallbacks: `<picture><source srcset="img.webp" type="image/webp"><img src="img.jpg"></picture>`
- [ ] Keep WebP and original format on server

---

## CSS Optimization Checklist

### Minification & Organization
- [ ] Minify all CSS files (remove whitespace, comments, unnecessary characters)
- [ ] Remove all vendor prefixes not needed for target browsers
- [ ] Organize CSS: reset → base → layout → components → utilities
- [ ] Use a consistent naming convention (BEM, SMACSS, or utility-first)

### Critical CSS
- [ ] Identify critical CSS (styles needed before first paint)
- [ ] Include critical CSS in <style> tag in <head> for above-the-fold content
- [ ] Defer non-critical CSS: `<link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">`
- [ ] Critical CSS should be < 50KB

### Unused CSS Removal
- [ ] Run PurgeCSS or Tailwind on production build
- [ ] Target: Remove 20-60% of unused styles
- [ ] Whitelist any dynamic class names (e.g., from data attributes)
- [ ] Test all theme variations, states, and page types before deploying

### Media Query Optimization
- [ ] Use mobile-first approach (base styles for mobile, add desktop enhancements)
- [ ] Group related media queries together
- [ ] Test that mobile CSS isn't loading on desktop unnecessarily
- [ ] Consider splitting into separate files: base.css, desktop.css (link with media query)

### Performance-Optimized Properties
- [ ] Use transform and opacity for animations (GPU-accelerated)
- [ ] Avoid animating layout properties (width, height, top, left)
- [ ] Use will-change sparingly (cost: high memory usage)
- [ ] Use contain property to isolate style scope

---

## JavaScript Optimization Checklist

### Code Size & Bundling
- [ ] Minify all JavaScript (whitespace, comment, variable name removal)
- [ ] Remove source maps from production
- [ ] Analyze bundle with webpack-bundle-analyzer or similar
- [ ] Target: < 170KB gzipped for JS (mobile internet speed baseline)
- [ ] Tree-shake unused exports in build
- [ ] Remove polyfills for browsers you don't support

### Code Splitting & Lazy Loading
- [ ] Split code by route (each page loads only its JS)
- [ ] Lazy-load heavy libraries (charts, maps, video players)
- [ ] Use dynamic imports: `const module = await import('./heavy.js')`
- [ ] Load third-party scripts only on pages that need them

### Script Loading Strategy
- [ ] Place inline scripts in <head> only if critical
- [ ] Add defer to external scripts in <head>: `<script src="app.js" defer></script>`
- [ ] Add async only to truly independent scripts (analytics, ads)
- [ ] Load third-party scripts before closing </body>
- [ ] Load tracking pixels, tags as async or with service worker

### Bundle Analysis
- [ ] Identify largest dependencies (often 40% is 2-3 libraries)
- [ ] Consider smaller alternatives: moment.js → date-fns, lodash → lodash-es
- [ ] Check for duplicate packages in node_modules
- [ ] Audit dependencies quarterly for security updates

---

## Font Optimization Checklist

### Font Selection & Format
- [ ] Use system fonts for body copy (massive speed boost)
- [ ] Limit custom fonts to 1-2 typefaces
- [ ] Use variable fonts if loading multiple weights (e.g., 400, 600, 700)
- [ ] Support modern formats: WOFF2, WOFF, with fallback
- [ ] Do NOT include: EOT, TTF, OTF in web deliverables

### Font Loading Strategy
- [ ] Add font-display: swap to all @font-face rules
- [ ] For headings: font-display: fallback (brief invisible text acceptable)
- [ ] For body: font-display: swap (fast fallback better than invisible text)
- [ ] Preload critical fonts: `<link rel="preload" href="font.woff2" as="font" type="font/woff2">`

### Font Subsetting
- [ ] Subset Google Fonts to latin-only (if applicable)
- [ ] Subset custom fonts to used characters only
- [ ] Tools: Google Fonts API (select scripts), pyftsubset (custom fonts)
- [ ] Typical savings: 60-80% file size reduction

### Redundancy Audit
- [ ] Check no duplicate fonts loaded from different sources
- [ ] Verify no multiple font families with same visual appearance
- [ ] Remove unused font weights (if site never uses 300, don't load it)

---

## Asset Preloading Checklist

### Preload (High Priority)
- [ ] Preload critical fonts: `<link rel="preload" href="font.woff2" as="font">`
- [ ] Preload above-the-fold hero images: `<link rel="preload" href="hero.jpg" as="image">`
- [ ] Preload critical CSS-in-JS bundles
- [ ] Preload critical data from API endpoints

### Prefetch (Lower Priority)
- [ ] Prefetch navigation links: `<link rel="prefetch" href="/about">`
- [ ] Prefetch next-page images in carousel
- [ ] Prefetch fonts needed by secondary pages
- [ ] Limit to 2-3 prefetch links (bandwidth cost)

### DNS Prefetch & Preconnect
- [ ] Add dns-prefetch for third-party domains: `<link rel="dns-prefetch" href="//cdn.example.com">`
- [ ] Add preconnect for critical third-parties: `<link rel="preconnect" href="//cdn.example.com">`
- [ ] Apply to: CDNs, analytics, payment processors, fonts

### Resource Hints Priority
- 1. Preload: Critical fonts, above-the-fold images, critical bundles
- 2. Preconnect: APIs, CDNs, third-party services
- 3. DNS-prefetch: Non-critical third-parties
- 4. Prefetch: Next-page navigation and resources

---

## Compression & Delivery Checklist

### Server Compression
- [ ] Enable gzip compression on all text assets (CSS, JS, JSON)
- [ ] Enable Brotli compression for better compression (if server supports)
- [ ] Verify: Content-Encoding header shows gzip or br
- [ ] Target: 60-70% file size reduction from minification + compression

### HTTP/2 & Headers
- [ ] Verify site serves over HTTPS (HTTP/2 requirement)
- [ ] Enable HTTP/2 on server (faster parallel asset loading)
- [ ] Set Cache-Control headers: 1 year for versioned assets, 1 day for HTML
- [ ] Example: `Cache-Control: public, max-age=31536000` for hashed filenames

### CDN & Geographic Distribution
- [ ] Serve assets through CDN (reduces latency for global users)
- [ ] Verify CDN caches static assets (CSS, JS, images)
- [ ] Set appropriate cache headers on CDN
- [ ] Monitor: CDN cache hit ratio (target: 90%+)

---

## Performance Budget & Monitoring

### Establish Budget
- [ ] HTML: < 50KB
- [ ] CSS: < 60KB gzipped
- [ ] JavaScript: < 170KB gzipped
- [ ] Total Assets: < 400KB gzipped (page weight)
- [ ] Time to Interactive: < 5 seconds on 4G

### Lighthouse Targets
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Continuous Monitoring
- [ ] Run Lighthouse monthly (automated in CI/CD)
- [ ] Monitor real-world performance with Web Vitals
- [ ] Set alerts for performance regressions
- [ ] Review metrics: LCP, FID, CLS, FCP, TTI

---

## Verification Checklist

### Before Launch
- [ ] Disable cache in DevTools, test on 4G throttling
- [ ] Test on real mobile device (not just mobile emulation)
- [ ] Check for layout shifts (CLS issues)
- [ ] Verify images display correctly on all breakpoints
- [ ] Test on slow 3G connection (important for mobile users)

### After Deployment
- [ ] Run Lighthouse audit on production URL
- [ ] Verify Lighthouse score >= 90 on all categories
- [ ] Check real-world metrics (Google Analytics, CrUX)
- [ ] Monitor Core Web Vitals for 2+ weeks
- [ ] A/B test against old version if possible

### Regular Audits
- [ ] Schedule monthly Lighthouse runs
- [ ] Track metrics in spreadsheet over time
- [ ] Review third-party script impact quarterly
- [ ] Audit new dependencies before adding to project
