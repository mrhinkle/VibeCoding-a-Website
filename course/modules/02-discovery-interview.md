# Module 02: The Discovery Interview
**Time: 8 minutes core | 23 minutes expanded**

---

## Why Discovery Matters

Here's a harsh truth: garbage in, garbage out.

If you give Claude Code vague instructions like "make me a website," you get a generic result. If you spend 10 minutes describing exactly what your business needs, you get something custom, professional, and aligned with your vision.

This module is about that 10 minutes. It's the most valuable 10 minutes you'll spend on this project.

The site-interviewer skill walks you through a structured conversation. You answer questions about your business, your audience, your goals, and your brand. Claude organizes it into a blueprint called `site-brief.json`. Then, in the next module, we feed that blueprint to Claude Code and it builds your website.

Think of this as the design phase. Architects don't build houses without blueprints. We're creating your blueprint.

---

## Core: Running the Interview (8 minutes)

### Step 1: Open Claude Code and Load the Skill

1. Go to [claude.ai/code](https://claude.ai/code)
2. In Claude Code, find the chat panel (left side)
3. Type: `/site-interviewer`
4. Claude will load the skill and prompt you to start

### Step 2: Answer the Interview Questions

The interview takes about 8 minutes and covers:

**About You & Your Business**
- What's your business name?
- What do you do (in one sentence)?
- Who is your ideal customer?
- What's your main goal with this website? (Sell products, book consultations, build credibility, etc.)

**Your Audience**
- What problem do you solve for them?
- Why should they choose you over competitors?
- What action do you want visitors to take? (Sign up, call, buy, apply, etc.)

**Your Brand**
- What's your brand personality? (Professional, casual, creative, trustworthy, etc.)
- Any colors, fonts, or styles you love?
- Any reference websites you like the look of?

**Logistics**
- Do you want a single page or multiple pages?
- Do you need specific features? (Blog, portfolio, e-commerce, booking system, etc.)

You don't need perfect answers. Rough, honest answers are better than overthinking it.

---

## Real Example: Fictional Consulting Firm

Let's walk through what this looks like. Imagine you're running a strategy consulting firm.

**Q: What's your business name?**
A: "Compass Strategic Consulting"

**Q: What do you do in one sentence?**
A: "We help mid-market companies optimize operations and improve profitability."

**Q: Who's your ideal customer?**
A: "CFOs and operations directors at companies with $10M–$100M revenue"

**Q: What's your main goal with this website?**
A: "Generate inbound leads and establish credibility so people call us instead of competitors"

**Q: What action do you want visitors to take?**
A: "Request a free 30-minute strategy call"

**Q: What's your brand personality?**
A: "Professional, analytical, trustworthy, no-nonsense"

**Q: Any reference websites?**
A: "I like the clean look of McKinsey & Co. and the approachability of BCG"

From those answers, Claude builds a site brief. Then, in the next module, we'll feed that brief to Claude Code and watch it generate a website that positions Compass as a credible, professional firm.

Your answers don't have to be this polished. "Help people figure out if they need consulting" is enough.

---

## Understanding Your site-brief.json

After the interview, Claude saves your answers to a file called `site-brief.json`. Open it and you'll see something like:

```json
{
  "business_name": "Compass Strategic Consulting",
  "tagline": "Operations optimization for mid-market companies",
  "primary_goal": "Lead generation",
  "target_audience": "CFOs and operations directors",
  "key_message": "We improve profitability through strategic operations consulting",
  "color_palette": ["#1e3a5f", "#4a9eff", "#f0f4f8"],
  "pages": ["Home", "Services", "About", "Contact"],
  "cta": "Schedule a free 30-minute strategy call"
}
```

This is your blueprint. Claude Code will use it to generate a website that matches your vision.

---

## If Claude Misses Something

If the site brief doesn't capture something important, edit it manually.

1. Find the `site-brief.json` file in Claude Code
2. Click to open it
3. Edit any fields you want to change
4. Save (Ctrl+S or Cmd+S)

Common edits:
- Add a missing page
- Clarify a value proposition
- Adjust colors if they don't feel right
- Add technical requirements (e-commerce, blog, etc.)

You're in control. The brief is a document, not a law.

---

## Expanded: Going Deeper (15 minutes more)

If you want to be thorough or you're building something complex, spend more time on discovery. Here's how.

### Competitive Analysis

Who are your 3 main competitors? What do their websites do well? What do they do poorly?

Example: "Compass competitors are Deloitte, EY, and local boutique firms. Deloitte is credible but feels corporate. EY has better case studies. Local boutique firms look outdated."

This helps Claude understand your competitive positioning. It builds a site that differentiates you.

### Sitemap Planning

Instead of a flat list of pages, sketch out your information hierarchy.

Example:
```
Home
Services
  - Operations Optimization
  - Financial Consulting
  - Change Management
About
  - Our Team
  - Our Process
  - Case Studies
Contact
```

Claude will use this structure to organize your navigation and content flow.

### Multi-Page Strategy

If you're building multiple pages, plan their purpose.

**Home Page:** Hero, value proposition, 3 key benefits, CTA
**Services:** Detailed description of each service, pricing (if applicable)
**About:** Team bios, company story, credentials
**Contact:** Form + map + phone/email
**Blog (optional):** Thought leadership to attract search traffic

### Deep Audience Research

Go beyond "who" and explore "why" and "when."

Example:
- **Who:** CFOs at growth-stage tech companies
- **Why:** They're overwhelmed managing scaling operations
- **When:** During annual strategy planning (Q4)
- **Pain:** "We don't have time to fix this ourselves"
- **Solution:** "Partner with experts who've done this 50 times"

This level of clarity creates messaging that resonates.

### Tone & Voice Guide

Create a brief voice guide to help Claude write in your style.

Example:
- **We are:** Analytical, experienced, straightforward
- **We are NOT:** Jargon-heavy, corporate, fear-based
- **We avoid:** Buzzwords like "synergy," "pivot," "disrupt"
- **Our customers say:** "Finally, someone who speaks plainly"

Claude will write your copy to match this voice.

### Technical Inventory

List any specific features or integrations you need:

- Contact form with custom fields?
- E-commerce checkout?
- Blog with RSS feed?
- Member portal?
- Calendar for bookings?
- Video embeds?
- Third-party integrations (Stripe, HubSpot, Slack)?

Claude will build these into your site from the start instead of patching them in later.

---

## Callout: The 80/20 Rule

You don't need a 50-page discovery document. Spend time on the 20% of details that matter most:

1. **Who is your customer** (1-2 sentences)
2. **What problem do you solve** (1-2 sentences)
3. **Why they should choose you** (1-2 sentences)
4. **What you want them to do** (1 sentence)

Those four things unlock everything else. The rest is refinement.

---

## Common Mistakes to Avoid

**"I want my website to be about everything my business does"**
Focus on one thing. If you're a consultant who does strategy, operations, and finance, pick the one that brings in the most revenue and build your site around that. You can expand later.

**"I'm not sure what my brand personality is"**
Think about what your best customers say about you. Are they loyal because you're reliable? Creative? Honest? That's your personality. Use that word.

**"I need to be everything to everyone"**
You don't. Clear positioning beats broad appeal every time. "We specialize in X for Y" converts better than "We do everything."

**"My competitor has 47 pages, so I need 47 pages too"**
No. Three focused pages beat 47 mediocre pages. Start small, ship fast, expand based on what visitors actually want.

---

## Tip: Say It Out Loud

Before you finalize your brief, explain your business to a friend like you're having coffee.

"So what I do is... [your pitch]"

Write down exactly what you said. That's your brief right there. It's honest and conversational, which is better than overthinking it.

---

## After the Interview

Claude has now organized your vision into a structured format. Your site brief is ready.

In the next module, we'll take your brief and ask Claude Code to generate actual website code. You'll see a whole site appear in front of you.

But first, let's make sure your brief feels right. Read through the `site-brief.json` one more time. Does it sound like your business? Does it capture what matters?

If yes, you're ready for Module 03.

If no, edit it now. Small tweaks to the brief save major rework later.

See you in the next module.
