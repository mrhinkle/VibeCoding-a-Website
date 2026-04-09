# Vibe Coding FAQ

> **The complete guide to building websites with AI — from choosing the right tool to going live.**
> This FAQ is also published at [theaitoolbox.ai/#/learn/vibe-coding](https://www.theaitoolbox.ai/#/learn/vibe-coding).

---

## What Is Vibe Coding?

### What is vibe coding?

Vibe coding is building software by describing what you want in plain English and letting an AI assistant generate the code. The term was coined by Andrej Karpathy in early 2025. Instead of writing HTML, CSS, and JavaScript yourself, you have a conversation with an AI tool — you describe your business, your audience, and the look you want, and the AI produces a working website. You guide the direction; the AI handles the syntax.

### Do I need to know how to code to vibe-code a website?

No. That's the entire point. Vibe coding tools like Claude Code, Bolt.new, and Lovable are designed for people who can describe what they want but don't know (or don't want to learn) programming languages. You'll pick up some vocabulary along the way — words like "deploy," "repository," and "commit" — but you won't need to write code from scratch. Think of it like directing a contractor: you describe the kitchen you want, they handle the wiring and plumbing.

### What's the difference between vibe coding and traditional web development?

Traditional web development requires you to write every line of code — HTML for structure, CSS for styling, JavaScript for interactivity — or hire someone who can. Vibe coding replaces that manual process with an AI conversation. You describe what you need, the AI generates the code, and you iterate by giving feedback in natural language. The output is the same (a real website with real code), but the input is conversation instead of programming.

---
## Tool Landscape

### What are the best tools for vibe coding a website in 2025?

The landscape is moving fast, but the leading tools fall into three tiers:

**Full AI coding environments:** [Claude Code](https://claude.ai) (Anthropic, $5–20/site via API) and [Cursor](https://cursor.com) ($20–200/mo) give you the most control and produce production-grade code.

**Visual AI builders:** [Bolt.new](https://bolt.new) ($25/mo), [Lovable.dev](https://lovable.dev) ($25/mo), and [v0.dev](https://v0.dev) by Vercel ($5–30/mo) let you build in a browser with instant previews.

**Hybrid platforms:** [Replit](https://replit.com) ($20–100/mo) and [Windsurf](https://windsurf.com) ($20–200/mo) combine AI assistance with traditional IDE features.

For non-technical users building a business site, Claude Code (with this free VibeCoding course) or Bolt.new are the best starting points.

### What's the difference between Claude Code and ChatGPT for building websites?

Both can generate website code, but they work differently:

**Claude Code** is a dedicated coding environment with specialized skills — pre-built routines that handle site interviews, code generation, SEO optimization, form wiring, and deployment in a structured workflow. It writes directly to files in a project, manages a GitHub repository, and deploys to Vercel. It's an end-to-end pipeline.

**ChatGPT** is a general-purpose chatbot. It can generate HTML/CSS/JavaScript snippets and explain code well, but you have to copy-paste code manually, manage files yourself, and handle deployment on your own. There's no built-in project management or Git integration.

**Bottom line:** ChatGPT is great for learning and getting code snippets. Claude Code is better for actually building and shipping a complete website.
### Can I use ChatGPT code snippets inside a Claude Code project?

Yes. Code is code — it doesn't matter which AI generated it. If ChatGPT produces a useful component (say, a pricing table or animation), you can paste it into your Claude Code project and ask Claude to integrate it. Many developers use multiple AI tools: ChatGPT for brainstorming and quick snippets, Claude Code for structured project builds, and v0.dev for rapid UI prototyping. The skills you learn in one tool transfer to others.

### How much does it cost to vibe-code a website?

| Tool | Cost | Best For |
|------|------|----------|
| **Claude Code** | $5–20 per site (API) | Full builds with deployment |
| **Bolt.new** | $25/month | Quick visual builds |
| **Lovable.dev** | $25/month | Design-forward sites |
| **v0.dev** | $5–30/month | UI components & prototypes |
| **Cursor** | $20–200/month | Developers who want AI help |
| **Replit** | $20–100/month | Learn-by-doing with AI |

Add ~$10–15/year for a custom domain. Hosting on Vercel's free tier covers most small business sites.

---

## GitHub & Authentication

### Why do I need a GitHub account to vibe-code a website?

GitHub is where your website's code lives — think of it as Google Drive for code. Every change you make is tracked with version history, so you can always undo mistakes. More importantly, GitHub connects directly to hosting platforms like Vercel: when you update your code on GitHub, your live website updates automatically. You don't need to understand Git commands — tools like Claude Code and GitHub Desktop handle that for you.
### What is a GitHub Personal Access Token and why do I need one?

A Personal Access Token (PAT) is a secure password that lets tools like Claude Code or Manus access your GitHub account on your behalf. Instead of sharing your actual GitHub password, you create a token with limited permissions — it can only do specific things (like read and write code) in specific repositories.

**We recommend fine-grained tokens** (not classic tokens) because they can be scoped to a single repository with only the permissions needed. If a fine-grained token is ever compromised, only one project is affected — not your entire GitHub account.

To create one: Go to [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta), click "Generate new token," select only your website repo, grant "Contents: Read and write" permission, and set a 90-day expiration.

### What is two-factor authentication (2FA) and why does GitHub require it?

Two-factor authentication means you need two things to log in: your password (something you know) and a code from your phone (something you have). It's like having both a key and a deadbolt on your front door. Even if someone guesses your password, they can't get in without your phone.

GitHub now requires 2FA for all accounts. During signup, you'll download an authenticator app (Google Authenticator or Authy — both free), scan a QR code, and enter a 6-digit code. After that, signing in takes about 10 extra seconds each time. It's a small price for keeping your website code secure.

---

## Vercel & Deployment

### What is Vercel and why should I use it for hosting?

Vercel is a hosting platform built specifically for modern websites. When you push your code to GitHub, Vercel automatically builds your site, optimizes images, sets up HTTPS encryption, and distributes it to servers worldwide — so visitors in Tokyo and Toronto both get fast load times.

Why Vercel over traditional hosting (GoDaddy, Bluehost)?
- **Automatic deploys** — push to GitHub, site updates in 60 seconds
- **Free SSL certificates** — HTTPS is automatic, no configuration
- **Global CDN** — your site loads fast everywhere
- **Free tier** — 100GB bandwidth/month covers most small businesses
- **Zero-downtime deploys** — updates happen without any interruption

For vibe-coded sites, Vercel is the recommended choice because Claude Code can deploy directly to it.
### How does Vercel connect to my GitHub account?

When you sign up for Vercel, you'll click "Sign up with GitHub." This uses a system called OAuth — GitHub vouches for your identity so you don't need a separate Vercel password. You also grant Vercel permission to read your repositories. This is how Vercel knows when you've updated your code and can automatically rebuild your site.

Think of OAuth like a trusted referral: instead of giving Vercel your credentials directly, GitHub says "I know this person, and they've authorized access to these specific repos." It's more secure because Vercel never sees your GitHub password.

### What are environment variables and why do I need them?

Environment variables are secret settings stored on your hosting server. Your website code can read them, but visitors never see them. They're essential for storing API keys — like your Resend key for contact forms or your Beehiiv key for newsletter signups.

**Analogy:** Think of environment variables like a secret note you slip to the kitchen in a restaurant. Customers never see it, but the chef knows what to cook.

In Vercel, go to Settings → Environment Variables and add entries like:
- `RESEND_API_KEY` — for contact form email delivery
- `BEEHIIV_API_KEY` — for newsletter subscriber sync
- `GA_TRACKING_ID` — for Google Analytics

Never put API keys directly in your HTML or JavaScript files — they'd be visible to anyone who views your page source.

---

## API Keys & Security

### What is an API key and where do I store mine safely?

An API key is a unique password that lets one service talk to another. When your contact form sends an email through Resend, it uses your Resend API key to prove it's authorized. When your site adds subscribers to Beehiiv, it uses your Beehiiv API key.
**Where to store them:**
1. **Password manager** (1Password, Bitwarden, Apple Keychain) — for your master copy
2. **Vercel environment variables** — for your live website to use
3. **Never** in plain text files, emails, chat messages, or your HTML source code

If a key ever leaks (accidentally committed to GitHub, shared in a message), revoke it immediately in that service's dashboard and create a new one.

### Is it safe to paste my API key into Claude Code?

Yes, with an important caveat. When you paste an API key into Claude Code, it's processed locally on your machine. Claude Code uses the key to configure your website's environment variables or configuration files — it doesn't store your key in public HTML or transmit it to third parties.

After setup, your API key should live as a Vercel environment variable (encrypted at rest on Vercel's servers), never in your source code. The key difference: pasting into Claude Code (local, private) is fine. Pasting into a public chat, social media post, or email is not.

### What should I do if I accidentally expose an API key?

Act fast — treat it like a leaked password:

1. **Revoke immediately** — Go to the service dashboard (Resend, Beehiiv, GitHub, etc.) and delete or regenerate the compromised key
2. **Create a new key** — Generate a fresh one from the same dashboard
3. **Update Vercel** — Replace the old key with the new one in Settings → Environment Variables, then redeploy
4. **Check for damage** — Review recent activity in the service for unauthorized usage
5. **Prevent recurrence** — Add a `.gitignore` rule for `.env` files so secrets never get committed to GitHub

Most services (GitHub, Resend) can detect exposed keys automatically and will notify you. Don't ignore those emails.

---
## The VibeCoding Course

### What is the VibeCoding-a-Website course?

VibeCoding-a-Website is a free, open-source course on GitHub that teaches non-technical professionals how to build a complete business website using AI. It uses Claude Code's 19 specialized skills — pre-built routines for interviewing you about your business, generating site code, wiring up forms, optimizing for search engines, and deploying to production.

The course has 7 modules (about 2 hours total) that take you from zero to a live, professional website:
1. Setting up your tools (5 min)
2. Business interview → site blueprint (10 min)
3. Generating your site (7 min)
4. SEO & search optimization (10 min)
5. Forms & email capture (7 min)
6. Quality check (10 min)
7. Deploy & go live (7 min)

Get started: [github.com/mrhinkle/VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website)

### What are Claude Code Skills and how do they help with website building?

Skills are reusable instruction packages that teach Claude Code how to perform specific tasks consistently. Think of them like hiring a specialist — instead of explaining what you want from scratch, you activate a skill and it follows a proven workflow.

The VibeCoding course includes skills for:
- **Site interviewer** — Asks about your business, audience, and goals to create a blueprint
- **Site generator** — Turns the blueprint into a working website
- **SEO/AEO auditor** — Optimizes your site for Google search and AI answer engines
- **Form wiring** — Connects contact forms to your email via Resend
- **Quality pass** — Checks accessibility, performance, and mobile responsiveness
- **Brand-to-images** — Generates image prompts matched to your brand colors

Each skill is a Markdown file you can read, customize, and extend.

---
## Forms & Email

### How do contact forms work on a vibe-coded website?

When someone fills out your contact form and clicks submit, the form data travels through a pipeline:

1. The visitor's browser sends the form data to a serverless function (hosted on Vercel)
2. The function uses the Resend API to format and send an email
3. You receive the submission in your regular email inbox within seconds
4. Optionally, the visitor's email also gets added to your Beehiiv newsletter list

Setting this up with Claude Code takes about 7 minutes. You'll need a free Resend account and your Resend API key stored as a Vercel environment variable. No coding required — Claude's form-wiring skill handles the entire configuration.

### What is Resend and do I need it?

Resend is an email delivery service — it sends emails on your website's behalf. When someone submits your contact form, Resend is the engine that delivers that submission to your inbox. You need it (or a similar service) because websites can't send emails directly from a browser — they need a server-side service to handle delivery.

Resend's free tier covers most small business needs (up to 3,000 emails/month). After connecting your domain, emails come from your business address instead of a generic "noreply" address, which looks more professional and avoids spam filters.

---

## DNS & Domains

### How do I connect my custom domain (like mycompany.com) to my website?

Three steps:

1. **Buy a domain** from any registrar (Namecheap, Google Domains, GoDaddy) for $10–15/year
2. **Add it in Vercel** — go to your project settings, click "Domains," and enter your domain name
3. **Update DNS records** at your registrar — Vercel will show you exactly which records to add (typically an A record pointing to `76.76.21.21` and a CNAME record pointing to `cname.vercel-dns.com`)

DNS changes take 1–48 hours to propagate globally (most happen within 1–4 hours). During that window, some visitors might still see the old site. After propagation, yourcompany.com will point to your live Vercel-hosted site with automatic HTTPS.
### What is DNS and why does it take time to update?

DNS (Domain Name System) is the internet's phone book. When someone types "mycompany.com" into their browser, DNS translates that human-readable name into a server IP address (like 76.76.21.21) so the browser knows where to go.

When you change DNS records, the update needs to spread across thousands of DNS servers worldwide — each one caches (remembers) the old address for a set period. That's why it takes 1–48 hours for everyone to see the new address. It's not that your change is slow; it's that the internet's phone book has millions of copies that all need updating.

---

## Getting Started

### What's the fastest way to get a website live with vibe coding?

If you want maximum speed with minimal setup:

1. **Bolt.new** — Sign up, describe your site in one prompt, and you'll have a live preview in 30 seconds. Deployment is one click. Total time: ~15 minutes to a live site.

If you want more control and a professional-grade result:

1. **Claude Code + VibeCoding course** — Create accounts (GitHub, Anthropic, Vercel), run the site-interviewer skill, generate your site, wire up forms, and deploy. Total time: ~2 hours to a polished, SEO-optimized site with working contact forms.

The Claude Code path takes longer upfront but gives you a more maintainable, customizable site with proper version control, search optimization, and a clear update workflow.

### What accounts do I need to create before I start?

For the full VibeCoding workflow, you'll create four free accounts:

1. **Anthropic** ([console.anthropic.com](https://console.anthropic.com)) — for your Claude API key (pay-as-you-go, ~$5–20 per site)
2. **GitHub** ([github.com](https://github.com)) — for storing your code (free, requires 2FA)
3. **Vercel** ([vercel.com](https://vercel.com)) — for hosting your site (sign up with GitHub via OAuth, free tier)
4. **Resend** ([resend.com](https://resend.com)) — for contact form email delivery (free tier: 3,000 emails/month)

Store all credentials in a password manager. The [Credentials Guide](./credentials-guide.md) walks through each account setup with security best practices.
### I built my site — now what? How do I maintain it?

Maintaining a vibe-coded site is straightforward:

**Content updates:** Open Claude Code, describe the change ("Update the hero heading to say X" or "Add a new team member to the About page"), and Claude edits the code. Push to GitHub and Vercel auto-deploys.

**Weekly habits:**
- Check form submissions in your inbox — follow up with leads
- Review Google Analytics — which pages get traffic, where visitors drop off
- Monitor Vercel dashboard — check for any build errors or usage alerts

**Monthly habits:**
- Run the quality-pass skill to check performance and accessibility
- Update testimonials or portfolio items
- Rotate API keys that are nearing expiration

**Pro tip:** Manus (an AI image studio) can generate new brand-aligned visuals and update your site through a chat interface — no CLI needed. See the [Manus Integration Guide](./manus-integration-guide.md) for setup.

---

## Additional Resources

- [Plain-English Guide](./plain-english-guide.md) — Zero-jargon introduction to all the concepts above
- [Skills Reference](./skills-reference.md) — Complete documentation for all 19 VibeCoding skills
- [Skill Development Guide](./skill-development-guide.md) — How to create and customize your own skills
- [Manus Integration Guide](./manus-integration-guide.md) — Using Manus for image generation and site updates
- [AI Toolbox: Vibe Coding FAQ](https://www.theaitoolbox.ai/#/learn/vibe-coding) — Interactive version of this FAQ on AI Toolbox

---

*This FAQ is maintained as part of the [VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website) project. Found an error or have a question we should add? [Open an issue](https://github.com/mrhinkle/VibeCoding-a-Website/issues).*