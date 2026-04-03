---
name: qa-tester
description: Comprehensive quality assurance testing for websites — the holistic "does this site actually work?" check. Triggers on phrases like "test my site", "QA check", "does everything work", "quality check", "smoke test", "test before launch", "site not working", "check all pages", "broken pages", "test forms", "check mobile", "cross-browser", "regression test", or "broken links".
---

# QA Tester: Complete Website Quality Assurance

You're about to launch or update your site. Before it goes live, you need **one unified quality gate** — not a dozen separate audits, but a comprehensive walkthrough that answers the real question: *Does this thing actually work?*

That's what the QA Tester does. It's the final gatekeeper.

---

## Why QA Testing Matters

Individual audits (link checker, SEO, performance, accessibility) each answer narrow questions. But they don't tell you if your site is *usable*. QA testing does. It catches the intersection of failures: broken forms that pass validation, pages that load but feel broken, third-party scripts that silently fail, mobile designs that look good but aren't tappable.

This skill walks through your entire site systematically and hands you a report with clear, fixable issues.

---

## Test Categories

### 1. Page Rendering
Every page on your site should load cleanly.

- All pages return HTTP 200 (or appropriate 3xx redirects, never 404 on purpose)
- No blank pages, broken images, or missing content
- Layout doesn't break at standard viewport widths (320px, 768px, 1024px, 1440px+)
- No console errors or warnings that suggest rendering failures
- Flash of unstyled content (FOUC) doesn't disorient users

**Why it matters:** A page that loads but looks broken tanks conversions and signals poor quality.

### 2. Cross-Browser Testing
Your site works in modern browsers, not just the one you tested in.

- **Chrome/Edge:** Latest version — test on Windows and macOS
- **Safari:** Test on both macOS and iOS (different rendering engines)
- **Firefox:** Latest version — often catches CSS edge cases others miss
- Check: form submission, JavaScript execution, CSS layout, video playback, animations

**Why it matters:** 10-15% of traffic still uses Safari or Firefox. Broken in one browser = lost customers.

### 3. Mobile & Responsive Testing
Half your traffic is mobile. Your site must work there.

- Viewport meta tag is present and correct: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- No horizontal scrolling on mobile (ever)
- Touch targets are at least 48x48px (easy to tap, not tiny)
- Buttons and links are tappable, not overlapped by modals or sticky headers
- Images scale correctly; no text is cut off
- Forms are mobile-friendly: single-column layout, large input fields
- Test at actual device sizes: 320px, 375px, 768px, 1024px, 1440px

**Why it matters:** Unresponsive or hard-to-tap mobile sites bounce users instantly.

### 4. Form Functionality
Forms are where your site makes money or captures leads. They must work end-to-end.

- User can fill every field without errors
- Form validates correctly: required fields reject empty submission, email field rejects invalid emails
- Error messages are clear ("Email must be valid" not "Error")
- Submit button doesn't double-submit on slow networks
- After submission: confirmation message appears, page redirects, or email arrives
- Confirmation emails actually arrive (test with real email, not test@example.com)
- Form data doesn't appear in browser console or URL parameters (security check)

**Why it matters:** A broken form is a broken business.

### 5. JavaScript Console Health
Every error in the console is a potential failure.

- Zero console errors allowed (browser DevTools Console tab shows nothing red)
- No unhandled promise rejections
- No failed network requests (404, 500) that break functionality
- Third-party scripts load cleanly and don't throw errors

**Why it matters:** Silent JavaScript failures break functionality without crashing the page. You only know they're broken when users complain.

### 6. Navigation Flow
Users should move through your site intuitively.

- Every navigation link goes to a real page (no broken links)
- Breadcrumbs are accurate and clickable
- Back button works (browser history is intact)
- 404 page exists and looks professional (matches site design)
- No dead ends where users get stuck
- Menu dropdowns work on mobile (not hidden behind burger menu bugs)

**Why it matters:** Lost navigation = lost users.

### 7. Third-Party Integrations
If your site uses external services, they must load and work.

- Beehiiv embed appears and doesn't break layout
- Analytics script loads (test by checking network tab in DevTools)
- Email service (Resend, SendGrid, Mailgun) sends test messages
- Payment processor (Stripe, etc.) loads without errors
- Ad networks or tracking pixels don't break page load
- External CDNs for fonts, icons, or libraries load reliably

**Why it matters:** Silent third-party failures look like your bug to the user.

### 8. Accessibility Basics
Basic accessibility helps everyone, not just users with disabilities.

- Keyboard navigation: Can users tab through all interactive elements and use Enter/Space to activate?
- Focus management: Is there a visible focus indicator? Can you see where you are?
- Screen reader basics: Do images have alt text? Are buttons labeled?
- Color contrast: Text is readable on its background (WCAG AA minimum)
- ARIA labels: Complex interactive elements (carousels, modals, dropdowns) have proper ARIA roles

**Why it matters:** 1 in 4 adults have disabilities. Accessible sites are more usable for everyone.

### 9. Visual Regression
Your site should look consistent and intentional.

- Spacing between elements is consistent (no random gaps)
- No overlapping text or elements
- Images are the right size (not stretched or squished)
- Fonts load correctly (no fallback fonts flashing)
- Icons are aligned and consistent
- Hover states and interactive feedback are visible

**Why it matters:** A sloppy-looking site loses trust.

### 10. SSL/HTTPS & Security
Your site must be secure.

- HTTPS is enabled on all pages (address bar shows lock icon)
- SSL certificate is valid (not expired, not self-signed)
- No mixed content: all images, scripts, and stylesheets load over HTTPS (not HTTP)
- Sensitive forms don't have auto-complete vulnerabilities
- HSTS header is present (browser enforces HTTPS on return visits)

**Why it matters:** Unencrypted sites lose SEO, fail modern browsers, and breach user trust.

### 11. Performance Smoke Test
Your site shouldn't feel sluggish.

- Pages load in under 3 seconds (on 4G mobile)
- Largest Contentful Paint (LCP) is under 2.5 seconds
- Cumulative Layout Shift (CLS) is minimal (no unexpected movement)
- No massive uncompressed images or videos blocking render
- Lighthouse score is above 90 for performance (not a hard requirement, but a signal)

**Why it matters:** Slow sites are abandoned sites. Each second of delay = lower conversion.

---

## Test Execution Protocol

### For Pre-Launch QA (New Site)

1. **Test Environment Setup**
   - Open the site in Chrome, Safari, Firefox, and Edge
   - Open DevTools in each (right-click → Inspect → Console tab)
   - Have mobile device handy, or use browser device emulation (Chrome DevTools → Toggle Device Toolbar)

2. **Walk Every Page**
   - Start at homepage, then visit every unique page (About, Contact, Product pages, Blog, etc.)
   - For each page: Check rendering, console, links, images, forms

3. **Test Every Flow**
   - Fill out and submit every form
   - Click every button that should do something
   - Test every interactive element (dropdowns, tabs, carousels, modals)

4. **Mobile-Specific Pass**
   - Resize browser to 375px width, tap every link and button
   - Check forms on mobile: can you type? Can you submit?
   - Scroll to bottom of page: is anything cut off?

5. **Console Check**
   - In each browser, open DevTools Console tab
   - Reload page and watch for errors (red text)
   - Check Network tab: are all requests succeeding (green 200/304, no red 404/500)?

6. **Third-Party Verification**
   - If using email: send a test form submission and verify the email arrives
   - If using analytics: check Google Analytics real-time view (shows live visits)
   - If using Beehiiv or embeds: reload page 5 times to ensure embed always loads

### For Post-Update QA (Changes to Existing Site)

1. **Identify Changed Pages**
   - Which pages were modified?
   - Did code changes affect other pages? (CSS changes, script changes)

2. **Regression Test Only Changed Features**
   - Re-run tests for changed pages
   - Re-test any forms or integrations that were touched
   - Re-check console (new code might introduce new errors)

3. **Smoke Test Unchanged Pages**
   - Spot-check 3-5 unchanged pages to ensure your changes didn't break something else
   - Verify no global CSS or script changes broke layout elsewhere

4. **Deploy Only When All Tests Pass**
   - Don't deploy if there are known blockers or critical issues
   - Document any known minor issues and when they'll be fixed

---

## Pass/Fail Criteria: Severity Levels

| **Severity** | **Definition** | **Examples** | **Action** |
|---|---|---|---|
| **Blocker** | Site cannot be used; functionality is completely broken | Form won't submit, page won't load, site is down, critical third-party fails | Do not launch. Fix immediately. |
| **Critical** | Core functionality is broken; users cannot complete primary tasks | Broken navigation, checkout fails, login broken | Fix before launch. |
| **Major** | Feature is degraded but partially usable; significant user friction | Mobile layout broken, slow form validation, missing images | Fix before launch. |
| **Minor** | Issue affects non-critical features or edge cases | Hover state missing, inconsistent spacing, 404 page looks plain | Fix after launch if time permits. |
| **Cosmetic** | Visual issue with no functional impact | Font color slightly off, icon needs polish | Backlog. Address in next sprint. |

---

## QA Report Format

Your QA report should include:

```
QA TEST REPORT
Website: [site URL]
Test Date: [date]
Environment: [staging/production]
Tester: [name]

---

OVERALL RESULT: [PASS / PASS WITH KNOWN ISSUES / FAIL]

---

ISSUES FOUND:

1. Form submission fails on Safari
   Severity: Critical
   Location: /contact page
   Steps to Reproduce: Fill contact form, tap Submit on Safari
   Expected: Form submits, confirmation email arrives
   Actual: Button appears to hang; no email arrives
   Fix: Debug form submission handler for Safari compatibility

2. Mobile menu cut off on 320px screens
   Severity: Major
   Location: All pages
   Steps to Reproduce: Open site on 320px device, tap hamburger menu
   Expected: Menu opens fully, all items visible
   Actual: Menu items cut off at bottom
   Fix: Increase mobile menu max-height or make scrollable

3. Beehiiv form missing on /subscribe page
   Severity: Critical
   Location: /subscribe
   Steps to Reproduce: Reload /subscribe page in incognito mode
   Expected: Embed appears, form is functional
   Actual: Embed never loads
   Fix: Check Beehiiv embed code; verify script loads from CDN

---

TESTS PASSED:
✓ All pages render without errors (11/11 pages tested)
✓ Navigation links work across all pages
✓ SSL/HTTPS valid; no mixed content
✓ Keyboard navigation works on desktop
✓ Console: zero errors on home, about, product pages

---

REGRESSION TESTS (Post-Update):
Previously Failed: Form submission on Safari
Result: FIXED ✓

---

RECOMMENDATION:
Site is ready for launch pending fix of 3 critical issues.
Estimated fix time: 2-4 hours.
Re-test after fixes.
```

---

## Regression Testing: Confirm Fixes

After developers fix issues, re-run only the failed tests:

1. Use the exact "Steps to Reproduce" from the report
2. Verify the issue is gone
3. Check that the fix didn't break something else (check console for new errors)
4. Mark as "FIXED" in the report

Don't re-test everything—only the things that were broken.

---

## Pre-Launch vs. Post-Update

| **Pre-Launch** | **Post-Update** |
|---|---|
| Test every page, every feature | Test changed pages + spot-check 3-5 unchanged pages |
| Full cross-browser pass (Chrome, Safari, Firefox, Edge) | Browser pass for affected features only |
| Mobile testing required | Mobile testing required if mobile-related changes |
| Performance baseline check | Performance spot-check (no baseline yet) |
| All integrations verified | Only touched integrations re-verified |
| Strict: no critical or blocker issues | Pragmatic: fix blockers and critical; defer minor issues |

---

## Checklist: Ready for QA?

Before starting QA, confirm:

- [ ] Site is on staging or test server (not production)
- [ ] All developers have completed their work
- [ ] You have access to all forms, integrations, and third-party services
- [ ] You have a real device or browser emulation available
- [ ] You've blocked 30-60 minutes of uninterrupted testing time
- [ ] You have a way to report issues (Slack, GitHub, Notion, shared doc)

---

**Remember:** QA isn't a punishment. It's a gift—finding problems before users do is infinitely cheaper than fixing them after launch.

Good luck. Your site is in good hands.
