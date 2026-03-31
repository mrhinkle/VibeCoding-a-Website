# Reference: Pre-Launch Deployment Checklist

Complete this checklist before your site goes live. Each test takes 5-10 minutes.

---

## Before You Start

Have ready:
- Your staging/development site URL (the preview from Vercel)
- Your production domain (if using custom domain)
- Your actual business phone number, email, etc.
- A phone or tablet to test responsive design

---

## Part 1: Content & Pages (30 minutes)

### All Pages Load Without Errors

- [ ] Visit every page on your site in your browser
- [ ] Pages load completely (no spinning/loading indicators left behind)
- [ ] No error messages in browser console:
  - Right-click on page
  - Click "Inspect" or "Inspect Element"
  - Go to "Console" tab
  - Look for red error messages
  - If you see errors, note what they say (screenshot them)

### Text Content Quality

- [ ] No placeholder text remains:
  - [ ] No "Add your content here"
  - [ ] No "EDIT THIS"
  - [ ] No "TODO" comments
  - [ ] No "Lorem ipsum"
  - [ ] No "[Insert company description]"
- [ ] All text is spelled correctly (use browser spell-check or read carefully)
- [ ] Contact information is accurate:
  - [ ] Phone number is correct
  - [ ] Email address is correct
  - [ ] Office address is correct (if applicable)
  - [ ] Hours of operation are current
- [ ] Dates are current (no outdated information)
- [ ] Company/product names are capitalized correctly throughout

### Links Work Correctly

- [ ] Click every internal link (links to other pages on your site)
  - [ ] Each link goes to the correct page
  - [ ] No 404 errors
  - [ ] No broken anchor links (# jumps)
- [ ] Click every external link (links to outside sites)
  - [ ] Each link opens in a new tab (target="_blank")
  - [ ] External links actually work (not 404s)
  - [ ] Social media links go to correct profiles
- [ ] Test mailto links (email links):
  - [ ] Right-click, copy link
  - [ ] Verify email address is correct

### Navigation Menus

- [ ] All menu items are visible and clickable
- [ ] Menu highlights the current page
- [ ] Mobile menu (hamburger) works on phone/tablet
- [ ] No menu items are broken or cut off

---

## Part 2: Branding & SEO (20 minutes)

### Page Titles & Meta Tags

**For each page, check:**

```
1. Right-click page
2. Click "View Page Source" or "Inspect"
3. Look for <title> and <meta name="description">
```

- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a `<meta name="description">` tag
- [ ] Titles are under 60 characters (shows fully in Google search)
- [ ] Descriptions are 155 characters or less (shows fully in Google search)
- [ ] Titles and descriptions are compelling (would you click on them in Google?)

**Example of good page title & description:**
```
Title: "Professional Web Design Services | Acme Corp"
Description: "Get a stunning, high-converting website for your business. Free consultation available."
```

### Favicon

- [ ] Small icon appears in browser tab (not blank or generic)
- [ ] Icon matches your brand
- [ ] Icon displays on all pages

To check:
- [ ] Look at your browser tabs
- [ ] Your site's tab should have your logo or branded icon

### Open Graph Tags

These control what shows when someone shares your site on social media.

Check your page source for:
```html
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="URL to image">
<meta property="og:type" content="website">
```

- [ ] og:title is set (what shows as headline on social)
- [ ] og:description is set (what shows as preview text)
- [ ] og:image is set (what shows as preview image)
- [ ] og:image is a real URL that works (test by visiting the URL in browser)

### Branding Assets

- [ ] Company logo displays on all pages (usually top-left or header)
- [ ] Logo is correct version (right colors, not stretched)
- [ ] Logo links to home page
- [ ] Logo displays correctly on mobile

### Favicon Test

1. Add your site to bookmarks
2. Check the bookmark icon matches your brand
3. Delete the bookmark (we're just testing)

---

## Part 3: Forms & Interactivity (20 minutes)

### Contact Form (if you have one)

**Test form submission:**
1. Fill in all required fields with real test data
2. Submit the form
3. Check for success message on the page

- [ ] Form validates empty fields (shows error if you skip a field)
- [ ] Form validates email format (rejects "test" as email)
- [ ] Form validates phone numbers (if required)
- [ ] Submit button is clickable and shows feedback
- [ ] Success message appears after submission
- [ ] Success message is clear (user knows what happened)
- [ ] Confirmation email is sent (if configured)
- [ ] You receive notification in your email/dashboard

**If form doesn't work:**
- [ ] Check browser console for JavaScript errors
- [ ] Verify API key is set in Vercel environment variables
- [ ] Check that form handler/backend is configured correctly

### Newsletter Signup (if you have one)

- [ ] Signup form is visible and functional
- [ ] Entering email works
- [ ] Success message appears
- [ ] Confirmation email is sent (check spam folder)
- [ ] Subscriber appears in your email service (Mailchimp, Resend, etc.)

### Button Interactions

- [ ] All buttons are clickable
- [ ] Buttons show hover states (change color/style on mouseover)
- [ ] No buttons are broken or non-functional
- [ ] "Call to action" buttons are prominently visible and compelling

### Accordions/Collapsibles (if you have them)

- [ ] Clicking section headers expands/collapses content
- [ ] Content is readable when expanded
- [ ] Only one section is open at a time (or as intended)

### Modal Dialogs (if you have them)

- [ ] Clicking trigger button opens modal
- [ ] Modal content is readable
- [ ] Close button (X) works
- [ ] Clicking outside modal closes it (if intended)
- [ ] Clicking action buttons (Subscribe, Learn More, etc.) works

---

## Part 4: Images & Media (15 minutes)

### Image Loading

- [ ] All images load completely (no broken image icons)
- [ ] Images load quickly (under 2 seconds)
- [ ] Images are properly sized (not stretched, blurry, or tiny)
- [ ] No images show "Image not found" errors
- [ ] Hero/banner images look professional

### Image Quality

- [ ] Images are high resolution on large screens
- [ ] Images are properly compressed (don't impact load time)
- [ ] Images match your brand colors and aesthetic
- [ ] Team/people photos look professional

### Responsive Images

Test on phone/tablet:
- [ ] Images scale appropriately (don't overflow screen)
- [ ] Images are still readable on small screens
- [ ] No images are cut off or hidden on mobile

### Videos (if you have them)

- [ ] Videos play correctly (don't show 404 or broken player)
- [ ] Videos have thumbnails
- [ ] Video controls work (play, pause, fullscreen)
- [ ] Audio quality is good (no crackling or distortion)

### Dark Mode (if implemented)

- [ ] All content is readable in dark mode
- [ ] Images don't invert or look weird
- [ ] Text has sufficient contrast
- [ ] Dark mode toggle works

---

## Part 5: Mobile Responsiveness (15 minutes)

### Test on Real Devices

Best practice: Test on actual phone/tablet, not just browser zoom.

**Or use browser DevTools:**
1. Right-click → Inspect
2. Click device toggle button (looks like phone/tablet)
3. Select different device sizes

### Mobile Checklist

- [ ] Site is fully functional on iPhone/Android
- [ ] Text is readable without zooming
- [ ] Buttons are large enough to tap (at least 44x44 pixels)
- [ ] Forms are usable on mobile (input fields not cramped)
- [ ] Images scale properly (not huge, not tiny)
- [ ] Navigation menu works on mobile (hamburger menu opens/closes)
- [ ] No horizontal scrolling (except intentional sliders)
- [ ] Tap interactions work (hover effects should have click equivalents)

### Tablet Responsiveness

- [ ] Site looks good at iPad/tablet size
- [ ] Layout is readable (not stretched)
- [ ] Touch targets are appropriately sized

---

## Part 6: Performance (10 minutes)

### Page Load Speed

1. Open your site
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to **Network** tab
4. Reload the page
5. Check "Total" size and load time at bottom

- [ ] Page loads in under 3 seconds
- [ ] Total page size is under 5MB (ideally under 2MB)
- [ ] No "failed" requests (red items in Network tab)

### Performance Test (Optional)

1. Go to https://pagespeed.web.dev
2. Enter your site URL
3. Run test

Aim for:
- [ ] Mobile score: 70+
- [ ] Desktop score: 80+

### Check for Layout Shift

As you read the page:
- [ ] Content doesn't move around after loading
- [ ] Ads/images don't suddenly appear and push content down
- [ ] Buttons don't jump positions after page loads

---

## Part 7: Security (10 minutes)

### SSL Certificate (HTTPS)

- [ ] Site URL shows "https://" (not "http://")
- [ ] Click lock icon in browser address bar
- [ ] Shows "Secure" or "Connection is secure"
- [ ] Certificate is not expired

### Form Security

If you collect user data:
- [ ] Form submissions are over HTTPS (secure connection)
- [ ] Email fields are properly marked as email type
- [ ] Password fields (if any) are masked
- [ ] No sensitive data is visible in URLs

### Check for Script Errors

1. Open DevTools (F12)
2. Go to **Console** tab
3. Look for red error messages

- [ ] No critical errors preventing functionality
- [ ] Any warnings are non-critical

---

## Part 8: Analytics & Tracking (5 minutes)

### Google Analytics

If you implemented analytics:

1. Check your Google Analytics account
2. Visit your site, perform an action
3. Check real-time dashboard

- [ ] Analytics code is installed (check page source for GA script)
- [ ] Real-time data shows your visit
- [ ] Page views are being tracked
- [ ] Goal conversions are being tracked (if set up)

### Meta Pixels / Facebook Tracking

If you're using Meta Ads:

- [ ] Pixel ID is installed (check page source)
- [ ] Events are firing (check Meta Pixel Helper Chrome extension)

### Other Tracking

- [ ] Email signup tracking works (if configured)
- [ ] Form submission tracking works (if configured)
- [ ] Link click tracking works (if configured)

---

## Part 9: Browser Compatibility (10 minutes)

Test in multiple browsers:

- [ ] Chrome/Chromium (Windows/Mac/Linux)
- [ ] Firefox (Windows/Mac/Linux)
- [ ] Safari (Mac/iPhone)
- [ ] Edge (Windows)

For each browser:
- [ ] Site loads completely
- [ ] Styling looks correct
- [ ] All interactive features work
- [ ] Forms submit properly
- [ ] No console errors

---

## Part 10: Accessibility (5 minutes)

### Keyboard Navigation

- [ ] You can tab through all interactive elements (buttons, links, form fields)
- [ ] Tab order makes sense (follows left-to-right, top-to-bottom)
- [ ] Focused elements have visible focus indicators (usually outline)

### Screen Reader Basics

Use browser extension "Lighthouse" to check accessibility:
1. Right-click → Inspect
2. Click "Lighthouse" tab
3. Check "Accessibility" category
4. Look for any critical issues

- [ ] Lighthouse accessibility score is 80+ (aim for 90+)
- [ ] All images have alt text (right-click image, check properties)
- [ ] Headings are in proper order (H1, then H2, H3, etc.)
- [ ] Form labels are properly associated with inputs

---

## Part 11: SEO Basics (5 minutes)

### Search Engine Visibility

- [ ] Site is publicly accessible (not password protected)
- [ ] robots.txt allows indexing (usually auto-created)
- [ ] Sitemap exists (usually auto-created for static sites)
- [ ] Meta robots tag doesn't have "noindex"

To check robots.txt:
```
Visit: yourdomain.com/robots.txt
You should see something allowing index
```

### Keywords

- [ ] Page titles contain main keywords (naturally, not keyword-stuffed)
- [ ] Meta descriptions contain keywords
- [ ] Headings contain keywords
- [ ] First paragraph of body text is compelling and contains keywords

---

## Part 12: Final Smoke Tests (10 minutes)

### Fresh Browser Visit

Close all tabs and windows. Visit your site fresh:

- [ ] Site loads from URL (not localhost)
- [ ] All major features work
- [ ] No errors in console
- [ ] No warnings about security

### Incognito/Private Mode

Test in private browsing mode (Cmd+Shift+N or Ctrl+Shift+N):

- [ ] Site loads completely (tests without cached files)
- [ ] Forms work
- [ ] All content loads
- [ ] No login issues (if applicable)

### Different Networks

Test from different internet connection:
- [ ] Different WiFi network
- [ ] Mobile data connection
- [ ] Your actual network

This catches problems that only appear on certain connections.

---

## Checklist Summary

Before you mark "Ready to Launch":

**Content:** All content present, no placeholders, no typos
**Branding:** Logo, colors, fonts consistent with brand identity
**Forms:** All forms work, validation works, confirmations sent
**Links:** All internal and external links work
**Images:** All images load, properly sized, high quality
**Mobile:** Works great on phones and tablets
**Security:** HTTPS active, no sensitive data exposed
**Performance:** Loads in under 3 seconds
**Analytics:** Tracking is set up and working
**SEO:** Meta tags, titles, descriptions are in place
**Accessibility:** Keyboard navigation and screen reader basics work

---

## If Anything Fails

Don't panic. Most issues are quick to fix:

1. **Document the issue** - Screenshot it, note which browser/device
2. **Check Vercel logs** - Deployment tab shows build errors
3. **Check browser console** - DevTools → Console shows JavaScript errors
4. **Verify environment variables** - Vercel dashboard → Settings → Environment Variables
5. **Rebuild and redeploy** - Push a commit to GitHub to trigger fresh deployment

---

## Final Step: Launch!

Once everything passes:

1. **Email announcement** - Tell customers/team the site is live
2. **Share on social media** - Post the link on social profiles
3. **Celebrate** - You did it!

Your site is now live and serving customers. You can make updates anytime using the `site-updater` skill.
