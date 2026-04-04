---
name: Getting Started with VibeCoding
description: |
  Welcome to VibeCoding! This skill sets up your website-building environment and walks you through two paths: the recommended quick-start for new GitHub/Vercel users, or a preview-first path where you see your site before going live. Trigger phrases: getting started, new project, start from scratch, set up VibeCoding, first time, how do I begin, let's build a website, I want to create a site, help me start, initialize project, first steps, setup guide, onboarding, getting set up
---

# Welcome to VibeCoding

You're about to build a beautiful, personalized website with AI. This skill gets you ready—no experience needed.

## Let's Start

I'll ask you one question: **Do you want to see a preview of your site first, or set up the full infrastructure right now?**

### Path A: Go All-In (Recommended)
If you want to get your website live as quickly as possible, we'll set up the infrastructure first. This takes about 5 minutes and lets you go from "finished site" to "live on the internet" in seconds.

**Requirements:**
- Free GitHub account (create one at github.com)
- Free Vercel account (create one at vercel.com)
- About 5 minutes

### Path B: Preview First
If you want to see what your site looks like before setting up accounts, we'll:
1. Ask you questions about your brand (your colors, vibe, what you do)
2. Generate your site
3. Show you a preview on your computer
4. Then ask if you want to go live (we'll set up the accounts together)

**Requirements:**
- About 10 minutes total
- No accounts needed upfront

---

## Which Path Are You Taking?

**Tell me:** "I'm ready to set up" (Path A) or "Show me a preview first" (Path B).

---

# Path A: Go All-In

### Step 1: Create Your GitHub Account
GitHub is where your website code lives—think of it as a safe storage box for your project.

1. Go to **github.com**
2. Click "Sign up"
3. Enter your email, create a password, choose a username
4. Verify your email
5. Done!

### Step 2: Create Your Vercel Account
Vercel takes your code from GitHub and puts your site on the internet—automatically, every time you make a change.

1. Go to **vercel.com**
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Done!

### Step 3: Let's Check Your Setup
I'll verify that your GitHub and Vercel accounts are ready.

**On Claude Code (terminal)?**
I'll run a quick check:
```
gh auth status
vercel --version
```

**On Claude Cowork (desktop)?**
I'll guide you through clicking to verify your accounts are set up.

**On Manus (conversational)?**
I'll ask you to confirm you've created both accounts, and we'll proceed.

### Step 4: Create Your Website Repository
A "repository" (or "repo") is a folder in GitHub that holds your website code. I'll create one for you from the VibeCoding template—which means you're starting with a solid foundation, not a blank page.

**What I'll do:**
1. Create a new repo in your GitHub account named `vibecoding-site`
2. Set it up so that Vercel watches it (every time you make a change, your website updates automatically)

**What you see:**
A brand-new repo in your GitHub account, ready to go.

### Step 5: Your Brand Interview
Now comes the fun part. I'll hand you off to the **site-customizer** skill, which will ask you questions about your brand:
- What colors speak to you?
- What's your vibe—playful, professional, creative, minimal?
- What do you do? (Your tagline, what you offer)
- Any specific sections you want on your site?

You answer, and the AI generates your complete, personalized website.

### Step 6: Go Live
Once your site is generated, I'll push it to your GitHub repo (upload your new website). Vercel sees the update and automatically deploys it to the internet.

**Your website is now live.** You can visit it at a URL like `vibecoding-site.vercel.app`.

---

# Path B: Preview First

### Step 1: Your Brand Interview
We'll skip the account setup for now. Instead, I'll hand you off to the **site-customizer** skill, which asks you about your brand and generates your site.

You'll answer questions like:
- What colors feel right?
- What's your vibe?
- What do you do?
- What sections do you want?

### Step 2: Preview Your Site
Once the site is generated, I'll show you a preview on your computer. You can open it in your browser, click around, and see exactly what you're building.

### Step 3: Love It? Let's Go Live
If you're happy with the preview, we'll set up your accounts:

**GitHub (2 min):**
1. Go to github.com
2. Sign up with your email
3. Verify your email

**Vercel (2 min):**
1. Go to vercel.com
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize and done

I'll create your repo and connect Vercel, then push your site live.

---

## Key Concepts (In Plain English)

**GitHub** = A safe place to store your website code. Think of it like Google Drive, but for code.

**Vercel** = A service that takes your code from GitHub and puts your website on the internet. Every time you make a change, Vercel automatically updates your live website.

**Repo (Repository)** = A folder in GitHub that holds all your website files. You'll have one repo per website.

**Template** = A starting point with common website structure already built in. You're not starting from zero.

**Deploy** = Pushing your website to the internet so people can see it.

**Push** = Uploading your changes from your computer to GitHub.

---

## Environment Detection

### Claude Code (CLI)
I'll check for:
- `gh` (GitHub command line)
- `vercel` (Vercel command line)
- Node.js (JavaScript runtime)

If anything's missing, I'll guide you through quick setup.

### Claude Cowork (Desktop)
No terminal needed. I'll walk you through browser-based account creation and repo setup with point-and-click steps.

### Manus (Conversational)
I'll ask you to confirm account creation, and we'll proceed with a browser-friendly workflow.

---

## Troubleshooting

**"I can't log into GitHub"**
Make sure you verified your email when you signed up. Check your spam folder for the verification email.

**"Vercel says I need to authorize access"**
That's normal! When you connect GitHub and Vercel, Vercel asks permission to see your repos. Click "Authorize."

**"I already have a GitHub account"**
Great! Skip Step 1 in Path A. Just make sure you can log in, and we'll proceed.

**"I'm on Claude Code but `gh auth status` shows I'm not logged in"**
You'll need to authenticate GitHub on your machine first. Run:
```
gh auth login
```
Then choose your preferred authentication method (GitHub CLI or web browser). Follow the prompts.

**"Something went wrong"**
No worries—we can troubleshoot. Tell me:
- Which path are you on (A or B)?
- What was the last thing that worked?
- What error message did you see (if any)?

---

## Next Steps

Once your infrastructure is set up (Path A) or you've seen your preview (Path B), you're ready for the **site-customizer** skill, which will interview you about your brand and generate your full website.

**You're about to build something amazing. Let's do this.**

---

What's your choice: **Path A (Go All-In)** or **Path B (Preview First)**?
