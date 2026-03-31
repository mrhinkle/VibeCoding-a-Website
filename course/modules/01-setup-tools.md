# Module 01: Setting Up Your Tools
**Time: 5 minutes core | 15 minutes expanded**

---

## Core Setup (5 minutes)

You need three things: Claude Code, an API key, and a GitHub account. This takes less time than making coffee.

### Step 1: Install Claude Code

Claude Code is the IDE (development environment) where you'll work with Claude.

1. Go to [claude.ai](https://claude.ai)
2. Sign in with your Google account or create an Anthropic account
3. Look for "Claude Code" in the left sidebar (or top menu if on mobile)
4. Click to open Claude Code
5. You now have Claude Code running

That's it. No installation, no configuration. It runs in your browser.

---

### Step 2: Get Your Anthropic API Key

Claude Code needs an API key to work. This is like a password that lets Claude Code make requests on your behalf.

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in (same account as above)
3. Click **"API Keys"** in the left sidebar
4. Click **"Create Key"**
5. Give it a name like "VibeCoding"
6. Copy the key (you'll see it once; save it somewhere safe)
7. Don't share this key with anyone

Your API costs are billed to your account based on usage. Expect $5–$20 per website build depending on complexity.

---

### Step 3: Create a GitHub Account (Free)

GitHub is where your code lives. You don't need to understand Git right now—we'll walk you through the parts you need.

1. Go to [github.com](https://github.com)
2. Click **"Sign Up"**
3. Enter an email, password, and username
4. Verify your email
5. You're done

You now have a place to store and version your website code.

---

## That's Core Setup

You now have:
- Claude Code running
- An API key
- A GitHub account

You're ready for Module 02. If you want to go deeper (and you should if this is your first time), continue below.

---

## Expanded Setup (10 minutes more)

The expanded setup gives you smoother local development and more control. Do this if you plan to customize your site beyond simple text changes.

### Step 4: Install Git (for Windows/Mac/Linux)

Git is the system that tracks changes to your code. Think of it like Google Docs version history, but for code.

**Windows:**
1. Go to [git-scm.com](https://git-scm.com)
2. Download the Windows installer
3. Run the installer, accept defaults, finish

**Mac:**
1. Open Terminal (Command+Space, type "Terminal")
2. Paste this and press Enter:
   ```
   xcode-select --install
   ```
3. Follow the prompts. This installs Git as part of Xcode tools.

**Linux:**
1. Open your terminal
2. Run:
   ```
   sudo apt-get install git
   ```
3. Done.

To verify Git installed, open Terminal/Command Prompt and type `git --version`. You should see a version number.

---

### Step 5: Install GitHub Desktop (Easier than Terminal)

If you don't like terminal commands (and you don't have to), GitHub Desktop is a visual way to manage your code.

1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install for your OS
3. Open it and sign in with your GitHub account
4. Done

Now you can manage your code with buttons instead of commands. No judgment here—many professionals prefer this.

---

### Step 6: Install Node.js (for Local Development)

Node.js is a runtime that lets you run JavaScript on your computer. You need this if you want to preview your site locally before deploying.

1. Go to [nodejs.org](https://nodejs.org)
2. Download the "LTS" (Long Term Support) version
3. Run the installer, accept defaults
4. Restart your computer after installing

To verify it worked, open Terminal/Command Prompt and type `node --version`. You should see a version number like `v20.x.x`.

---

### Step 7: Install the Vercel CLI (Optional, for Advanced Deployments)

Vercel is where your website lives on the internet. The CLI (command-line tool) lets you deploy from your computer.

1. Open Terminal/Command Prompt
2. Run:
   ```
   npm install -g vercel
   ```
3. Type `vercel login` and follow the prompts to authenticate

You now can deploy with a single command: `vercel --prod`

---

### Step 8: Clone the VibeCoding Repo

The VibeCoding repo contains the skills and examples we'll use throughout this course.

**Using GitHub Desktop (Easier):**
1. Open GitHub Desktop
2. Click "File" > "Clone Repository"
3. Enter: `github.com/your-username/VibeCoding-a-Website`
4. Choose where to save it on your computer
5. Click "Clone"

**Using Terminal (Faster):**
1. Open Terminal/Command Prompt
2. Navigate to where you want the folder (e.g., your Documents):
   ```
   cd ~/Documents
   ```
3. Run:
   ```
   git clone https://github.com/your-username/VibeCoding-a-Website.git
   ```

You now have all the VibeCoding tools on your computer.

---

### Step 9: Verify Everything Works

Let's test that your setup is correct.

1. Open Terminal/Command Prompt
2. Navigate to your VibeCoding folder:
   ```
   cd ~/Documents/VibeCoding-a-Website
   ```
3. Run:
   ```
   npm --version
   ```
4. You should see a version number like `10.x.x`

If you see version numbers, you're set.

---

## Callout: Why These Tools?

You might wonder why we're using so many tools instead of one super-tool. Here's why:

- **Claude Code:** Understands your business and builds your site
- **GitHub:** Keeps your code safe and lets you undo mistakes
- **Node.js:** Lets you build complex sites locally before going live
- **Vercel:** Hosts your site 24/7 with CDN speed and reliability

Together, they're professional-grade. You could use these tools to build a startup, not just a small site.

---

## Common Issues & Fixes

**"API key not working"**
Make sure you copied it correctly (no extra spaces). If it still fails, create a new key in the console.

**"Git not found"**
You might need to restart your computer after installing. If it still doesn't work, reinstall Git.

**"npm not found"**
Same as Git—restart your computer after installing Node.js.

**"Can't clone the repo"**
Make sure you created your GitHub account and have internet access. Try the Terminal command instead of GitHub Desktop.

---

## Tip: Save Your API Key Securely

Your API key is like your password. Use a password manager (like 1Password, LastPass, or Bitwarden) to store it. Don't put it in a text file on your desktop.

---

## What's Next

You're set up. In Module 02, we'll use Claude Code to interview you about your vision, which creates a blueprint for your website.

See you there.
