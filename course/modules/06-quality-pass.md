# Module 06: The Quality Pass
**Time: 8 minutes core | 50 minutes expanded**

---

## Why Quality Checks Matter

You're about to ship your website to the internet. Once it's live, anyone can see it.

Quality separates "I built a website" from "I built a professional website."

This module teaches you to audit your site for performance, SEO, accessibility, and content mistakes. By the end, you'll be confident that your site is ship-ready.

---

## Core Quality Checks (8 minutes)

These are the essential audits. Every site needs them before launch.

### Step 1: Run performance-optimizer

1. In Claude Code chat, type: `/performance-optimizer`
2. Point it to your site folder
3. Claude analyzes your site for speed, file sizes, and browser compatibility
4. It shows you a report with issues and fixes

Common issues:
- Oversized images (slowing down load times)
- Missing lazy-loading (images load when needed, not all at once)
- Large JavaScript files
- Inefficient CSS

Claude suggests fixes and may apply them automatically.

---

### Step 2: Run seo-aeo-auditor

SEO means Search Engine Optimization. AEO means Answer Engine Optimization (for AI search).

1. In Claude Code chat, type: `/seo-aeo-auditor`
2. Let it scan your site
3. It produces a report with scores and recommendations

The report checks:
- Title tags (do they describe your page?)
- Meta descriptions (the preview in Google search)
- Heading hierarchy (H1, H2, H3 structure)
- Keyword usage (is your business keyword on the page?)
- Mobile optimization
- Page speed

You'll see a score. Aim for 80+. If you're below that, Claude suggests fixes.

---

### Step 3: Run content-auditor

The content-auditor checks for embarrassing mistakes.

1. In Claude Code chat, type: `/content-auditor`
2. Let it scan your site
3. It reports on:
   - Typos and spelling errors
   - Grammar issues
   - Consistency (do you capitalize the same words everywhere?)
   - Broken links
   - Missing alt text on images

Read the report carefully. These are real issues that users notice.

---

### Step 4: Run link-checker

Dead links hurt SEO and frustrate users.

1. Use a free tool like [brokenlinkcheck.com](https://www.brokenlinkcheck.com/)
2. Enter your site URL
3. It scans every link and reports which ones are broken
4. Fix broken links (either update the URL or remove the link)

Takes 5 minutes. Prevents embarrassing broken links.

---

## That's Core

You've audited your site with the four essential checks. It's ready to launch.

But if you want to go deeper (and we recommend it), read the advanced section below.

---

## Bonus: Run All Audits Together

If you want to run the core four audits in one sweep, you can tell Claude Code:

"Run a pre-launch review: performance-optimizer, seo-aeo-auditor, content-auditor, and link-checker."

Claude will execute them all, then give you a summary report. This takes 15–20 minutes but saves time if you're auditing multiple times.

---

## Advanced Quality Checks (42 minutes more)

These audits dig deeper into security, code quality, user experience, testing, and copy. They're optional but highly recommended for professional sites.

### Step 5: Run qa-tester

QA stands for Quality Assurance. This skill tests your site like a real user would.

1. In Claude Code chat, type: `/qa-tester`
2. Let it test your site thoroughly
3. It checks:
   - **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
   - **Mobile responsiveness** (iPhone, Android, tablets)
   - **Form testing** (can users submit forms without errors?)
   - **JavaScript console** (any JS errors that break functionality?)
   - **Accessibility** (keyboard navigation, screen readers, color contrast)
   - **Visual regression** (does the site look the same across browsers?)

The qa-tester is like hiring a QA engineer for 10 minutes. It catches bugs that users would find.

Common issues:
- Forms that don't submit
- Buttons that don't work on mobile
- Images that break in certain browsers
- Navigation that's inaccessible

Review the report and fix any issues found.

---

### Step 6: Run security-auditor

Before going live, ensure your site is secure.

1. In Claude Code chat, type: `/security-auditor`
2. It scans for:
   - **Secrets scanning** (are any API keys exposed in code?)
   - **Security headers** (is HTTPS enabled? Are security headers set?)
   - **XSS/CSRF prevention** (is your site vulnerable to common attacks?)
   - **Dependency vulnerabilities** (do your libraries have known security issues?)
   - **Privacy compliance** (is user data handled securely?)

Security breaches are expensive and damage trust. This 5-minute audit prevents disasters.

If issues are found, Claude will explain them in plain language and suggest fixes.

---

### Step 7: Run ux-reviewer

UX (User Experience) is how easy your site is to use.

1. In Claude Code chat, type: `/ux-reviewer`
2. It evaluates your site using Nielsen's 10 Usability Heuristics:
   - **Navigation clarity** (can users find what they need?)
   - **Visual hierarchy** (what's important? What's secondary?)
   - **Mobile UX** (is the site touch-friendly?)
   - **User journey** (can users complete their goal from landing to conversion?)
   - **Consistency** (do patterns repeat across pages?)
   - **Error recovery** (if something goes wrong, can users fix it?)

The report explains what works and what doesn't.

Common UX issues:
- Hidden navigation (users can't find the menu)
- Weak visual hierarchy (everything looks equally important)
- Poor mobile experience (buttons too small, text too cramped)
- Confusing user flows (users get lost)

Good UX increases conversions. Invest 5 minutes here.

---

### Step 8: Run code-auditor

Your code should be clean and error-free.

1. In Claude Code chat, type: `/code-auditor`
2. It reviews:
   - **JavaScript errors** (any bugs in your JS?)
   - **HTML validation** (is your HTML properly structured?)
   - **CSS audit** (is your CSS efficient? Any unused styles?)
   - **API integration testing** (do your API calls work?)
   - **Error handling** (if something fails, does your site handle it gracefully?)

Think of this as a code review before deployment.

Common issues:
- Unused CSS that bloats the file
- Missing error handling in API calls
- Invalid HTML (affects SEO and accessibility)
- Console errors that crash features

Fix these and your site will be more robust.

---

### Step 9: Run copy-editor

Your words matter. They persuade, convert, and communicate.

1. In Claude Code chat, type: `/copy-editor`
2. It analyzes your copy for:
   - **Persuasion frameworks** (does your copy use proven persuasion techniques?)
   - **Headline scoring** (are your headlines compelling and clear?)
   - **CTA optimization** (are your calls-to-action strong and actionable?)
   - **Readability** (is your copy easy to scan and understand?)
   - **Message clarity** (do visitors understand your value proposition in 10 seconds?)

Copy is not marketing—it's how you communicate value.

Common copy issues:
- Weak headlines that don't grab attention
- CTAs like "Click Here" instead of "Get Free Consultation"
- Walls of text instead of scannable sections
- Vague value propositions ("We're the best" instead of "Save 5 hours per week")

Great copy increases engagement and conversions. Spend 5 minutes here.

---

### Accessibility Audit (WCAG Standards)

Accessibility means your site works for everyone—including people with disabilities.

**Why it matters:**
- 1 in 4 adults have a disability
- Accessible sites get better SEO ranking
- It's increasingly a legal requirement

**Key accessibility checks:**

**Colors & Contrast**
- Text should have 4.5:1 contrast ratio (dark text on light background is ideal)
- Don't rely on color alone to communicate (instead of "click the red button," say "click the submit button")

Test: Open your site. Squint at it. Can you still read the text? If yes, contrast is good.

**Images & Alt Text**
- Every image needs an alt text (description)
- Alt text helps people using screen readers

Example:
```html
<img src="team.jpg" alt="Team of five professionals smiling in office">
```

Claude includes alt text by default, but review it. Is it descriptive or generic?

**Keyboard Navigation**
- Users with mobility issues navigate with Tab and Enter, not mouse
- Test: Open your site and use only keyboard (Tab, Enter, Space, Arrows)
- Can you access everything?

Claude handles most of this automatically, but test it.

**Form Labels**
- Every form field needs a visible label

Good:
```html
<label>Your Email:</label>
<input type="email">
```

Bad:
```html
<input type="email" placeholder="email">
```

(Placeholder text disappears when you start typing.)

**Headings Hierarchy**
- Pages should have one H1 (main heading)
- Then H2s and H3s (subheadings)
- Don't skip levels (don't go H1 → H3)

This helps screen readers understand your page structure.

**To audit accessibility:**

1. Use the WebAIM Contrast Checker: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)
2. Run an accessibility audit tool: [axe DevTools](https://www.deque.com/axe/devtools/) (browser extension)
3. Test with keyboard navigation (Tab through your site)
4. Use a screen reader: [NVDA (free)](https://www.nvaccess.org/)

Fix any issues. Accessibility is not optional.

---

### Content Audit Deep Dive

Beyond typos, audit your content for:

**Tone Consistency**
- Do you sound the same on every page?
- If your brand is "casual and friendly," every page should feel casual and friendly
- If your brand is "professional and analytical," every page should reflect that

Read your content out loud. Does it sound like you?

**Messaging Clarity**
- Can a visitor understand what you do in 10 seconds?
- Is your main value proposition clear on the home page?
- Do you explain benefits, not just features?

Example:
- Feature: "Uses AI to generate images"
- Benefit: "Create professional images in minutes without hiring a designer"

The benefit answers: "Why should I care?"

**Copy Length**
- Walls of text lose readers
- Break content into scannable sections
- Use short paragraphs (3–4 sentences max)
- Use bullet points for lists

**Call-to-Action Clarity**
- Every page should have one clear CTA (Call To Action)
- CTA buttons should use action verbs: "Get Free Consultation," "Schedule Demo," "Download Guide"
- Not: "Click Here" or "Submit"

**Brand Voice Check**
- Print out your site
- Read each page
- Does it sound like your brand?
- If not, tell Claude Code: "Rewrite [section] to sound more [your brand adjective]"

---

### Brand Voice Review

Your brand voice is how you communicate. Consistency across pages builds trust.

Ask yourself:
- Are we friendly or formal?
- Do we use humor or stay serious?
- Do we say "I" (personal) or "we" (team)?
- Do we use technical terms or plain language?

Example voices:
- **Casual startup:** "Hey! Let's chat about your goals."
- **Professional consultant:** "We recommend scheduling a discovery call to discuss your objectives."
- **Creative agency:** "Let's make something amazing together."

Choose one voice and use it everywhere. If you find pages that don't match, tell Claude Code: "Rewrite this section to match our brand voice."

---

### Mobile Testing Across Devices

Your site should look great on all devices.

**Test on:**
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Laptop (Chrome, Firefox, Safari)

Use your phone to visit your site. Is it readable? Are buttons easy to tap? Does it feel fast?

Chrome DevTools has a device emulator, but real device testing is better.

**Common mobile issues:**
- Text too small (should be 16px minimum)
- Buttons too close together (hard to tap)
- Images too large (slow loading)
- Form fields hard to fill on small screens

If your site fails on mobile, tell Claude Code: "Optimize for mobile. Make text larger, increase button size, ensure forms are touch-friendly."

---

### Privacy Compliance Checklist

Beyond security, ensure privacy compliance:

**Privacy Requirements:**
- You have a privacy policy (explain how you collect and use data)
- You have terms of service (if selling or collecting data)
- Your form has a privacy statement
- You're not tracking users without consent
- You comply with GDPR (if serving EU users) or CCPA (if serving California residents)

For privacy policy/terms of service, you can use free generators like [termly.io](https://termly.io/). Customize them for your business.

The security-auditor skill checks for privacy compliance as part of its review.

---

## Checklist: Ready to Launch?

**Core Audits (Required):**

- [ ] Performance audit: score 80+
- [ ] SEO audit: score 80+
- [ ] No typos or grammar errors
- [ ] All links work

**Advanced Audits (Recommended):**

- [ ] QA testing: cross-browser, mobile, forms, JS console
- [ ] Security audit: no exposed secrets, headers set, vulnerabilities fixed
- [ ] UX review: navigation clear, visual hierarchy strong, mobile-friendly
- [ ] Code audit: no JS errors, valid HTML, efficient CSS, error handling in place
- [ ] Copy review: headlines strong, CTAs clear, messaging persuasive
- [ ] Privacy policy is visible and accurate
- [ ] Brand voice is consistent across all pages
- [ ] You're proud of how it looks

If core audits pass, you can launch. If you've also completed the advanced audits, your site is truly professional.

You're ready for Module 07.

---

## Callout: Done Is Better Than Perfect

You could spend weeks polishing. Resist the urge.

Ship now. Iterate later.

Real users give you feedback better than any audit tool. Deploy, then refine based on what people actually do on your site.

---

## Tip: Create a Quality Checklist

**For quick launches (core checks):**
1. Performance audit
2. SEO audit
3. Content audit
4. Link check

Takes 8 minutes. Gets your site live.

**For professional launches (all checks):**
1. Performance audit
2. SEO audit
3. Content audit
4. Link check
5. QA testing
6. Security audit
7. UX review
8. Code audit
9. Copy review

Takes 50 minutes. Ensures your site is bulletproof.

---

## After This Module

Your site has been thoroughly audited. It's fast, accessible, and professional.

You're ready to launch.

Next module: deploy to the internet.

See you in Module 07.
