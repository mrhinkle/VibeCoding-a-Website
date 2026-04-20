# Credentials Guide: Managing Keys with Bitwarden

> **The short version:** Every service you wire into your vibe-coded site (GitHub, Vercel, Resend, Beehiiv, Anthropic) gives you a token that acts like a password. Store those tokens in Bitwarden, never in a text file, never in a chat window, and never committed to GitHub.

This guide walks you through setting up Bitwarden as the single place you store every credential your site needs, plus how to create, rotate, and recover keys when things go sideways.

---

## Why a password manager (and why Bitwarden)

When you build with AI tools, you'll accumulate a dozen keys fast — GitHub personal access tokens, Vercel deploy tokens, Resend API keys, Beehiiv API keys, an Anthropic API key, maybe Google Analytics, Stripe, or a domain registrar login. A password manager solves three problems at once:

- **One master password.** You remember one strong password. The manager remembers the rest.
- **Encrypted at rest.** Tokens sit inside an encrypted vault. Even if someone grabs the file, they can't read it without your master password.
- **Sync across devices.** Add a key on your laptop, use it on your phone, retrieve it from a new machine after a hard drive crash.

[Bitwarden](https://bitwarden.com) is the recommended choice for most vibe coders. It's free for personal use, open source (so the code is publicly audited), and runs on Mac, Windows, Linux, iOS, Android, and every major browser. If you already use 1Password or Apple Keychain, those work fine too — the principles below apply anywhere.

---

## Setup (one time, 10 minutes)

### 1. Create a Bitwarden account

Go to [bitwarden.com/go/start](https://bitwarden.com/go/start) and sign up with a personal email. The free tier is enough for everything in this course.

**Pick a strong master password.** This is the one password you must never forget. A good approach is four to five random words strung together, like `correct-horse-battery-staple-vibe`. Long beats complicated. Write it down on paper and keep that paper somewhere safe (a locked drawer, a safe, a safety deposit box). If you lose the master password, Bitwarden cannot recover your vault — that's the point.

### 2. Turn on two-factor authentication

In Bitwarden settings, enable two-step login with an authenticator app (Google Authenticator, Authy, or your iPhone's built-in codes). This means someone who steals your master password still can't get in without your phone.

### 3. Install the browser extension

The [Bitwarden browser extension](https://bitwarden.com/download/) is what you'll use most. Install it in whatever browser you already use. Sign in once. From here on, when a site asks for a password or token, the extension will offer to autofill it.

### 4. Install the mobile app

Grab it from the App Store or Google Play. You'll want it when you're away from your laptop and need to copy a token into a phone browser.

---

## How to store an API key or token

Bitwarden has two item types that matter for this course: **Login** (for account logins like `github.com`) and **Secure Note** (for standalone API keys and tokens).

### For an account login

Use this for any service where you sign in through a browser — GitHub, Vercel, Anthropic console, Resend dashboard.

1. Click the Bitwarden extension icon, then the `+` button.
2. Choose **Login**.
3. Fill in:
   - **Name:** The service name, e.g. `GitHub`
   - **Username:** Your email or account name
   - **Password:** Let Bitwarden generate one. Click the refresh icon next to the password field and pick a 20+ character password.
   - **URI:** The login page URL, e.g. `https://github.com/login`
4. Save.

Next time you visit the login page, the extension auto-fills your credentials.

### For an API key or token

Use this for anything that isn't a login — a GitHub Personal Access Token, a Resend API key, a Vercel deploy token.

1. Bitwarden extension → `+` → **Secure Note**.
2. Fill in:
   - **Name:** Descriptive, e.g. `GitHub PAT — VibeCoding site — expires 2026-07-15`
   - **Notes:** Paste the token itself here. Add context: what it's for, what permissions it has, when it expires, which site uses it.
3. Save.

Why the verbose name? When you have ten tokens in your vault, "GitHub token" isn't enough. You need to know which site it's for and when to rotate it.

### Use folders to stay organized

Create a folder per site you build. Inside each folder, keep every credential that site depends on: the GitHub PAT, the Vercel token, the Resend API key, the Beehiiv API key, the domain registrar login. When you sit down to work on that site six months from now, everything you need is in one place.

---

## The credentials you'll collect during this course

Here's what to expect and where each key comes from. Store every one of these in Bitwarden as you create it.

### GitHub Personal Access Token

**Where:** [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta)
**Use a fine-grained token, not a classic one.** Fine-grained tokens can be scoped to a single repository — if one ever gets exposed, only that one site is at risk.
**Permissions needed:** Contents (Read and write), Metadata (Read)
**Expiration:** 90 days is the sweet spot. Shorter is more secure but more annoying; longer is more convenient but more exposed.
**Store as:** Secure Note named `GitHub PAT — [site name] — expires [date]`

### Vercel deploy token

**Where:** [vercel.com/account/tokens](https://vercel.com/account/tokens)
**Scope:** Full account or a specific team
**Expiration:** 90 days
**Store as:** Secure Note named `Vercel token — [site name] — expires [date]`

### Anthropic API key

**Where:** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
**Expected cost:** $5–20 per site during build, then near-zero once deployed
**Store as:** Secure Note named `Anthropic API key — [machine name]`. Use a different key per machine so you can revoke one without breaking the others.

### Resend API key (for contact forms)

**Where:** [resend.com/api-keys](https://resend.com/api-keys)
**Permissions:** Sending access, restricted to your domain once verified
**Store as:** Secure Note named `Resend API key — [site name]`

### Beehiiv API key (for newsletter signup)

**Where:** Beehiiv dashboard → Settings → Integrations → API
**Store as:** Secure Note named `Beehiiv API key — [publication name]`

### Domain registrar login

Your registrar (Namecheap, Cloudflare Registrar, Google Domains) holds your domain. Losing access here is worse than losing an API key — you can't point the domain anywhere else until you recover it.
**Store as:** Login entry with username, password, and the registrar's URL. Turn on 2FA on the registrar account.

---

## Retrieving a key when you need it

### In Claude Code or Cowork

When Claude asks you to paste an API key:

1. Open the Bitwarden browser extension.
2. Search for the key's name.
3. Click the copy icon next to the password or note field.
4. Paste into Claude.
5. Clear your clipboard afterward (macOS: the pasted text lives in clipboard history; on iOS the Universal Clipboard can leak it across devices).

### In a Vercel environment variable

Same flow — open Bitwarden, copy the key, paste it into Vercel's environment variables panel. Vercel encrypts it at rest, so once it's there you shouldn't need to paste it again.

### On a new computer

Install Bitwarden, sign in with your master password, approve the device via 2FA. Every credential you've ever stored is immediately available. This is the main reason to use a password manager in the first place — the disaster scenario (lost or stolen laptop) becomes a 10-minute recovery instead of a weekend of account rebuilding.

---

## Rotating keys on a schedule

Rotating a key means generating a new one and retiring the old one. Do this on a schedule so that a key that gets exposed has a limited blast radius.

**Quarterly (every 90 days):** GitHub PATs, Vercel tokens, Resend API keys, Beehiiv API keys.
**Immediately:** Any key you pasted into a public place (chat, GitHub issue, social media, email), or any key on a device that got lost or stolen.

The rotation routine:

1. Log into the service's dashboard.
2. Create a new key with the same permissions.
3. Update Bitwarden with the new key. Rename the old one `[old] — revoke after 2026-07-15`.
4. Swap the new key into every place it's used (Vercel env vars, local `.env` files, Claude Code).
5. Test the site — make sure nothing broke.
6. Delete the old key in the service dashboard and in Bitwarden.

Put a quarterly calendar reminder on your calendar titled "Rotate site keys." Thirty minutes, four times a year, and you'll never have to explain to anyone that a stale token was the reason your site got hijacked.

---

## What to do if a key gets exposed

You paste a token into the wrong chat window. You commit a `.env` file to GitHub. A screenshot of your terminal ends up on a Slack channel with external people. It happens.

1. **Revoke the exposed key.** Go to the service's key management page and delete it. Now. Before you do anything else.
2. **Check what the key touched.** Look at the service's audit log. GitHub, Vercel, and most modern services log every API call with a timestamp and source IP. If someone used your key in the minutes between exposure and revocation, you'll see it here.
3. **Generate a replacement.** Create a new key with the same permissions. Store it in Bitwarden with the old naming pattern.
4. **Swap it in everywhere.** Vercel env vars, local files, Claude Code.
5. **Add a `.gitignore` rule** for whatever file leaked, so it can't happen the same way twice.
6. **If the exposed key was a GitHub PAT with write access:** check your repository's commit history for commits you didn't make. Force-push a reset if you find any.

The single most important line of this whole guide: **revocation is free and fast, apology tours are expensive and slow.** When in doubt, revoke.

---

## Pairing Bitwarden with Claude Code

If you use [Claude Code](https://claude.ai) or [Cowork](https://claude.com/cowork), you can go one step further — install the [Bitwarden MCP server](https://www.npmjs.com/package/@bitwarden/mcp-server) so Claude can pull keys straight from your vault without you copy-pasting. This is an advanced setup — skip it if you're new to the command line.

The short version:

```bash
npm install -g @bitwarden/cli @bitwarden/mcp-server
bw login        # one time
bw unlock --raw # produces a session token
```

Then add the server to your Claude Desktop MCP config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "bitwarden": {
      "command": "node",
      "args": ["/opt/homebrew/lib/node_modules/@bitwarden/mcp-server/dist/index.js"],
      "env": { "BW_SESSION": "paste-the-session-token-here" }
    }
  }
}
```

Restart Claude Desktop. Now you can ask Claude "grab my Resend API key from Bitwarden and wire it into the contact form" and it'll do the whole thing without you touching a token. Session tokens expire when the vault locks, so you'll re-run `bw unlock --raw` periodically.

Full instructions in the [Bitwarden MCP server README](https://github.com/bitwarden/mcp-server).

---

## Summary: the rules

1. One master password, four-to-five random words, written on paper and stored somewhere safe.
2. Two-factor authentication on Bitwarden, and on every service whose keys you store in Bitwarden.
3. Every token goes into Bitwarden. Nothing in text files, nothing in chat windows, nothing committed to GitHub.
4. Fine-grained tokens over classic tokens. Minimum permissions. 90-day expirations.
5. Rotate keys quarterly. Revoke immediately on exposure.
6. One folder per site so the credentials for any project are always together.

Follow these six rules and the hardest security problem in vibe coding — managing the keys — turns into a five-minute routine per site.
