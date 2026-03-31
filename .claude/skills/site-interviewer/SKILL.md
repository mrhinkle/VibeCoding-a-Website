---
name: "site-interviewer"
description: "Conducts a structured interview with users to gather comprehensive website requirements and outputs a site-brief.json that all other skills consume."
author: "VibeCoding Team"
version: "1.0.0"
tags: ["discovery", "requirements", "website-planning", "json-output"]
modelRequirements:
  minTokens: 8000
prerequisites:
  - "User availability for ~30 minute conversational interview"
outputs:
  - "site-brief.json (structured data for all downstream skills)"
  - "interview-summary.md (human-readable summary)"
---

# Site Interviewer Skill

This skill conducts a friendly, conversational interview with business professionals to gather everything needed to build their website. The interview is non-technical, organized, and produces a `site-brief.json` file that all other VibeCoding skills consume.

## How This Works

Instead of asking users to fill out a form, this skill has a natural conversation. You'll ask about their business, goals, brand, and technical needs—but in a way that feels like talking to a strategic partner, not a bot.

### Interview Sections (in order)

1. **Business Essentials** — Business name, industry, mission
2. **Audience & Market** — Target audience, competitors, unique value
3. **Website Pages** — What pages they need and why
4. **Brand Identity** — Colors, fonts, logo, tone/mood
5. **Features & Functionality** — Contact forms, newsletters, analytics, etc.
6. **Content Strategy** — Key messages, CTAs, testimonials
7. **SEO & Discovery** — Keywords, location, meta descriptions
8. **Technical & Deployment** — Domain, GitHub repo, hosting preference

Each section has 3-5 conversational questions. You guide the user through naturally, building on previous answers.

## Interview Flow

### How to Conduct This Interview

**Opening:**
- Greet the user warmly
- Explain what you're doing: "I'm going to ask you some questions about your business and what you need from your website. This should take about 30 minutes and feels more like a conversation than a form."
- Confirm they have time and are ready

**Asking Questions:**
- Ask one question at a time
- Listen to their answer fully
- Ask clarifying follow-ups if needed (don't feel constrained to the script)
- Use their language and examples to show you're paying attention
- Build momentum—each answer informs the next question

**Taking Notes:**
- Internally, map their answers to the `site-brief.json` schema
- If they give vague answers ("it should look modern"), ask for specifics ("what does modern mean to you—minimalist and clean, or bold with lots of color?")
- If they contradict themselves, gently clarify: "Earlier you said X, and now you're saying Y—which one feels right?"

**Closing:**
- Summarize what you heard
- Confirm the key decisions
- Let them know what comes next (site-brief will feed into design, development, etc.)
- Ask if there's anything they forgot to mention

## Interview Question Bank

See `/references/interview-questions.md` for the complete question bank organized by category.

## The site-brief.json Schema

This is the output file. Use this structure to map interview responses:

```json
{
  "projectMetadata": {
    "projectName": "string (user-facing project name)",
    "createdDate": "ISO 8601 timestamp",
    "interviewerNotes": "string (any special notes from conversation)"
  },
  "businessProfile": {
    "businessName": "string",
    "industry": "string (e.g., 'E-commerce', 'Professional Services', 'SaaS')",
    "businessStage": "string (e.g., 'startup', 'established', 'scaling')",
    "businessMission": "string (one sentence describing what they do)",
    "website_purpose": "string (what should the website accomplish?)"
  },
  "audience": {
    "targetAudienceDescription": "string (who are they building for?)",
    "primaryGeography": "string or array (US, EU, specific regions)",
    "audiencePainPoints": "array of strings (what problems does audience have?)",
    "audienceGoals": "array of strings (what do they want to achieve?)"
  },
  "competitive": {
    "mainCompetitors": "array of competitor names or URLs",
    "competitiveAdvantage": "string (why are they different/better?)",
    "marketPosition": "string (where do they fit in the market?)"
  },
  "pages": {
    "required": "array of strings (e.g., 'home', 'about', 'services', 'contact')",
    "optional": "array of strings (pages they might add later)",
    "pageDescriptions": "object mapping page names to descriptions"
  },
  "brand": {
    "logoUrl": "string or null (link to logo if they have one)",
    "brandName": "string (how should brand be referred to?)",
    "colorPalette": {
      "primary": "hex color or description (e.g., '#2563EB' or 'navy blue')",
      "secondary": "hex color or description",
      "accent": "hex color or description",
      "neutral_dark": "hex color or description (for text)",
      "neutral_light": "hex color or description (for backgrounds)",
      "inspiration": "string (e.g., 'bold tech companies', 'minimal luxury')"
    },
    "typography": {
      "headingFont": "string (e.g., 'Montserrat', 'Georgia') or 'no preference'",
      "bodyFont": "string (e.g., 'Inter', 'Lora') or 'no preference'",
      "fontInspiration": "string (e.g., 'modern and clean', 'elegant and traditional')"
    },
    "toneAndMood": "array of strings (e.g., 'professional', 'friendly', 'bold', 'minimal', 'playful')",
    "existingBrandAssets": "object mapping asset type to description or URL (e.g., 'brand guide URL', 'style guide')"
  },
  "features": {
    "hasContactForm": "boolean",
    "contactFormFields": "array of strings if true (e.g., 'name', 'email', 'message', 'phone')",
    "hasNewsletterSignup": "boolean",
    "hasAnalytics": "boolean",
    "analyticsPlatforms": "array if true (e.g., 'Google Analytics', 'Fathom')",
    "hasBlog": "boolean",
    "blogUpdateFrequency": "string if true (e.g., 'weekly', 'monthly', 'as needed')",
    "hasDarkMode": "boolean",
    "hasMultiLanguage": "boolean",
    "languages": "array if true (e.g., 'en', 'es', 'fr')",
    "additionalFeatures": "array of strings (anything else?)"
  },
  "content": {
    "keyMessages": "array of strings (top 3-5 things website should communicate)",
    "callsToAction": "array of objects with 'action' and 'description' (e.g., 'Schedule a Demo', 'Buy Now')",
    "testimonials": {
      "hasTestimonials": "boolean",
      "numberOfTestimonials": "number if true",
      "testimonialFormat": "string if true (e.g., 'short quotes', 'video', 'detailed case study')"
    },
    "socialProof": "array of strings (e.g., 'client logos', 'awards', 'press mentions')",
    "contentTone": "string (how should copy sound? formal, conversational, technical, etc.)"
  },
  "seo": {
    "primaryKeywords": "array of strings (top 3-5 search terms they want to rank for)",
    "secondaryKeywords": "array of strings (additional keyword targets)",
    "localSEO": "boolean (is local/geographic relevance important?)",
    "serviceAreas": "array of strings if true (cities, regions, countries)",
    "metaDescriptionApproach": "string (should be descriptive? promotional?)",
    "seoMaturitLevel": "string (e.g., 'new to SEO', 'basic understanding', 'advanced')"
  },
  "technical": {
    "domainName": "string or 'to be decided' (e.g., 'mycompany.com')",
    "domainStatus": "string (own it? need to register? use subdomain?)",
    "gitHubRepoName": "string or 'to be decided' (kebab-case, e.g., 'acme-corp-website')",
    "hosting_preference": "string (e.g., 'Vercel', 'Netlify', 'no preference', 'own server')",
    "devOpsMaturity": "string (e.g., 'not familiar with GitHub', 'comfortable with Git')",
    "emailSetup": "string (do they want form submissions to go to a specific email?)",
    "emailAddress": "string or null (where should form submissions go?)"
  },
  "timeline": {
    "launchDate": "string or 'flexible' (e.g., 'March 2026', 'within 30 days')",
    "urgency": "string (e.g., 'high', 'medium', 'low')",
    "budget": "string or 'flexible' (ballpark is fine, e.g., '$5-10k', 'bootstrap budget')"
  },
  "additionalNotes": "string (anything else that came up in conversation?)"
}
```

## Tips for Using This in the Interview

- **Don't force the schema.** The schema is internal—the user doesn't see it. Guide the conversation naturally, then map their responses.
- **If they don't know something**, that's fine. Mark it as "to be decided" or "flexible" and note that you'll make a recommendation.
- **Build on context.** If they say their audience is "busy executives," follow up: "So they're short on time—should the site load lightning fast and have clear next steps?"
- **Recommend when they're stuck.** If they say "I don't know what color" or "I'm not sure what pages," offer 2-3 real options: "Most companies like yours go with either clean and minimal or bold and colorful. Which feels more like you?"
- **Clarify trade-offs.** If they want everything ("fast, cheap, complex"), gently explain that they'll need to prioritize.

## Output Steps

Once the interview is complete:

1. **Write site-brief.json** to the current directory with complete, accurate data mapped from the interview
2. **Write interview-summary.md** (human-readable markdown) that summarizes:
   - Business overview
   - Audience & competitive position
   - Pages and key features
   - Brand identity summary
   - SEO strategy
   - Technical next steps
   - Any important notes or trade-offs discussed
3. **Confirm with the user** what you've captured and ask if anything should change
4. **Explain what comes next:** "This site-brief will feed into design, development, and content creation. The next skill (brand-to-images) will use your brand guidelines to generate image prompts for Manus."

## Interview Tips for Success

- **Be genuinely curious.** Ask why, not just what. "Why is that important to you?" often reveals the real priority.
- **Take notes visibly.** If you're summarizing or repeating back, the user knows you're paying attention.
- **Handle "I don't know" gracefully.** Offer options, but let them choose. If they truly don't know, that's data too—mark it and move on.
- **Pace matters.** Don't machine-gun questions. Breathe. Let silences happen if someone needs to think.
- **End strong.** A good summary at the end builds confidence that you understand their vision.

## Common Scenarios

**"I want something modern."**
Follow up: "Modern can mean different things—what does modern mean to your industry? Are we talking sleek and minimal, or bold and colorful? Do you have any websites you admire?"

**"I'm not sure what pages I need."**
Offer: "Let's start with the essentials—home, about, and contact. Then we can add services, a blog, or whatever else makes sense for your business. What would you want visitors to be able to do on day one?"

**"We don't have a logo yet."**
Note it down: "That's fine—the design process will help shape that. For now, tell me about your brand feel. Professional? Creative? Trustworthy? Bold?"

**"I have no idea about keywords."**
Suggest: "Let's think about it this way: if someone Googled your business, what would they search for? Your industry name? A specific service? Your location? We can research keywords formally later, but let's start with your best guesses."

## When to Use This Skill

- Before any design or development work begins
- When you have a client/user who needs a website
- When you want to feed structured data to other VibeCoding skills
- When you want to ensure nothing important gets missed in the discovery phase

## What Comes Next

Once `site-brief.json` is created, it becomes the input for:
- **brand-to-images** — Uses brand colors, tone, and pages to generate image prompts
- **content-strategist** (future) — Uses business mission, audience, and CTAs to create content
- **site-builder** (future) — Uses all sections to generate HTML/CSS

---

**Ready to interview?** Start by greeting the user warmly and explaining what you're about to do. Then work through the sections in order, building a complete picture of their website vision.
