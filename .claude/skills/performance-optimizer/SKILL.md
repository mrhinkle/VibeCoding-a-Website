# Performance Optimizer Skill

## Overview
This skill audits and fixes page load performance issues on websites. It analyzes images, CSS, JavaScript, fonts, and assets, then generates a before/after performance report with specific optimization recommendations and implementation steps.

## Why Performance Matters
- **User Experience**: Pages that load in under 3 seconds have 40% higher conversion rates than those taking 6+ seconds
- **SEO Rankings**: Google uses Core Web Vitals as a ranking factor; slow sites rank lower
- **Mobile Performance**: 53% of users abandon sites that take over 3 seconds to load on mobile
- **Cost Savings**: Optimized sites consume less bandwidth and server resources
- **Business Impact**: Every 100ms of latency costs Amazon 1% in sales

## Key Optimization Areas

### 1. Image Optimization
**Why it matters**: Images typically represent 50-80% of page weight. Optimization directly impacts load time.

**Checks performed**:
- Image dimensions: Ensures images aren't larger than displayed size
- Compression ratio: Recommends lossy compression for photos, lossless for graphics
- WebP conversion: Identifies images that should use modern WebP format (25-35% smaller)
- Responsive images: Detects missing srcset for different screen sizes
- Lazy loading: Identifies above-the-fold images loading eagerly vs below-the-fold images
- Format selection: PNG for graphics, JPEG for photos, SVG for icons, WebP for all

**Deliverables**:
- List of images requiring optimization
- Compression commands (ImageMagick, cwebp)
- HTML code samples for srcset implementation
- Lazy-loading implementation guidance

### 2. CSS Optimization
**Why it matters**: Render-blocking CSS prevents the page from painting. Unoptimized CSS increases file size and parse time.

**Checks performed**:
- Minification: Removes whitespace, comments, unnecessary characters
- Critical CSS: Identifies styles needed for above-the-fold content
- Unused CSS: Detects unused selectors (especially from frameworks like Bootstrap)
- Media query optimization: Ensures mobile-specific CSS isn't loaded on desktop
- CSS file splitting: Suggests code splitting for large stylesheets
- Animation efficiency: Recommends transform/opacity over layout-triggering properties

**Deliverables**:
- Minified CSS output
- Critical CSS extracted and ready for inlining
- PurgeCSS/Tailwind configuration for unused CSS removal
- CSS splitting strategy guide

### 3. JavaScript Optimization
**Why it matters**: JavaScript is the most expensive resource. Parse, compile, and execute time directly impacts performance.

**Checks performed**:
- Minification: Removes whitespace and renames variables
- Code splitting: Identifies opportunities to split bundles for different routes
- Defer/async loading: Recommends delaying non-critical scripts
- Bundle analysis: Shows which libraries consume the most bytes
- Tree-shaking: Identifies unused exports that can be removed
- Polyfill optimization: Removes polyfills needed for older browsers you don't support

**Deliverables**:
- Minified JavaScript output
- Code splitting recommendations with Vite configuration
- Bundle analysis report with size breakdown
- Script loading strategy (defer, async, preload)

### 4. Font Optimization
**Why it matters**: Web fonts block text rendering. Poor font strategy causes invisible text for 3-10 seconds.

**Checks performed**:
- Font subsetting: Identifies opportunity to include only used characters
- Font-display strategy: Recommends swap for system fonts, fallback for custom fonts
- Preloading: Ensures critical fonts load before content needs them
- Variable fonts: Suggests replacing multiple font files with single variable font
- Redundant fonts: Detects duplicate font families from multiple sources

**Deliverables**:
- Font-display CSS with recommended values
- Preload link tags
- Subsetting commands for Google Fonts or custom fonts
- Variable font migration guide

### 5. Asset Preloading and Prefetching
**Why it matters**: Strategic preloading/prefetching reduces perceived load time and improves interaction metrics.

**Checks performed**:
- Critical resources: Identifies files needed for LCP (Largest Contentful Paint)
- DNS prefetch: Detects slow third-party domains
- Preconnect: Identifies resource origin connections to establish early
- Prefetch: Identifies likely next page resources to load opportunistically

**Deliverables**:
- Preload/prefetch link tags with priorities
- Third-party script optimization strategy
- DNS prefetch recommendations

### 6. Lighthouse Score Targeting
**Why it matters**: Lighthouse is the industry standard. Scores below 90 indicate room for improvement.

**Target scores**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

**Metrics analyzed**:
- First Contentful Paint (FCP): Time until first content paints
- Largest Contentful Paint (LCP): Time until largest visual element paints
- Cumulative Layout Shift (CLS): Unexpected layout movement
- Time to Interactive (TTI): Time until page is fully interactive
- Total Blocking Time (TBT): Time JavaScript blocks main thread

## How to Use This Skill

### Step 1: Provide Site Information
Give me:
- Site URL (or local directory path)
- Site technology stack (React, Vue, static HTML, etc.)
- Target browsers/devices
- Current performance concerns (if known)

### Step 2: Audit Review
I will:
- Run Lighthouse audit on your site
- Analyze all assets (images, CSS, JS, fonts)
- Identify performance bottlenecks
- Prioritize fixes by impact

### Step 3: Optimization Plan
I provide:
- Before/after screenshot comparison
- Specific recommendations with estimated impact
- Implementation steps for each optimization
- Code examples ready to use

### Step 4: Implementation Support
I can:
- Write optimization code (minified CSS/JS)
- Generate srcset and lazy-loading HTML
- Create Lighthouse configuration for specific scenarios
- Verify improvements with follow-up audits

## Optimization Priorities

### High Impact (Do First)
1. Image optimization - 30-50% byte reduction typical
2. JavaScript minification and code splitting - 20-40% reduction
3. Unused CSS removal - 20-60% reduction
4. Font subsetting/display optimization - 50-80% faster text rendering

### Medium Impact
1. Critical CSS inlining - Eliminates render-blocking CSS
2. Script defer/async - Improves Time to Interactive
3. Asset preloading - 10-20% LCP improvement
4. Compression (gzip/brotli) - 30-50% byte reduction

### Low Impact (Nice to Have)
1. Service Worker caching
2. CDN optimization
3. HTTP/2 Push (mostly superseded by preload)
4. WebAssembly migration (for specific use cases)

## Output Deliverables

### Performance Report
- Lighthouse scores (before/after)
- Byte savings per optimization
- Load time improvements (estimated)
- Priority recommendations
- Implementation timeline

### Implementation Files
- Optimized images with WebP alternatives
- Minified CSS/JS
- HTML snippets for srcset, lazy-loading, preload
- Build configuration updates (webpack, Vite, etc.)
- Performance budget recommendations

### Verification Plan
- Steps to verify each optimization
- How to measure real-world performance
- Continuous monitoring recommendations

## Common Questions

**Q: Will optimizations affect functionality?**
A: No. Performance optimizations maintain full functionality while reducing file size and load time.

**Q: Can I apply optimizations gradually?**
A: Yes. The report prioritizes by impact, so you can implement high-impact optimizations first.

**Q: Do I need expensive tools?**
A: No. All recommendations use free tools (ImageMagick, Lighthouse CLI, PurgeCSS, etc.).

**Q: How often should I re-audit?**
A: After major changes. At minimum, quarterly to catch performance regressions.

## Tools Used
- Lighthouse CLI (audits performance)
- ImageMagick (image optimization)
- cwebp (WebP conversion)
- PurgeCSS / Tailwind (unused CSS removal)
- Source maps (bundle analysis)
- Google Fonts API (font optimization)
