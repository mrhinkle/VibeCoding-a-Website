# Nano Banana Prompt Guide

This guide teaches you how to write prompts that Nano Banana (Claude's image generation model) will interpret correctly and beautifully.

## The Nano Banana Model

Nano Banana is a visual generation model that excels at:
- Photorealistic images (people, places, objects)
- Illustrated/stylized imagery
- Scene composition and lighting
- Color harmony and mood
- Detailed textures and materials

Nano Banana struggles with:
- Embedding readable text (logos, signs, captions)
- Generating specific, recognizable faces (privacy/legal reasons)
- Rendering precise technical diagrams
- Complex 3D architecture
- Very abstract concepts

## Prompt Structure

A good Nano Banana prompt has these layers:

### 1. Subject (What is in the image?)
Be specific. Instead of "a person," say "a woman in her 30s, professional attire, warm smile."

**Good:** "A barista crafting a latte in a modern coffee shop"
**Bad:** "Coffee"

### 2. Setting/Context (Where is it happening?)
Ground the subject in a real or imagined place.

**Good:** "...in a sun-filled café with warm wood tones and minimalist design"
**Bad:** "...in a place"

### 3. Lighting & Mood (How does it feel?)
Describe the quality of light and emotional tone.

**Good:** "Golden hour light streaming through tall windows, creating warm shadows. The mood is calm and inviting."
**Bad:** "Well-lit, nice"

### 4. Style & Medium (How is it rendered?)
Photography, illustration, oil painting, 3D render, etc.

**Good:** "Photography style: warm, lifestyle, authentic, shot with a 50mm lens"
**Bad:** "Nice photo"

### 5. Color Palette (What colors dominate?)
Mention 2-3 primary colors and how they're balanced.

**Good:** "Warm neutrals with touches of sage green and terracotta. Natural, earthy color harmony."
**Bad:** "Good colors"

### 6. Composition Details (What's the focal point?)
Describe depth, perspective, and what draws the eye.

**Good:** "Shallow depth of field, sharp focus on the cup, blurred café background"
**Bad:** "Good composition"

## Formula

Here's a template you can follow:

```
A [photography/illustration style] image of [SUBJECT with details] 
in [SETTING with atmosphere]. 
The [LIGHTING/MOOD] creates [emotional tone]. 
Color palette: [primary], [secondary], and [accent], 
with [balance description]. 
[Composition/focal point detail]. 
Style: [visual style], [any specific technique]. 
Mood: [emotional descriptor].
```

**Example using this formula:**

```
A warm, authentic lifestyle photograph of a diverse team of four professionals 
in a modern, minimalist office. 
The bright, natural light from floor-to-ceiling windows creates a sense of openness and possibility. 
Color palette: navy blues, warm golds, and soft grays, balanced with plenty of white space. 
Shallow depth of field with sharp focus on the team members collaborating at a clean wooden table. 
Style: contemporary photography, shot with natural, honest perspective. 
Mood: professional, collaborative, approachable, creative.
```

Compare this to a lazy version:

```
A photo of a team in an office.
```

The first will generate a cohesive, beautiful image. The second will likely be generic and uninspired.

## Writing Tips

### Be Visual, Not Abstract

Nano Banana responds to what you can SEE, not what you mean.

**Instead of this:** "Convey trust and reliability"
**Write this:** "A confident professional in a modern office, shaking hands with a client, with strong posture and genuine warmth in their expression"

**Instead of this:** "Show innovation"
**Write this:** "A sleek, futuristic workspace with cutting-edge technology integrated seamlessly into a minimal, clean environment"

**Instead of this:** "Express joy"
**Write this:** "A group of people with genuine smiles, laughing together in a bright, warm setting, their body language relaxed and genuine"

### Use Specific Details

Vague prompts generate vague images.

**Good:** "A woman in her mid-40s, wearing a tailored blazer and glasses, working at a standing desk in a sunlit office"
**Bad:** "A businesswoman"

**Good:** "Three colleagues of different ethnicities, dressed in smart casual (jeans, blazers, clean sneakers), actively discussing something on a whiteboard"
**Bad:** "Team meeting"

**Good:** "A close-up of hands—one holding a pen, one gesturing—over architectural blueprints on a desk, with coffee nearby"
**Bad:** "Work scene"

### Describe Lighting Specifically

Lighting is the difference between a dull image and a stunning one.

**Instead of:** "Good lighting"
**Say:** "Golden hour sunlight filtering through sheer curtains, creating soft, warm shadows on the subject's face"

**Instead of:** "Bright"
**Say:** "Even, bright, overhead lighting from modern minimalist fixtures, with no harsh shadows"

**Instead of:** "Natural"
**Say:** "Diffused daylight from a north-facing window, cool and even, ideal for detailed work"

### Color Harmony

Nano Banana understands color theory. Use it.

**Good:** "Color palette: deep navy primary, warm gold secondary, cream/white for breathing room. The navy and gold create visual interest while the white keeps the overall feel clean and modern."

**Less good:** "Various colors"

**Good:** "Saturated jewel tones—deep emerald, rich burgundy—with gold accents, creating a luxurious, sophisticated palette"

**Less good:** "Pretty colors"

### Photography vs. Illustration

Be clear about the style you want.

**Photography prompts:**
- Include camera/lens language: "shot with a 35mm lens," "wide-angle perspective," "shallow depth of field"
- Mention realistic textures and materials
- Describe natural/real-world lighting
- Use photography terms: "composition," "exposure," "white balance"

**Illustration prompts:**
- Specify the illustration style: "watercolor," "line art," "vector illustration," "anime," "children's book illustration"
- Describe color application: "bold strokes," "subtle gradients," "flat colors"
- Use illustration terms: "sketch," "rendered," "illustrated," "stylized"

**Example Photography Prompt:**
"A lifestyle photograph of a chef tasting their creation, genuine expression of satisfaction. Shot with warm, diffused lighting from studio strobes. Natural color grading with warm tones. Shallow depth of field with sharp focus on the chef's face, blurred kitchen background. 50mm lens, professional food photography style."

**Example Illustration Prompt:**
"A watercolor illustration of a cozy bookstore interior. Soft, diffused light from vintage lamps. Color palette: warm creams, sage green, and burnt orange, with detailed watercolor textures. The illustration is detailed yet whimsical, inviting and warm. Storybook illustration style."

## Avoiding Common Mistakes

### Mistake 1: Asking for Text in Images

Nano Banana cannot reliably embed readable text into images. This includes:
- Logos with specific words
- Headlines or captions
- Watermarks
- Signs with text
- Business cards with copy

**Don't say:** "A poster with the words 'Your Company Here' at the top"
**Do say:** "A striking, minimalist poster design with a bold background color and a clear, empty focal point where a headline could be overlaid"

Then add the text in your design tool (Figma, HTML, etc.).

### Mistake 2: Asking for Specific Branded Elements

Nano Banana cannot generate:
- Apple logo
- Nike swoosh
- Coca-Cola bottle
- Specific celebrities or trademarked characters

**Don't say:** "Someone using an iPhone"
**Do say:** "Someone using a modern smartphone in a minimalist design environment"

**Don't say:** "The Google office"
**Do say:** "A modern tech company office with clean lines, bright natural light, and minimalist design"

### Mistake 3: Conflicting Directions

Don't ask for opposite things.

**Don't say:** "A bold yet minimalist composition" (contradictory)
**Do say:** "A minimalist composition with one bold element drawing the eye"

**Don't say:** "Energetic yet calm" (contradictory)
**Do say:** "A calm composition with warm, inviting tones"

### Mistake 4: Vague Instructions

Vague prompts generate average images.

**Don't say:** "A nice office"
**Do say:** "A bright, modern office with floor-to-ceiling windows, minimal furniture, warm wood floors, and two colleagues collaborating at a clean white desk"

### Mistake 5: Over-Specifying

Too many details can make images feel claustrophobic or confused.

**Don't say:** "A woman wearing a specific shade of teal, with golden hair, three freckles, a pearl necklace, and a background showing every detail of a Victorian mansion"
**Do say:** "A woman in her 30s with warm tones in her complexion, wearing professional attire, photographed in a bright, elegant interior with classic architectural details"

## Prompt Length & Density

**Sweet spot:** 150-250 words

- **Too short (50 words or less):** Nano Banana doesn't have enough context; results are generic
- **Optimal (150-250 words):** Detailed enough for specificity, concise enough for clarity
- **Too long (400+ words):** Nano Banana may focus on minor details and miss the big picture

## Prompt Density Across Common Image Types

### Hero Images

**Goal:** Grab attention, convey brand mood, drive conversion

**Length:** 180-220 words

**Focus:** Strong composition, clear focal point, brand color harmony, mood/emotion

```
A dynamic lifestyle photograph of a diverse team of five professionals 
in a bright, modern workspace. 
They're collaborating around a large wooden table, with some standing, some seated, 
all engaged and energized. 
Natural light floods in from floor-to-ceiling windows, 
creating bright, airy conditions with subtle shadows. 
Color palette: warm whites, deep navy, and gold accents, balanced with bright, clean tones. 
Shallow depth of field with sharp focus on the team members, 
creating a sense of connection and energy. 
Photography style: contemporary, authentic lifestyle, shot with a 35mm lens. 
Mood: professional, collaborative, innovative, approachable.
```

### Section Background Images

**Goal:** Support text without competing, reinforce brand

**Length:** 150-180 words

**Focus:** Subtle, supports copy, color harmony, texture/depth

```
A minimalist abstract background illustrating growth and forward motion. 
Soft, layered shapes in warm golds, deep navy, and cream create depth and movement. 
The composition is balanced, with plenty of negative space allowing text to sit comfortably over it. 
Photography style: modern design/texture, with subtle gradients and soft focus. 
The overall effect is sophisticated and calm, reinforcing trust and professionalism 
without demanding attention.
```

### Team/About Images

**Goal:** Show personality, diversity, authentic connection

**Length:** 200-240 words

**Focus:** Genuine emotion, diversity, approachability, natural interaction

```
A warm, authentic photograph of a diverse team of four professionals 
in a comfortable, modern office setting. 
They're in genuine conversation—some smiling, some listening intently—
with relaxed body language that suggests real teamwork. 
Warm, natural light from windows creates a sense of openness. 
Color palette: warm neutrals, touches of sage and terracotta, balanced with white. 
The photography is lifestyle-oriented, shot with available light, 
with a shallow depth of field to emphasize connection. 
Photography style: authentic, candid, real-world feel, not staged. 
Mood: trustworthy, collaborative, human, friendly.
```

### Icons or Illustrations

**Goal:** Communicate concept simply, support brand

**Length:** 120-150 words

**Focus:** Simplicity, clarity, brand color usage

```
A simple, clean vector illustration of [concept], 
rendered in a minimal, modern style. 
The icon uses bold navy as the primary color with gold accents. 
The design is geometric and modern, with smooth curves and intentional negative space. 
No text is embedded; the icon communicates through simple, universal shapes. 
Style: flat design, professional, scalable to any size. 
The overall aesthetic is clean, modern, and trustworthy.
```

## Iteration and Refinement

Nano Banana generates multiple variations. Use this process:

1. **Generate 3-5 variations** of the same prompt
2. **Review all variations** — which captures your vision best?
3. **Refine the prompt** based on what worked (or didn't)
4. **Generate again** with the refined version
5. **Repeat** until you have a final image

**Refinement examples:**

If the generated image is too dark:
"Increase overall brightness and warmth; the image should feel airy and open"

If colors feel muted:
"Use more saturated, vivid colors while maintaining the sophisticated mood"

If the composition feels cluttered:
"Simplify the background; focus sharply on the subject with softer, blurred surroundings"

If it feels too stiff/formal:
"Add more authentic, candid energy; capture a genuine moment rather than a posed shot"

## Real Examples

### Example 1: SaaS Hero

**Prompt:**
```
A modern, minimalist product screenshot showing a clean dashboard interface, 
displayed on a laptop screen in a bright, contemporary workspace. 
A professional user is visible in soft focus behind the laptop, with an expression of accomplishment. 
Bright, natural light from floor-to-ceiling windows creates an airy, optimistic mood. 
Color palette: cool blues, white, with small accents of vibrant teal. 
The composition emphasizes the technology while keeping the human element present and approachable. 
Photography style: product lifestyle, contemporary, authentic. 
Mood: innovative, trustworthy, accomplishment-focused.
```

**What makes this work:**
- Specific product context (dashboard on laptop)
- Human element balanced with technology
- Clear color palette aligned with tech aesthetics
- Authentic feeling, not over-produced
- Lighting direction that reinforces the mood

### Example 2: Professional Services Hero

**Prompt:**
```
A confident professional woman in her 40s in a modern office, 
wearing tailored business casual (blazer, clean lines), 
sitting at a minimalist desk with a client rapport evident in body language. 
Warm, diffused natural light from a nearby window creates soft, professional lighting. 
Color palette: deep navy, warm neutrals, and gold accents, balanced with white. 
Sharp focus on the professional's face showing genuine confidence and warmth; 
soft focus on the office background. 
Photography style: corporate lifestyle, authentic, warm, approachable. 
Mood: experienced, trustworthy, approachable, professional.
```

**What makes this work:**
- Specific professional appearance
- Warm lighting (often associated with trust)
- Clear color palette for brand
- Authentic, not overly corporate
- Emotional tone matches the mood

### Example 3: Creative Agency Hero

**Prompt:**
```
A dynamic, creative workspace scene with diverse designers collaborating. 
Multiple large monitors display colorful design work; sketches and mood boards line a wall. 
The team is animated and engaged, with genuine smiles and relaxed posture. 
Bright, energetic natural light emphasizes the creative energy in the space. 
Color palette: clean whites and grays as the foundation, 
with pops of bold design work visible on screens and boards. 
Photography style: creative lifestyle, authentic, energetic, contemporary. 
Composition: wide-angle to capture the full creative environment. 
Mood: creative, energetic, collaborative, inspiring.
```

**What makes this work:**
- Shows the actual work (design, not just people)
- Captures authentic creative energy
- Dynamic composition matches the mood
- Specific environmental details ground the scene
- Color palette emerges naturally from the creative work shown

## Nano Banana Quirks & Workarounds

### Quirk 1: Difficulty with Exact Colors

Nano Banana may not render exact brand colors. Workaround: Describe colors by mood/association instead of hex.

**Instead of:** "#2563EB blue"
**Say:** "Rich, professional blue reminiscent of trust and stability"

### Quirk 2: Face Generation Limitations

Nano Banana generates faces but may struggle with perfect likeness or specific expressions. Workaround: Describe expression/emotion, not exact features.

**Instead of:** "A person who looks exactly like..."
**Say:** "A confident professional with a warm, genuine smile"

### Quirk 3: Text Is Unreliable

Already covered, but worth repeating: Never embed text in images; add it in your design tool.

### Quirk 4: Perspective Can Be Wonky

If composition feels off, explicitly direct the camera angle.

**Better:** "Shot from a slightly elevated camera angle, looking down at the scene with a 35mm lens"
**Instead of:** "A good angle"

## Testing Your Prompts

Before running through Manus for production images, test your prompts:

1. **Read it aloud.** Does it paint a clear mental picture?
2. **Check for contradictions.** Does it ask for opposing things?
3. **Verify no forbidden content.** No embedded text, no specific faces, no branded logos?
4. **Test length.** Is it 150-250 words? (adjust if necessary)
5. **Generate 3 variations** and compare; refine based on results

## Summary Checklist

Before sending a prompt to Nano Banana, verify:

- [ ] Subject is specific and detailed
- [ ] Setting/context is clear
- [ ] Lighting and mood are described
- [ ] Style/medium is explicit
- [ ] Color palette is mentioned
- [ ] Composition/focal point is clear
- [ ] No embedded text
- [ ] No specific branded elements
- [ ] No contradictory directions
- [ ] 150-250 words (roughly)
- [ ] Prompt is visual, not abstract

If you can check all these boxes, your prompt is ready for Nano Banana.
