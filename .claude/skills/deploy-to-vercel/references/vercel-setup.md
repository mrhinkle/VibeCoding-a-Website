# Reference: Vercel Account Setup and Configuration

This guide walks you through creating a Vercel account and connecting it to your GitHub repository for automatic deployments.

---

## Part 1: Create a Vercel Account

### Step 1: Sign Up

1. Go to https://vercel.com/signup
2. Choose "Continue with GitHub"
3. Log in to your GitHub account
4. Click "Authorize Vercel"

Vercel will create your account automatically using your GitHub identity.

### Step 2: Complete Your Profile

1. You'll land on the Vercel dashboard
2. Click your profile icon (top right)
3. Click **Settings**
4. Update if needed:
   - Name
   - Email
   - Avatar

---

## Part 2: Install Vercel CLI (Optional)

The Vercel CLI lets you deploy from the command line. This is optional — you can also deploy through the web dashboard.

### Install

If you have Node.js installed:

```bash
npm install -g vercel
```

### Verify Installation

```bash
vercel --version
```

### Authenticate

```bash
vercel login
```

Choose "Continue with GitHub" and authorize the app.

---

## Part 3: Import Your GitHub Repository

You have two options: using the web dashboard or the Vercel CLI.

### Method A: Web Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **Add New** (top left)
3. Click **Project**
4. Click **Continue with Git Repository**
5. Paste your GitHub repository URL:
   ```
   https://github.com/your-username/your-repo-name
   ```
6. Click **Continue**
7. Vercel auto-detects your framework. Click **Deploy**

Your site is now deploying! This usually takes 1-2 minutes. Once done, you get a live URL.

### Method B: Vercel CLI

From inside your project directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → "y" (yes)
- **Which scope?** → Select your personal account
- **Link to existing project?** → "n" (no, this is your first deploy)
- **What's your project's name?** → Enter your site name
- **In which directory is your code?** → Press Enter (current directory)
- **Want to override the settings?** → "n" (no)

Vercel deploys your site and shows you the URL.

---

## Part 4: Understand Vercel URLs

When you deploy, you get several URLs:

### Vercel Default URL
```
https://your-site-vercel.app
```

Free, permanent, and always works. Perfect for sharing.

### Preview URLs
```
https://your-site-xyz.vercel.app
```

Temporary URLs created for each pull request. Useful for testing changes before merging.

### Custom Domain
```
https://www.yourdomain.com
```

The professional option. Requires a domain (see Custom Domain section below).

---

## Part 5: Configure Project Settings

### Access Project Settings

1. Go to https://vercel.com/dashboard
2. Click your project
3. Click **Settings** (top navigation)

### General Settings

**Project Name:** Used in the URL and dashboard
**Framework Preset:** Usually auto-detected (Next.js, Vite, Static, etc.)
**Root Directory:** Where your code is (usually "." for current directory)

### Build & Development Settings

**Build Command:** What runs to build your site
- Static HTML: `npm run build` or leave blank
- Vite: `npm run build`
- Next.js: `npm run build`

**Output Directory:** Where the built files go
- Static HTML: `.` or `./public`
- Vite: `dist`
- Next.js: `.next`

**Install Command:** How to install dependencies
- Usually: `npm ci` (or `npm install`)

**Development Command:** Command to run locally
- Usually: `npm run dev`

Vercel auto-detects these, but you can customize if needed.

---

## Part 6: Environment Variables

API keys and secrets shouldn't be in your code. Vercel stores them securely.

### Add Environment Variables

1. In your project settings, go to **Environment Variables**
2. Click **Add New**
3. For each variable:
   - **Name:** `RESEND_API_KEY` (or your variable name)
   - **Value:** Your actual API key/secret
   - **Environments:** Check all three (Production, Preview, Development)

### Use in Your Code

How you access variables depends on your site type:

**Static HTML / Vanilla JS:**
```javascript
const apiKey = process.env.RESEND_API_KEY;
```

**Note:** For static HTML sites, environment variables are only available at build time, not in the browser. For client-side APIs, use build-time substitution or a serverless function.

**Vite:** Set `VITE_` prefix for client-side variables:
```javascript
const apiKey = import.meta.env.VITE_RESEND_API_KEY;
```

### Keep API Keys Secure

Never commit API keys to GitHub. If you accidentally do:

1. Regenerate the key in the service (Resend, etc.)
2. Remove the old key from your code
3. Commit and push the fix

---

## Part 7: Set Up Custom Domain

Your site gets a free `vercel.app` domain, but you can add a custom domain.

### Purchase a Domain

If you don't have a domain, buy one from:
- Vercel (via partner registrars)
- GoDaddy, Namecheap, Google Domains, etc.

Pick something memorable, short, and professional.

### Add Domain to Vercel

1. In project settings, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `www.yourdomain.com` or `yourdomain.com`

For best results, use `www.yourdomain.com`.

### Update DNS Records (If Domain Not on Vercel)

If you bought your domain elsewhere, you need to update DNS records:

1. Vercel shows the exact DNS records you need
2. Log into your domain registrar (GoDaddy, Namecheap, etc.)
3. Find "DNS Settings" or "Name Servers"
4. Add or update the records Vercel shows
5. Wait 24-48 hours for propagation

**Common DNS record types:**
- **CNAME:** Points your domain to Vercel
- **A Record:** Direct IP address (less common now)

### Verify Domain Setup

1. After adding DNS records, wait 24-48 hours
2. Try visiting your domain in a browser
3. Vercel dashboard will show a green checkmark when active

---

## Part 8: Enable SSL/HTTPS

SSL encrypts the connection to your site. Vercel provides this automatically.

### Verify SSL is Active

1. Visit your site (https://yourdomain.com)
2. Click the lock icon in your browser address bar
3. You should see "Certificate is valid"

### Force HTTPS

To redirect all HTTP traffic to HTTPS:

1. Go to **Settings** → **Domains**
2. Find your domain
3. Enable "Redirect to HTTPS"

Now any visitor using `http://` automatically redirects to `https://`.

---

## Part 9: Set Up Deployment Notifications

Know when your site deploys.

### Enable Slack Notifications (Optional)

1. Go to **Settings** → **Notifications** (or **Integrations**)
2. Connect your Slack workspace
3. Choose which events trigger notifications (successful deploy, failed deploy, etc.)

---

## Part 10: Automatic Deployments from GitHub

Once your repository is linked, every push to GitHub triggers a new deployment.

### How It Works

```
You push to GitHub → Vercel sees the change → Builds your site → Deploys
```

Usually takes 30-60 seconds total.

### Control Which Branches Deploy

1. Go to **Settings** → **Git**
2. **Production Branch:** Usually `main` (the live site)
3. **Preview Branches:** Any other branches get preview URLs
4. **Ignored Commits:** Changes that skip deployment (add `[skip vercel]` to commit message)

---

## Part 11: Troubleshooting Vercel Setup

### Build Fails

**Check the logs:**
1. Go to **Deployments** on your project dashboard
2. Click the failed deployment
3. Scroll to **Build** section
4. Look for error messages

**Common causes:**
- Missing dependencies (add to `package.json`)
- Wrong build command or output directory
- Missing environment variables
- File path case sensitivity (Linux is case-sensitive)

### Site Shows Old Content

1. Vercel caches aggressively
2. Hard refresh your browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)
3. Or wait 60 seconds for cache to expire

### Custom Domain Not Working

1. Verify DNS records are correct (Vercel dashboard shows what you need)
2. Check your domain registrar's DNS settings
3. Wait 24-48 hours for DNS to propagate
4. Try a different network or clear your browser cache

### Environment Variables Not Working

1. Verify the variable is set in **Settings** → **Environment Variables**
2. Check you're using the correct variable name in code
3. Redeploy after adding/changing variables (Vercel uses them at build time)
4. For client-side variables (Vite), use `VITE_` prefix

---

## Part 12: Monitoring Your Site

### Check Deployment Status

1. Go to https://vercel.com/dashboard
2. Click your project
3. **Deployments** tab shows all recent deployments
4. Green checkmark = successful, red X = failed

### View Site Analytics

1. Click your project
2. **Analytics** tab shows:
   - Page views
   - Visitor locations
   - Device types
   - Performance metrics

### Set Up Uptime Monitoring

Vercel monitors uptime automatically, but you can also:
- Check status page: https://www.vercel-status.com
- Set up external monitoring (UptimeRobot, Pingdom, etc.)

---

## Part 13: Common Vercel Configuration (vercel.json)

Create a `vercel.json` in your project root for custom settings:

### Static HTML Site

```json
{
  "public": ".",
  "buildCommand": "echo 'No build needed'",
  "outputDirectory": ".",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

### Vite Site

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true
}
```

### Next.js Site

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

---

## Reference: Environment Variables by Site Type

### For Resend (Email)

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

In your code:
```javascript
// Node.js/serverless
const apiKey = process.env.RESEND_API_KEY;

// Browser (Vite)
const apiKey = import.meta.env.VITE_RESEND_API_KEY;
```

### For Google Analytics

Usually embedded as a tracking ID in your HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

No environment variable needed.

### For Custom Domains

No variables needed. Just add the domain in Vercel and update DNS.

---

## Quick Reference: Vercel Dashboard Sections

- **Deployments:** View all deployments and their logs
- **Settings:** Project configuration (build, environment variables, domains)
- **Analytics:** Visitor traffic and performance metrics
- **Integrations:** Connect services (Slack, GitHub, etc.)
- **Logs:** Real-time logs of your production site
- **Monitoring:** Uptime and performance tracking

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Deployment Troubleshooting:** https://vercel.com/docs/deployments/troubleshoot
- **DNS/Domain Issues:** https://vercel.com/docs/custom-domains/generic-dns
- **Environment Variables:** https://vercel.com/docs/projects/environment-variables

Your site is now deployed and ready to go live!
