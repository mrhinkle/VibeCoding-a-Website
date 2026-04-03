---
name: webmaster
description: "The site orchestration layer and project manager for your website. Triggers when you need end-to-end site management: running a pre-launch review, checking everything before going live, coordinating all audits, running a full site quality check, a pre-launch checklist, monthly maintenance, emergency fixes, or asking 'is my site ready?', 'run all the audits', 'webmaster mode', 'full site review', 'site health check', 'production ready?', or similar. Knows about and coordinates all other skills in the VibeCoding-a-Website project."
---

# The Webmaster Skill

Think of the webmaster as your **site's project manager**. While other skills are specialists (the SEO expert, the designer, the security guard), the webmaster sees the whole picture, knows who needs to do what and when, and produces a unified health report that tells you if your site is truly ready.

## What The Webmaster Does

The webmaster orchestrates the full lifecycle of your website:

**Planning Phase** → Interview and define site goals, brand identity, audience  
**Building Phase** → Generate initial site structure, wire forms, create content  
**Testing Phase** → Run QA tests, security audits, SEO checks, copy review, UX evaluation  
**Deployment Phase** → Check links, optimize performance, deploy to production  
**Monitoring Phase** → Track ongoing health, detect regressions, flag issues  
**Iteration Phase** → Update content, fix bugs, improve based on audit feedback  

You don't need to remember what to check or the order to check it—the webmaster knows the playbook.

---

## Workflow Presets

Pick the workflow that matches your situation:

### Pre-Launch Review
**When:** 48 hours before going live. You've built your site and want to make sure it's truly production-ready.  
**What runs:**  
- QA Tester (broken links, forms, functionality)
- Security Auditor (vulnerabilities, data exposure)
- SEO/AEO Auditor (search visibility, answer engine optimization)
- Copy Editor (grammar, tone, brand consistency)
- UX Reviewer (usability, accessibility, navigation)
- Link Checker (all internal/external links valid)
- Performance Optimizer (page speed, Core Web Vitals)

**Output:** A single **Pre-Launch Report** with:
- Overall readiness score (0–100)
- Critical blockers (fix before launch)
- High-priority issues (fix within 1 week)
- Nice-to-haves (optimize after launch)
- Time estimate to fix everything

**Typical time:** 30–45 minutes to complete all audits

---

### Quick Update
**When:** You've made changes (updated copy, fixed a bug, added a page) and want confidence they work.  
**What runs:**  
1. Site Updater (applies your changes)
2. Link Checker (ensures nothing broke)
3. Performance Optimizer (no speed regressions)
4. Auto-deploys to staging, then production if all clear

**Output:** Deployment confirmation + quick health snapshot

**Typical time:** 5–10 minutes

---

### Monthly Maintenance
**When:** First Monday of each month, or on your schedule.  
**What runs:**  
- All content, SEO, security, and UX auditors
- Compares scores to previous month
- Flags any regressions
- Prioritizes fixes based on impact

**Output:** **Monthly Health Report** showing trends, wins, and next steps

**Typical time:** 45 minutes (some runs happen in parallel)

---

### Full Rebuild
**When:** You're starting from scratch or doing a major overhaul.  
**What runs (in order):**  
1. Site Interviewer (define goals, audience, brand)
2. Brand-to-Images (create visual assets)
3. Site Generator (build the structure)
4. Form Wiring (connect contact forms, CTAs)
5. Content Auditor (review all text)
6. All optimizers and auditors
7. Deploy-to-Vercel (live on the web)

**Output:** A new, fully audited, production-ready site

**Typical time:** 2–3 hours (mostly AI working in parallel)

---

### Emergency Fix
**When:** Critical bug found in production, or urgent content update needed.  
**What runs:**  
1. Site Updater (quick fix applied)
2. Link Checker (smoke test: core pages, forms)
3. Performance Optimizer (check for slowdowns)
4. Deploy (straight to production)

**Output:** Deployment confirmation + risk assessment

**Typical time:** 3–5 minutes

---

## Skill Dependency Map

This is the order skills feed into each other. The webmaster knows this flow:

```
Site Interviewer
        ↓
  Brand-to-Images
        ↓
  Site Generator
        ↓
  Form Wiring
        ↓
  Content Auditor ←─────┐
        ↓                │
  SEO/AEO Auditor       │
        ↓                │
  UX Reviewer           │
        ↓                │
  Copy Editor           │
        ↓                │
  QA Tester ────────────┤
        ↓                │
  Security Auditor      │
        ↓                │
  Link Checker ◄────────┘
        ↓
  Performance Optimizer
        ↓
  Site Updater (ongoing)
        ↓
  Deploy-to-Vercel
```

**Key dependencies:**
- Form Wiring must happen before QA Tester (QA needs forms to test)
- Content Auditor output informs Copy Editor (copy editor fixes what auditor finds)
- All auditors feed into the unified report
- Link Checker runs after any content change
- Performance Optimizer is final step before deploy

---

## The Unified Health Report

When the webmaster runs multiple audits, here's what you get:

### Sample Report Structure

```
═══════════════════════════════════════════════════════════════
              YOUR SITE HEALTH REPORT
═══════════════════════════════════════════════════════════════

Overall Site Readiness:  ████████░░  82/100

CATEGORY SCORES:
  Quality Assurance       ████████░░  84/100
  Security               ███████░░░  78/100  ⚠️  2 medium risks
  SEO / AEO             █████████░  91/100
  Accessibility & UX    ██████░░░░  65/100  🔴 BLOCKER
  Copy & Content        ████████░░  87/100
  Performance           █████████░  90/100
  Link Health           ██████████ 100/100

───────────────────────────────────────────────────────────────
🔴 CRITICAL BLOCKERS (Fix before launch)
───────────────────────────────────────────────────────────────
1. Forms not submitting on mobile (breaks CTA)
   Fix time: 15 min | Assigned to: Form Wiring skill

2. Missing alt text on 12 images (accessibility fail)
   Fix time: 20 min | Assigned to: UX Reviewer

───────────────────────────────────────────────────────────────
⚠️  HIGH PRIORITY (Fix within 1 week)
───────────────────────────────────────────────────────────────
1. Page title too long; truncates in search results
   Impact: SEO | Fix time: 5 min

2. Hero image 2.1MB; slows page load
   Impact: Performance | Fix time: 10 min

───────────────────────────────────────────────────────────────
💚 NICE-TO-HAVES (Optimize after launch)
───────────────────────────────────────────────────────────────
- Add internal links to 5 blog posts
- Optimize H1/H2 structure on 3 pages
- Reduce unused CSS (saves 40KB)

───────────────────────────────────────────────────────────────
TOTAL TIME TO FIX EVERYTHING: ~45 minutes
RECOMMENDED NEXT STEPS:
  1. Fix critical blockers (30 min)
  2. Re-run QA + UX audits (10 min)
  3. Deploy to staging, then production (5 min)
```

---

## Environment Management

The webmaster handles staging and production carefully:

| Action | Environment | Safety Check |
|--------|-------------|--------------|
| **Quick Update** | Staging first (1 min), then production | Link + performance check |
| **Pre-Launch** | Staging (full audit) | All tests must pass |
| **Emergency Fix** | Direct to production | Minimal testing (fast) |
| **Monthly Audit** | Production (read-only) | No deployment unless issues found |

**Rollback:** If something breaks in production, the webmaster can:
- Revert to the previous site snapshot (Vercel history)
- Run a smoke test on the reverted version
- Notify you of the rollback

---

## Audit Scheduling Guide

Recommendation for keeping your site healthy:

| Audit Type | Frequency | Why |
|------------|-----------|-----|
| Quick Update | After any change | Catch issues immediately |
| Link Checker | Weekly | Broken links hurt SEO and UX |
| Performance | Bi-weekly | Catch speed regressions early |
| SEO / AEO | Monthly | Search visibility fluctuates |
| Security | Monthly | New vulnerabilities appear |
| UX / Accessibility | Monthly | User behavior changes |
| Content / Copy | Quarterly | Consistency drift |
| Full Rebuild | As needed | Major redesign or pivot |

---

## Common Scenarios

### Scenario 1: "Is my site ready to launch?"
**You say:** "Run a pre-launch review for me."

**The webmaster:**
1. Gathers all auditors (7 total)
2. Runs them in parallel (saves time)
3. Produces the unified report
4. Highlights blockers in red
5. Gives you a deploy/no-deploy recommendation

**You get:** A single report you can show your boss, investor, or client

---

### Scenario 2: "I updated the homepage copy."
**You say:** "Run a quick update—I changed the homepage hero text."

**The webmaster:**
1. Site Updater applies your change
2. Link Checker scans the page
3. Performance Optimizer checks load time
4. Deploys automatically if all clear
5. Confirms deployment

**You get:** Confirmation in < 10 minutes, with zero manual steps

---

### Scenario 3: "What's my site's current health?"
**You say:** "Run a site health check" or "Monthly maintenance."

**The webmaster:**
1. Runs all audits (content, SEO, security, UX, etc.)
2. Pulls scores from last month's report
3. Compares and highlights changes
4. Flags any regressions
5. Recommends priorities

**You get:** Trends, wins, and a clear roadmap for improvement

---

### Scenario 4: "Critical bug found—form isn't working!"
**You say:** "Emergency fix—contact form is broken. I'll send you the fix code."

**The webmaster:**
1. Site Updater applies the fix immediately
2. Smoke test on that form (does it work now?)
3. Quick link check (nothing else broke?)
4. Deploy straight to production
5. Alert you when live

**You get:** Production fix in < 5 minutes, minimal risk

---

## How to Talk to the Webmaster

**Trigger phrases:**
- "Is my site ready to launch?"
- "Run all the audits"
- "Pre-launch checklist"
- "Webmaster mode"
- "Full site review"
- "Site health check"
- "Run a monthly maintenance"
- "Quick update after I change [something]"
- "Emergency fix—[urgent problem]"
- "Check everything"

**What you can ask:**
- "Do we have any security vulnerabilities?"
- "What's my SEO score this month?"
- "Are my forms working?"
- "Is the site fast enough?"
- "What should I fix first?"
- "Can we deploy today?"

---

## The Webmaster's Philosophy

You built your site with AI. That's amazing—and now you want to make sure it's actually good. The webmaster is the tool that says "yes, this is production-ready" or "here's what to fix first." It removes the guesswork and gives you confidence.

Think of the webmaster as your **trusted advisor**, not a boss. It suggests, prioritizes, and nudges you toward quality. And it always explains the "why"—not just what's wrong, but why it matters to your users, your search ranking, or your bottom line.

**Your site. Thriving. That's the goal.**
