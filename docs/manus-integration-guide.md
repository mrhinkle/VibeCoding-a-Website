# Manus Integration Guide for VibeCoding

This guide explains how to use Manus alongside Claude Code in VibeCoding workflows. Manus is an AI image studio that generates brand-aligned visual assets.

---

## What is Manus?

Manus is a **specialized image generation system** built by Anthropic. It creates visual assets that match your brand guidelines, context, and requirements.

In VibeCoding, Manus handles:
- **Brand-aligned hero images** — Generated from your color palette and mood
- **Product/service showcase images** — Illustrations specific to your business
- **Social proof graphics** — Testimonial cards, stats, logos
- **Maintenance chat** — Update your site while chatting naturally (no CLI)

Think of Manus as your **in-house graphic designer** that understands your brand and can generate images in seconds instead of hours.

---

## Why Use Manus with VibeCoding?

| Challenge | Without Manus | With Manus |
|-----------|---|---|
| No hero image | Use generic stock photos | Generate brand-specific hero |
| Updating site design | Need new graphics professionally made | Chat with Manus, get new graphics instantly |
| Maintaining brand consistency | Hard to ensure all images match | Manus remembers your brand guidelines |
| Service showcases | Stock photo limitations | Custom illustrations of your services |
| Social proof | Generic testimonial cards | Brand-aligned testimonial graphics |

**Real example:** A consulting firm built a site with VibeCoding. Their hero image needed updating. Instead of calling a designer, they chatted with Manus, described the change, and got 3 new hero options in 5 minutes.

---

## Setting Up Manus

### Step 1: Get a Manus Account

1. Visit [manus.ai](https://manus.ai) (or your Manus workspace)
2. Sign up with your email
3. Connect to Anthropic Claude via OAuth
4. Select your Claude Code workspace

### Step 2: Install Manus Image Generation Tools

Manus comes with pre-built image generation:

1. In Manus settings, find **Image Models**
2. Select **Nano Banana** (free tier) or **Claude Vision + DALL-E** (paid)
3. Save settings

**Nano Banana** is recommended for VibeCoding:
- Fast generation (2-5 seconds)
- Good quality for web (1200px+ suitable)
- Free tier available
- Perfect for hero images, illustrations, icons

### Step 3: Create Your Brand Guidelines Document

Manus works better when it understands your brand.

Create a file: `/manus/brand-guidelines.md`

```markdown
# [Your Business Name] Brand Guidelines

## Brand Personality
- Professional yet approachable
- Modern with timeless elements
- Trustworthy, expert tone

## Visual Style
- Color palette: Primary blue (#2563EB), warm accent (#F97316)
- Typography: Clean, modern sans-serif
- Photography style: Real people, authentic moments
- Illustration style: Minimalist, line-based

## Key Messages
1. We help [audience] achieve [goal]
2. Our unique approach is [differentiator]
3. We believe in [core value]

## Visual Examples
- [Link to competitor sites you like]
- [Link to design inspiration]
- [Reference style guides]
```

### Step 4: Generate Your First Image

Using **brand-to-images skill** (in VibeCoding):

```bash
# After running site-interviewer, run:
claude skill:run brand-to-images
```

This generates `image-prompts.md` with detailed prompts for Manus.

Then in Manus:
1. Open your workspace
2. Click "Generate Image"
3. Paste the prompt from `image-prompts.md`
4. Wait 2-5 seconds
5. Choose the best result (Manus usually offers 2-3 options)
6. Download at 1200px (perfect for web)

---

## Manus Image Generation Workflow

### For Hero Images

**Prompt structure:**
```
A professional website hero image for [business].
Mood: [mood adjectives].
Style: [visual style].
Colors: [brand colors].
Subject: [what's in the image].
No text, ready for web.
```

**Example prompt:**
```
A professional website hero image for "Acme Consulting."
Mood: trustworthy, modern, approachable.
Style: minimalist photography with subtle gradients.
Colors: navy blue (#2563EB) and warm orange (#F97316) accents.
Subject: professional woman in modern office, looking confident, working on strategic plan.
No text, ready for web. 1200x600px landscape.
```

**Generated image:** Professional, on-brand hero ready to drop into your site.

### For Service/Product Showcase

**Prompt structure:**
```
An illustration showing [service description].
Style: [illustration style].
Colors: [brand palette].
Mood: [emotion].
Professional, no people, ready for web.
```

**Example:**
```
An illustration showing cloud-based software architecture.
Style: minimalist isometric.
Colors: primary blue (#2563EB) and light gray backgrounds.
Mood: technical yet approachable.
Professional, no people, ready for web. 800x600px.
```

### For Testimonial Graphics

**Prompt structure:**
```
A professional testimonial card showing:
- Quote: "[customer testimonial]"
- Person: [job title, company]
- Style: minimal, [brand color] accent
- Ready for web, high contrast.
```

**Example:**
```
A professional testimonial card showing:
- Quote: "Acme transformed how we approach strategy."
- Person: Sarah Chen, CEO, TechCorp
- Style: minimal design, navy blue accent bar, clean sans-serif
- Background: light gray, ready for web. 400x300px.
```

---

## Manus as a Maintenance Chatbot

Beyond image generation, Manus can chat about your site and suggest updates.

### Setting Up Maintenance Chat

1. **Add site context to Manus**
   ```bash
   # Provide your site's current state
   claude export:site > current-site.html
   # Share with Manus
   manus:context current-site.html
   ```

2. **Create custom instructions** for Manus about your site
   ```markdown
   # Custom Instructions for [Site Name] Maintenance

   ## Brand Voice
   - Professional, friendly, authoritative
   - Avoid jargon, explain clearly
   - Encourage action and engagement

   ## Site Structure
   - Home: Hero + services + CTA
   - About: Mission + team + values
   - Services: 3 main services with descriptions
   - Contact: Form + email

   ## Content Guidelines
   - All copy should emphasize [unique value]
   - CTAs should mention [specific offer]
   - Testimonials should focus on [outcome]

   ## Visual Guidelines
   - Use brand colors (#2563EB primary)
   - All images should feel professional, modern
   - White space is your friend
   ```

3. **Chat naturally about updates**
   ```
   You: "I want to update the about page. The team grew, and I want to add more about our values."

   Manus: "I see you have 3 team members listed. What are your core values you want to highlight? I can suggest some rewording and potentially a new image to match."

   You: "Integrity, innovation, and impact."

   Manus: "Great. Here's suggested copy:
   [suggested text]

   For the new section, I'd recommend a graphic showing these values. Should I generate an image showing...?"
   ```

### Maintenance Chat Benefits

- **No CLI needed** — Talk naturally
- **Context-aware** — Manus understands your specific site
- **Image suggestions** — Generates visuals for changes
- **Brand consistency** — Uses your guidelines automatically
- **Documentation** — Keeps track of what changed and why

---

## Custom Instructions Template

Copy this and customize for your Manus workspace:

```markdown
# [Your Site Name] Maintenance Instructions

## Site Purpose
Briefly explain what this website does and who it serves.

## Brand Identity
- **Brand name:** [your business name]
- **Primary colors:** [hex codes]
- **Secondary colors:** [hex codes]
- **Accent color:** [hex code]
- **Typography:** [fonts used]
- **Tone:** [professional, friendly, bold, etc.]

## Content Principles
- Prioritize [your core message]
- Target audience: [describe them]
- Key outcomes: [what should visitors do?]
- Avoid: [things you don't want on site]

## Visual Style Guide
- Photography style: [describe]
- Illustration style: [if applicable]
- Color usage: [how colors should be applied]
- Whitespace: [minimal, generous, balanced?]
- Modern vs classic: [preference]

## Site Structure
- **Home:** [what's on home page]
- **About:** [mission, team, values]
- **Services/Products:** [what you offer]
- **Blog:** [if applicable]
- **Contact:** [form, social links, email]

## Recent Updates
- [What changed last]
- [What's planned next]

## Common Changes
When I ask to update:
- **"Refresh the hero"** → Change background image/copy
- **"Add social proof"** → Add testimonial or statistics
- **"Emphasize [feature]"** → Rewrite copy to highlight it
- **"New service"** → Add to services section with description + image

## Questions to Ask
If you're unsure about a change:
1. "Does this match our brand voice?"
2. "Is this aligned with our target audience?"
3. "Does this support our main goal?"
4. "Should we update the hero image to match?"

## Brand Assets
- Logo: [link or description]
- Brand guidelines: [link if exists]
- Competitor examples: [links to sites you admire]
```

---

## GitHub Integration with Manus

Manus can integrate with GitHub for automatic updates:

### Step 1: Generate Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Name it: "Manus-VibeCoding"
4. Select scopes:
   - `repo` (full control of private repositories)
   - `workflow` (update GitHub Actions)
5. Copy the token (save it securely)

### Step 2: Connect to Manus

1. Open Manus settings
2. GitHub integration → Connect
3. Paste your Personal Access Token
4. Select the repository where your site lives

### Step 3: Auto-Update Workflow

Now Manus can:
- Commit image changes to a branch
- Update HTML with new images
- Create a pull request for you to review

**Example workflow:**
```
You: "Update the hero image to show teamwork instead."
Manus: "I'll generate a new hero and create a PR for you. [Link to PR]"
You: Review the PR, click Merge
GitHub Actions: Deploy new version automatically
```

---

## Troubleshooting Manus Integration

### Issue: Images don't match brand

**Solution:**
- Review brand guidelines with Manus
- Provide specific color hex codes (not just names)
- Share reference images of style you like
- Re-run generation with more detailed prompts

### Issue: Manus generation is slow

**Solution:**
- Check your Nano Banana quota (free tier has limits)
- Use simpler prompts (less detail = faster generation)
- Upgrade to paid tier if high volume needed

### Issue: Images look generic

**Solution:**
- Add more brand personality to guidelines
- Reference specific competitors/inspiration sites
- Include mood descriptors in prompts
- Ask Manus to "make it more [mood]"

### Issue: Can't connect GitHub

**Solution:**
- Verify Personal Access Token is valid (not expired)
- Check that token has `repo` scope selected
- Try disconnecting and reconnecting
- Ensure the repo is owned by your account (not an org with restrictions)

### Issue: Manus says "I don't understand your site"

**Solution:**
- Run `manus:context current-site.html` again
- Add more detail to custom instructions
- Share the actual site URL so Manus can see it
- Break complex changes into smaller requests

---

## Manus + Claude Code Workflow Example

**Real scenario:** Rebuild services section

1. **In Claude Code:**
   ```bash
   # Site-interviewer identified 3 main services
   # Site-generator created services section
   ```

2. **In Manus:**
   ```
   You: "I have 3 services: Strategy, Design, Development. Generate an icon/illustration for each."

   Manus: "Got it. Here are 3 illustrations:
   - Strategy: compass pointing forward
   - Design: palette with 3 brand colors
   - Development: code symbols

   Should I update the HTML to use these new images?"
   ```

3. **Back in Claude Code:**
   ```bash
   # Claude Code receives updated HTML with image links
   # Optimizes images
   # Tests responsiveness
   # Deploys to Vercel
   ```

4. **Result:** Services section with custom, brand-aligned illustrations, deployed live.

---

## Best Practices

### Do:
- ✅ Give Manus detailed brand context
- ✅ Use specific hex color codes (not "blue")
- ✅ Reference style inspiration
- ✅ Iterate and refine prompts
- ✅ Keep brand guidelines updated
- ✅ Use appropriate image sizes (1200px+ for hero)

### Don't:
- ❌ Use generic stock photos for hero
- ❌ Keep brand guidelines vague
- ❌ Ignore Manus suggestions for consistency
- ❌ Ask for text in images (use HTML instead)
- ❌ Generate ultra-high res (slower, unnecessary for web)

---

## Examples of Great Manus Prompts

### Hero Image
```
Professional website hero for SaaS project management tool.
Showing diverse team collaborating in modern office.
Mood: professional, innovative, trustworthy.
Colors: deep blue (#0F3B66) primary, orange (#FF6B35) accents.
Style: modern photography with subtle geometric overlays.
Landscape 1200x600px. No text overlay.
```

### Service Icon
```
Icon illustration for "Customer Support" service.
Style: minimalist line-based illustration.
Subject: headset with speech bubbles.
Colors: navy blue (#0F3B66) and white.
Square 512x512px. Clean, professional, scalable.
```

### Testimonial Graphic
```
Testimonial card graphic.
Quote: "They transformed our entire workflow."
Person: Maria Garcia, Operations Manager, TechCorp
Style: minimal design, navy blue accent bar on left.
Colors: white background, navy text, orange accent.
Square 400x300px. High contrast, readable at small sizes.
```

---

## Next Steps

1. **Create a Manus account** at manus.ai
2. **Create brand-guidelines.md** in your project
3. **Connect to Claude Code** workspace
4. **Run brand-to-images skill** to generate prompts
5. **Start generating images** using those prompts
6. **Integrate into your site** (Claude Code handles this)

For more help, see [README.md](../README.md) or join the VibeCoding community in GitHub Discussions.

Happy designing! 🎨
