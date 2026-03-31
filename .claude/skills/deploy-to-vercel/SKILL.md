# Skill: Deploy to Vercel

**Purpose:** Guide users through the complete GitHub → Vercel deployment pipeline to take their website live.

**Audience:** Business professionals who have built a website using Claude Code + Manus and are ready to deploy.

**Use this skill when:**
- User is ready to deploy their website for the first time
- User wants to understand the deployment process before going live
- User needs to redeploy after making changes
- User wants to set up a custom domain
- User is troubleshooting deployment issues

---

## Overview

Deploying to Vercel is the final step before your site goes live. This skill walks you through:

1. **Preparing your code** - Initialize git, create proper .gitignore
2. **Publishing to GitHub** - Create a repository and push your code
3. **Connecting to Vercel** - Link GitHub and set up deployment
4. **Configuring your site** - Add environment variables, set up domains
5. **Pre-launch checklist** - Verify everything works before going live

No previous experience with Git or command-line tools required. We'll guide you through each step.

---

## The Deployment Pipeline

```
Your Local Files
    ↓
Git Repository
    ↓
GitHub
    ↓
Vercel (Auto-deploys)
    ↓
Live Website
```

Every time you push changes to GitHub, Vercel automatically rebuilds and redeploys your site. This means updates go live in seconds without any manual steps.

---

## Step 1: Prepare Your Code

### What is Git?

Git is a tool that tracks changes to your files. Think of it like version control for documents — you can see what changed, who changed it, and revert to previous versions if needed.

### Initialize a Git Repository

Open your terminal in your project directory and run:

```bash
git init
```

This creates a hidden `.git` folder that tracks all your files.

### Create a .gitignore File

Some files shouldn't be uploaded to GitHub (passwords, API keys, node_modules, etc.). Create a `.gitignore` file in your project root with this content:

```
# Dependencies
node_modules/
.env
.env.local
.env.*.local

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp

# Build output
dist/
build/
.next/

# Logs
npm-debug.log*
yarn-debug.log*
```

### Stage Your Files

Tell Git which files to track:

```bash
git add .
```

### Create Your First Commit

A commit is a snapshot of your code at a point in time. Create your first one:

```bash
git commit -m "Initial commit: First version of website"
```

**Commit message tips:**
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Be descriptive: "Add contact form validation" is better than "fixed stuff"
- Keep it under 50 characters when possible

---

## Step 2: Create a GitHub Repository

GitHub is where your code lives online. Multiple team members can work on it, and it integrates with Vercel for automatic deployments.

### Prerequisites

You'll need:
- A GitHub account (free at https://github.com)
- GitHub CLI (`gh`) installed and authenticated
- SSH key set up with GitHub (see references/github-setup.md for detailed instructions)

### Create Repository via CLI

The easiest way is using the GitHub CLI:

```bash
gh repo create your-site-name --source=. --remote=origin --push
```

Replace `your-site-name` with something memorable (e.g., "acme-corp-website", "sarah-portfolio").

**What this does:**
- Creates a public repository on GitHub
- Adds GitHub as a "remote" (linked location)
- Pushes your local commits to GitHub

### Verify It Worked

Visit `https://github.com/your-username/your-site-name` in your browser. You should see your files listed there.

---

## Step 3: Connect to Vercel

Vercel watches your GitHub repository. Every time you push code, Vercel automatically builds and deploys your site.

### Method A: Using Vercel CLI (Recommended for Developers)

If you have Node.js installed:

```bash
npm i -g vercel
vercel
```

Follow the prompts:
- Log in with your GitHub account
- Link to your GitHub repository
- Vercel will auto-detect your site type and settings

### Method B: Manual Setup (Recommended for Non-Technical Users)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"
5. Configure project settings (see next section)

---

## Step 4: Configure Your Vercel Project

### Detect Project Type Automatically

Vercel auto-detects your site type:
- **Static HTML** - Simple HTML/CSS/JS sites
- **Vite** - Modern JavaScript framework sites
- **Next.js** - Full-stack React applications

If you're unsure, ask in your project setup notes.

### Create vercel.json

For custom configurations, create a `vercel.json` file in your project root. Choose based on your site type:

#### For Static HTML Sites

```json
{
  "public": ".",
  "buildCommand": "echo 'No build needed'",
  "outputDirectory": "."
}
```

#### For Vite Sites

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Commit this file to Git:

```bash
git add vercel.json
git commit -m "Add Vercel configuration"
git push
```

### Set Environment Variables

If your site uses APIs (like Resend for emails), add the API key to Vercel:

1. Go to your project on Vercel: https://vercel.com/dashboard
2. Click your project name
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name:** `RESEND_API_KEY` (or other variable name)
   - **Value:** Your actual API key
   - **Environments:** Select Production, Preview, Development

**Important:** Never commit API keys to GitHub. Always use environment variables.

---

## Step 5: Configure Custom Domain (Optional)

Your site gets a free Vercel domain (`your-site.vercel.app`), but you can add a custom domain.

### Add Domain to Vercel

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `www.acmecorp.com`)

### Update DNS Records

This depends on where you bought your domain. Vercel will show you the exact DNS records to add. Common providers:
- GoDaddy, Namecheap, Google Domains, etc.

**Typical steps:**
1. Log into your domain registrar
2. Find "DNS Settings" or "Name Servers"
3. Add the records Vercel shows you
4. Wait 24-48 hours for DNS to propagate

If this is confusing, contact your domain registrar's support — they handle this all the time.

---

## Step 6: Pre-Launch Checklist

Before your site goes live, run through this checklist to catch any issues:

### Content & Links
- [ ] All pages render correctly (no broken layouts)
- [ ] All internal links work and go to correct pages
- [ ] External links open in a new tab (target="_blank")
- [ ] No placeholder text remains ("Add your content here", "TODO", etc.)

### Branding & SEO
- [ ] Page titles are unique and descriptive (browser tab shows proper titles)
- [ ] Meta descriptions are present and compelling (what shows in Google search results)
- [ ] Favicon is set (small icon in browser tab)
- [ ] Open Graph tags are set (what shows when shared on social media)
- [ ] Company logo displays correctly on all pages

### Forms & Interactions
- [ ] Contact forms submit successfully
- [ ] Form validation works (catches empty required fields)
- [ ] Form success message appears after submission
- [ ] Email notifications are received (if configured)

### Images & Media
- [ ] All images load quickly (no broken image icons)
- [ ] Images are properly sized (not stretching or pixelating)
- [ ] Videos play correctly (if any)
- [ ] Dark mode works (if implemented)

### Security & Performance
- [ ] SSL certificate is active (green lock icon in browser)
- [ ] Site loads in under 3 seconds
- [ ] No console errors (open browser DevTools → Console)
- [ ] Form data is encrypted if collecting sensitive info

### Analytics & Tracking
- [ ] Google Analytics is installed and working (if configured)
- [ ] Conversion tracking is set up (if configured)
- [ ] Email notification list is working (if configured)

See `references/deploy-checklist.md` for detailed testing instructions and common issues.

---

## Step 7: Go Live

Once everything passes the checklist:

1. **Update your domain** (if using custom domain, verify DNS is set up)
2. **Test from a different device** (phone, tablet, coworker's computer)
3. **Announce your launch** (email, social media, etc.)

Your site is now live and will automatically redeploy whenever you push code to GitHub.

---

## Making Updates After Launch

After your site goes live, you can make updates quickly:

### The Standard Update Workflow

```bash
# 1. Make changes in your code editor
# 2. Stage your changes
git add .

# 3. Create a commit
git commit -m "Update hero section copy"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys (usually within 30 seconds)
```

Go to your Vercel dashboard to watch the deployment. Once it shows "Ready", your changes are live.

### Use the site-updater Skill

For non-developers or frequent updates, use the **site-updater** skill to make changes without touching the command line. You can describe changes in plain English, and the skill handles the technical work.

---

## Troubleshooting

### Build Fails on Vercel

**The problem:** Vercel shows a build error, but the site works locally.

**Solutions:**
1. Check your `vercel.json` is correct for your site type
2. Ensure all imports and file paths are correct (case-sensitive on Linux)
3. Make sure all dependencies are in `package.json`
4. Check environment variables are set in Vercel settings

### Custom Domain Not Working

**The problem:** Your custom domain shows an error or doesn't point to the site.

**Solutions:**
1. Verify DNS records in your domain registrar match what Vercel shows
2. Wait 24-48 hours for DNS propagation (sometimes longer)
3. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
4. Try from a different network (sometimes ISP caching interferes)

### Forms Not Submitting

**The problem:** Contact form works locally but fails when deployed.

**Solutions:**
1. Check that your form handler/API endpoint is configured
2. Verify environment variables (like API keys) are set in Vercel
3. Check browser console for error messages (right-click → Inspect → Console)
4. If using Resend, verify API key is correct and has permission to send

### Site Shows Outdated Content

**The problem:** You pushed changes but the live site hasn't updated.

**Solutions:**
1. Verify your push succeeded: `git log` should show your commit
2. Check Vercel dashboard — is a deployment in progress?
3. Clear browser cache (Ctrl+Shift+Delete)
4. Wait 30-60 seconds for deployment to complete

### 404 Errors on Deploy Preview

**The problem:** Preview deployments show 404 errors but production works.

**Solutions:**
1. Check your `vercel.json` output directory is correct
2. Verify file paths are case-sensitive (index.html not INDEX.html)
3. Ensure all assets are being copied to the build output

---

## Quick Reference: Git Commands

Once you're comfortable, here are the commands you'll use most:

```bash
# Check status of your changes
git status

# See your commit history
git log --oneline

# Stage all changes
git add .

# Commit with a message
git commit -m "Your message here"

# Push to GitHub (triggers Vercel deploy)
git push

# Pull latest from GitHub
git pull
```

---

## Next Steps

1. **Follow the references** - Start with `references/github-setup.md` if you're new to GitHub
2. **Deploy your first version** - Use this skill to get your site live
3. **After launch, use site-updater** - For ongoing changes and maintenance

---

## Additional Resources

- **GitHub Setup:** `references/github-setup.md` - Detailed GitHub account setup and SSH keys
- **Vercel Setup:** `references/vercel-setup.md` - Vercel account and domain configuration
- **Pre-Launch Checklist:** `references/deploy-checklist.md` - Complete testing checklist before going live
- **site-updater Skill:** For making changes to your live site after deployment

---

## Support

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Review the reference documents for your specific setup
3. Check error messages in the Vercel dashboard (most informative)
4. Visit Vercel docs: https://vercel.com/docs

This deployment process is the same one used by millions of websites. You've got this!
