# Module 06: The Quality Pass
**Time: 8 minutes core | 28 minutes expanded**

---

## Why Quality Checks Matter

You're about to ship your website to the internet. Once it's live, anyone can see it.

Quality separates "I built a website" from "I built a professional website."

This module teaches you to audit your site for performance, SEO, accessibility, and content mistakes. By the end, you'll be confident that your site is ship-ready.

---

## Core: Running the Quality Checks (8 minutes)

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

### Step 4: Review and Fix

Claude will suggest fixes for issues found. Review them.

1. For each issue, ask yourself: "Is this real?"
2. If yes, approve the fix
3. Claude applies it
4. Re-run the auditor to confirm it's gone

After fixing, your site should score well on all three audits.

---

## That's Core

You've audited your site. It's ready to launch.

But if you want to go deeper (and we recommend it), read the expanded section.

---

## Expanded: Deep Quality Audits (20 minutes more)

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

### Running Link-Checker

Dead links hurt SEO and frustrate users.

1. Use a free tool like [brokenlinkcheck.com](https://www.brokenlinkcheck.com/)
2. Enter your site URL
3. It scans every link and reports which ones are broken
4. Fix broken links (either update the URL or remove the link)

Takes 5 minutes. Prevents embarrassing broken links.

---

### Security & Privacy Audit

Before going live, ensure:

**Security:**
- Your site uses HTTPS (secure connection)
  - You'll see a 🔒 lock icon in the browser
  - Claude Code handles this on Vercel automatically
- No sensitive data exposed in code
- No API keys visible anywhere

**Privacy:**
- You have a privacy policy
- You have a terms of service (if selling or collecting data)
- Your form has a privacy statement
- You're not tracking users without consent

For privacy policy/terms of service, you can use free generators like [termly.io](https://termly.io/). Customize them for your business.

---

## Checklist: Ready to Launch?

Before you deploy, verify:

- [ ] Performance audit: score 80+
- [ ] SEO audit: score 80+
- [ ] No typos or grammar errors
- [ ] All links work
- [ ] Images have alt text
- [ ] Color contrast is sufficient
- [ ] Site works on mobile
- [ ] Forms are tested and working
- [ ] Brand voice is consistent
- [ ] Privacy policy is visible
- [ ] You're proud of how it looks

If all are true, you're ready for Module 07.

---

## Callout: Done Is Better Than Perfect

You could spend weeks polishing. Resist the urge.

Ship now. Iterate later.

Real users give you feedback better than any audit tool. Deploy, then refine based on what people actually do on your site.

---

## Tip: Create a Quality Checklist

Before every deployment, run through this:
1. Performance check
2. SEO check
3. Content check
4. Link check
5. Mobile test
6. Form test

It takes 10 minutes. It prevents disasters.

---

## After This Module

Your site has been thoroughly audited. It's fast, accessible, and professional.

You're ready to launch.

Next module: deploy to the internet.

See you in Module 07.
