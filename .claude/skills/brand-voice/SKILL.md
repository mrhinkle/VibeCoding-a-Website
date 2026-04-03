---
name: brand-voice
description: Conduct a brand discovery interview, collect visual assets, and build a living brand bible that all other VibeCoding skills reference. Triggers on "brand voice," "brand guidelines," "tone of voice," "messaging," "logo," "brand colors," "brand identity," "style guide," "brand assets," "how should my site sound," "brand consistency," "update my brand," "brand bible," "brand kit," "visual identity," "typography," "color palette," "tagline," "mission statement," "value proposition." Also monitors for requests from other skills that need brand context (copy-editor needs tone, site-generator needs colors/fonts, ux-reviewer needs consistency checks).
---

# Brand-Voice Skill

## What This Skill Does

The brand-voice skill is the **beating heart** of your brand identity. It's not just documentation — it's a living system that:

1. **Conducts a brand discovery interview** to capture your complete business identity
2. **Collects visual assets** (logos, colors, fonts, photography style)
3. **Generates two files** that power all other skills:
   - `brand-profile.json` — machine-readable data for automation
   - `brand-guide.md` — shareable human reference for your team
4. **Updates itself** when you change your brand, keeping everything in sync
5. **Serves as the single source of truth** for brand consistency across your entire website

Think of it as building your brand bible once, then having every other skill automatically consult it.

---

## How It Works: Two Phases

### PHASE 1: Brand Discovery Interview

When you trigger this skill, we'll have a **conversational interview** (not a form) to discover your complete brand identity.

#### Example Exchange

**You:** "I need to establish my brand voice."

**Claude:** "I'd love to help you discover your brand! Let's start with the foundation — your business story. What problem does your company solve, and why did you start it in the first place? Tell me a bit about the origin story."

**You:** "We help small agencies save time on client onboarding. I started it because I was drowning in spreadsheets at my own agency."

**Claude:** "That's a great story — frustration that became a solution. So if you were to describe what you do in one sentence to a stranger at a coffee shop, what would you say?"

---

### What We Discover

#### Messaging & Voice

1. **Mission Statement** — Why does your business exist beyond making money?
2. **Value Proposition** — What makes you genuinely different?
3. **Tagline/Slogan** — Short, memorable phrase (we'll craft one together if needed)
4. **Elevator Pitch** — 30-second explanation
5. **Brand Story** — How did you start? What problem did you personally experience?
6. **Target Audience** — Who are you talking to? (demographics, psychographics, pain points)
7. **Brand Personality** — If your brand were a person, how would they talk? (Think: are you a friendly coffee shop barista or a sharp-dressed consultant?)
8. **Tone Spectrum** — Where do you sit on these scales?
   - Formal ←→ Casual
   - Serious ←→ Playful
   - Authoritative ←→ Friendly
   - Technical ←→ Simple
   - Corporate ←→ Personal
9. **Vocabulary Rules** — Words you love, words you'd never use
10. **Competitive Differentiation** — How should you sound DIFFERENT from competitors?

#### Visual Identity

1. **Logo** — Primary logo, secondary versions, usage rules
2. **Color Palette** — Primary, secondary, accent, background, text colors (hex codes + usage rules)
3. **Typography** — Heading font, body font, accent font, size scale
4. **Photography Style** — Professional? Candid? Illustrated? Stock photo preferences?
5. **Iconography** — Outlined, filled, rounded, sharp?

#### Content Rules

1. **Writing Style** — Sentence length, contractions, paragraph structure, number formatting
2. **CTA Language** — How do you prefer to ask people to take action?
3. **Social Proof** — How do you present testimonials and case studies?
4. **Legal/Compliance** — Any required disclaimers or copyright notices?

---

### PHASE 2: Brand Profile Generation

After the interview, the skill generates three outputs:

#### 1. brand-profile.json

Machine-readable file that other skills consume:

```json
{
  "business": {
    "name": "Your Company",
    "tagline": "Short memorable phrase",
    "mission": "Why we exist",
    "value_proposition": "What makes us different",
    "elevator_pitch": "30-second explanation",
    "industry": "Your industry",
    "target_audience": {
      "demographics": "Who they are",
      "psychographics": "What they believe",
      "pain_points": ["Pain 1", "Pain 2"]
    }
  },
  "voice": {
    "personality": ["confident", "approachable", "innovative"],
    "tone_spectrum": {
      "formality": 6,
      "playfulness": 7,
      "authority": 5,
      "simplicity": 8,
      "personal": 7
    },
    "vocabulary": {
      "preferred_words": ["empower", "streamline", "together"],
      "banned_words": ["just", "obviously", "simply"],
      "tone_examples": {
        "do_say": "Let's solve this together",
        "dont_say": "You obviously need to do this"
      }
    },
    "writing_rules": {
      "sentence_length": "medium (15-20 words average)",
      "contractions": true,
      "oxford_comma": true,
      "paragraph_style": "2-3 sentences max"
    }
  },
  "visual": {
    "colors": {
      "primary": "#005FFF",
      "primary_hex": "005FFF",
      "primary_rgb": "rgb(0, 95, 255)",
      "secondary": "#00D9FF",
      "accent": "#FF6B6B",
      "background": "#FFFFFF",
      "text": "#1A1A1A"
    },
    "typography": {
      "headings": {
        "font": "Inter",
        "weights": "700, 800",
        "fallback": "sans-serif"
      },
      "body": {
        "font": "Inter",
        "weights": "400, 500",
        "fallback": "sans-serif"
      },
      "accent": {
        "font": "Poppins",
        "weights": "600",
        "fallback": "sans-serif"
      },
      "size_scale": "12px, 14px, 16px, 18px, 24px, 32px, 48px"
    },
    "logo": {
      "primary_url": "[path to logo file]",
      "secondary_url": "[path to icon/mark]",
      "usage_rules": {
        "minimum_size_px": 32,
        "clear_space": "1/4 of logo height",
        "do_not": ["stretch", "rotate", "change colors", "add effects"]
      }
    },
    "image_style": "Professional yet approachable; real people in authentic contexts, not overly staged",
    "icon_style": "Rounded, 2px stroke, friendly feel"
  },
  "content": {
    "cta_style": "Action-oriented, benefit-focused (e.g., 'Start Building' not 'Click Here')",
    "social_proof_style": "Short quotes + company logo + specific metrics",
    "legal_requirements": []
  }
}
```

#### 2. brand-guide.md

A polished, shareable document for your team, contractors, and future reference. Includes:
- Visual identity showcase with color swatches
- Typography samples
- Tone examples
- Do's and don'ts
- Logo usage guide
- Voice and messaging guidelines

#### 3. brand-context.md (internal reference)

A condensed version stored in `references/brand-context.md` within the skill directory that other skills automatically consult.

---

### PHASE 3: Self-Updating Mechanism

This is what makes brand-voice special. **Your brand profile is alive.**

When you say things like:
- "Update my brand colors to use teal instead of blue"
- "Change our tagline to something punchier"
- "We need to sound more technical, less friendly"

The skill **automatically updates**:
- `brand-profile.json` (for other skills to read)
- `brand-guide.md` (for your team)
- `brand-context.md` (for other skills to reference)

---

## How Other Skills Use This

Every other VibeCoding skill checks for your brand profile and adapts accordingly:

| Skill | Uses | Reference |
|-------|------|-----------|
| **site-generator** | Colors, fonts, content tone | brand-profile.json |
| **copy-editor** | Voice, vocabulary, tone rules | brand-context.md |
| **content-auditor** | Brand voice consistency | brand-context.md |
| **ux-reviewer** | Visual consistency, color usage | brand-profile.json |
| **brand-to-images** | Visual identity for prompts | visual section |
| **seo-aeo-auditor** | Business context for keywords | business section |

---

## Brand Audit Mode

Once your brand profile exists, you can also run the skill in **audit mode**:

Ask: "Audit my site against my brand guidelines"

The skill will check:
- Are brand colors used correctly?
- Does copy match your defined tone spectrum?
- Are banned words appearing anywhere?
- Is the logo used properly?
- Are fonts consistent with your guide?

Returns a **Brand Consistency Score (0-100)** with specific recommendations.

---

## Triggering This Skill

Start with any of these:

- "I need to establish my brand voice"
- "Help me figure out my brand identity"
- "Create a brand style guide for my site"
- "What should my brand colors be?"
- "Update my brand to sound more [X]"
- "My competitors sound like [Y], how should we be different?"
- "Create a brand bible I can share with my team"
- "Audit my site's brand consistency"

Or from other skills:
- Site-generator: "I need brand context to generate the site"
- Copy-editor: "What's the brand voice I should match?"
- UX-reviewer: "Check this design against the brand guidelines"

---

## What You Get

After completing the brand discovery:

1. **brand-profile.json** — Machine-readable brand data (uploaded to your project)
2. **brand-guide.md** — Shareable brand reference document
3. **brand-context.md** — Internal quick-reference for other skills
4. **A consistent brand** — Every page, every email, every social post aligned to your identity

---

## Notes

- This interview is **conversational, not a form**. We're discovering your brand together, not filling in a template.
- If you don't have something yet (like a tagline), we'll create it together.
- If you change your mind later, we update everything. Your brand is allowed to evolve.
- All other skills automatically know about your brand without you having to repeat yourself.
