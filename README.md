# VibeCoding: A Website

![MIT License](https://img.shields.io/badge/license-MIT-blue) ![19 Skills](https://img.shields.io/badge/skills-19-brightgreen) ![Status](https://img.shields.io/badge/status-production-green)

**Learn to build beautiful, functional websites using Claude Code or Claude Cowork—no code required, 19 specialized skills doing the work.**

VibeCoding teaches business professionals and entrepreneurs how to leverage AI to create professional websites quickly, with complete control over design, content, and functionality. Think of it like hiring a full creative team: a brand strategist, web developer, copywriter, QA tester, security expert, SEO specialist, UX designer, and project manager—all working on your project at once.

---

## What is Vibe Coding?

Vibe Coding is a radically different approach to web development. Instead of learning HTML/CSS syntax or wrestling with JavaScript frameworks, you:

1. **Share your brand vision** — Colors, tone, messaging, pages you need
2. **Let Claude ask questions** — Structured interviews discover every detail
3. **Watch AI build** — Claude Code generates clean, production-ready HTML/CSS
4. **Polish with a full team** — 19 specialized skills optimize, audit, and refine
5. **Deploy to Vercel** — One-click deployment with automatic HTTPS
6. **Maintain with chat** — Update content anytime using Claude Code or Manus

You're directing the creative vision; your AI team handles the implementation details. The result? Websites that feel personal, perform well, and ship fast.

**Perfect for:** Consultants, agencies, solopreneurs, small business owners, professionals building side projects, or anyone tired of bloated website builders.

---

## What You'll Build

By completing VibeCoding, you'll create a **professional website tailored to your business**, including:

- Custom hero section with your value proposition
- About/Services pages showcasing your expertise
- Contact forms that integrate with your email (Resend)
- Newsletter signup connected to Beehiiv
- Optimized for search engines (SEO and AI search optimization)
- Mobile-responsive design with smooth animations
- Full accessibility compliance (WCAG)
- Analytics tracking (Google Analytics or Fathom)
- Fast load times and Core Web Vitals optimization
- Security headers, XSS/CSRF protection, no exposed secrets

**See examples:** Check out `/examples/simple-portfolio/` and `/examples/business-landing/` for fully built sites you can deploy immediately.

---

## Quick Start (6 Steps)

### 1. Clone the Repository
```bash
git clone https://github.com/mrhinkle/VibeCoding-a-Website.git
cd VibeCoding-a-Website
```

### 2. Install Claude Code
Download and install the [Claude Code CLI](https://github.com/anthropics/claude-code) from Anthropic. This is your AI development partner.

```bash
# Verify installation
claude --version
```

### 3. Run Site Customizer
The **Site Customizer** skill discovers your brand identity and configures all downstream skills. It takes ~20 minutes and produces your brand foundation.

```bash
claude skill:run site-customizer
```

You'll describe:
- Your business and unique value
- Brand colors, fonts, and visual style
- Tone and voice (formal, casual, playful, etc.)
- Target audience and messaging pillars
- Pages you want to build

**Output:** `brand-config.json` + `brand-voice.md`

### 4. Run Site Interviewer
The **Site Interviewer** skill asks detailed questions about your business, goals, and features. It takes ~30 minutes and produces a complete site specification.

```bash
claude skill:run site-interviewer
```

You'll answer questions about:
- What your business does and who you reach
- Pages you need (About, Services, Contact, etc.)
- Specific features (forms, newsletters, analytics)
- SEO keywords and target search terms
- Deployment preferences

**Output:** `site-brief.json` + `interview-summary.md`

### 5. Build Your Site
The **Site Generator** takes your site-brief and creates production-ready HTML/CSS:

```bash
claude skill:run site-generator
```

This generates your complete website with:
- Clean semantic HTML5
- Modern CSS3 with Flexbox/Grid
- Mobile-first responsive design
- Brand-aligned colors and typography
- Ready-to-customize content sections

### 6. Deploy to Vercel
The **Deploy to Vercel** skill handles all deployment details:

```bash
claude skill:run deploy-to-vercel
```

Your site goes live at a custom domain with automatic SSL, global CDN, and analytics.

---

## Complete Workflow

VibeCoding orchestrates 19 specialized skills in a coordinated workflow:

```
site-customizer
     │
     ▼
site-interviewer (structured discovery)
     │
     ├─→ brand-to-images (generate image prompts)
     │
     ├─→ site-generator (build HTML/CSS)
     │
     ├─→ form-wiring (connect Resend + Beehiiv)
     │
     ├─→ copy-editor (persuasion + CTA optimization)
     │
     └─→ [AUDIT BATTERY - all run in parallel]
            ├─→ qa-tester (cross-browser, forms, JS)
            ├─→ code-auditor (validation, errors, APIs)
            ├─→ security-auditor (secrets, headers, XSS)
            ├─→ seo-aeo-auditor (keywords, structured data)
            ├─→ ux-reviewer (heuristics, accessibility)
            ├─→ link-checker (broken links, orphans)
            ├─→ performance-optimizer (Core Web Vitals)
            └─→ content-auditor (grammar, placeholders)
     │
     ▼
deploy-to-vercel (live on Vercel with preview URLs)
     │
     ▼
webmaster (orchestrate ongoing work) + site-updater (edits, content)
```

Each skill is a specialist on your website team. Running the full pipeline is like having a creative director, web developer, copywriter, designer, tester, and security expert all collaborating on your project.

---

## The Team Metaphor

VibeCoding's 19 skills represent a complete creative + technical team:

- **Creative Director** (site-customizer) — Establishes brand identity
- **Brand Strategist** (brand-voice) — Living brand bible
- **Interviewer** (site-interviewer) — Gathers requirements
- **Art Director** (brand-to-images) — Generates on-brand visuals
- **Web Developer** (site-generator) — Builds the site
- **Forms Specialist** (form-wiring) — Integrates services
- **Copywriter** (copy-editor) — Persuasion + optimization
- **Content Reviewer** (content-auditor) — Polish + consistency
- **UX Designer** (ux-reviewer) — Usability + accessibility
- **QA Tester** (qa-tester) — End-to-end testing
- **Web Programmer** (code-auditor) — Code quality
- **Security Expert** (security-auditor) — Vulnerability scanning
- **SEO Specialist** (seo-aeo-auditor) — Search optimization
- **Performance Engineer** (performance-optimizer) — Speed + metrics
- **Link Inspector** (link-checker) — Broken link discovery
- **DevOps Engineer** (deploy-to-vercel) — Cloud deployment
- **Site Maintainer** (site-updater) — Ongoing edits
- **Project Manager** (webmaster) — Workflow orchestration

Run all 19 skills and you have a complete team. Run just the essential 6 (customizer, interviewer, generator, form-wiring, deploy-to-vercel, updater) and you have a lean, fast pipeline.

---

## Complete Skill Inventory

### Setup & Planning
| Skill | Role | Purpose |
|-------|------|---------|
| **site-customizer** | Creative Director | Brand discovery + configures all downstream skills |
| **brand-voice** | Brand Strategist | Living brand bible (voice, colors, fonts, messaging) |
| **site-interviewer** | Interviewer | Structured requirements discovery conversation |

### Build & Create
| Skill | Role | Purpose |
|-------|------|---------|
| **brand-to-images** | Art Director | Generates image prompts matching your brand |
| **site-generator** | Web Developer | Produces production-ready HTML/CSS/JS |
| **form-wiring** | Forms Specialist | Connects contact forms (Resend) and newsletters (Beehiiv) |

### Polish & Refine
| Skill | Role | Purpose |
|-------|------|---------|
| **copy-editor** | Copywriter | Persuasion frameworks, headline scoring, CTA optimization |
| **content-auditor** | Content Reviewer | Grammar, placeholders, brand voice consistency |
| **ux-reviewer** | UX Designer | Usability heuristics, navigation, mobile UX, accessibility |

### Audit & Certify
| Skill | Role | Purpose |
|-------|------|---------|
| **qa-tester** | QA Tester | End-to-end testing: cross-browser, forms, JS, mobile |
| **code-auditor** | Web Programmer | JS errors, HTML/CSS validation, API integration testing |
| **security-auditor** | Security Expert | Secrets scanning, security headers, XSS/CSRF, privacy |
| **seo-aeo-auditor** | SEO Specialist | Keywords, meta tags, structured data, AI search optimization |
| **performance-optimizer** | Performance Engineer | Image compression, minification, Core Web Vitals |
| **link-checker** | Link Inspector | Broken links, redirect chains, orphan pages |

### Deploy & Maintain
| Skill | Role | Purpose |
|-------|------|---------|
| **deploy-to-vercel** | DevOps Engineer | GitHub → Vercel deployment pipeline |
| **site-updater** | Site Maintainer | Ongoing edits via Claude Code or Manus |
| **webmaster** | Project Manager | Orchestrates all skills with workflow presets |

---

## What's New in v2

VibeCoding expanded from 11 to 19 skills, adding a complete audit battery and enhanced workflow:

**9 New / Enhanced Skills:**

1. **site-customizer** — Brand discovery first, configures downstream skills
2. **brand-voice** — Living brand bible for consistency across all work
3. **copy-editor** — Persuasion frameworks, headline scoring, CTA optimization
4. **qa-tester** — End-to-end cross-browser testing and form validation
5. **code-auditor** — JavaScript error detection, HTML/CSS validation, API testing
6. **security-auditor** — Secrets scanning, XSS/CSRF protection, privacy compliance
7. **ux-reviewer** — WCAG accessibility audits, mobile UX, navigation heuristics
8. **webmaster** — Orchestrates all 19 skills with workflow presets
9. **seo-aeo-auditor** — Enhanced for AI search optimization (AEO) alongside traditional SEO

The new workflow begins with brand discovery (site-customizer), ensuring every downstream skill uses consistent brand guidelines. The expanded audit battery (Module 6) now runs all 8 auditor skills in parallel, catching issues simultaneously instead of sequentially.

---

## Platform Compatibility

VibeCoding works across multiple platforms, each with the same 19 skills:

### Claude Code (Command Line)
- **Primary platform** — Most powerful for automation
- Full skill library + custom skill creation
- Interactive prompts and conversations
- JSON configuration files for version control
- Best for: Developers, technical users, batch processing

```bash
claude skill:run site-customizer
claude skill:run site-interviewer
claude skill:run site-generator
```

### Claude Cowork (Desktop App)
- **Non-developer friendly** — Visual interface, drag-and-drop
- Same 19 skills as Claude Code
- Chat-based workflow with preview windows
- Save projects locally or to cloud
- Best for: Business users, visual learners, real-time collaboration

Download from [Claude Cowork](https://cowork.anthropic.com/).

### Manus (Image Studio)
- **Full compatibility** with Nano Banana integration
- Use brand-to-images for AI-generated hero images
- Batch image generation for all pages
- Image variations and style exploration
- Best for: Rapid visual prototyping, brand consistency

All three platforms share the same skill library and can hand off work to each other (CLI → Desktop → Image Studio).

---

## Course Overview

VibeCoding is structured as a **1-hour core course** plus **optional deep dives** (3-4 hours expanded).

### Core (1 Hour)
1. **Introduction to Vibe Coding** (10 min)
   - What it is, why it works, what you'll build

2. **Brand Discovery & Site Interview** (20 min)
   - Running site-customizer and site-interviewer
   - Understanding your requirements

3. **From Brief to Live Site** (15 min)
   - Site Generator in action
   - Form wiring and deployment

4. **Deploy to Production** (10 min)
   - Vercel deployment workflow
   - Custom domains, SSL, analytics

5. **What Comes Next** (5 min)
   - Maintenance and updates
   - Next steps with other skills

### Expanded (3-4 Hours Additional)

**Module 2: Branding & Images**
- Using site-customizer for brand guidelines
- Generating on-brand images with brand-to-images
- Image optimization and Manus integration

**Module 3: Content & Copy**
- Copy-editor for persuasion and CTAs
- Content-auditor for consistency and polish
- Writing for AI search (AEO) + traditional SEO

**Module 4: Advanced Features**
- Newsletter integration (Beehiiv)
- Contact form handling (Resend)
- Google Analytics setup
- Dark mode implementation

**Module 5: Performance & SEO**
- seo-aeo-auditor optimization
- Core Web Vitals and performance-optimizer
- Mobile responsiveness and accessibility
- Search ranking signals

**Module 6: Quality Pass** (Complete Audit Battery)
- **qa-tester** — Cross-browser, forms, JavaScript, mobile
- **code-auditor** — Validation, errors, API testing
- **security-auditor** — XSS/CSRF, secrets, privacy
- **ux-reviewer** — WCAG accessibility, usability heuristics
- **seo-aeo-auditor** — Keywords, meta tags, structured data
- **performance-optimizer** — Image compression, Core Web Vitals
- **link-checker** — Broken links, redirect chains
- **content-auditor** — Grammar, brand voice, placeholders

**Module 7: Maintenance & Updates**
- Using site-updater for ongoing edits
- Keeping sites current with Claude Code or Manus
- Re-running audits after changes
- Building a content calendar

---

## Why This Architecture: Composable, Portable, Yours

VibeCoding deliberately chooses **open infrastructure** over proprietary platforms: GitHub for version control, Vercel for hosting, your choice of AI agent (Claude Code, Claude Cowork, or Manus), and output in standard HTML/CSS/JavaScript — or plain HTML if that's all you need.

This is a deliberate architectural decision, not a limitation.

### The Composability Advantage

Most website builders lock you into their ecosystem. Your site lives on their servers, depends on their rendering engine, and can't leave without a painful migration. VibeCoding takes the opposite approach:

- **Your code is standard web code.** HTML, CSS, and JavaScript that any browser understands and any developer can read. There's no proprietary template language, no platform-specific markup, no vendor SDK required to render your pages.
- **Your hosting is portable.** We reference Vercel because it's excellent — free tier, global CDN, automatic HTTPS, serverless functions, preview deployments. But your site is a folder of files. Move it to Netlify, Cloudflare Pages, AWS S3, a traditional web host, or even a Raspberry Pi in your closet. The code doesn't care where it runs.
- **Your version control is standard Git.** GitHub today, GitLab tomorrow, self-hosted Gitea next year. Your entire project history travels with you.
- **Your AI agent is interchangeable.** The skills work with Claude Code (CLI), Claude Cowork (desktop), or Manus. As new agents emerge, they can consume the same `site-brief.json` and `brand-profile.json` specifications.

### How This Compares to Platform Builders

Platforms like Replit, Lovable, and Base44 are genuinely useful — they lower the barrier to entry and get you running fast. VibeCoding doesn't diminish their value. But they solve a different problem.

VibeCoding gives you a **composable architecture** where every layer is replaceable. Your AI agents generate the code, but the code itself has zero dependencies on those agents. If you outgrow the skills, hire a developer — they'll find clean, standard HTML/CSS/JS that follows established conventions. If a better hosting platform appears next year, deploy there. If you want to add React, Vue, or Astro later, your existing pages are valid starting points.

The tradeoff is that composability requires slightly more setup than a one-click platform builder. That's what the 19 skills are for — they handle the complexity so you get platform freedom without the platform friction.

### Highly Programmable by Design

VibeCoding supports two output modes depending on your needs:

- **Plain HTML/CSS** — Zero build step, works everywhere, maximum portability. Perfect for landing pages, portfolios, and small business sites.
- **Vite + JavaScript** — Full build pipeline with hot reload, code splitting, and modern JS. Choose this when you need interactive features, API integrations, or plan to scale into a web application.

Either way, the output is yours. Your agents built it, but they don't own it. That's the point.


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
- **Claude Cowork** — Visual interface for non-developers
- **Manus** — Brand-aligned image generation (Nano Banana integration)

### Deployment
- **GitHub** — Version control, CI/CD hooks
- **Vercel** — Automatic deployments, preview URLs

---

## Prerequisites

Before you start, make sure you have:

- **Basic business knowledge** — What you do, who you serve, your unique value
- **Claude Code installed** — [Download here](https://github.com/anthropics/claude-code)
  - *Or* Claude Cowork for visual interface
- **GitHub account** — For version control (free tier works great)
- **Vercel account** — For deployment (free tier works great)
- **1 hour** — For the initial setup + interview
- **Optionally: Manus account** — For image generation (or use Nano Banana free tier)

**No coding experience required.** Claude Code and your AI team handle all the technical details.

---

## Feedback & Issues

VibeCoding is provided as-is by [The AI Enterprise](https://theaienterprise.io/). We're not accepting pull requests at this time, but we do want to hear from you.

**Found a bug or have a suggestion?** Open a ticket on [GitHub Issues](https://github.com/mrhinkle/VibeCoding-a-Website/issues) and we'll take a look.

**Want to build your own skills?** The [Skill Development Guide](./docs/skill-development-guide.md) explains the SKILL.md format so you can extend VibeCoding in your own fork.

---

## License

MIT License © 2026 Mark Hinkle. See [LICENSE](./LICENSE) for full details.

You're free to use, modify, and distribute VibeCoding for personal or commercial projects.

---

## Credits

**Created by Mark Hinkle** ([@mrhinkle](https://twitter.com/mrhinkle))
Publisher of [The AI Enterprise](https://theaienterprise.io/)

Special thanks to the Claude Code, Claude Cowork, and Manus teams for making this possible.

---

## Get Started Now

1. Clone the repo
2. Install Claude Code (or Claude Cowork)
3. Run site-customizer (brand discovery)
4. Run site-interviewer (detailed requirements)
5. Run site-generator (build your site)
6. Run deploy-to-vercel (go live)

**Want to optimize further?** After deployment, run the audit battery:
- qa-tester, code-auditor, security-auditor, ux-reviewer, seo-aeo-auditor, performance-optimizer, link-checker, content-auditor

**Questions?** See [Docs](./docs/) for guides or [open a ticket](https://github.com/mrhinkle/VibeCoding-a-Website/issues) if you run into trouble.
