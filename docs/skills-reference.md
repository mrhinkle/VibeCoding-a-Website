# VibeCoding Skills Reference

Complete documentation for all 19 VibeCoding skills. Each skill is a specialized expert on your website team. This guide shows what each skill does, when to use it, what it produces, and how skills work together.

---

## Quick Navigation

- [Skills by Category](#skills-by-category)
- [Complete Skill Profiles](#complete-skill-profiles)
- [Workflow Diagrams](#workflow-diagrams)
- [Workflow Presets](#workflow-presets)
- [Platform Compatibility](#platform-compatibility)
- [FAQ](#faq)

---

## Skills by Category

| Category | Skills | Role | Timeline |
|----------|--------|------|----------|
| **Setup** | site-customizer, site-interviewer, brand-voice | Define brand and gather requirements | Day 1 |
| **Build** | site-generator, form-wiring, brand-to-images | Create pages, wireframes, and visuals | Days 2-5 |
| **Polish** | copy-editor, ux-reviewer, design-refiner | Optimize copy, UX, and visual design | Days 6-8 |
| **Audit** | qa-tester, code-auditor, security-auditor, seo-aeo-auditor, performance-optimizer, link-checker, accessibility-auditor | Comprehensive testing and optimization | Days 9-10 |
| **Deploy** | webmaster, deploy-to-vercel | Launch and monitor | Day 11+ |

---

## Complete Skill Profiles

### SETUP PHASE

#### 1. site-customizer
**Role:** Creative Director
**Team Position:** First specialist on the team

**What it does:**
Conducts a brand discovery interview and configures all downstream skills with your brand identity. It's the gatekeeper that ensures every other skill knows your business, voice, visual aesthetic, and goals before they start work.

**When to use it:**
- Starting a new website project
- Setting up a new brand identity
- Updating brand colors, logos, or messaging
- "Start a new site", "set up my project", "configure my brand"

**What it produces:**
- `brand-profile.json` (machine-readable brand data for all skills)
- `brand-guide.md` (shareable brand bible for your team)
- `brand-context.md` (internal reference file for other skills)

**Dependencies:**
- None (always runs first)

**Key Features:**
- 5-section discovery interview (business, voice, visual, content, technical)
- Generates machine-readable brand profiles other skills consume
- Self-updating when brand changes mid-project
- Includes platform compatibility notes (Claude Code, Cowork, Manus)
- Nano Banana integration for on-brand image generation prompts

---

#### 2. site-interviewer
**Role:** Requirements Analyst
**Team Position:** Runs after site-customizer

**What it does:**
Conducts a detailed requirements interview informed by your brand profile. Goes deeper than site-customizer into specific features, page structure, user flows, and technical integrations needed for your site.

**When to use it:**
- After running site-customizer
- Defining specific pages and features
- Clarifying user journeys and workflows
- "Interview me about my site", "what pages do I need?"

**What it produces:**
- Site requirements document
- Page structure and sitemap
- User journey maps
- Feature prioritization matrix
- Integration checklist (email, forms, analytics, etc.)

**Dependencies:**
- site-customizer (uses brand profile)

**Key Features:**
- Contextual interview informed by your brand
- Sitemap and page structure planning
- User persona development
- Integration discovery and planning
- Mobile-first consideration built in

---

#### 3. brand-voice
**Role:** Brand Strategist
**Team Position:** Works alongside site-customizer or as standalone update

**What it does:**
Conducts a conversational brand discovery interview and builds a living brand bible. Goes deeper into messaging, tone, visual identity, and content rules than site-customizer.

**When to use it:**
- Establishing detailed brand voice and tone
- Creating a shareable brand guide for team/contractors
- Updating brand identity mid-project
- "Create a brand style guide", "establish my brand voice"

**What it produces:**
- `brand-profile.json` (comprehensive brand data)
- `brand-guide.md` (visual + messaging reference)
- `brand-context.md` (quick reference for other skills)

**Dependencies:**
- None (can run independently or after site-customizer)

**Key Features:**
- Conversational discovery interview
- Visual identity collection and documentation
- Voice and tone spectrum mapping (formal-casual, serious-playful, etc.)
- Content rules and vocabulary guidelines
- Self-updating mechanism when brand changes
- All other skills automatically consult this profile

---

### BUILD PHASE

#### 4. site-generator
**Role:** Web Developer
**Team Position:** Runs after interview/customizer phase

**What it does:**
Generates all your website pages in production-ready HTML/CSS/JavaScript. Uses your brand profile (colors, fonts, content) to automatically create pages matching your visual identity.

**When to use it:**
- After site-customizer and site-interviewer complete
- Building new pages or sections
- Rebuilding after major design changes
- "Build my website", "generate my pages"

**What it produces:**
- Complete website codebase (HTML, CSS, JavaScript)
- Page templates for each type (home, about, services, etc.)
- Responsive mobile-first design
- Integration placeholders for forms, email, etc.
- Vite build configuration

**Dependencies:**
- site-customizer (brand profile)
- site-interviewer (page structure)
- brand-voice (visual identity)

**Key Features:**
- Brand colors and fonts automatically applied
- Responsive design (mobile-first)
- Semantic HTML5 structure
- Page-specific templates
- Built-in integrations (Resend, Beehiiv placeholders)
- Accessible component patterns

---

#### 5. form-wiring
**Role:** Backend Integration Engineer
**Team Position:** Runs after site-generator

**What it does:**
Connects all forms on your website to backend services (Resend for email, Beehiiv for newsletters, Vercel serverless functions for custom logic).

**When to use it:**
- After site-generator creates the pages
- Adding new contact or signup forms
- Connecting to new third-party services
- "Wire up my forms", "connect email submission"

**What it produces:**
- Serverless function handlers (API routes)
- Form submission logic
- Email templates (Resend)
- Error handling and validation
- Environment variables configuration

**Dependencies:**
- site-generator (pages with forms)
- site-customizer (API keys, integrations)

**Key Features:**
- Resend email integration (contact forms, notifications)
- Beehiiv newsletter signup handling
- Form validation and error messages
- Rate limiting and spam protection
- Database/Vercel KV integration
- Webhook support for third-party triggers

---

#### 6. brand-to-images
**Role:** Visual Content Strategist
**Team Position:** Runs with site-generator, before form-wiring

**What it does:**
Generates image prompts based on your brand visual identity. If using Manus + Nano Banana, automatically creates on-brand images (heroes, backgrounds, team photos, product visuals).

**When to use it:**
- After site-customizer (has visual identity)
- Before site-generator (images needed on pages)
- Creating new content with consistent imagery
- "Generate on-brand images", "create hero images"

**What it produces:**
- Image generation prompts (detailed, on-brand specifications)
- Actual images (if using Nano Banana integration)
- Image placement guide for pages
- Photography style documentation

**Dependencies:**
- brand-voice or site-customizer (visual identity profile)

**Key Features:**
- Photography style matching your brand aesthetic
- Illustration style consistent with identity
- Color palette integration in image prompts
- Tone and mood matching brand personality
- Nano Banana integration for automatic generation
- Fallback stock photo recommendations

---

### POLISH PHASE

#### 7. copy-editor
**Role:** Persuasion and Conversion Optimizer
**Team Position:** Runs after site-generator creates pages

**What it does:**
Analyzes and optimizes all copy on your website for clarity, persuasiveness, and conversion. Uses copywriting frameworks (AIDA, PAS, BAB) tailored to your brand voice.

**When to use it:**
- After site-generator produces pages
- Before QA/audit phase
- Optimizing specific pages for conversion
- "Polish my copy", "improve my headlines"

**What it produces:**
- Rewritten/optimized copy for all pages
- Headline improvements with conversion boost analysis
- CTA optimization (button text, placement, color)
- Readability scoring (target grade level 6-8)
- Page-specific copywriting strategies
- Competitive comparison (how you sound different)

**Dependencies:**
- site-generator (pages to edit)
- brand-voice (tone and voice rules)

**Key Features:**
- AIDA/PAS/BAB copywriting frameworks
- Headline power analysis (emotional appeal, specificity, length)
- CTA strength ranking and optimization
- Page-specific strategies (homepage 5-second test, about story arc, etc.)
- Readability scoring (Flesch-Kincaid)
- Competitive differentiation identification
- 8-dimension copy scorecard

---

#### 8. ux-reviewer
**Role:** User Experience Evaluator
**Team Position:** Runs after site-generator, can run in parallel with copy-editor

**What it does:**
Evaluates your website against usability heuristics and best practices. Focuses on whether visitors can easily find what they need and take desired actions.

**When to use it:**
- After site-generator produces pages
- Before QA/audit phase
- When redesigning navigation or layouts
- "Review my UX", "is my site easy to use?"

**What it produces:**
- UX audit report (10 heuristic categories)
- Anti-pattern identification and fixes
- Navigation flow analysis (3-click rule compliance)
- Mobile UX assessment (touch target sizes, scrolling)
- Visual hierarchy evaluation (F-pattern, Z-pattern)
- Accessibility quick-check
- UX scorecard (0-100 with interpretation)

**Dependencies:**
- site-generator (pages to review)
- brand-voice (design system and colors)

**Key Features:**
- Nielsen's 10 Usability Heuristics framework
- Mobile-first UX evaluation
- Visual hierarchy analysis (F-pattern, Z-pattern)
- Content readability and scannability
- Anti-pattern detection (mystery meat navigation, auto-playing media, etc.)
- 3-click rule for information findability
- Touch target sizing (mobile accessibility)
- 10-category scorecard with 0-100 interpretation

---

#### 9. design-refiner
**Role:** Visual Design Specialist
**Team Position:** Runs after ux-reviewer and copy-editor feedback

**What it does:**
Refines visual design based on UX and copy feedback. Makes adjustments to layout, spacing, typography, color usage, and component design for optimal visual impact.

**When to use it:**
- After ux-reviewer identifies design issues
- After copy-editor suggests layout changes
- Polishing visual consistency
- "Refine my design", "improve visual hierarchy"

**What it produces:**
- Updated component styles
- Layout refinements
- Spacing and grid adjustments
- Typography scale improvements
- Color application fixes
- Visual consistency report

**Dependencies:**
- site-generator (original design)
- ux-reviewer (UX feedback)
- copy-editor (layout needs)
- brand-voice (design system rules)

**Key Features:**
- Component refinement based on feedback
- Typography scale optimization
- Whitespace and breathing room improvements
- Color contrast and accessibility fixes
- Visual consistency enforcement
- Responsive design verification

---

### AUDIT PHASE

#### 10. qa-tester
**Role:** Quality Assurance Gatekeeper
**Team Position:** First in audit battery

**What it does:**
Comprehensive functional testing across browsers, devices, and user flows. Catches rendering issues, form submission failures, navigation problems, and third-party integration failures.

**When to use it:**
- After all building and polish work completes
- Before other auditors run
- After major feature additions
- "Test my site", "does everything work?"

**What it produces:**
- QA test report (issues organized by severity)
- Cross-browser compatibility matrix
- Mobile device testing results
- Form submission testing
- Navigation and link verification
- Third-party integration status
- Accessibility quick-check
- Visual regression detection

**Dependencies:**
- site-generator (pages to test)
- form-wiring (if forms exist)
- All polish phase skills

**Key Features:**
- 11 major test categories
- Pre-launch QA vs post-update QA protocols
- Severity classification (Blocker, Critical, Major, Minor, Cosmetic)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Form validation and submission testing
- Console error detection
- Accessibility compliance quick-check

---

#### 11. code-auditor
**Role:** Web Programmer
**Team Position:** Runs in parallel with qa-tester

**What it does:**
Reviews code quality, detects JavaScript errors, tests API integrations, checks dependencies for vulnerabilities, and validates build configuration.

**When to use it:**
- After all building work completes
- When JavaScript errors appear in console
- Before security-auditor runs
- "Review my code", "fix these errors"

**What it produces:**
- JavaScript error report with fixes
- HTML validation results
- CSS compatibility issues
- API integration test results
- Dependency vulnerability audit
- Build configuration review
- Code quality metrics (complexity, organization, naming)
- Priority-ordered issue list

**Dependencies:**
- site-generator (code to review)
- form-wiring (API integrations)

**Key Features:**
- JavaScript console error detection
- HTML5 validation
- CSS browser compatibility
- API integration testing (Resend, Beehiiv, Analytics, Vercel Functions)
- Dependency vulnerability scanning (npm audit)
- Tree-shaking and bundle analysis
- Error handling review
- Progressive enhancement validation
- Code complexity metrics

---

#### 12. security-auditor
**Role:** Security and Compliance Guardian
**Team Position:** Runs after code-auditor

**What it does:**
Scans for exposed API keys, missing security headers, HTTPS issues, XSS/CSRF vulnerabilities, outdated dependencies, and privacy compliance gaps.

**When to use it:**
- Before launch (mandatory)
- After adding new integrations or APIs
- After updating dependencies
- "Check for security issues", "is my site secure?"

**What it produces:**
- Security audit report (Critical/Warning/Recommendation levels)
- Secrets exposure report (API keys, tokens, passwords)
- Dependency vulnerability findings
- Security headers configuration (copy-paste vercel.json)
- HTTPS/SSL verification
- Privacy compliance checklist
- Security grade (A, B, C, etc.)
- Step-by-step fixes for each issue

**Dependencies:**
- site-generator (code to scan)
- form-wiring (API keys)
- code-auditor (context on integrations)

**Key Features:**
- Secrets scanning (exposed API keys, tokens)
- Dependency vulnerability detection (npm audit)
- Security headers validation (CSP, X-Content-Type-Options, etc.)
- HTTPS/SSL verification
- XSS and CSRF prevention checks
- Third-party script audit (SRI verification)
- Rate limiting and spam protection validation
- Privacy policy and cookie consent verification
- Vercel-specific security checks
- CORS configuration validation

---

#### 13. seo-aeo-auditor
**Role:** Search Engine and Answer Engine Optimization Expert
**Team Position:** Runs in parallel with security-auditor

**What it does:**
Audits on-page SEO (meta tags, headings, schema markup), answer engine optimization (AEO) for AI search, keyword positioning, and technical SEO (Core Web Vitals, mobile-first indexing).

**When to use it:**
- After site-generator creates pages
- Before launch
- When targeting specific keywords
- "Optimize for search", "improve my SEO"

**What it produces:**
- SEO audit report (0-100 score per category)
- Meta tag analysis and improvements
- Heading hierarchy review
- Schema markup validation
- Keyword research with volume and competition
- Content gap analysis (high-volume keywords you don't rank for)
- Competitor benchmarking table
- Local SEO audit (if applicable)
- Technical SEO checklist (Core Web Vitals, mobile-first, crawlability)
- AEO pattern analysis (direct answers, Q&A format, comparisons, guides)
- Prioritized action plan

**Dependencies:**
- site-generator (pages to audit)
- brand-voice (business context for keywords)
- copy-editor (content to optimize)

**Key Features:**
- On-page SEO fundamentals (meta tags, headings, Open Graph, JSON-LD)
- AEO patterns (7 patterns: direct answers, Q&A, comparisons, guides, citations, freshness, fact-checking)
- Keyword research workflow (seed → expansion → intent mapping → page mapping → gap identification)
- Competitor benchmarking (2-3 competitors, 6+ metrics)
- Local SEO (Google Business Profile, NAP consistency)
- Content gap analysis with prioritization
- Schema validation (FAQ, HowTo, LocalBusiness, Product, Article, Review, Event, Recipe)
- Technical SEO (Core Web Vitals, mobile-first, canonical tags, hreflang)
- Audit tracking over time (save to seo-audit-history.json)

---

#### 14. performance-optimizer
**Role:** Speed and Loading Specialist
**Team Position:** Runs in parallel with other auditors

**What it does:**
Measures and optimizes page load speed, Core Web Vitals, image optimization, and code splitting. Focuses on real-world performance on slow connections and mobile devices.

**When to use it:**
- After site-generator creates pages
- Before launch
- When pages feel slow
- "Make my site faster", "optimize Core Web Vitals"

**What it produces:**
- Performance audit report (PageSpeed Insights scores)
- Core Web Vitals analysis (LCP, FID, CLS)
- Image optimization guide
- JavaScript and CSS optimization recommendations
- Code splitting and chunking analysis
- Cache strategy recommendations
- Lazy loading improvements
- Network waterfall analysis
- Step-by-step performance improvements

**Dependencies:**
- site-generator (code to optimize)
- code-auditor (for build config context)

**Key Features:**
- Core Web Vitals measurement (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- PageSpeed Insights integration
- Image optimization (WebP, sizing, lazy loading)
- JavaScript and CSS minification
- Code splitting and chunking
- Tree-shaking and dead code removal
- Cache strategy (browser, CDN, service worker)
- Lazy loading for images and components
- Network waterfall analysis
- Mobile performance prioritization

---

#### 15. link-checker
**Role:** Content Integrity Specialist
**Team Position:** Runs in parallel with other auditors

**What it does:**
Scans all internal and external links, identifies broken links (404s), validates link text quality, and ensures anchor links work correctly.

**When to use it:**
- After site-generator creates pages
- After adding new pages or links
- Before launch
- "Find broken links", "check my links"

**What it produces:**
- Broken link report (organized by page)
- External link health check
- Anchor link validation
- Link text quality assessment
- Redirect chain detection
- Orphaned page identification
- List of pages to update

**Dependencies:**
- site-generator (pages and links to check)

**Key Features:**
- Internal link validation (404 detection)
- External link health checking
- Anchor link (#section) validation
- Link text quality (descriptive vs "click here")
- Redirect chain detection (A → B → C)
- Orphaned page detection (pages not linked from anywhere)
- Cross-browser link validation
- Link categorization by page and type

---

#### 16. accessibility-auditor
**Role:** Inclusive Design Specialist
**Team Position:** Runs in parallel with other auditors

**What it does:**
Comprehensive accessibility audit against WCAG 2.1 AA standards. Checks keyboard navigation, screen reader compatibility, color contrast, heading hierarchy, and form accessibility.

**When to use it:**
- After site-generator creates pages
- Before launch
- When targeting government or enterprise clients
- "Audit accessibility", "is my site usable for all?"

**What it produces:**
- Accessibility audit report (WCAG 2.1 AA compliance)
- Color contrast issues and fixes
- Keyboard navigation problems
- Screen reader testing results
- Heading hierarchy review
- Form accessibility analysis
- Image alt text audit
- Priority-organized fix list

**Dependencies:**
- site-generator (pages to audit)
- ux-reviewer (context on navigation)

**Key Features:**
- WCAG 2.1 AA compliance checking
- Keyboard navigation validation
- Screen reader compatibility testing
- Color contrast verification (APCA)
- Heading hierarchy review
- Form label and error message accessibility
- Image alt text audit
- Focus management and indicators
- Semantic HTML validation
- Automated + manual testing

---

### DEPLOY PHASE

#### 17. webmaster
**Role:** Site Project Manager and Orchestrator
**Team Position:** Coordinates entire workflow

**What it does:**
Project manager for your entire website lifecycle. Orchestrates skill execution, provides workflow presets, tracks project health, and manages updates throughout site lifetime.

**When to use it:**
- At the start of any project
- To coordinate skill execution
- For pre-launch review checklist
- For ongoing maintenance
- "Run a pre-launch review", "what's my site's health?"

**What it produces:**
- Unified Health Report (single report with all categories)
- Skill execution plan and timeline
- Dependency map (which skills run when)
- Workflow preset guides
- Project progress dashboard
- Monthly maintenance checklists
- Health score trends over time

**Dependencies:**
- All other skills (coordinates them)

**Key Features:**
- 5 workflow presets (Pre-Launch Review, Quick Update, Monthly Maintenance, Full Rebuild, Emergency Fix)
- Unified Health Report combining all auditors
- Skill dependency orchestration
- Category scoring and interpretation
- Regression detection (issues getting worse over time)
- Quarterly comparison reports
- Dashboard view of project health
- Automated audit scheduling

**Workflow Presets:**
1. **Pre-Launch Review** (48 hours before going live)
   - Run: QA Tester → Code Auditor → Security Auditor → SEO/AEO Auditor → Link Checker → Performance Optimizer → UX Reviewer
   - Output: Unified health report with go/no-go recommendation

2. **Quick Update** (after minor content/copy changes)
   - Run: Site Generator (updated pages) → Copy Editor → QA Tester (form testing) → Link Checker → Deploy

3. **Monthly Maintenance** (ongoing health monitoring)
   - Run: All auditors monthly, compare to previous month, flag regressions, generate trend report

4. **Full Rebuild** (starting from scratch or major redesign)
   - Run: Site Customizer → Site Interviewer → Site Generator → Form Wiring → Copy Editor → UX Reviewer → Full Audit Battery → Deploy

5. **Emergency Fix** (critical production issue)
   - Run: Quick fix to affected file → QA Tester (smoke test) → Deploy immediately

---

#### 18. deploy-to-vercel
**Role:** Deployment and Hosting Specialist
**Team Position:** Final step before going live

**What it does:**
Deploys your site to Vercel production. Handles environment configuration, serverless function deployment, SSL certificates, and rollback if needed.

**When to use it:**
- After pre-launch audit passes
- After making changes ready for production
- For scheduled releases
- "Deploy my site", "push to production"

**What it produces:**
- Production deployment
- Live site URL
- Environment variable configuration
- Serverless function deployment
- SSL certificate (auto-renewed)
- Deployment logs and status
- Rollback capability

**Dependencies:**
- webmaster (pre-launch checks complete)
- code-auditor (code quality verified)
- security-auditor (security checked)

**Key Features:**
- Vercel deployment automation
- Environment variable management
- Serverless function deployment
- Auto-scaling configuration
- Edge caching setup
- SSL/HTTPS auto-renewal
- Deployment logs and monitoring
- Easy rollback to previous versions
- GitHub integration (auto-deploy on push)
- Analytics and monitoring dashboard

---

#### 19. monitoring-and-maintenance
**Role:** Site Health Monitor
**Team Position:** Ongoing after launch

**What it does:**
Continuous monitoring of site health, uptime, performance, error rates, and user analytics. Alerts you to issues and provides recommendations for ongoing improvements.

**When to use it:**
- After site launches
- For ongoing site health
- When you want automated alerts
- "Monitor my site", "set up alerts"

**What it produces:**
- Uptime monitoring reports
- Performance trend analysis
- Error tracking and alerts
- User analytics summaries
- Monthly health summaries
- Recommendations for improvements
- Automated alert configurations

**Dependencies:**
- deploy-to-vercel (site must be live)

**Key Features:**
- 24/7 uptime monitoring
- Performance trending (Core Web Vitals, page speed)
- Error and exception tracking
- User analytics integration
- Automated alerts (email, Slack)
- Monthly health summaries
- Trend analysis (improving vs declining metrics)
- Recommendations for optimization
- Integration with monitoring services (Sentry, LogRocket)

---

## Workflow Diagrams

### Complete Linear Workflow (Simplified)

```
1. site-customizer (Brand setup)
   ↓
2. site-interviewer (Requirements gathering)
   ↓
3. site-generator (Page creation)
   ├─ brand-to-images (Image generation)
   └─ form-wiring (API connections)
   ↓
4. copy-editor (Copy optimization)
   ↓
5. ux-reviewer (UX optimization)
   ├─ design-refiner (Visual refinement)
   ↓
6. Full Audit Battery (Parallel)
   ├─ qa-tester
   ├─ code-auditor
   ├─ security-auditor
   ├─ seo-aeo-auditor
   ├─ performance-optimizer
   ├─ link-checker
   └─ accessibility-auditor
   ↓
7. webmaster (Review unified health report)
   ↓
8. deploy-to-vercel (Go live!)
   ↓
9. monitoring-and-maintenance (Ongoing)
```

### Dependency Matrix

| Skill | Depends On | Can Run In Parallel With |
|-------|-----------|-------------------------|
| site-customizer | Nothing | Nothing (runs first) |
| site-interviewer | site-customizer | brand-voice |
| brand-voice | Nothing | site-customizer, site-interviewer |
| site-generator | site-customizer, site-interviewer | brand-to-images |
| form-wiring | site-generator | copy-editor, ux-reviewer |
| brand-to-images | brand-voice, site-customizer | site-generator |
| copy-editor | site-generator | ux-reviewer, design-refiner |
| ux-reviewer | site-generator | copy-editor, design-refiner |
| design-refiner | ux-reviewer, copy-editor | Nothing (waits for feedback) |
| qa-tester | site-generator, form-wiring | code-auditor, (after polish phase) |
| code-auditor | site-generator, form-wiring | qa-tester, security-auditor |
| security-auditor | site-generator, form-wiring | code-auditor, seo-aeo-auditor |
| seo-aeo-auditor | site-generator, copy-editor | code-auditor, performance-optimizer |
| performance-optimizer | site-generator | all other auditors |
| link-checker | site-generator | all other auditors |
| accessibility-auditor | site-generator | all other auditors |
| webmaster | All building/polish skills complete | Nothing (coordinates others) |
| deploy-to-vercel | webmaster (pre-launch checks pass) | Nothing (final step) |
| monitoring-and-maintenance | deploy-to-vercel (site live) | Nothing (ongoing) |

---

## Workflow Presets

### 1. Pre-Launch Review
**Timeline:** 48 hours before going live
**Participants:** QA Tester, Code Auditor, Security Auditor, SEO/AEO Auditor, Link Checker, Performance Optimizer, UX Reviewer
**Output:** Unified health report with go/no-go recommendation

**Checklist:**
- [ ] All pages render correctly (QA Tester)
- [ ] No console errors (Code Auditor)
- [ ] No exposed API keys (Security Auditor)
- [ ] Meta tags and schema correct (SEO Auditor)
- [ ] All links work (Link Checker)
- [ ] Page load times acceptable (Performance Optimizer)
- [ ] UX meets standards (UX Reviewer)
- [ ] Accessibility WCAG AA compliant (Accessibility Auditor)

**Success Criteria:**
- Overall health score > 80
- No critical issues
- All 404s resolved

---

### 2. Quick Update
**Timeline:** After content/copy changes
**Participants:** Site Generator, Copy Editor, QA Tester, Link Checker
**Output:** Updated pages, verified working

**Steps:**
1. Site Generator updates changed pages
2. Copy Editor polishes new content
3. QA Tester verifies forms and pages work
4. Link Checker confirms no new broken links
5. Deploy to Vercel

**Timeline:** 2-4 hours

---

### 3. Monthly Maintenance
**Timeline:** First Monday of each month
**Participants:** All auditors
**Output:** Monthly health report, trend analysis

**Includes:**
- Run all auditors (QA, Code, Security, SEO, Performance, Link, Accessibility)
- Compare scores to previous month
- Flag regressions (scores getting worse)
- Identify quick wins (easy fixes)
- Generate month-over-month trend chart
- Recommend top 3 priorities for next month

**Success Criteria:**
- No regressions from previous month
- Overall health score maintained or improved

---

### 4. Full Rebuild
**Timeline:** Starting from scratch (10-14 days)
**Participants:** All skills in sequence

**Phases:**
1. **Setup (Day 1):** site-customizer → site-interviewer
2. **Build (Days 2-5):** site-generator → form-wiring → copy-editor → ux-reviewer
3. **Polish (Days 6-8):** design-refiner (iterate with feedback)
4. **Audit (Days 9-10):** Full audit battery (qa-tester, code-auditor, security-auditor, seo-aeo-auditor, performance-optimizer, link-checker, accessibility-auditor)
5. **Deploy (Day 11):** deploy-to-vercel

**Success Criteria:**
- Overall health score > 85
- Zero critical issues
- All stakeholders approve

---

### 5. Emergency Fix
**Timeline:** ASAP (1-2 hours)
**Participants:** Developer, QA Tester, Webmaster
**Output:** Production fix deployed

**Process:**
1. Identify critical issue
2. Quick fix to affected code/content
3. Smoke test (QA Tester verifies fix doesn't break anything else)
4. Deploy to Vercel immediately
5. Monitor for 1 hour post-deployment
6. Add proper audit to next scheduled review

**What Counts as Emergency:**
- Site completely down
- Payment/form processing broken
- Security breach discovered
- Major content error visible to all users

---

## Platform Compatibility

### Claude Code (Command Line)
**Best for:** Developers, technical founders
**Strengths:**
- Full command-line control
- Git integration
- Local development environment
- Fastest for experienced developers

**Workflow:**
```bash
# Run skills from command line
claude run site-customizer
claude run site-generator
claude deploy
```

---

### Claude Cowork (Desktop App)
**Best for:** Non-technical founders, small teams
**Strengths:**
- Visual interface (no coding required)
- Click-through workflow
- Built-in project dashboard
- Easy for non-developers

**Workflow:**
- Click "Start New Project" → follow wizard through each skill
- Drag skills into custom workflows
- See real-time progress dashboard

---

### Manus (by Meta)
**Best for:** Teams wanting conversational AI
**Strengths:**
- Natural language commands
- Fast, conversational interface
- Mobile-friendly

**Workflow:**
```
"Set up my website brand"
→ Manus runs site-customizer

"Generate my pages"
→ Manus runs site-generator

"Make on-brand images"
→ (with Nano Banana) Auto-generates images
```

---

### Nano Banana Integration (Image Generation)
**Works with:** Manus (and other platforms with Nano Banana support)
**What it does:** Automatically generates on-brand images using visual identity from brand-voice profile

**Image types:**
- Hero images (homepage headers)
- Background textures
- Team photos (avatars)
- Product mockups
- Testimonial graphics
- Blog post featured images

**How it works:**
1. brand-voice defines visual aesthetic
2. brand-to-images generates detailed prompts
3. Nano Banana creates images matching prompts
4. Images automatically placed on pages

**Result:** Cohesive visual identity across all pages without stock photos

---

## FAQ

### Getting Started

**Q: Where do I start?**
A: Always start with `site-customizer`. It defines your brand and configures all other skills. Takes about 1-2 hours.

**Q: Do I have to use all 19 skills?**
A: No. Use the presets:
- **Quick update:** site-generator → copy-editor → qa-tester → deploy
- **Full project:** Follow the linear workflow
- **Maintenance:** Monthly maintenance preset

**Q: How long does a full project take?**
A: 10-14 days using the Full Rebuild preset:
- Setup: 1 day
- Build: 4 days
- Polish: 3 days
- Audit: 2 days
- Deploy: 1 day

---

### Skills and Workflow

**Q: Can I skip the polish phase (copy-editor, ux-reviewer)?**
A: You can, but your site will be less effective. Copy-editor increases conversions. UX Reviewer catches usability problems. Both are worth the time.

**Q: What if I disagree with a skill's recommendation?**
A: You're in charge. Each skill provides reasoning. If you disagree, override it. Skills provide expertise, not mandates.

**Q: Can I run skills out of order?**
A: Not recommended. Dependencies exist for a reason:
- site-generator needs brand profile (site-customizer output)
- Auditors need complete pages to audit
- deploy-to-vercel needs pre-launch checks to pass

Breaking order usually leads to rework.

**Q: What if a skill finds critical issues?**
A: Fix them before moving to the next skill. The workflow is designed to catch issues early when they're cheaper to fix.

---

### Brand and Voice

**Q: What's the difference between site-customizer and brand-voice?**
A:
- `site-customizer`: Quick setup interview (30 min), creates basic brand profile
- `brand-voice`: Deep discovery (2-3 hours), creates detailed brand bible

Use both for best results: site-customizer to get started quickly, then brand-voice for deeper brand development.

**Q: Can I change my brand after launching?**
A: Yes. Update brand-voice, it automatically updates the profile, and tell other skills to re-run. They'll use the new brand.

**Q: What if I don't have a logo yet?**
A: Tell brand-voice. It can suggest design directions or recommend a designer. You can add the logo later and update the profile.

---

### Building and Deployment

**Q: Do I need technical skills to use VibeCoding?**
A: No. Especially if using Cowork or Manus. Skills handle technical details. You provide business direction.

**Q: What about my domain name?**
A: Set it up in Vercel settings before deploy-to-vercel runs. Takes 5 minutes.

**Q: Can I use my own hosting instead of Vercel?**
A: VibeCoding is optimized for Vercel. Technically possible but requires additional setup.

**Q: How do I add content after launch?**
A: Use Quick Update preset:
1. Write/update content
2. Run site-generator (updates pages)
3. Run copy-editor (polish copy)
4. Run qa-tester (verify)
5. Deploy

Takes 2-4 hours.

---

### Auditing and Maintenance

**Q: How often should I run audits?**
A:
- Before launch: Pre-Launch Review
- Monthly: Monthly Maintenance preset
- After major changes: Post-update QA Tester only

**Q: What should I do with the audit reports?**
A: Webmaster provides a Unified Health Report with all findings. Prioritize by:
1. Critical issues (fix immediately)
2. High issues (fix this week)
3. Medium issues (fix this month)
4. Low issues (fix eventually)

**Q: How do I improve my SEO score?**
A: SEO/AEO Auditor provides prioritized action plan. Usually:
1. Add missing meta tags
2. Fix heading hierarchy
3. Add schema markup
4. Create content for high-volume keywords you don't rank for

**Q: What are Core Web Vitals?**
A: Three metrics Google cares about:
- **LCP (Largest Contentful Paint):** Page's main content loads in < 2.5 seconds
- **FID (First Input Delay):** Page responds to clicks in < 100ms
- **CLS (Cumulative Layout Shift):** Page doesn't jump around unexpectedly (< 0.1 score)

Performance Optimizer focuses on these.

---

### Troubleshooting

**Q: A skill is stuck or not responding.**
A: Restart it. If it keeps failing, check the dependencies ran first.

**Q: I deployed and now there's an error.**
A: Use Emergency Fix preset. Code Auditor and Security Auditor should have caught this—report so it improves.

**Q: My site looks different than the audit said it would.**
A: Browser or device differences. Run QA Tester on that specific browser/device.

**Q: Can I use my own designer/developer?**
A: Yes. VibeCoding skills provide specifications and output (design files, code, brand guide). Contractors can build from those.

---

### Integration and APIs

**Q: What third-party services does VibeCoding support?**
A:
- **Email:** Resend
- **Newsletters:** Beehiiv
- **Analytics:** Google Analytics, Fathom, Plausible
- **Hosting:** Vercel
- **Functions:** Vercel Serverless Functions

form-wiring connects all of these.

**Q: Can I use Mailchimp instead of Beehiiv?**
A: Yes. form-wiring is flexible. Tell it which service you use.

**Q: Do I need API keys for everything?**
A: Only for services you use. If not using Resend, no API key needed. site-customizer asks which services you use.

---

### Costs

**Q: Is VibeCoding free?**
A: VibeCoding (the skill system) is free. Third-party services cost:
- Vercel: Free tier available, paid for production
- Resend: Free email quota, then pay-as-you-go
- Beehiiv: Free tier available, paid for more subscribers
- Analytics: Free options available

---

### Next Steps

**Q: What should I do right now?**
A:
1. Pick your platform (Claude Code, Cowork, or Manus)
2. Run `site-customizer` to set up your brand
3. Run `site-interviewer` to define your site structure
4. Follow the workflow diagram for your use case
5. Use the webmaster for orchestration

**Q: Where can I learn more?**
A: Each skill has detailed documentation in its SKILL.md file. Start with the skill description, then dive into details as needed.

---

## Skill Quick Reference Table

| Skill # | Skill Name | Role | Phase | Dependencies | Output |
|---------|-----------|------|-------|--------------|--------|
| 1 | site-customizer | Creative Director | Setup | None | brand-profile.json |
| 2 | site-interviewer | Requirements Analyst | Setup | site-customizer | requirements document |
| 3 | brand-voice | Brand Strategist | Setup | None | brand-guide.md |
| 4 | site-generator | Web Developer | Build | site-customizer, site-interviewer | website pages |
| 5 | form-wiring | Backend Engineer | Build | site-generator | serverless functions |
| 6 | brand-to-images | Visual Strategist | Build | brand-voice | image prompts |
| 7 | copy-editor | Conversion Optimizer | Polish | site-generator | optimized copy |
| 8 | ux-reviewer | UX Evaluator | Polish | site-generator | UX report |
| 9 | design-refiner | Visual Designer | Polish | ux-reviewer, copy-editor | refined design |
| 10 | qa-tester | QA Gatekeeper | Audit | site-generator | test results |
| 11 | code-auditor | Web Programmer | Audit | site-generator | code review |
| 12 | security-auditor | Security Guardian | Audit | site-generator | security report |
| 13 | seo-aeo-auditor | SEO Expert | Audit | site-generator | SEO report |
| 14 | performance-optimizer | Speed Specialist | Audit | site-generator | performance fixes |
| 15 | link-checker | Content Specialist | Audit | site-generator | broken link list |
| 16 | accessibility-auditor | Inclusive Designer | Audit | site-generator | a11y report |
| 17 | webmaster | Project Manager | Deploy | All building/polish | unified health report |
| 18 | deploy-to-vercel | Deployment Specialist | Deploy | webmaster | live site |
| 19 | monitoring-and-maintenance | Health Monitor | Ongoing | deploy-to-vercel | uptime/perf reports |

---

## Document Info

**Version:** 2.0
**Last Updated:** April 3, 2026
**Skills Documented:** 19 of 19
**Completeness:** 100%

For detailed skill documentation, see individual SKILL.md files in each skill directory.
