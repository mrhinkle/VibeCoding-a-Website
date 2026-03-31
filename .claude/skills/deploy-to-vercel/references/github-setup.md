# Reference: Complete GitHub Account Setup

This guide walks you through setting up GitHub from scratch, including account creation, SSH keys, and the GitHub CLI.

## Part 1: Create a GitHub Account

### Step 1: Sign Up

1. Go to https://github.com/signup
2. Enter your email address
3. Create a password (use a strong, unique password)
4. Choose a username (this appears in your public repository URLs)
   - Can use letters, numbers, and hyphens
   - Examples: `sarah-jones`, `acme-dev`, `your-name-2025`
5. Click "Create account"

### Step 2: Verify Email

GitHub sends you a verification email. Click the link to verify your account is real.

### Step 3: Complete Your Profile

1. Log in to https://github.com
2. Click your profile icon (top right)
3. Click "Settings"
4. Fill in:
   - **Name:** Your real name (or company name)
   - **Bio:** Optional (what you or your company does)
   - **Location:** Your city or timezone
   - **Website:** Your company website (if you have one)

---

## Part 2: Generate SSH Keys

SSH keys let you push code to GitHub without typing your password every time. They're like digital ID cards.

### Check if You Already Have Keys

Open your terminal and run:

```bash
ls -la ~/.ssh
```

If you see files named `id_rsa` and `id_rsa.pub`, you already have keys. Skip to "Add SSH Key to GitHub".

### Generate New SSH Keys

If you don't have keys:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Replace `your-email@example.com` with the email you used for GitHub.

**The prompts:**
1. "Enter file in which to save the key" → Press Enter (use default location)
2. "Enter passphrase" → Create a password for the key (or press Enter for no password)
3. "Enter same passphrase again" → Confirm the password

This creates two files:
- `~/.ssh/id_ed25519` — Your private key (keep secret, never share)
- `~/.ssh/id_ed25519.pub` — Your public key (safe to share)

---

## Part 3: Add SSH Key to GitHub

### Copy Your Public Key

On Mac/Linux:

```bash
cat ~/.ssh/id_ed25519.pub | pbcopy
```

The key is now copied to your clipboard (you won't see it displayed).

### Add to GitHub

1. Log in to https://github.com
2. Click your profile icon (top right)
3. Click **Settings**
4. Click **SSH and GPG keys** (left sidebar)
5. Click **New SSH key**
6. **Title:** Name this key (e.g., "MacBook Pro", "Work Computer")
7. **Key type:** Select "Authentication Key"
8. **Key:** Paste your public key (Cmd+V or Ctrl+V)
9. Click **Add SSH key**

### Verify It Works

Test your SSH connection:

```bash
ssh -T git@github.com
```

You should see:

```
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

This means everything is set up correctly.

---

## Part 4: Install GitHub CLI

The GitHub CLI (`gh`) lets you create repositories from the command line without opening your browser.

### Install on Mac

```bash
brew install gh
```

### Install on Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install gh
```

### Install on Windows

Download from https://github.com/cli/cli/releases and run the installer.

### Verify Installation

```bash
gh --version
```

You should see something like: `gh version 2.X.X`

---

## Part 5: Authenticate GitHub CLI

The first time you use `gh`, it needs to authenticate:

```bash
gh auth login
```

Answer the prompts:
- **What account do you want to log in to?** → Select "GitHub.com"
- **What is your preferred protocol for Git operations?** → Select "SSH"
- **Upload your SSH public key to GitHub?** → Select "y" (yes)
- **Title for your SSH key** → Press Enter (use the suggested name)
- **How would you like to authenticate GitHub CLI?** → Select "Login with a web browser"

Your browser will open. Log in to confirm, then return to the terminal.

---

## Part 6: Understand Repository URLs

Once you have GitHub set up, you'll work with repository URLs. There are two types:

### HTTPS URLs
```
https://github.com/your-username/your-repo-name.git
```

Pros: Easy to copy
Cons: You need to enter a password/token each time

### SSH URLs
```
git@github.com:your-username/your-repo-name.git
```

Pros: No password needed (uses your SSH key)
Cons: Requires SSH setup (which we just did!)

We recommend SSH for local development.

---

## Part 7: Common SSH Issues & Fixes

### "Permission denied (publickey)"

This means Git can't find your SSH key.

**Fix 1:** Make sure the key is loaded in your SSH agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

**Fix 2:** On Mac, create or edit `~/.ssh/config`:

```
Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
```

### "Could not open a connection to your authentication agent"

Your SSH agent isn't running.

**Fix (Mac/Linux):**

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Can't Find SSH Key File

Make sure you're using the correct path. If you used a different filename, adjust accordingly:

```bash
# List all your SSH keys
ls ~/.ssh/

# See what name your key has (looks like id_*)
```

---

## Part 8: Creating Your First Repository with GitHub CLI

Once everything is set up, creating a repo is easy:

```bash
# From inside your project directory
gh repo create your-site-name --source=. --remote=origin --push
```

This:
1. Creates a public repository on GitHub
2. Connects your local folder to GitHub
3. Uploads your code

That's it! Your code is now on GitHub.

---

## Reference: Essential Git Commands

Once GitHub is set up:

```bash
# Clone a repository to your computer
git clone git@github.com:username/repo-name.git

# Check your current status
git status

# Stage changes
git add .

# Create a commit
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View your commit history
git log --oneline
```

---

## Troubleshooting Checklist

Before reaching out for help, verify:

- [ ] GitHub account is created and verified
- [ ] SSH keys are generated (`ls ~/.ssh/`)
- [ ] SSH key is added to GitHub (check Settings → SSH and GPG keys)
- [ ] SSH connection works (`ssh -T git@github.com`)
- [ ] GitHub CLI is installed (`gh --version`)
- [ ] GitHub CLI is authenticated (`gh auth status`)

If all these pass and you're still having issues, the problem is likely specific to your setup. Check GitHub's official SSH troubleshooting: https://docs.github.com/en/authentication/troubleshooting-ssh

---

## Need Help?

- **GitHub Docs:** https://docs.github.com/en/authentication
- **SSH Troubleshooting:** https://docs.github.com/en/authentication/troubleshooting-ssh
- **GitHub CLI Docs:** https://cli.github.com/manual
