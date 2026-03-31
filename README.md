# VibeCoding: A Website

![MIT License](https://img.shields.io/badge/license-MIT-blue) ![GitHub Stars](https://img.shields.io/badge/stars-⭐⭐⭐-yellow) ![Status](https://img.shields.io/badge/status-production-green)

**Learn to build beautiful, functional websites using Claude Code + Manus without writing code from scratch.**

VibeCoding teaches business professionals and entrepreneurs how to leverage AI to create professional websites quickly, with complete control over design, content, and functionality. No JavaScript required—just clear thinking and strategic direction.

---

## What is Vibe Coding?

Vibe Coding is a radically different approach to web development. Instead of learning HTML/CSS syntax or wrestling with JavaScript frameworks, you:

1. **Describe your vibe** — Brand colors, tone, mood, pages you need
2. **Let Claude ask questions** — A structured interview discovers all the details
3. **Watch AI build** — Claude Code generates clean, production-ready HTML/CSS
4. **Polish with Manus** — Generate on-brand images, maintain the site, chat with visitors
5. **Deploy to Vercel** — One-click deployment with automatic HTTPS

You're directing the creative vision; Claude handles the implementation details. The result? Websites that feel personal, perform well, and ship fast.

**Perfect for:** Consultants, agencies, solopreneurs, small business owners, professionals building side projects, or anyone tired of bloated website builders.

---

## What You'll Build

By completing VibeCoding, you'll create a **professional website tailored to your business**, including:

- Custom hero section with your value proposition
- About/Services pages showcasing your expertise
- Contact forms that integrate with your email
- Newsletter signup connected to Beehiiv
- Optimized for search engines (SEO/AEO)
- Mobile-responsive design with smooth animations
- Analytics tracking (Google Analytics or Fathom)
- Fast load times and Core Web Vitals optimization

**See examples:** Check out `/examples/simple-portfolio/` and `/examples/business-landing/` for fully built sites you can deploy immediately.

---

## Quick Start (5 Steps)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/VibeCoding-a-Website.git
cd VibeCoding-a-Website
```

### 2. Install Claude Code
Download and install the [Claude Code CLI](https://github.com/anthropics/claude-code) from Anthropic. This is your AI development partner.

```bash
# Verify installation
claude --version
```

### 3. Run the Site Interviewer
The **Site Interviewer** skill asks you about your business, brand, and goals. It takes ~30 minutes and produces a structured brief.

```bash
claude skill:run site-interviewer
```

You'll have a conversation with Claude Code. Answer honestly about:
- What your business does
- Who you're trying to reach
- What pages you need
- Your brand colors and tone
- Features like contact forms, newsletters, etc.
- SEO keywords
- Deployment preferences

**Output:** `site-brief.json` + `interview-summary.md`

### 4. Build Your Site
The **Site Generator** takes your site-brief and creates production-ready HTML/CSS:

```bash
claude skill:run site-generator
```

This generates your complete website. You can:
- Use simple HTML (single-page sites)
- Use Vite + JavaScript (interactive sites)
- Customize colors, fonts, and layout
- Add your content directly

### 5. Deploy to Vercel
The **Deploy to Vercel** skill handles all deployment details:

```bash
claude skill:run deploy-to-vercel
```

Your site goes live at a custom domain with automatic SSL, CDN, and analytics.

---

## The Two-Tool Workflow

VibeCoding combines two powerful tools:

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR WEBSITE VISION                       │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │    Claude Code (AI)     │
        │   • Interview users     │
        │   • Generate HTML/CSS   │
        │   • Optimize images     │
        │   • Run SEO audits      │
        │   • Deploy to cloud     │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────┐
        │  Manus (Image Studio)   │
        │   • Generate brand      │
        │     hero images         │
        │   • Maintenance chat    │
        │     about site updates  │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  Production Website on Vercel   │
        │  • Fast (< 1s load time)        │
        │  • Secure (auto HTTPS)          │
        │  • Scalable (CDN global)        │
        │  • Analytics enabled            │
        └─────────────────────────────────┘
```

---

## Complete Skill Inventory

VibeCoding includes **10 specialized skills**, each solving one part of website creation:

| Skill | Purpose | Input | Output |
|-------|---------|-------|--------|
| **site-interviewer** | Discover requirements through conversation | User answers | `site-brief.json` |
| **brand-to-images** | Generate image prompts from brand guidelines | site-brief.json | `image-prompts.md` |
| **site-generator** | Create HTML/CSS from site-brief | site-brief.json | `index.html`, `styles.css` |
| **form-wiring** | Connect contact forms to email/Resend | HTML site + email | Updated HTML with handlers |
| **content-auditor** | Review site copy and messaging | HTML site | `audit-report.md` + suggestions |
| **seo-aeo-auditor** | Check SEO, keywords, meta tags, Core Web Vitals | HTML site | `seo-audit.md` + optimizations |
| **performance-optimizer** | Minimize CSS, optimize images, improve speed | HTML site | Optimized site, metrics |
| **site-updater** | Make edits to live site (typos, new content, design tweaks) | Live site + changes | Updated live site |
| **link-checker** | Find broken links, redirect chains, crawl issues | Deployed site URL | `link-report.md` |
| **deploy-to-vercel** | Push site live with automatic SSL and analytics | Built site + GitHub repo | Live URL at custom domain |

---

## Course Overview

VibeCoding is structured as a **1-hour core course** plus **optional deep dives** (3-4 hours expanded).

### Core (1 Hour)
1. **Introduction to Vibe Coding** (10 min)
   - What it is, why it works, what you'll build

2. **The Interviewer Skill** (15 min)
   - How to gather requirements
   - Running your first interview

3. **From Brief to Site** (15 min)
   - Site Generator in action
   - Customizing colors, fonts, layout

4. **Deploy to Production** (10 min)
   - Vercel deployment workflow
   - Custom domains, SSL, analytics

5. **What Comes Next** (10 min)
   - Adding more pages, updating content
   - Using other skills for optimization

### Expanded (3-4 Hours Additional)

**Module 2: Branding & Images**
- Using Manus for hero image generation
- Integrating brand guidelines
- Image optimization and lazy loading

**Module 3: Content Strategy**
- Writing copy that converts
- SEO keyword research
- Calls-to-action and messaging

**Module 4: Advanced Features**
- Newsletter integration (Beehiiv)
- Contact form handling (Resend)
- Google Analytics setup
- Dark mode implementation

**Module 5: Performance & SEO**
- Core Web Vitals optimization
- Mobile responsiveness
- Accessibility (WCAG)
- Answer Engine Optimization (AEO)

**Module 6: Maintenance & Updates**
- Using site-updater for edits
- Keeping sites current
- Testing and quality assurance

---

## Tech Stack

VibeCoding builds websites using **modern, proven technologies**:

### Frontend
- **HTML5** — Semantic markup
- **CSS3** — Flexbox/Grid, custom properties, animations
- **Vite + JavaScript** (optional) — For interactive features
- **Responsive Design** — Mobile-first approach

### Backend & Services
- **Resend** — Email form submissions
- **Beehiiv** — Newsletter management
- **Google Analytics / Fathom** — Visitor analytics
- **Vercel** — Hosting, CDN, serverless functions

### AI Tools
- **Claude Code** — Website generation, optimization, auditing
- **Manus** — Brand-aligned image generation (Nano Banana)

### Deployment
- **GitHub** — Version control, CI/CD hooks
- **Vercel** — Automatic deployments, preview URLs

---

## Prerequisites

Before you start, make sure you have:

- **Basic business knowledge** — What you do, who you serve, your unique value
- **Claude Code installed** — [Download here](https://github.com/anthropics/claude-code)
- **GitHub account** — For version control (free tier works great)
- **Vercel account** — For deployment (free tier works great)
- **30 minutes** — For the initial interview
- **Optionally: Manus account** — For image generation (or use Nano Banana free tier)

**No coding experience required.** You'll never write HTML/CSS manually—Claude Code handles that.

---

## Contributing

We welcome contributions! VibeCoding is built by and for the community.

### How to Contribute

**Skills:** Build new skills that extend VibeCoding's capabilities
- See [Skill Development Guide](./docs/skill-development-guide.md)
- Examples: social media optimizer, email template generator, CMS integration

**Course Content:** Create lessons, tutorials, or case studies
- See [CONTRIBUTING.md](./docs/CONTRIBUTING.md)
- Examples: "How I built my agency site", video tutorials, written guides

**Examples:** Contribute example sites showing what's possible
- Add to `/examples/` with full source code
- Include before/after, performance metrics, deployment notes

**Bug Reports & Issues:** Help us find and fix problems
- Check existing issues first
- Provide clear reproduction steps
- Include system info (OS, Claude Code version, etc.)

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for detailed guidelines.

---

## License

MIT License © 2026 Mark Hinkle. See [LICENSE](./LICENSE) for full details.

You're free to use, modify, and distribute VibeCoding for personal or commercial projects.

---

## Credits

**Created by Mark Hinkle** ([@mrhinkle](https://twitter.com/mrhinkle))
Publisher of [The AI Enterprise](https://theaienterprise.io/)

Special thanks to the Claude Code and Manus teams for making this possible.

---

## Get Started Now

1. Clone the repo
2. Install Claude Code
3. Run the interviewer
4. Build your site
5. Deploy

**Questions?** See [Docs](./docs/) for guides, [Issues](https://github.com/yourusername/VibeCoding-a-Website/issues) for support, or [Discussions](https://github.com/yourusername/VibeCoding-a-Website/discussions) to chat with the community.

Happy building! 🚀
