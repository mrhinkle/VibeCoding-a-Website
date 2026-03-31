# Image Types & Specifications for Website Design

This guide provides detailed specifications for each image type you'll need when building a website. Each section includes dimensions, use cases, best practices, and guidance for creating AI-generated image prompts.

## Table of Contents

1. [Hero Images](#hero-images)
2. [Background Images](#background-images)
3. [Section Header Images](#section-header-images)
4. [Team & People Images](#team--people-images)
5. [Icons & Illustrations](#icons--illustrations)
6. [Social Media & OG Images](#social-media--og-images)
7. [Favicon Concepts](#favicon-concepts)
8. [Quick Reference Guide](#quick-reference-guide)

---

## Hero Images

**Purpose:** The main visual centerpiece above the fold on landing pages, homepage, or major section landing pages. Sets the tone for the entire page.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 1920 × 1080 px (16:9 ratio) or 1600 × 900 px |
| **File Format** | WebP (preferred), JPG (fallback) |
| **File Size** | 150–300 KB (optimized) |
| **Placement** | Full viewport width, typically with text overlay |
| **Alt Text** | Descriptive (e.g., "Professional team collaborating on project") |

### Use Cases

- Homepage hero section
- Product/service landing page headers
- Campaign pages
- About page opening visual
- Blog post featured image (different ratio: 1200 × 600 px)

### Best Practices for AI Image Generation

- **Composition:** Include clear focal point (person, object, or scene) centered or off-center with negative space for text overlay
- **Lighting:** Natural, professional lighting that conveys the mood (warm & inviting, cool & corporate, energetic & vibrant)
- **Subject Matter:** Feature people working, products in action, or abstract concepts relevant to your business
- **Color:** Use 2–3 dominant colors from your brand palette
- **Avoid:** Too much complexity; ensure text overlay will be readable (darker elements or subtle filters help)

### Prompt Template Example

```
A professional [demographic: e.g., "diverse team of software engineers"] 
collaborating around a [setting: e.g., "modern glass table in a bright, 
minimalist office"]. They are [action: e.g., "reviewing code on multiple 
screens, pointing and discussing"]. The lighting is [mood: e.g., "warm and 
natural, coming from large windows"], creating a sense of [feeling: e.g., 
"collaboration and innovation"]. The color palette is [colors: e.g., "blues, 
whites, and soft grays"]. The composition has [layout: e.g., "people on 
the left side of the frame, leaving space on the right for text overlay"].
High-resolution, professional photography style.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Text is illegible over image | Use darker subject matter on left/right edges; request subtle gradient filter in editing |
| Image feels too generic | Include specific details: e.g., "modern standing desk" instead of "desk" |
| People look stiff | Request action/movement: "laughing together," "leaning in to discuss," "gesturing naturally" |
| Colors clash with brand | Explicitly specify color palette in prompt; test with brand colors before finalizing |

---

## Background Images

**Purpose:** Subtle, often semi-transparent images that add visual interest without distracting from content.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 1920 × 1080 px (can be tiled or repeated) or 2560 × 1440 px for high-res |
| **File Format** | WebP, JPG, or PNG |
| **File Size** | 100–250 KB |
| **Opacity** | Typically 10–30% opacity when overlaid with content |
| **Placement** | Behind text, headers, or full-bleed sections |
| **Text Contrast** | Must maintain sufficient contrast with overlaid text |

### Use Cases

- Section dividers
- Testimonial sections
- Pricing table backgrounds
- FAQ sections
- Feature comparison backgrounds
- Pattern/texture backgrounds

### Best Practices for AI Image Generation

- **Subtlety:** Request subtle, out-of-focus, or abstract imagery that doesn't compete with text
- **Patterns:** Geometric patterns, abstract shapes, or soft gradients work well
- **Thematic:** Should relate to nearby content but remain unobtrusive
- **Color:** Use brand colors or complementary tones; avoid highly saturated colors
- **Texture:** Fabric textures, paper grain, or light gradients add depth without distraction

### Prompt Template Example

```
An abstract [subject: e.g., "geometric pattern" or "flowing liquid shapes"] 
in shades of [color palette: e.g., "soft blue and white"]. The image is 
[style: e.g., "heavily blurred and out of focus, with gentle gradients"]. 
The composition is [layout: e.g., "organic and flowing, filling the entire 
frame with movement from lower left to upper right"]. The overall mood is 
[feeling: e.g., "calm, professional, and modern"]. Very subtle, suitable 
for use as a background with text overlay at 20% opacity. No sharp details 
or recognizable objects.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Too visually busy | Request "heavily blurred," "very subtle," or "soft focus" |
| Text is hard to read | Add a semi-transparent overlay layer in CSS; choose darker background images |
| Distracts from content | Use abstract patterns or out-of-focus imagery instead of recognizable subjects |
| Looks unprofessional | Keep colors muted; avoid overly trendy styles; stick to geometric or natural patterns |

---

## Section Header Images

**Purpose:** Smaller hero images used above section titles or as visual separators between content blocks.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 1200 × 600 px (2:1 ratio) or 800 × 400 px for narrow sections |
| **File Format** | WebP (preferred), JPG |
| **File Size** | 80–150 KB |
| **Placement** | Above section title or full-width section header |
| **Text Overlay** | Often includes semi-transparent text overlay |

### Use Cases

- "Our Services" section header
- "How It Works" section opening
- "Customer Stories" intro image
- Blog category pages
- Feature section openers

### Best Practices for AI Image Generation

- **Thematic Relevance:** Directly represent the section topic (services, process, achievements)
- **Composition:** Include clear subject matter with room for text overlay
- **Consistency:** Match the style and color palette of hero images
- **Simplicity:** Cleaner and less detailed than hero images; easier to overlay text
- **Visual Hierarchy:** Draws attention without overwhelming

### Prompt Template Example

```
A [mood/style: e.g., "modern, professional"] image featuring 
[subject: e.g., "people in a business meeting discussing strategy"]. 
The scene shows [action: e.g., "collaboration, innovation, or growth"]. 
The setting is [environment: e.g., "contemporary office with minimalist decor"]. 
Lighting is [quality: e.g., "bright and clear, with soft shadows"]. 
The color palette includes [colors: e.g., "brand blue, white, and warm gray"]. 
The composition is [layout: e.g., "subject centered-left, leaving space on right 
for text overlay"]. Professional, clean, and suitable for use with semi-transparent 
text overlay.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Doesn't match hero style | Study the hero image style; request similar lighting, mood, and composition |
| Text legibility issues | Request darker subject matter in overlay areas; use a dark text overlay box |
| Feels disconnected from content | Make subject matter very explicit in prompt; test early and iterate |
| Too detailed/busy | Simplify composition; request "clean and minimal" aesthetic |

---

## Team & People Images

**Purpose:** Authentic, professional photos of team members for about pages, team directories, testimonial sections, or contributor lists.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 400 × 400 px (square, for profiles), 600 × 600 px (high-res), or 300 × 300 px (small thumbnails) |
| **File Format** | WebP, PNG (with transparency for cropped photos), JPG |
| **File Size** | 50–100 KB per image |
| **Background** | White, light gray, or transparent (for compositing) |
| **Aspect Ratio** | Square (1:1) for profile/team photos; landscape (4:3 or 3:2) for group photos |
| **Lighting** | Even, professional lighting for individual portraits; natural group lighting for team photos |

### Use Cases

- Team member profile cards
- Testimonial avatars
- About page team grid
- Leadership/founder profiles
- Contributors/partners list
- Video thumbnail portraits

### Best Practices for AI Image Generation

**Important Note:** AI-generated people images can sometimes look artificial. Consider these approaches:
1. Generate and test multiple variations
2. Use professional photography styles to improve realism
3. Focus on professional context (in office, at desk) rather than just faces
4. Keep poses natural and professional

- **Professional Context:** Place people in office settings, at desks, or in professional situations
- **Authenticity:** Request natural expressions and body language
- **Professional Styling:** Business casual or business formal attire
- **Consistency:** Generate all team images with similar lighting, backgrounds, and style
- **Diversity:** Explicitly request diverse representation if appropriate for your team

### Prompt Template Example (Individual Portrait)

```
A professional headshot portrait of a [demographic descriptor: e.g., "woman in 
her 30s"]. She is [action: e.g., "smiling naturally at the camera, sitting at 
a modern desk"]. She is wearing [clothing: e.g., "professional business casual 
attire in neutral tones"]. The background is [setting: e.g., "a clean, modern 
office with soft, blurred lighting"]. The lighting is [quality: e.g., "professional 
and even, with soft shadows that add dimension"]. The overall mood is 
[feeling: e.g., "approachable, confident, and professional"]. 
Professional headshot photography style. Square composition (suitable for 
cropping to 1:1 ratio). High resolution, suitable for web and print.
```

### Prompt Template Example (Group Photo)

```
A photo of [demographic descriptor: e.g., "a diverse team of 4-5 professionals"]. 
They are [action: e.g., "standing together in an office space, smiling and relaxed"]. 
The setting is [environment: e.g., "a modern, bright office with contemporary decor"]. 
Lighting is [quality: e.g., "natural and professional, with good depth of field"]. 
The composition is [layout: e.g., "horizontal, with team members at varying heights, 
arranged naturally"]. The color palette includes [colors: e.g., "whites, grays, and 
brand colors from clothing"]. Professional team photo style. High resolution.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| People look AI-generated/artificial | Generate multiple versions; look for natural expressions and realistic detail |
| Inconsistent lighting across team photos | Specify exact same lighting conditions in each prompt |
| Expressions look unnatural | Request "genuine smile," "relaxed expression," "natural eye contact" |
| Hard to recognize as professional | Add professional context: "at desk," "in office," "in meeting" |
| Lack diversity | Be explicit: "diverse team," "mix of genders and ethnicities" |

---

## Icons & Illustrations

**Purpose:** Small, simple visual elements that represent concepts, features, or actions throughout the website.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 64 × 64 px (small), 128 × 128 px (medium), 256 × 256 px (large/scalable) |
| **File Format** | PNG with transparency (preferred), SVG (scalable), or WebP |
| **File Size** | 5–30 KB per icon |
| **Style** | Consistent line weight and visual language across all icons |
| **Background** | Transparent |
| **Use Cases** | Feature list icons, service badges, social media icons, navigation indicators |

### Use Cases

- Feature benefit icons (speed, security, support, scalability)
- Service category icons
- Social media/contact method icons
- Process step indicators
- Navigation breadcrumbs
- Input field icons (search, filter, settings)

### Best Practices for AI Image Generation

**Important Note:** AI-generated icons often require significant refinement. These tips help:

- **Simplicity:** Request clean, simple designs with minimal detail
- **Recognizability:** Make the concept immediately clear
- **Consistency:** All icons should use consistent line weight and style
- **Symbolic:** Focus on universally recognized symbols
- **Single Concept:** One clear idea per icon

### Prompt Template Example

```
A clean, professional [icon type: e.g., "lightning bolt"] icon representing 
[concept: e.g., "speed or efficiency"]. The design is [style: e.g., "minimalist 
with a single line weight"]. The icon uses [color: e.g., "solid brand blue"]. 
The shape is [composition: e.g., "symmetrical and centered"]. The style matches 
[consistency reference: e.g., "modern flat design icons"]. The icon is suitable 
for [size: e.g., "scaling from 64x64 to 256x256 pixels"]. 
Isolated icon on transparent background, high resolution.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Icon is too detailed | Request "simple," "minimal," "single line weight," "flat design" |
| Inconsistent across multiple icons | Create a style guide; include reference to consistent style in every prompt |
| Not recognizable/clear | Test with users; make the concept explicit (e.g., "unmistakably a clock") |
| Looks too cartoony/childish | Request "professional," "corporate," "flat design" style |
| Difficult to scale | Keep simple; avoid thin lines that break at small sizes; test at actual display sizes |

### Alternative Approach: Icon Sets

For consistency, consider generating a cohesive set of icons at once with a master prompt:

```
Create a set of 6 icons for a SaaS product, each representing: speed, security, 
support, integration, analytics, and automation. All icons should use:
- Minimalist flat design style
- Consistent 2px line weight
- Brand color: [your blue]
- Square 256x256 canvas
- Transparent background
- Easily recognizable symbols

Icons should feel cohesive as a family while being distinct concepts.
```

---

## Social Media & OG Images

**Purpose:** Optimized images for social media sharing and Open Graph (OG) previews across platforms.

### Specifications by Platform

#### Open Graph (OG) Image (Universal)

| Property | Specification |
|----------|---|
| **Dimensions** | 1200 × 630 px (16:9 ratio, recommended by Facebook) |
| **File Format** | JPG (widely supported) |
| **File Size** | 100–150 KB |
| **Purpose** | Default preview when link is shared on Facebook, LinkedIn, Twitter |

#### LinkedIn Image

| Property | Specification |
|----------|---|
| **Dimensions** | 1200 × 627 px (feed post), 1200 × 1500 px (article image) |
| **File Format** | JPG, PNG |
| **File Size** | 100–200 KB |
| **Safe Text Area** | Center 600 × 314 px (where text won't be cut off) |

#### Twitter/X Image

| Property | Specification |
|----------|---|
| **Dimensions** | 1200 × 675 px (16:9 for cards) |
| **File Format** | JPG, PNG, WebP |
| **File Size** | 100–150 KB |

#### Instagram Feed Post

| Property | Specification |
|----------|---|
| **Dimensions** | 1080 × 1080 px (square), 1080 × 1350 px (portrait) |
| **File Format** | JPG, PNG |
| **File Size** | 100–150 KB |
| **Safe Area** | Center 1000 × 1000 px |

#### Instagram Stories

| Property | Specification |
|----------|---|
| **Dimensions** | 1080 × 1920 px (9:16 vertical) |
| **File Format** | JPG, PNG |
| **File Size** | 100–150 KB |

### Use Cases

- Blog post social sharing
- Product announcement posts
- Event promotion
- Thought leadership content
- Campaign sharing across platforms
- Link previews in messages

### Best Practices for AI Image Generation

- **Platform Consistency:** Create slightly different versions for different platforms while maintaining brand consistency
- **Text Inclusion:** Most social images benefit from bold, readable text (company name, key message, or call-to-action)
- **Visual Impact:** Design for the "scroll" — must grab attention in busy feeds
- **Brand Integration:** Incorporate logo, colors, and visual style
- **Safe Areas:** Keep important content in center for different platform crops
- **Testing:** Preview on actual platforms before finalizing

### Prompt Template Example (OG/LinkedIn)

```
A professional [theme: e.g., "product showcase" or "thought leadership"] image 
featuring [subject: e.g., "a laptop displaying a dashboard"]. The visual should 
represent [message: e.g., "data analytics and business intelligence"]. 
The design is [style: e.g., "modern, clean, corporate"]. The color palette 
includes [colors: e.g., "brand blue, white, and accent orange"]. 
The composition is [layout: e.g., "centered subject with negative space 
for text overlay on the right"]. The image should include [visual element: 
e.g., "company logo in top-right corner"]. The lighting is [quality: 
e.g., "professional and polished"]. Designed for social media sharing 
(1200 × 630 px aspect ratio). Professional photography/design style.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Text in image overlaps with generated content | Request "negative space on right for text overlay" or design with text in separate CSS layer |
| Different platforms crop image differently | Center important content; test across platforms; consider watermark strategy |
| Doesn't stand out in feed | Increase contrast; use bold colors; request "eye-catching" design |
| Logo looks fake/AI-generated | Add logo separately in design tool rather than in AI prompt |
| Poor text readability | Keep background simple; use text overlay layer with background color or shadow |

---

## Favicon Concepts

**Purpose:** Small icon displayed in browser tabs, bookmarks, and browser history. Serves as visual brand identity in browser UI.

### Specifications

| Property | Specification |
|----------|---|
| **Dimensions** | 32 × 32 px (minimum), 64 × 64 px (recommended), 512 × 512 px (source) |
| **File Format** | ICO, PNG, SVG, WebP |
| **Color Mode** | RGB or transparent (avoid complex colors at small sizes) |
| **Details** | Very simple; avoid fine details that disappear at small sizes |
| **Brand Integration** | Logo mark, letter, symbol, or simplified company icon |

### Use Cases

- Browser tab icon
- Bookmark icon
- Browser history/address bar
- Desktop shortcut
- Mobile app home screen (if applicable)

### Best Practices for AI Image Generation

- **Simplicity:** Single symbol, letter, or mark
- **Recognition:** Must be instantly recognizable at 32 × 32 px
- **High Contrast:** Clear foreground and background distinction
- **Brand Alignment:** Reflects brand colors and style
- **Scalability:** Design must work at multiple sizes without detail loss

### Prompt Template Example

```
A simple, professional [logo concept: e.g., "stylized letter V"]. The design 
represents [brand concept: e.g., "growth, velocity, innovation"]. The mark is 
[composition: e.g., "geometric, symmetrical, and centered"]. The design uses 
[color: e.g., "solid brand blue with white negative space"]. The style is 
[aesthetic: e.g., "minimalist, modern, professional"]. This icon must be 
highly recognizable when scaled down to 32 × 32 pixels, so clarity and 
simplicity are critical. Single-color design on transparent background. 
Suitable for use as a website favicon and browser tab icon.
```

### Common Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Too detailed (loses clarity at small size) | Remove details; simplify to essential mark; test at 32px actual size |
| Wrong colors/contrast | Use high-contrast colors; avoid light-on-light or dark-on-dark |
| Doesn't look like brand | Base on existing logo mark; use exact brand colors |
| Needs to work at multiple sizes | Test SVG format for scalability; avoid anti-aliasing issues |
| Transparent background issues | Supply both transparent PNG and solid background versions |

---

## Quick Reference Guide

### Typical Website Image Inventory

For a standard website (homepage, 5-7 pages), you typically need:

| Image Type | Quantity | Total File Size |
|-----------|----------|---|
| Hero Images | 2–5 | 500 KB–1.5 MB |
| Background Images | 3–8 | 300–750 KB |
| Section Headers | 3–6 | 250–600 KB |
| Team/People | 3–10 | 150–500 KB |
| Icons | 6–15 | 50–150 KB |
| Social/OG | 3–10 | 300–750 KB |
| Favicon | 1 | 20 KB |
| **Total** | **20–55 images** | **1.7–4.6 MB** |

### Generation Workflow

1. **Plan:** Determine which image types you need based on your site structure
2. **Sketch:** Create simple text descriptions of what you want (mood, content, colors)
3. **Generate:** Use Nano Banana with the templates and guidance in this document
4. **Iterate:** Generate 2–3 variations of each image type; select the best
5. **Optimize:** Compress images; export in WebP format for modern browsers
6. **Integrate:** Add images to Manus design system with proper alt text and responsive sizing
7. **Test:** View on desktop, tablet, and mobile to ensure proper display

### Dimensions Cheat Sheet

```
Hero Images:           1920 × 1080 px
Section Headers:       1200 × 600 px
Team Photos (square):  400 × 400 px
Team Photos (group):   1200 × 800 px
Icons:                 256 × 256 px (scalable)
Social Media (OG):     1200 × 630 px
Instagram (feed):      1080 × 1080 px
Instagram (stories):   1080 × 1920 px
Favicon:               512 × 512 px (source)
```

### Color & Style Consistency Tips

- **Create a Visual Style Guide:** Generate 2–3 hero images first; use these as reference for all subsequent images
- **Brand Color Callouts:** Always specify exact brand colors in prompts (hex codes or color names)
- **Lighting Consistency:** Specify identical lighting conditions across related image types (e.g., all team photos should have same light quality)
- **Photography Style:** Decide on one photography style (professional, candid, abstract, illustrative) and maintain throughout
- **Mood Consistency:** All images should evoke similar feelings (trustworthy, innovative, playful, etc.)

---

## Integration with Manus

Once your images are generated and optimized:

1. **Alt Text:** Add descriptive alt text for accessibility (e.g., "Professional team collaborating in modern office")
2. **Responsive Sizing:** Use CSS media queries to serve different sizes for mobile/tablet/desktop
3. **Lazy Loading:** Defer image loading for images below the fold
4. **Compression:** Optimize with WebP format and appropriate quality levels
5. **Srcset:** Provide multiple resolutions for high-DPI displays

Example HTML structure in Manus:

```html
<picture>
  <source srcset="hero.webp 1920w, hero-tablet.webp 1200w" type="image/webp">
  <img src="hero.jpg" alt="Professional team collaborating on website project" 
       sizes="(max-width: 768px) 100vw, 1920px"
       loading="lazy">
</picture>
```

---

## Final Notes

- **Test Early:** Generate images early in your project; use them to validate design direction
- **Iterate:** First versions may not be perfect; plan for 2–3 rounds of generation and refinement
- **Quality Over Quantity:** A few exceptional images are better than many mediocre ones
- **Brand Cohesion:** Invest time in achieving visual consistency; this builds professional brand perception
- **Accessibility:** Always include descriptive alt text and test with screen readers
- **Performance:** Optimize file sizes aggressively; large images slow down page load

This guide provides everything you need to request and generate professional-quality images for your website using Nano Banana. Use the templates, specifications, and examples as starting points; adjust based on your specific brand, audience, and design direction.
