# VibeCoding Skill Development Guide

This guide shows you how to create, test, and optimize VibeCoding skills. Skills are Claude Code routines that solve specific website-building problems.

## What is a Skill?

A skill is a **focused, reusable routine** that:
- Takes one clear input (like a site-brief.json or HTML file)
- Produces one clear output (like optimized CSS or audit report)
- Solves one specific problem well
- Is documented so others can use it

**Examples from VibeCoding:**
- **site-interviewer** → Takes user answers → Produces site-brief.json
- **site-generator** → Takes site-brief.json → Produces index.html + styles.css
- **seo-aeo-auditor** → Takes HTML site → Produces audit report + recommendations
- **deploy-to-vercel** → Takes built site + repo → Produces live URL

---

## The SKILL.md Format

Every skill needs a `SKILL.md` file at its root. This is the documentation and manifest.

### Structure

```markdown
---
name: "skill-name"
description: "One-line description of what it does"
author: "Your Name"
version: "1.0.0"
tags: ["tag1", "tag2", "tag3"]
modelRequirements:
  minTokens: 8000
prerequisites:
  - "What user needs before running this"
outputs:
  - "List of files produced"
---

# Skill Title

## How This Works
[Explain what the skill does and why]

## When to Use This Skill
[When should someone use this?]

## Step-by-Step Process
[How does Claude execute this?]

## Input Format
[What data/files does it need?]

## Output Format
[What does it produce?]

## Tips for Best Results
[How to get optimal results]

## Common Issues & Solutions
[Troubleshooting guide]

## What Comes Next
[What skills use this skill's output?]
```

### YAML Frontmatter Explained

| Field | Purpose | Example |
|-------|---------|---------|
| `name` | Skill ID (kebab-case) | "seo-aeo-auditor" |
| `description` | One line explaining what it does | "Audits site for SEO, keywords, Core Web Vitals" |
| `author` | Who created it | "VibeCoding Team" |
| `version` | Semantic version | "1.0.0" |
| `tags` | Search keywords (array) | ["seo", "audit", "performance"] |
| `modelRequirements.minTokens` | Min context window needed | 8000, 16000, etc. |
| `prerequisites` | What user must do first | ["Site built", "GitHub repo created"] |
| `outputs` | What the skill produces | ["audit-report.md", "optimized-site/"] |

### Example SKILL.md

Here's a minimal but complete skill definition:

```markdown
---
name: "color-palette-generator"
description: "Generates a complete, accessible color palette from a single brand color."
author: "Your Name"
version: "1.0.0"
tags: ["design", "color", "brand", "accessibility"]
modelRequirements:
  minTokens: 4000
prerequisites:
  - "A primary brand color (hex or name)"
outputs:
  - "color-palette.json"
  - "color-swatches.html"
---

# Color Palette Generator

## How This Works

Given a single brand color, this skill generates a complete, WCAG-accessible palette including:
- Primary, secondary, accent colors
- Light/dark neutral shades
- Semantic colors (success, warning, error)
- All combinations checked for WCAG AA contrast

## When to Use This Skill

- You have a brand color but need a complete palette
- You want to ensure accessibility from the start
- You're using the generated palette in site-generator

## Step-by-Step Process

1. User provides one color (hex or name)
2. Claude analyzes the color (hue, saturation, lightness)
3. Generates complementary, analogous, and neutral colors
4. Tests all text/background combinations for WCAG AA compliance
5. Produces JSON (for programmatic use) + HTML swatches (for preview)

## Input Format

The user provides:
```json
{
  "primaryColor": "#2563EB",  // hex or color name
  "brandName": "Acme Corp",
  "mood": "professional"      // optional: influences saturation/contrast
}
```

## Output Format

### color-palette.json
```json
{
  "primary": "#2563EB",
  "secondary": "#1E40AF",
  "accent": "#7C3AED",
  "success": "#16A34A",
  "warning": "#F97316",
  "error": "#DC2626",
  "neutral": {
    "dark": "#1F2937",
    "light": "#F9FAFB",
    "border": "#E5E7EB"
  },
  "wcagCompliance": {
    "AA": true,
    "AAA": false
  }
}
```

### color-swatches.html
A visual preview of the palette with contrast ratios displayed.

## Tips for Best Results

- **Use hex colors** — More precise than color names
- **Provide mood context** — "Professional" vs "playful" affects generation
- **Review swatches** — Always check the HTML preview
- **Test on your site** — Colors look different in context

## Common Issues & Solutions

**Issue:** Generated colors feel washed out
- **Solution:** Provide a more saturated primary color, or add `mood: "bold"`

**Issue:** Contrast ratios are failing WCAG
- **Solution:** The algorithm failed; try a different primary color with higher contrast to white

## What Comes Next

Use the generated palette in:
- **site-generator** — Pass color-palette.json as brand colors
- **brand-to-images** — Image prompts reference your palette
- **content-auditor** — Reviews color usage consistency
```

---

## File Structure

Every skill should have this directory layout:

```
.claude/skills/my-skill/
├── SKILL.md                    # Main documentation (required)
├── references/                 # Supporting documentation
│   ├── question-bank.md        # Questions for interviews
│   ├── best-practices.md       # Industry standards, tips
│   └── schema.json             # Data schemas expected/produced
├── scripts/                    # Helper code (optional)
│   ├── validate.js             # Validate outputs
│   └── helpers.py              # Python utilities
└── templates/                  # Template files (optional)
    ├── template-1.html         # HTML templates
    └── template-2.css          # CSS templates
```

### references/ — What Goes Here

**Interview question banks** (for skills that ask questions):
```markdown
# Questions for Site Interview

## Business Essentials
1. What's the name of your business?
2. What industry are you in?
3. Can you describe what you do in one sentence?

## Audience
1. Who is your ideal customer?
2. What problems do they have?
3. Where do they spend time online?
```

**Best practices docs:**
```markdown
# SEO Best Practices for Websites

## Technical SEO
- Semantic HTML5 markup
- Valid schema.org structured data
- Fast load times (< 2.5s)

## On-Page SEO
- Keyword in H1 tag
- Meta description under 160 chars
- Internal linking strategy

## Off-Page
- Build backlinks from relevant sites
- Monitor Google Search Console
```

**Data schemas** (JSON or YAML):
```json
{
  "site-brief.json": {
    "businessProfile": {
      "businessName": "string",
      "industry": "string",
      "businessMission": "string"
    }
  }
}
```

### scripts/ — What Goes Here

Helper code that Claude calls to:
- **Validate** input (is this valid HTML? Does this JSON match schema?)
- **Transform** data (convert site-brief to design guidelines)
- **Analyze** (scan for broken links, performance issues)
- **Generate** (create placeholder content, color palettes)

**Example validation script** (Node.js):
```javascript
// validate-site-brief.js
const fs = require('fs');

function validateSiteBrief(filePath) {
  const brief = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const errors = [];

  // Check required fields
  if (!brief.businessProfile?.businessName) {
    errors.push('Missing: businessProfile.businessName');
  }

  if (!brief.pages?.required || brief.pages.required.length === 0) {
    errors.push('Missing: at least one required page');
  }

  return {
    valid: errors.length === 0,
    errors,
    summary: brief.businessProfile?.businessName || 'Unknown'
  };
}

const result = validateSiteBrief(process.argv[2]);
console.log(JSON.stringify(result, null, 2));
```

**Example transform script** (Python):
```python
#!/usr/bin/env python3
# extract-palette.py
# Converts site-brief.json brand colors to CSS custom properties

import json
import sys

def extract_palette(site_brief_path):
    with open(site_brief_path) as f:
        brief = json.load(f)

    colors = brief.get('brand', {}).get('colorPalette', {})

    css_vars = ':root {\n'
    for color_name, color_value in colors.items():
        css_name = f'--color-{color_name.lower()}'
        css_vars += f'  {css_name}: {color_value};\n'
    css_vars += '}'

    return css_vars

if __name__ == '__main__':
    site_brief = sys.argv[1]
    css = extract_palette(site_brief)
    print(css)
```

### templates/ — What Goes Here

Ready-to-use HTML/CSS/JS templates that Claude customizes:

```html
<!-- templates/hero.html -->
<section class="hero">
  <div class="container">
    <h1 class="hero__title">{{ businessName }}</h1>
    <p class="hero__tagline">{{ tagline }}</p>
    <button class="button">{{ primaryCTA }}</button>
  </div>
</section>
```

CSS templates with variables:
```css
/* templates/base.css */
:root {
  --primary: var(--color-primary);
  --secondary: var(--color-secondary);
  --font-size-base: 16px;
  --font-family-body: var(--font-body);
  --spacing-unit: 8px;
}
```

---

## How Skills Chain Together

Skills consume outputs from other skills:

```
site-interviewer (skill)
    ↓ produces
site-brief.json (data)
    ↓ consumed by
brand-to-images (skill)
    ↓ produces
image-prompts.md (data)

site-brief.json (data)
    ↓ consumed by
site-generator (skill)
    ↓ produces
index.html + styles.css (files)
    ↓ consumed by
form-wiring (skill)
    ↓ produces
index.html (updated with form handlers)
```

**When designing your skill:**
1. **What input does it expect?** → Reference other skills' outputs
2. **What output does it produce?** → Design for downstream skills
3. **Is there a schema?** → Document it clearly
4. **How do I know it worked?** → Include validation examples

---

## Testing Your Skill

Before submitting a PR, thoroughly test:

### 1. Test Locally
```bash
cd .claude/skills/my-skill
claude skill:run my-skill
```

Try it with:
- **Normal inputs** — Does it work with clean, expected data?
- **Edge cases** — Empty strings, missing fields, special characters
- **Large inputs** — Does it handle verbose/complex data?
- **Bad inputs** — Invalid JSON, wrong data types, malformed HTML

### 2. Verify Outputs
```bash
# Check that all promised outputs exist
ls -la output/
# Validate JSON outputs
cat output/data.json | jq '.' > /dev/null
# Verify HTML is valid
tidy -q output/index.html
```

### 3. Test Integration
If your skill produces output for another skill:
```bash
# Run skill A
claude skill:run skill-a
# Use output as input for skill B
claude skill:run skill-b
```

Does skill B accept the format? Are there errors? Mismatches?

### 4. Check Documentation
- [ ] SKILL.md is clear and complete
- [ ] Examples show real inputs/outputs
- [ ] Error messages are helpful
- [ ] Prerequisites are listed
- [ ] References are thorough

### 5. Performance
- How long does it take?
- Does it timeout on large inputs?
- Could it be optimized?

---

## Description Optimization Tips

Your skill's description appears in CLI and docs. Make it count:

### Good Descriptions
- "Generates responsive hero sections with brand colors and CTA buttons"
- "Audits site for SEO, keywords, Core Web Vitals, and accessibility"
- "Converts Markdown content to semantic HTML with optimized images"

### Bad Descriptions
- "Does stuff with websites"
- "Helps you build"
- "Website tool"

### Formula for Good Descriptions
```
[Action] [Input] [→ Output]

Examples:
- "Converts site-brief.json → production-ready HTML/CSS"
- "Audits HTML sites → detailed SEO reports + recommendations"
- "Generates image prompts → brand-aligned visual assets"
```

---

## Version Management

Use **semantic versioning**: MAJOR.MINOR.PATCH

- **MAJOR** (1.0.0 → 2.0.0) — Breaking changes to input/output
- **MINOR** (1.0.0 → 1.1.0) — New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1) — Bug fixes, no feature changes

When you update a skill, update the version in SKILL.md.

---

## Common Skill Patterns

### Pattern 1: Interview Skill
Asks user questions, produces structured data (JSON).

```markdown
## How This Works
1. Ask question 1
2. Ask follow-up questions
3. Ask question 2
4. ... (more questions)
5. Generate JSON output
6. Summarize what you heard
```

### Pattern 2: Generator Skill
Takes data (JSON), produces code (HTML/CSS/JS).

```markdown
## How This Works
1. Read input JSON
2. Validate schema
3. Generate HTML from templates
4. Apply brand colors/fonts
5. Optimize output
6. Return HTML file
```

### Pattern 3: Auditor Skill
Analyzes output (HTML/CSS/performance), produces report.

```markdown
## How This Works
1. Read HTML site
2. Check for common issues
3. Scan for SEO, accessibility, performance
4. Generate report markdown
5. Provide actionable recommendations
```

### Pattern 4: Optimizer Skill
Takes HTML/CSS, improves it, returns optimized version.

```markdown
## How This Works
1. Parse CSS
2. Remove unused rules
3. Minify
4. Optimize images
5. Return optimized files
```

### Pattern 5: Wiring Skill
Connects features (forms, analytics, etc.) to services.

```markdown
## How This Works
1. Read HTML
2. Find form elements
3. Add event handlers
4. Connect to service (Resend, etc.)
5. Return updated HTML
```

---

## Getting Help

Questions while developing your skill?

- **Read existing skills** — site-interviewer and performance-optimizer are well-documented
- **Review this guide** — Likely answers are here
- **Open a GitHub Issue** — We'll take a look
- **Open an issue** — We'll help if you're stuck

Happy skill building! 🚀
