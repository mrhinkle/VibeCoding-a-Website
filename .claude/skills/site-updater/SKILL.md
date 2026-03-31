# Skill: Site Updater

**Purpose:** Make updates to your live website quickly and easily, whether you're technical or not.

**Audience:** Business professionals who need to update their website after launch without diving into code.

**Use this skill when:**
- You need to change text on your site
- You want to update images or branding
- You need to add a new page
- You want to add a blog post (if applicable)
- You need to fix an urgent issue (broken form, wrong phone number)
- You're doing seasonal content updates
- You want to add new products/services to your portfolio

---

## Overview

This skill has **two modes** depending on how comfortable you are with technology:

### Mode 1: Claude Code (Developer-Adjacent Users)

You describe what you want to change in plain English. The skill:
1. Identifies the correct files to edit
2. Makes the changes
3. Tests the changes locally
4. Commits to GitHub and pushes
5. Vercel automatically redeploys (takes 30-60 seconds)
6. Shows you a summary of what changed

**Best for:** People who've used Claude Code before or don't mind a simple terminal.

### Mode 2: Manus Integration (Non-Technical Users)

You chat with Manus (AI chatbot) in plain English like you're texting a team member. Manus:
1. Clones your repository
2. Makes changes you describe
3. Tests them
4. Commits and pushes to GitHub
5. Your site auto-updates
6. Sends you a confirmation

**Best for:** Non-technical business people who want the easiest possible process.

---

## Mode 1: Claude Code Updates

### Prerequisites

Before using this mode, you'll need:
- Your GitHub repository set up (from deploy-to-vercel skill)
- Git and GitHub CLI working
- A text editor (VS Code, Sublime Text, etc.)

### The Update Workflow

Here's how to make updates using Claude Code:

#### Step 1: Describe What You Want to Change

Tell Claude Code exactly what you want to change:

**Examples:**
- "Change the hero headline from 'Welcome to XYZ' to 'Transform Your Business with XYZ'"
- "Update the team member photo for Sarah and change her title to 'VP of Operations'"
- "Fix the contact form email address from sales@old.com to sales@new.com"
- "Add a new testimonial from John Smith saying 'This product changed our workflow'"
- "Change the pricing from $99/month to $149/month and update the description"

**Bad example:** "Update the website" (too vague)
**Good example:** "Update the Services page, change 'Web Design' service description to mention AI-powered features"

#### Step 2: Claude Code Finds the Files

Claude Code will:
1. Identify which files contain the text you want to change
2. Show you the current content
3. Propose the new content
4. Ask for your approval before making changes

#### Step 3: Review and Approve

Look at the proposed changes:
- Does it match what you asked for?
- Is the new text correct?
- Are there any typos?

If good, approve. If not, ask for changes.

#### Step 4: Automated Testing

Claude Code runs quality checks:
- **Link Checker:** Verifies all links still work
- **Content Auditor:** Checks for broken images, missing files
- **Syntax Check:** Ensures no code errors (if editing code)

If checks fail, you'll see what's wrong and can fix it.

#### Step 5: Commit and Push

Claude Code commits the changes with a clear message:

```
Update hero section headline
- Changed from "Welcome to XYZ" to "Transform Your Business with XYZ"
```

Pushes to GitHub → Vercel sees the change → Auto-deploys your site (30-60 seconds)

#### Step 6: See the Summary

Claude Code shows you:
- Files that changed
- Before/after comparison
- URL to check the live result (usually vercel.app link while deployment is in progress)

### File Types and How to Update Them

#### HTML Files (.html)

For static sites, pages are usually `.html` files in your root directory or folders.

**To change text:**
```html
<!-- BEFORE -->
<h1>Welcome to Our Company</h1>

<!-- AFTER -->
<h1>Transform Your Business Today</h1>
```

**To change images:**
```html
<!-- BEFORE -->
<img src="images/old-photo.jpg" alt="Our team">

<!-- AFTER -->
<img src="images/new-photo.jpg" alt="Our team">
```

Tell Claude Code: "Change the hero image from old-photo.jpg to new-photo.jpg"

#### CSS Files (.css)

Colors, spacing, fonts — usually in a `style.css` or folder like `css/main.css`

Tell Claude Code color changes naturally:
- "Make the header background darker"
- "Make the buttons bigger"
- "Change the primary color from blue to green"

Claude Code handles the CSS details.

#### JSON/Config Files

Some sites use JSON files for content (common with Vite and Next.js).

Tell Claude Code: "Update the services list to add 'AI Automation'"

#### Markdown Files (.md)

Blog posts, pages, content — often in `.md` format.

Tell Claude Code: "Update the blog post about company values with new statement"

### Common Update Examples

#### Change Text on a Page

```
User: "Change the 'About Us' section heading from 'Who We Are' to 'Meet the Team Behind the Mission'"

Claude Code:
1. Finds the about.html or similar file
2. Shows: <h2>Who We Are</h2>
3. Proposes: <h2>Meet the Team Behind the Mission</h2>
4. You approve
5. Commits "Update About section heading"
6. Site redeploys
```

#### Update a Price

```
User: "Update the Basic plan price from $29/month to $39/month on the pricing page"

Claude Code:
1. Finds pricing.html or pricing data
2. Shows: "$29/month"
3. Proposes: "$39/month"
4. You approve
5. Commits "Update pricing: Basic plan"
6. Site redeploys
```

#### Replace an Image

```
User: "Replace the hero image with the new 2025 brand image we just created"

Claude Code:
1. Finds the hero image file name (hero.jpg, banner.png, etc.)
2. Shows the current file
3. Asks you to provide the new image file
4. Updates the reference
5. Tests that image loads
6. Commits "Update hero image"
7. Site redeploys
```

#### Update Contact Information

```
User: "Update the phone number from 555-0100 to 555-0101 everywhere on the site"

Claude Code:
1. Searches all files for the old number
2. Shows everywhere it appears
3. Proposes updating all instances
4. You review and approve
5. Commits "Update contact phone number"
6. Site redeploys
```

### Troubleshooting in Mode 1

#### "Changes didn't go live"

1. Check Vercel dashboard: Is deployment in progress?
2. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Check browser console (F12 → Console) for errors
4. Wait 60 seconds for deployment to complete

#### "I see an error in the browser console"

1. Screenshot the error
2. Ask Claude Code to investigate
3. Usually quick to fix (missing file, typo in code, etc.)

#### "Image isn't showing"

1. Verify the image file exists in your project
2. Check the filename spelling (case-sensitive on servers)
3. Verify the path is correct: `images/filename.jpg` not `Images/filename.jpg`

---

## Mode 2: Manus Integration (Non-Technical Updates)

Manus is a chatbot you can set up to update your website. It works like texting a team member.

### Prerequisites

- Your GitHub repository set up (from deploy-to-vercel skill)
- A Manus account (free tier available)
- GitHub Personal Access Token created (see references/manus-setup.md)

### How It Works

1. You have a Manus conversation going
2. You describe what to change: "Update the hero headline to 'Build Better Websites'"
3. Manus clones your repo, makes the change, tests it, commits, and pushes
4. Vercel auto-deploys (30-60 seconds)
5. Manus confirms: "Done! Your site has been updated and deployed."

### Setting Up Manus

See `references/manus-setup.md` for the complete setup guide. Summary:

1. Create a Manus account at https://trymanus.com (or your Manus provider)
2. Create a new project/conversation
3. Load your brand guidelines as custom instructions
4. Provide GitHub credentials (Personal Access Token, not password)
5. Start chatting about updates

### Common Manus Update Requests

You can describe updates naturally. Here are examples:

#### Text Updates

```
You: "Update the Services section - change 'Web Design' to 'Web Design & AI Integration'"

Manus: "I've updated the Services section. Your site is deploying now."
```

#### Image Updates

```
You: "Replace the team photo with the new one we shot last week. It's on our shared drive as team-2025.jpg"

Manus: "I've added the new team photo and updated all references. Live now!"
```

#### Adding New Content

```
You: "Add a new case study for our Acme Corp project"

Manus: "I'm adding the case study. Can you provide:
- Project name and description
- Results/outcomes
- Client testimonial (optional)
- Images (optional)"

You: "Project: Acme Corp Website Redesign
Results: 45% increase in conversions, 30% faster load times
Testimonial: 'This team exceeded our expectations' - Sarah Smith, CEO"

Manus: "Added! The case study is live on your site."
```

#### Seasonal Updates

```
You: "It's Q2 now. Update any Q1 content references to Q2, and update the current season to Spring"

Manus: "Found 3 instances of Q1 and updated to Q2. Seasonal references updated to Spring. Live now!"
```

### Library of Update Examples

Here are common requests you can adapt:

**Text Changes:**
- "Update the tagline from '___' to '___'"
- "Change the description of our [Service] to emphasize [Feature]"
- "Update our company mission to [New Mission]"
- "Add a note about our [Certification/Award]"

**Contact Info:**
- "Update our phone number to [New Number]"
- "Change the office address to [New Address]"
- "Add a new email contact for [Department]"

**Products/Services:**
- "Update [Product] pricing from [Old] to [New]"
- "Add a new feature to [Product]: [Feature Description]"
- "Change [Product] description to emphasize [Benefit]"

**Branding:**
- "Update company name references from [Old] to [New]"
- "Replace all instances of the old logo with the new one"
- "Update social media links to [New Links]"

**Announcements:**
- "Add an announcement banner: '[Message]'"
- "Create a popup saying [Text] that appears on page load"
- "Add an 'Out of Office' notice from [Date] to [Date]"

**Team Updates:**
- "Add a new team member: [Name], [Title], [Photo]"
- "Update [Team Member]'s title to [New Title]"
- "Remove [Team Member] from the team page"

**Emergency Fixes:**
- "Fix the broken contact form - it's not submitting"
- "The phone number on the homepage is wrong - it should be [Correct Number]"
- "One of our logo images isn't displaying - can you check?"

### What Manus Can and Can't Do

**Manus Can:**
- Update text, headings, descriptions
- Replace images
- Fix broken links
- Update contact information
- Add new pages (with structure)
- Fix formatting and styling
- Update metadata (titles, descriptions, meta tags)
- Add new blog posts or case studies

**Manus Can't (Without Help):**
- Design complex new features from scratch
- Set up new integrations or APIs
- Create entirely new sections that require custom code
- Modify the core site architecture

For those, ask Manus for advice on what's needed, or use Mode 1 (Claude Code).

---

## Adding New Pages

Both modes can add new pages to your site. Here's how:

### Simple New Page (HTML Site)

**You say:**
"Create a new page called 'Testimonials' with a title 'What Our Customers Say' and add 3 testimonial quotes from [names] saying [quotes]"

**Claude Code / Manus:**
1. Creates `testimonials.html` or `testimonials.md`
2. Adds the page to your site navigation
3. Creates the testimonial layout
4. Tests that the new page works
5. Commits and deploys

### Blog Post Addition

**You say:**
"Add a new blog post titled 'Tips for [Topic]' published on March 30, 2025. Content: [Your blog post text]"

**Claude Code / Manus:**
1. Creates the blog post file
2. Adds it to the blog listing
3. Updates the blog index/feed
4. Commits and deploys

---

## Updating Images

### Upload a New Image

**You say:**
"Update the hero image - I have a new one at /Users/me/Downloads/hero-2025.jpg"

**Claude Code:** 
1. Asks for the file
2. Copies it to your `images/` folder
3. Updates references to use the new file
4. Tests it displays correctly
5. Commits and deploys

**Manus:**
1. Provides upload instructions
2. Moves the image to the right folder
3. Updates references
4. Commits and deploys

### Generate New Images

**You say:**
"Create a new hero image with the text 'Welcome to Acme Corp' - let's use our brand colors (blue and gold)"

**Process:**
1. Use the "brand-to-images" skill to generate images via Claude Code + Manus/Nano Banana
2. Once you have images, use this skill to add them to your site

(See separate documentation for the brand-to-images workflow)

---

## Handling Forms After Updates

### Contact Form Stopped Working

If your contact form breaks after an update:

1. Tell Claude Code / Manus: "Our contact form isn't submitting anymore"
2. They'll check:
   - Form HTML is correct
   - API endpoint is configured
   - Environment variables are set
   - Verify with Vercel dashboard

Usually caused by:
- Accidentally deleted form HTML
- Wrong API key in environment variables
- Form handler not deployed

### Email Confirmations Not Sending

If users don't get confirmation emails:

1. Verify Resend API key is set in Vercel
2. Check Resend dashboard for errors
3. Verify email address is correct in form config

---

## Emergency Fixes

Fast-track urgent issues:

**You say:**
"Emergency: The phone number on our homepage is wrong. It says 555-0100 but should be 555-0999. Fix it now."

**What Happens:**
1. Claude Code / Manus prioritizes the fix
2. Updates the number everywhere
3. Commits and pushes immediately
4. Site redeploys (usually 30-60 seconds)

You can describe emergency fixes for:
- Wrong contact information
- Broken forms
- Incorrect pricing or offers
- Offensive/incorrect language
- Broken critical images or links

---

## Re-running Quality Checks

After major updates, run quality checks:

**You say:**
"Run a quality check on the site - verify all links work, images load, and the contact form works"

**What Happens:**
1. Link checker scans all pages for broken links
2. Image auditor verifies all images load
3. Form tester tries submitting the contact form
4. Reports any issues found

Takes 5-10 minutes but catches issues before customers notice.

---

## Reverting Changes (Undo)

Made a mistake? Easy to revert:

**You say:**
"Revert to the version before we changed the hero headline"

**What Happens:**
1. Shows you recent commits
2. Asks which version to revert to
3. Rolls back to that version
4. Redeployments with old content
5. Takes about 60 seconds

Git tracks every change, so you can always go back.

---

## Comparing Changes

Want to see what changed between versions?

**You say:**
"Show me what changed between today's update and yesterday's version"

**What Happens:**
1. Shows side-by-side comparison
2. Highlights what was added, removed, or modified
3. Useful before approving complex changes

---

## Scheduling Updates

Want to schedule an announcement for a specific time?

**You say:**
"Schedule the spring sale announcement to go live on April 1st at 9 AM"

**What Happens:**
1. In Mode 1: Create the announcement content, then schedule git push for that time
2. In Mode 2: Manus prepares the update and schedules deployment

---

## Collaboration on Live Site

Multiple team members updating the site?

**Best practices:**
1. Use clear, descriptive commit messages: "Update pricing (Sarah)" not "Fixed stuff"
2. Communicate about major changes: "I'm updating the Services page"
3. Check Vercel deployment status before claiming something is live
4. If conflicts happen, Claude Code / Manus will alert you

---

## Analytics After Updates

Want to see if changes improved things?

**You say:**
"Check our analytics - did the new homepage headline improve bounce rate?"

**What Happens:**
1. Check Google Analytics for the date of change
2. Compare metrics before/after
3. Show you the impact

Analytics usually need 24-48 hours of data to be meaningful.

---

## Seasonal Content Updates

Keeping content current is important for SEO.

**Examples:**
- "Update all references to 'Winter' to 'Spring'"
- "Change current year from 2024 to 2025"
- "Update upcoming events from Q1 to Q2"
- "Add Easter promotion (April 20, 2025)"
- "Update holiday hours to reflect Memorial Day"

Just describe the changes naturally.

---

## Content Audit

Before launch or periodically, audit your content:

**You say:**
"Run a content audit - are there any typos, broken images, or outdated information?"

**What Happens:**
1. Scans all pages
2. Flags:
   - Spelling errors
   - Broken images
   - Dead links
   - Outdated dates
   - Inconsistent formatting
3. Shows you a list to review and fix

---

## Backup and Safety

Every commit is a backup. You can always revert.

**Your version history:**
1. Go to GitHub repository
2. Click "Commits" tab
3. See every change ever made
4. Can revert to any point

This is why we commit frequently — it's like save points in a video game.

---

## Next Steps

### To Get Started with Mode 1 (Claude Code)

1. Have your GitHub repository open
2. Describe a simple change: "Change the contact email from old@example.com to new@example.com"
3. Review the proposed changes
4. Approve and deploy

### To Get Started with Mode 2 (Manus)

1. Follow `references/manus-setup.md` to set up Manus
2. Start a conversation with Manus
3. Describe your first update: "Update the Services page heading to 'Our Services & Solutions'"
4. Manus handles the rest

---

## Troubleshooting Common Issues

### "Site hasn't updated after I made changes"

1. Check Vercel dashboard for deployment status
2. Is deployment in progress (spinning icon)?
3. Did deployment fail (red icon)?
4. Hard refresh browser (Cmd+Shift+R)
5. Wait 60 seconds and try again

### "I see 404 or broken page"

1. Verify file paths are correct (case-sensitive)
2. Check that the file wasn't accidentally deleted
3. Revert to previous version if needed
4. Check file encoding is UTF-8

### "Images aren't loading"

1. Verify image file exists in project
2. Check file path in code matches actual location
3. Verify image filename capitalization
4. Try regenerating image or uploading new one

### "Form isn't working"

1. Verify form HTML is intact
2. Check API key is set in Vercel environment variables
3. Verify form handler endpoint is correct
4. Check browser console for JavaScript errors

### "Changes disappeared"

This shouldn't happen, but if it does:

1. Check Vercel deployment status
2. Check git commit history
3. Revert to the version before issue occurred
4. Investigate what happened

---

## Best Practices

1. **Make one change at a time** - Easier to test and debug
2. **Use clear descriptions** - "Update hero headline" not "Fix stuff"
3. **Test immediately after deploy** - Catch issues quickly
4. **Keep backups** - Git tracks everything, so you can always revert
5. **Communicate updates** - Let team know what you're changing
6. **Schedule big changes** - Don't update during peak traffic times (if you notice patterns)
7. **Quality check after major updates** - Run the checklist to verify everything works

---

## Support

- **For Mode 1 issues:** Check the Troubleshooting section above
- **For Mode 2 issues:** See `references/manus-setup.md` for Manus-specific help
- **For deployment issues:** Check Vercel dashboard for error messages
- **For git issues:** See the deploy-to-vercel skill for git help

Your site is yours to control. Make updates with confidence!
