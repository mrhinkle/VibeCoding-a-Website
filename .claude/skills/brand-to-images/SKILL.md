---
name: "brand-to-images"
description: "Transforms brand guidelines into optimized image prompts for Manus + Nano Banana, covering hero images, backgrounds, icons, OG images, and more."
author: "VibeCoding Team"
version: "1.0.0"
tags: ["brand", "image-generation", "manus", "nano-banana", "visual-content"]
modelRequirements:
  minTokens: 4000
prerequisites:
  - "site-brief.json from site-interviewer skill OR brand guidelines provided directly"
outputs:
  - "image-prompts.md (organized image prompts by page/section)"
  - "prompt-log.json (metadata about generated prompts)"
---

# Brand-to-Images Skill

This skill takes your brand guidelines and transforms them into image prompts optimized for **Manus** (image generation orchestration) and **Nano Banana** (Claude's visual generation model). The result is a collection of production-ready prompts that you can feed directly into Manus to generate cohesive, on-brand images.

## How This Works

**Input:** Either a `site-brief.json` from the site-interviewer skill, or brand guidelines you provide directly.

**Process:**
1. Extract brand elements (colors, tone, mood, industry)
2. Map your website pages to image needs (hero, sections, team, etc.)
3. Generate detailed, visual prompts optimized for Nano Banana
4. Organize by page and image type for easy reference
5. Include usage guidance for each image type

**Output:** A `image-prompts.md` file with prompts organized by page, plus guidance on how to use Manus to execute them.

## Key Concepts

### Nano Banana Best Practices

Nano Banana (Claude's image generation model) works best when:
- Prompts are **visual and specific** (describe what you see, not abstract concepts)
- Prompts avoid **text within images** (no logos, watermarks, or words overlaid)
- Prompts include **style/mood descriptors** (not just "a photo of X")
- Prompts are **concise but vivid** (200 words is the sweet spot)
- Prompts use **photographic or illustrative language** depending on the image type

### What You Cannot Do with Images

Before generating prompts, understand these limitations:
- Cannot generate text/logos inside images (must be added in design)
- Cannot generate faces that are too recognizable (for legal reasons)
- Cannot generate trademarked products or brand logos
- Should avoid generating specific people (use generic archetypes instead)

See `references/nano-banana-prompt-guide.md` for complete best practices.

## Skill Workflow

### Step 1: Load Brand Data

You can provide:
- **Option A:** A `site-brief.json` file (from site-interviewer)
- **Option B:** Brand guidelines directly in this conversation

If loading from site-brief.json:
```
Please load /path/to/site-brief.json and extract:
- Brand colors and palette
- Brand tone/mood
- Website pages needed
- Industry/business type
- Target audience description
```

If providing directly:
```
Brand Name: [X]
Industry: [X]
Target Audience: [X]
Brand Colors: [primary], [secondary], [accent]
Brand Tone: [mood descriptors]
Website Pages: [home, about, services, contact, etc.]
```

### Step 2: Map Image Needs

Based on pages and industry, I'll identify what images you need:
- **Home Page:** Hero image, key section backgrounds
- **About Page:** Team photos (or illustrated team), office/workspace, mission visual
- **Services/Products:** Section headers, product showcases, benefit illustrations
- **Contact Page:** Office location image or contact illustration
- **Blog:** Featured images, category headers
- **General:** Social media OG images, favicon concept, footer imagery

### Step 3: Generate Image Prompts

For each image, I'll create:
1. **Nano Banana Prompt** — Optimized for image generation
2. **Image Specs** — Size, format, usage context
3. **Mood/Style** — Specific visual style (photographic, illustrated, etc.)
4. **Variation Notes** — How to adjust for different contexts

### Step 4: Output image-prompts.md

Organized like this:

```markdown
# Image Prompts: [Business Name]

## Brand Summary
[Thumbnail of brand: colors, tone, visual style]

## Home Page

### Hero Image
**Nano Banana Prompt:**
[Detailed visual prompt]

**Specs:**
- Dimensions: 1920x1080px
- Format: JPG with optimized for web
- Alt text: [accessible description]
- Usage: Full-width above the fold

**Style Guide:**
- Mood: energetic, professional, approachable
- Color harmony: Should incorporate [primary color] naturally
- Photography style: Lifestyle/authentic (not stock photo vibes)

---

## About Page

### Team Illustration
[Similar structure]

---

```

## Image Type Library

See `references/image-types.md` for detailed specifications for:
- Hero images (dimensions, safe zones, text overlays)
- Background images (patterns, opacity, text overlay compatibility)
- Section headers (aspect ratios, focal point guidance)
- Team/People images (diversity, approachability, business casual)
- Icons & illustrations (stroke weight, color usage, scale)
- OG/Social images (dimensions per platform, text integration)
- Favicon concepts (simplicity, scalability)

## Prompt Template Examples

Here are template examples for different moods. Adapt these based on brand:

### Professional & Trustworthy

```
A [photography style] image of [subject] in a modern, clean environment. 
The composition conveys [tone]: [specific details]. 
Color palette emphasizes [primary color] and [secondary color], with natural lighting. 
Sharp focus on [key element], with subtle [background detail]. 
Professional and approachable, not stiff or corporate.
```

### Playful & Creative

```
A vibrant [style] image of [subject] with energy and personality. 
The composition is dynamic and engaging, showing [specific moment]. 
Color palette leans into [primary color] with bursts of [accent color]. 
The mood is friendly and approachable, inviting [audience] to connect. 
Authentic and human, avoiding clichés.
```

### Minimal & Modern

```
A clean, minimalist [style] composition of [subject]. 
Plenty of negative space, with focus on essential elements. 
Limited color palette: [primary], [secondary], and white/neutral. 
Geometric or natural lines create visual interest without clutter. 
Modern, sophisticated, and timeless.
```

### Bold & Ambitious

```
A striking, dynamic [style] image of [subject] with confidence and impact. 
High contrast, bold use of [primary color] and [secondary color]. 
Composition draws the eye to [focal point] with dramatic lighting or angle. 
The mood is forward-thinking and transformative. 
Contemporary and eye-catching.
```

## How to Use These Prompts with Manus

Once you have `image-prompts.md`, the workflow is:

1. **Copy a prompt** from the markdown file
2. **Open Manus** (or invoke it via Claude Code)
3. **Paste the prompt** and specify:
   - Dimensions (if not in prompt)
   - Any style variations (e.g., "more illustration, less photography")
   - Number of variations to generate (usually 3)
4. **Manus routes to Nano Banana** and generates images
5. **Download and review** the generated images
6. **Integrate into your design** (Figma, HTML, etc.)

Example Manus invocation:
```
Generate image using Nano Banana:
Prompt: [paste prompt from image-prompts.md]
Dimensions: 1920x1080
Variations: 3
Style override: "more illustration, less photography"
```

## Tips for Success

### Writing Image Prompts

- **Be visual, not abstract.** Instead of "convey trust," say "people shaking hands in a bright, open office."
- **Avoid forbidden content.** No embedded text, no branded logos, no trademarked products.
- **Use sensory language.** "Warm, soft lighting" vs. "good lighting." "Rich blues and golds" vs. "nice colors."
- **Include context clues.** If the image is for a financial services company, describe "modern office setting" or "professional workspace."
- **Specify the vibe.** Are we aiming for authentic/real, stylized, illustrated, photographic? Say it.

### Avoiding Common Mistakes

- **Too many words.** Nano Banana doesn't get better with 500-word prompts. Clear and vivid beats verbose.
- **Contradictory direction.** Don't ask for "bold yet minimal" or "energetic and calm." Choose one and embrace it.
- **Overthinking the brand colors.** Colors should appear naturally, not forced. A hero image about cooking doesn't need to be aggressively branded.
- **Vague subjects.** "A team" is worse than "Five diverse professionals in business casual, laughing in a sunlit office."
- **Trying to embed text.** Nano Banana can't add readable text. Never ask for "a poster with the words 'Contact Us.'"

### Revising Generated Images

If a generated image isn't quite right:
- **Adjust the prompt,** not the generated image
- Common tweaks: "more colorful," "less saturated," "add more people," "emphasize [element]"
- Generate 3 variations and compare
- Save the best one; regenerate if none fit

## Common Image Scenarios by Business Type

### SaaS Company

**Hero:** Dashboard or person using software, with confident posture and bright, tech-forward environment
**About:** Team collaboration, diverse group in modern office
**Features:** Use icons or illustrated diagrams (minimal text)
**Social OG:** Bold typography area + illustrative background

### Ecommerce Brand

**Hero:** Lifestyle shot of product in context (e.g., shoes on someone running, not just shoe photos)
**Category Pages:** Product closeups with styling context
**About:** Founder or team in the space where products are made
**Social OG:** Product hero + lifestyle context

### Professional Services (Law, Accounting, Consulting)

**Hero:** Confident professional in modern office setting, or abstract visual (graphs, handshake) that suggests partnership
**About:** Team photos, office space, client collaboration
**Services:** Icons and illustrative diagrams for each service
**Social OG:** Minimal, professional layout with accent color

### E-learning / Education

**Hero:** Engaged learner, diverse group in learning moment, or abstract visual of growth/knowledge
**Course Pages:** Section illustrations showing learning outcomes
**Testimonials:** Real or illustrated faces with warm, approachable mood
**Social OG:** Inspiring, motivational visual

### Creative Services (Design, Marketing, Branding)

**Hero:** Creative work in progress, inspired workspace, or abstract visual of creativity
**Portfolio:** Showcase work samples (if possible) or abstract representations
**About:** Founder/team in creative workspace
**Social OG:** Bold, creative, eye-catching composition

## When to Use This Skill

- After completing site-interviewer and having a `site-brief.json`
- When you want to establish visual consistency across your website
- Before you start designing or building HTML
- When you need to brief a designer or developer on visual direction
- When you want to generate hero images, backgrounds, and supporting visuals quickly

## What Comes Next

Once you have `image-prompts.md`:

1. **Run prompts through Manus** to generate actual images
2. **Review and iterate** — adjust prompts if needed, regenerate
3. **Download images** for use in design and development
4. **Integrate into site-builder** — feed generated images into your HTML/CSS
5. **Optimize for web** — compress, lazy-load, ensure fast performance

## Example: From Brand to Images

**Input (from site-brief.json):**
- Business: "Bloom Design" (branding agency)
- Tone: "professional but approachable, creative, trustworthy"
- Target audience: "Small business founders, busy, non-designers"
- Colors: Navy, gold, white
- Pages: Home, About, Services, Contact, Blog

**Output (image-prompts.md excerpt):**

### Home Hero Image
**Prompt:**
"A modern office scene with a diverse group of three professionals collaborating at a wooden table. They're reviewing design mockups and mood boards, engaged and focused. Warm, natural lighting from a large window. Minimalist decor with navy and gold accents. The mood is creative yet professional, approachable and collaborative. Photography style: lifestyle, authentic, not staged."

**Specs:**
- Size: 1920x1080px
- Alt: "Team reviewing design work together"
- Usage: Full-width hero above fold

---

This approach ensures every image reinforces your brand, speaks to your audience, and can be generated quickly using Manus and Nano Banana.
