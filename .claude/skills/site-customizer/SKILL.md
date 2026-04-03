---
name: site-customizer
description: "The starting point for every VibeCoding website project. Collects your brand identity, voice, visual aesthetic, messaging goals, and assets (logos, colors, fonts), then customizes all downstream skills to match your vision. Run this FIRST before any other skill. Use whenever someone says 'start a new site', 'set up my project', 'configure my brand', 'customize skills', 'brand setup', 'I want to build a website', 'new website project', 'get started', 'set up VibeCoding', or any time brand context is missing from other skills. Also use when updating brand elements mid-project — colors changed, new logo, revised messaging, new tagline."
---

# site-customizer

Welcome to the front door of VibeCoding. Before your website exists, your **brand needs to be defined** — and this skill is where that magic happens.

Think of it like hiring a creative director. They're not building the website yet. They're learning everything about who you are, how you sound, what you look like, what you stand for. Then they brief every specialist on the team — the copy editor knows your voice, the designer knows your colors, the developer knows your tech preferences.

You're in good hands. Let's figure out your brand together.

## Why This Skill Exists

Every other VibeCoding skill is a specialist:
- **site-interviewer** digs deeper into requirements
- **site-generator** builds the actual pages
- **copy-editor** polishes your words
- **ux-reviewer** checks usability
- **seo-aeo-auditor** optimizes for search

But here's the thing: they all need to know *your* brand to do their jobs well. Without you running this skill first, each specialist starts from scratch and makes assumptions that might not match your vision. The site-customizer ensures every skill on your team is aligned from day one.

## Platform Compatibility

This system was designed for **Claude Cowork** (Anthropic's desktop tool for non-developers) but works equally well with:
- **Manus** (by Meta) — conversational, fast, with optional **Google Nano Banana** integration for on-brand image generation
- **Claude Code** — for developers who prefer the command line
- Any AI assistant that supports skills

### Manus + Nano Banana Superpowers

If you're using Manus, your brand profile feeds directly into image generation. That means:
- Hero images, background photos, team illustrations, product visuals — all generated on-brand automatically
- No stock photo hunting, no brand mismatches
- Example: If your aesthetic is "warm, minimal, earth tones" and you run a yoga studio, Nano Banana generates images that look like they belong on your site

## The Customization Interview

We'll walk through five sections. Don't overthink it — if you don't have an answer yet, we'll help you figure it out.

### Section 1: Your Business & Goals

Let's start with the foundation.

**What does your business do?** (Aim for one sentence. "We help small accounting firms save 20 hours a week on bookkeeping" not "we provide software solutions.")

**Who are your customers?** Be specific. "Solo attorneys in tech startups" beats "anyone with legal needs." The more precise, the better we can speak to them.

**What's the ONE thing you want visitors to do?** Contact you? Buy something? Sign up for a trial? Join your newsletter? Focus matters.

**What are your top 3 competitors' websites?** We want you to stand out, not blend in. Show us what they're doing so we can do it better.

**Timeline?** Launching next week changes our approach from building over months.

#### Example exchange:
*You:* "We're a boutique web design agency in Brooklyn."
*Me:* "Got it. Who specifically hires you? Are we talking startups, established brands, e-commerce companies?"
*You:* "Mostly DTC brands doing $500K–$5M annual revenue. They're ambitious but don't have in-house design teams."
*Me:* Perfect. We'll make sure the site speaks to founders and marketing leaders, not design agencies.

### Section 2: Your Brand Voice

This is how you *sound*. Not what you say, but how you say it.

**If your brand were a person at a party, how would they talk?** The trusted expert everyone asks for advice? The friend who makes you laugh? The detail-oriented professional? The mentor who believes in you?

**Show me 2–3 websites whose TONE you admire.** (Not design yet — we care about how they write. Do they use humor? Casual language? Technical depth?)

**What words describe how you want customers to FEEL** after visiting your site? Confident? Inspired? Reassured? Excited?

**Any industry jargon you want to AVOID?** Every field has overused words. Tell us what makes you cringe.

**Formal or casual? Technical or simple? Authoritative or approachable?** You don't need to be all one thing, but knowing the spectrum helps.

#### Example exchange:
*You:* "We're a financial advisor for freelancers. We want to sound smart but not intimidating."
*Me:* "Smart but approachable — I like it. Do you want some humor in the copy, or keep it warm and straightforward?"
*You:* "Warm and straightforward, maybe light humor about freelancer struggles. Nothing cheesy."
*Me:* Noted. We'll avoid the motivational-poster vibe and keep it real.

### Section 3: Your Visual Aesthetic

How you *look*.

**Do you have existing brand colors?** If yes, provide hex codes. If no, we can suggest a palette that fits your industry and vibe.

**Do you have a logo?** Send it over. We'll note variants (dark, light, icon-only) so we use the right one in each context.

**Show me 2–3 websites whose LOOK you admire.** Not their copy — their design. Colors, typography, layout, photography style. What feels right?

**What's the vibe?** Clean and minimal? Bold and energetic? Warm and welcoming? Sleek and modern? Dark and sophisticated?

**Light mode, dark mode, or both?** Depends on your audience and aesthetic.

**Any specific imagery style?** Professional photography, illustrations, abstract, lifestyle, hand-drawn, 3D renders?

**For Manus + Nano Banana users:** What photography or illustration style should AI-generated images follow? "Warm, lifestyle photography of real people in action" vs. "minimalist geometric illustrations" — this goes straight to image generation.

### Section 4: Your Content & Messaging

**Do you have a tagline or slogan?** If yes, share it. If no, we'll craft one together.

**Elevator pitch?** 30 seconds. What do you do and why should someone care?

**What are the top 3 things that make you different?** Not just what you do — why you do it better.

**What objections do potential customers have?** "It's too expensive?" "I don't have time?" "I don't know if it works?" We'll address these in your copy.

**Do you have testimonials, case studies, or social proof?** Perfect. Let's include them.

**What pages do you need?** Homepage, about, services, pricing, contact, blog, resource library? Let's map it out.

### Section 5: Technical Preferences

**Do you have a domain name already?**

**Email service?** (Resend is our default, but we support others)

**Newsletter platform?** (Beehiiv is default)

**Analytics preference?** Google Analytics, Fathom, Plausible?

**Any third-party integrations?** Scheduling tools, payment processors, live chat, Zapier workflows?

## What Gets Generated

After we talk through your brand, you'll have three deliverables:

### 1. brand-profile.json
A machine-readable file consumed by ALL downstream skills. It contains:
- Business identity (name, tagline, mission, audience, competitors)
- Voice profile (tone spectrum, vocabulary, writing rules, banned words)
- Visual identity (colors with hex codes, typography, logo references, image style)
- Content strategy (pages needed, key messages, CTAs, objections to address)
- Technical configuration (services, integrations, deployment)
- Platform notes (Cowork/Manus/Claude Code, Nano Banana if applicable)

### 2. brand-guide.md
A human-readable brand bible you can share with team members, contractors, or even future AI sessions. Includes writing samples, visual examples, and decision logic.

### 3. Customized Skill Context Files
A `brand-context.md` reference file that other skills automatically read. This means:
- **site-interviewer** already knows your business context → shorter, more focused interview
- **site-generator** uses your exact colors, fonts, and page structure
- **brand-to-images** generates prompts matching your aesthetic (Nano Banana magic)
- **copy-editor** knows your voice, vocabulary, and what to avoid
- **ux-reviewer** validates against YOUR design rules
- **seo-aeo-auditor** uses your business info for better keyword research
- **security-auditor** knows your integrations and APIs
- **webmaster** orchestrates everything with your preferences baked in

## Updating Your Brand Mid-Project

Your brand isn't frozen. When things change — new colors, updated logo, revised tagline, pivoted messaging — just tell the site-customizer.

When you say things like "we rebranded with new colors" or "update my tagline" or "we got a new logo," the site-customizer will:
1. Update brand-profile.json with the changes
2. Regenerate brand-guide.md
3. Update brand-context.md
4. Tell you which other skills are affected (e.g., color change → re-run ux-reviewer)
5. Recommend which audits to re-run

## The Complete VibeCoding Workflow

Here's how all the pieces fit together:

```
1. site-customizer ← YOU ARE HERE
   (Define brand, create profile, brief the team)
   ↓
2. site-interviewer
   (Deeper requirements, informed by your brand)
   ↓
3. brand-to-images
   (Generate image prompts / Nano Banana images on-brand)
   ↓
4. site-generator
   (Build pages with your brand baked in)
   ↓
5. form-wiring
   (Connect contact forms, newsletters, integrations)
   ↓
6. copy-editor
   (Polish copy to match your voice)
   ↓
7. Pre-launch audit battery
   ├── qa-tester (does everything work?)
   ├── security-auditor (is it secure?)
   ├── seo-aeo-auditor (will it get found?)
   ├── ux-reviewer (is it easy to use?)
   ├── code-auditor (solid code?)
   ├── link-checker (any broken links?)
   └── performance-optimizer (is it fast?)
   ↓
8. deploy-to-vercel
   (Go live!)
   ↓
9. webmaster
   (Ongoing maintenance, updates, monitoring)
```

## Ready?

Let's build something great. Tell me about your business, your vision, and your brand — and we'll make sure every specialist on the team knows exactly how to execute it.

What do you do?
