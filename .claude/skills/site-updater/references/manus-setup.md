# Manus Setup Guide: Website Maintenance Chatbot Integration

This guide helps you set up Manus as a chatbot that maintains your website for non-technical team members. With Manus, anyone on your team can request website updates through natural conversation—no coding knowledge required.

## What is Manus?

Manus is an AI chatbot platform that integrates with your GitHub repository. It allows you to:
- Chat naturally about website updates ("Change our phone number to 555-0123")
- Have Manus make code changes automatically
- Review and approve updates before they go live
- Keep your website current without technical expertise

Manus is ideal for business team members who want to update content but don't want to learn Git or code editors.

---

## Prerequisites

Before setting up Manus, you need:
1. A GitHub repository for your website (created during the deploy-to-vercel process)
2. A GitHub Personal Access Token (PAT) with permissions to read and write code
3. A Manus account (free tier available)

---

## Step 1: Create a GitHub Personal Access Token

Your GitHub Personal Access Token is like a password that Manus uses to access and modify your repository. Here's how to create one:

### Creating the Token

1. Go to https://github.com/settings/tokens/new
2. You'll see a form titled "New personal access token"
3. Fill in these fields:
   - **Token name:** Something descriptive like "Manus Website Updates"
   - **Expiration:** Select "No expiration" (or choose your preferred duration)
4. Under **Select scopes**, check these boxes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
5. Scroll to the bottom and click **Generate token**
6. **Important:** Copy the token immediately and save it somewhere safe (like a password manager or secure note)
   - Once you leave this page, GitHub won't show it again
   - You'll need this token in the next step

### Keeping Your Token Safe

- Never share your token in emails, chat, or publicly
- Never commit it to your repository
- Treat it like a password
- If you accidentally expose it, go back to https://github.com/settings/tokens and delete it immediately, then create a new one

---

## Step 2: Create a Manus Account

1. Visit https://manus.ai (or your organization's Manus instance)
2. Click **Sign Up** or **Create Account**
3. Use your work email address
4. Complete the account setup

---

## Step 3: Set Up Your Manus Project

### Connect to Your Repository

1. In Manus, click **New Project** or **Create Project**
2. Choose **GitHub** as your repository source
3. You'll be prompted to authorize Manus to access GitHub
   - Click **Authorize** and log in with your GitHub account
4. Select your website repository from the list
5. Paste your Personal Access Token when prompted
6. Click **Connect** to complete the connection

### Configure Project Settings

1. Give your project a name (e.g., "Website Updates")
2. Select the main branch (usually `main`)
3. Choose your site type:
   - **Static HTML Site** - If your site is pure HTML/CSS/JavaScript
   - **Vite Project** - If your site uses Vite build tool
4. Set up file paths:
   - **Content directory:** Where your HTML/content files are stored
   - **Assets directory:** Where images and media files are stored

---

## Step 4: Write Custom Instructions with Brand Guidelines

Custom instructions tell Manus how to understand your business and make appropriate updates. This is crucial for maintaining consistency and preventing mistakes.

### Creating the Instructions

1. In your Manus project, go to **Settings** → **Custom Instructions**
2. Click **Add Instructions**
3. Write clear guidelines covering:

### Example Custom Instructions

```
# Brand and Business Context

## Company Information
- Company name: [Your Company Name]
- Industry: [Your Industry]
- Primary audience: [Who you serve]

## Website Purpose
[Brief description of what your website does]

## Key Brand Elements
- Logo location: /images/logo.png
- Primary color: [color code]
- Font family: [font name]
- Tone: [professional/friendly/creative/etc]

## Content Guidelines

### Pages and Their Purpose
- Home page: Introduces the business
- About page: Shares company story and values
- Services page: Lists offerings with descriptions
- Contact page: Contact form and location info
- Blog: Articles sharing expertise

### Contact Information
- Phone: [your phone]
- Email: [your email]
- Address: [your address]
- Business hours: [hours]

### Prohibited Changes
Never change these without explicit approval:
- Company name or legal entity information
- Pricing (always verify with finance team first)
- Legal disclaimers or terms of service
- OAuth credentials or API keys
- Navigation structure

### Common Update Patterns

When someone asks to "update the about page," assume they want to update the main content section while keeping the header, footer, and navigation unchanged.

When someone asks to "add a blog post," create it in the /posts directory with frontmatter containing: title, date, author, and summary.

When updating contact information, update ALL instances (contact page, footer, about page).

### File Structure
[Describe your site's folder structure]

Example:
- /index.html - Homepage
- /about.html - About page
- /services.html - Services page
- /contact.html - Contact page
- /css/ - Stylesheets
- /images/ - Logo, photos, graphics
- /blog/ - Blog posts

### Review Process
Always ask for approval before committing changes:
1. Show what will change
2. Get explicit approval
3. Create the branch and pull request
4. Wait for review and approval
5. Merge and deploy

## Update Approval Requirements
- Changes to pricing require finance team approval
- Changes to legal text require legal team review
- Changes to marketing claims require marketing director approval
```

### Tips for Good Instructions

- **Be specific:** "Update the phone number on the contact page and in the footer" instead of "Update contact info"
- **Clarify restrictions:** "Don't change page URLs without IT approval" prevents broken links
- **Provide context:** "Our company serves small businesses, so tone should be approachable" helps Manus understand your brand
- **List locations:** "Contact info appears in 3 places: contact page, footer, header" ensures consistency
- **Define roles:** "Only the marketing director can approve homepage changes" sets clear approval rules

---

## Step 5: Set Up GitHub Integration

### Configure Merge Strategy

1. Go to **Settings** → **GitHub Integration**
2. Set your merge strategy:
   - **Create Pull Request:** Manus creates a PR for review (recommended for most teams)
   - **Direct commit:** Manus commits directly to main (only for trusted environments)
3. Set auto-merge options:
   - Require approval before merging
   - Automatic merge after approval (if desired)
4. Configure deployment:
   - Choose when to deploy (immediate after merge, or manual trigger)

### Set Review Requirements

1. In GitHub, go to your repository **Settings** → **Branches**
2. Find your main branch rules
3. Require at least 1 approval before merging
4. Add required status checks for build tests (if you have them)

---

## Step 6: Create Example Prompts

Share these example prompts with your team so they know how to ask Manus for updates:

### Content Updates

"Change the phone number on the contact page to 555-0123 and update it in the footer too"

"Update the home page hero section. New text: 'We help small businesses succeed with powerful marketing tools'"

"Add a new team member to the about page: Sarah Johnson, Marketing Manager"

### Blog Posts

"Add a blog post titled 'Five Marketing Tips for Startups' with this content: [paste content here]. Use today's date."

### Images

"Replace the home page hero image with this new image: [attach file]. Keep the same size and position."

### Contact Information

"Update all instances of our old address '123 Main St' to the new address '456 Oak Ave, Suite 100'"

### Services/Pricing

"Add a new service called 'Social Media Management' with description: 'We manage your social media accounts, create content, and track engagement.' Price: $500/month"

---

## Step 7: Troubleshooting Common Issues

### Issue: "Permission denied" error

**Cause:** The Personal Access Token has incorrect permissions or has expired

**Solution:**
1. Go to https://github.com/settings/tokens
2. Find your Manus token
3. Check that `repo` and `workflow` scopes are selected
4. If it looks wrong or expired, delete it and create a new one
5. Update the token in Manus settings

### Issue: "Build failed" or "Vercel deployment failed"

**Cause:** Manus made a change that broke the build (syntax error, missing file, etc.)

**Solution:**
1. Check the pull request on GitHub to see what changed
2. Look at the build logs to find the error
3. Either:
   - Reject the pull request and ask Manus to fix it
   - Manually fix the error and merge
4. Common fixes:
   - Missing closing tags in HTML
   - Mismatched quotes in code
   - Missing files referenced in CSS or JavaScript

### Issue: "Merge conflict"

**Cause:** Multiple people changed the same file at the same time

**Solution:**
1. Go to the pull request on GitHub
2. Click **Resolve conflicts**
3. GitHub will show you the conflicting sections
4. Choose which version to keep or combine them
5. Mark as resolved
6. Merge the pull request

### Issue: Manus made an unexpected change

**Cause:** Custom instructions weren't clear enough, or Manus misunderstood the request

**Solution:**
1. Don't merge the pull request
2. Request changes on the PR with clearer instructions
3. Update your custom instructions to prevent similar misunderstandings
4. Examples:
   - "Only update the text in the main content area, not the navigation"
   - "Keep the page layout exactly the same"
   - "This change requires manager approval before proceeding"

### Issue: Can't find files to update

**Cause:** Manus doesn't know where your files are located

**Solution:**
1. Update custom instructions with your exact file structure
2. Include full paths: "/pages/about.html" not just "about page"
3. Describe the folder organization clearly

---

## Best Practices for Non-Technical Users

### Before Requesting Changes

1. **Know exactly what you want changed**
   - Don't: "Make the site look better"
   - Do: "Change the hero image on the home page to company-team-photo.jpg"

2. **Be specific about locations**
   - Don't: "Update the address"
   - Do: "Update the address on the contact page, footer, and about page to 456 Oak Ave"

3. **Provide exact text**
   - Copy and paste the exact current text you want to change
   - Provide the exact new text you want

4. **Attach images or files**
   - Upload the file through Manus
   - Describe the size and placement clearly

### During the Update Process

1. **Review the preview**
   - Manus will show you what changes it will make
   - Read through carefully before approving
   - Look for typos, formatting, and correct placement

2. **Ask questions if unsure**
   - "Does this look right?" is perfectly acceptable
   - "Will this break anything?" can be asked before approval

3. **Approve or request changes**
   - Approve if it looks good
   - Request changes if something isn't right (be specific about what)

4. **Monitor the merge and deployment**
   - Manus will merge to GitHub after approval
   - Your website will update automatically
   - Check your live website to verify the change worked

### Common Update Workflows

**Scenario 1: Updating contact information**
```
You: "Update the phone number on our contact page from 555-0100 to 555-0123. 
      Also update it in the footer where it says 'Call us at 555-0100'."

Manus shows you:
- Contact page: phone changed from 555-0100 to 555-0123
- Footer: phone changed from 555-0100 to 555-0123

You: "Looks perfect! Approve."

Result: Changes are merged and website updates automatically.
```

**Scenario 2: Adding a blog post**
```
You: "Add a new blog post with:
      Title: Why Customer Service Matters
      Date: March 30, 2026
      Author: Jane Smith
      Content: [paste your article text here]"

Manus shows you:
- New file created: /blog/customer-service.md
- Post content displayed
- Post will appear on blog page

You: "Approve."

Result: New blog post appears on your website.
```

**Scenario 3: Updating team member**
```
You: "Add a new team member to the about page:
      Name: Michael Chen
      Title: Lead Developer
      Photo: michael-chen.jpg
      Bio: Michael brings 10 years of experience building web applications."

Manus shows you:
- New team member card added
- Position on page
- Photo and text displayed

You: "Approve."

Result: Michael appears on your team page.
```

---

## Approving and Testing Changes

### The Review Process

1. **Manus creates a pull request** with the proposed changes
2. **You review** what will change on your website
3. **You approve** if it looks good, or **request changes** if something is wrong
4. **Manus merges** the changes to your main branch
5. **Vercel auto-deploys** your website
6. **You verify** the live website shows the changes correctly

### Testing After Deployment

After Manus merges changes, spend 2-3 minutes checking:

- **Visual check:** Does the page look right? Are colors, spacing, and layout correct?
- **Content check:** Is the new text correct? No typos? Formatting looks good?
- **Link check:** Do any new links work? Are old links still working?
- **Image check:** Do images load? Are they the right size?
- **Mobile check:** Does it look good on phone and tablet?

If something is wrong:
1. Go back to the Manus pull request
2. Click **Revert** to undo the changes
3. Explain what went wrong
4. Request changes and try again

---

## Security and Permissions

### Who Should Have Access?

- **Manus account access:** Team members who will request updates
- **GitHub repository access:** Keep it limited to developers and team leads
- **Approval permissions:** Team leads and managers who verify changes

### Protecting Your Repository

- **Never share** the Personal Access Token
- **Rotate tokens** periodically (every 90 days is good practice)
- **Review changes** before approving (don't approve blindly)
- **Monitor deployments** to catch mistakes early

### If Your Token Is Compromised

1. Immediately go to https://github.com/settings/tokens
2. Delete the compromised token
3. Create a new Personal Access Token
4. Update the token in Manus settings
5. Review recent changes in your GitHub repository history

---

## When Manus Can't Help

Manus is great for content updates but has limitations. These tasks still need a developer:

- Adding new pages with complex layouts
- Fixing broken builds or deployment errors
- Changing navigation structure
- Installing new packages or dependencies
- Updating security credentials
- Performance optimization
- SEO improvements beyond basic title/description changes

For these tasks, contact your development team.

---

## Summary

With Manus set up, your non-technical team members can:
- Request website updates in natural conversation
- See what will change before approval
- Get updates deployed within minutes
- Keep your website current without learning code

The key to success is clear custom instructions that help Manus understand your business, combined with a thoughtful review process that catches mistakes before they go live.
