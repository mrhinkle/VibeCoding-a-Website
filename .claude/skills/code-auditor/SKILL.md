---
name: code-auditor
description: Code quality auditor for VibeCoding-a-Website. Detects JavaScript errors, console warnings, API failures, HTML validation issues, CSS problems, and dependency vulnerabilities. Trigger on "JavaScript errors", "console errors", "code review", "fix my code", "optimize JavaScript", "site has bugs", "API not working", "form isn't submitting", "scripts not loading", "code quality", "technical debt", "refactor", "dependencies", "npm audit", "build errors", or "Vite config".
---

# Code Auditor

The **code-auditor** skill ensures that the JavaScript, HTML, and CSS running your website is correct, robust, and follows best practices. While the performance-optimizer focuses on speed and file size, the code-auditor focuses on correctness: Does your code run without errors? Do your API integrations actually work? Is there proper error handling in place? Are your dependencies secure?

This skill is your "web programmer" — the person who makes sure everything runs without breaking.

---

## JavaScript Audit

### Console Error Detection
Scans your browser console for JavaScript errors with **zero-error tolerance** in production. Checks:
- Uncaught errors and exceptions
- Unhandled promise rejections (async operations that fail silently)
- TypeError, ReferenceError, SyntaxError messages
- Deprecation warnings that could break in future browser updates
- Security warnings (mixed content, unsafe operations)

**Why it matters:** Users see broken functionality and get frustrated. Search engines penalize sites with errors.

### API Call Failures
Tests all fetch() and XMLHttpRequest calls:
- Failed requests (4xx, 5xx responses)
- Network timeout issues
- Malformed request headers or bodies
- CORS errors when calling external APIs
- Missing or invalid API keys blocking requests

**Why it matters:** If your contact form can't submit to Resend, or your analytics don't load, visitors won't know — they'll just see a broken site.

### Memory Leaks & Event Listeners
Identifies JavaScript that keeps eating memory:
- Event listeners never removed (onclick handlers that stack up)
- Old data stored in variables but never cleaned up
- DOM nodes kept in memory after being removed from the page
- Timer intervals/timeouts that never clear

**Why it matters:** Your site gets slower and slower the longer users stay on it. On mobile, it can crash.

### Dead Code & Unused Variables
Finds code that's not being used:
- Functions defined but never called
- Variables assigned but never read
- Imports that don't get used
- Conditional branches that will never execute

**Why it matters:** Dead code adds to file size and confuses future maintenance. It's clutter.

### ES6+ Compatibility
Checks that your JavaScript works in your target browsers:
- Arrow functions, destructuring, spread operator — all modern syntax
- Compatibility with older browsers (if that's your audience)
- Polyfill requirements for unsupported features
- Async/await vs Promise support

**Why it matters:** If your site breaks in Safari or older Chrome versions, you've lost those users.

### Strict Mode & Variable Scoping
Validates proper JavaScript rigor:
- `'use strict'` enforcement
- Global variable pollution
- Properly scoped `let` and `const` (not `var`)
- Undeclared variables (implicit globals)

**Why it matters:** Sloppy variable scoping causes hard-to-debug bugs and conflicts.

---

## HTML Validation

### W3C HTML5 Standards
Runs your HTML through validation against official standards:
- Proper DOCTYPE declaration
- Required meta tags (charset, viewport)
- Valid nesting of elements
- Deprecated HTML attributes (old code patterns)
- Duplicate IDs on the page

**Why it matters:** Invalid HTML can break in unexpected ways across browsers. Search engines prefer clean HTML.

### Semantic Structure
Checks for proper use of meaningful HTML elements:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3, not skipping levels)
- `<form>` and `<fieldset>` for form structure
- `<table>` for actual tabular data (not layout)

**Why it matters:** Semantic HTML helps screen readers, search engines, and makes your code readable.

### Meta Tag Completeness
Ensures all important metadata is present:
- Viewport meta tag (mobile responsiveness)
- Character encoding declaration
- Open Graph tags for social sharing
- Canonical URL to prevent duplicate content issues

**Why it matters:** Missing meta tags mean broken mobile experience and poor social sharing.

---

## CSS Audit

### Invalid & Unused Selectors
Identifies CSS that doesn't work:
- Selectors with typos that never match any element
- Vendor prefixes that are outdated or missing where needed
- CSS that overrides itself (conflicting rules)
- Unused class/ID selectors (dead CSS)

**Why it matters:** Broken CSS rules add file size without any benefit.

### Browser Compatibility
Checks for CSS features not supported in your target browsers:
- Missing vendor prefixes (`-webkit-`, `-moz-`, etc.)
- CSS Grid, Flexbox support in older browsers
- Custom properties (CSS variables) with no fallbacks
- Gradient, transform, and animation syntax compatibility

**Why it matters:** Your site looks perfect in Chrome but broken in Safari = lost users.

### Specificity & !important Abuse
Analyzes CSS specificity issues:
- Excessive use of `!important` (forces CSS wars)
- Over-nested selectors (creates high specificity)
- Specificity conflicts preventing overrides
- Inline styles that fight with stylesheets

**Why it matters:** High specificity CSS is rigid and hard to change. It slows down redesigns.

### Animation Performance
Checks which CSS properties are being animated:
- Layout-triggering animations (`width`, `height`, `margin`, `padding`)
- Paint-heavy animations (`box-shadow`, `filter`)
- Performant animations using `transform` and `opacity`
- GPU acceleration with `will-change` (when appropriate)

**Why it matters:** Bad animations cause jank (stuttering) and drain battery on mobile.

### Media Query Organization
Reviews responsive design implementation:
- Consistent breakpoints (not scattered random widths)
- Mobile-first vs desktop-first strategy
- Missing breakpoints for awkward screen sizes
- Redundant media queries

**Why it matters:** Well-organized breakpoints make the code maintainable.

---

## API Integration Testing

### Resend Email Delivery
Tests email sending functionality:
- API endpoint exists and responds
- API key is valid and has permission to send
- Email validation (proper sender, recipient format)
- Error responses (what happens when email is invalid?)
- Rate limits and quota issues

**What we check:** Does clicking "Send" actually deliver the email, or silently fail?

### Beehiiv Embed
Validates newsletter signup integration:
- Embed script loads without errors
- Form displays and is responsive
- Submissions go to Beehiiv (not stuck in your form)
- No JavaScript errors in the embed code
- No CORS blocking the embed

**What we check:** Can visitors actually sign up, or is the form silently broken?

### Analytics (Google Analytics / Fathom)
Ensures tracking is working:
- Tracking code fires on page load
- Events are tracked (button clicks, form submissions)
- Not blocked by browser privacy settings or ad blockers
- Data appears in your analytics dashboard
- No script errors from the analytics library

**What we check:** Do you actually know how many visitors you have and what they do?

### Vercel Serverless Functions
Audits backend function health:
- Function responds within timeout (30 seconds default)
- Cold start time (first request is slower)
- Error handling (what happens on failure?)
- Environment variables are set correctly
- Database connections work (no timeouts)
- Proper HTTP status codes returned

**What we check:** Can your backend handle requests, or do they time out?

---

## Dependency Audit

### Security Vulnerabilities
Runs `npm audit` to find known security issues:
- Outdated packages with published vulnerabilities
- Dependency chains that expose you to risk
- Major vs minor security issues (prioritize major)

**Why it matters:** Hackers actively exploit known vulnerabilities. Keeping dependencies updated is critical.

### Outdated Packages
Identifies packages that have newer versions:
- Major version bumps (breaking changes)
- Minor version bumps (new features, backward compatible)
- Patch versions (bug fixes, usually safe to update)
- Package maintenance status (abandoned projects)

**Why it matters:** New versions often have performance fixes and bug fixes.

### Unused Dependencies
Finds packages you're not actually using:
- Imported but never used
- Installed as transitive dependency (installed because something else needs it)
- Replaced by built-in browser APIs

**Why it matters:** Every dependency adds to your bundle size and increases attack surface.

### Bundle Impact
Measures how much each dependency adds to your file size:
- Uncompressed vs compressed size
- Tree-shaking effectiveness (can dead code be removed?)
- Duplicate packages in node_modules

**Why it matters:** Large dependencies slow down page load.

---

## Error Handling Review

### Graceful Degradation
Tests what happens when things fail:

**Network down?** Does your site still show cached content or at least a helpful message?

**API key expired?** Do users see a helpful "something went wrong" message, or a JavaScript error dump?

**JavaScript disabled?** Can visitors still read your content and submit forms?

**Third-party service down?** Does your site still work if Beehiiv or analytics is slow/broken?

**Why it matters:** Real users encounter failures. Sites that handle failure gracefully seem more professional.

### Try/Catch Around Async
Checks that async operations are wrapped in error handling:
- Fetch calls have `.catch()` handlers
- Async/await uses try/catch blocks
- Promise chains don't have unhandled rejections
- Error messages are user-friendly (not stack traces)

**Why it matters:** Without error handling, a failed API call crashes your page silently.

### Form Fallbacks
Verifies forms work even if JavaScript fails:
- Form has `action` attribute (submits to server as fallback)
- Form has proper `method` (GET or POST)
- Progressive enhancement (basic functionality works, JS adds polish)

**Why it matters:** If your form relies 100% on JavaScript, it's broken for JavaScript-disabled users.

---

## Build Pipeline Review

### Vite Configuration
Audits your build setup:
- Entry points are correct (usually `index.html`)
- Output directory is set (usually `dist/`)
- Environment variables are configured
- Plugin order is correct (plugins can interact)
- Build optimization settings (minification, source maps)

**Why it matters:** Wrong build config means your site ships broken or bloated.

### Tree-Shaking Effectiveness
Checks if unused code is actually removed from the bundle:
- Exports are `export default` or named exports (tree-shakeable)
- Dependencies use ES6 modules (not CommonJS)
- Side effects are marked correctly in package.json
- Dead code elimination is working

**Why it matters:** Without tree-shaking, your bundle includes code you don't use.

### Chunk Splitting Strategy
Reviews how code is split across files:
- Vendor dependencies in separate chunks (cached longer)
- Route-based code splitting (load code only when needed)
- Chunk sizes are reasonable (not one giant file)
- Shared code between routes is deduplicated

**Why it matters:** Good chunking means faster page loads and better caching.

### Source Maps
Checks debugging configuration:
- Source maps are enabled during development
- Source maps are **disabled in production** (they expose your source code)
- Error reporting still works (using error tracking service)

**Why it matters:** Production source maps are a security risk.

### Environment Variables
Validates configuration management:
- Variables are loaded from `.env` files
- Secrets are never committed to git
- Production vs development configs are different
- Variables are used correctly in code (not string literals)

**Why it matters:** Hardcoded API keys or passwords in code get stolen.

---

## Progressive Enhancement Check

### Content Without JavaScript
Tests core functionality with JS disabled:
- Page displays readable content (not blank)
- Text and images load (not hidden behind JS)
- Critical links and navigation work
- Forms can be submitted

**Why it matters:** Users with old browsers, slow connections, or JS errors still get value.

### HTML-First Architecture
Checks if content is in HTML (not JavaScript-rendered):
- Content is in semantic HTML tags (not empty divs)
- Navigation links are in `<a>` tags (not divs with click handlers)
- Form fields exist in HTML (not generated by JavaScript)
- Text content isn't hidden in JavaScript strings

**Why it matters:** Search engines and screen readers see what's in the HTML. If content is only in JavaScript, they miss it.

---

## Code Quality Metrics

### Linting Results
Runs ESLint (or equivalent) to catch code style issues:
- Unused variables
- Missing semicolons (if your style requires them)
- Inconsistent naming conventions (camelCase vs snake_case)
- Problematic patterns (var vs let/const)

**Why it matters:** Consistent code is easier to read and less error-prone.

### Code Complexity
Measures how complex your functions are:
- Functions doing too many things (should be smaller)
- Nested conditionals creating hard-to-follow logic
- Long parameter lists
- Functions with too many return paths

**Why it matters:** Simple code is less buggy and easier to maintain.

### File Organization
Reviews directory structure and file sizes:
- Related code grouped together (not scattered)
- Files aren't too large (single responsibility)
- No circular dependencies (file A imports B imports A)
- Clear naming conventions (components/, utils/, pages/, etc.)

**Why it matters:** Good organization makes features easier to find and modify.

### Naming Conventions
Checks that names are consistent and clear:
- Variables/functions use camelCase (or your chosen convention)
- Classes use PascalCase
- Constants use UPPER_SNAKE_CASE
- Names are descriptive (not `x`, `temp`, `data`)

**Why it matters:** Clear names make code self-documenting.

---

## Audit Report Format

When the code-auditor runs, you'll receive a **structured report** with:

### Error Summary
```
Severity Breakdown:
- Critical (blocks functionality): 3 issues
- High (breaks features): 2 issues  
- Medium (poor UX): 5 issues
- Low (code quality): 8 issues
```

### Organized by Category
- **JavaScript Errors** (file:line reference)
- **HTML Issues** (validation failures)
- **CSS Problems** (browser compatibility)
- **API Integration** (Resend, Beehiiv, Analytics status)
- **Dependencies** (vulnerabilities, outdated packages)
- **Build Pipeline** (Vite configuration issues)

### For Each Issue
1. **What's wrong** (plain English explanation)
2. **Why it matters** (impact on users/performance)
3. **Where it is** (file path and line number)
4. **How to fix it** (specific steps)
5. **Priority** (Critical > High > Medium > Low)

### Prioritization
Issues are ordered by impact:
1. **Critical:** Site doesn't work (API failures, JavaScript crashes)
2. **High:** Features are broken (form submission fails, analytics don't load)
3. **Medium:** Poor user experience (slow animations, confusing errors)
4. **Low:** Code quality and maintenance (unused code, naming conventions)

---

## How to Use This Skill

Trigger the code-auditor skill when you notice:
- Error messages in the browser console
- Forms or buttons that don't work
- Third-party integrations (email, newsletters, analytics) that seem broken
- You want a general code quality review
- You're getting a JavaScript error that's hard to track down
- You need to know if your dependencies have security issues
- You're refactoring and want to ensure nothing breaks

The skill will:
1. Test your site in a browser environment
2. Run automated checks against your code
3. Test API integrations with real calls
4. Check dependencies for vulnerabilities
5. Produce a prioritized report of what needs fixing

**Result:** A clear list of what's broken, why it matters, and exactly how to fix it.

