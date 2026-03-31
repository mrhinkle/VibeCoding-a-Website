# SKILL 3: Site Generator

Generate a complete, production-ready website based on the site brief from the site-interviewer skill.

## Overview

This skill reads the `site-brief.json` file produced by the site-interviewer skill and generates a fully functional website with responsive design, modern styling, accessibility features, and integration points for forms and newsletter signup.

The skill intelligently chooses between two complexity levels:
- **Simple**: Pure HTML/CSS for 1-5 static pages (landing pages, portfolios, simple marketing sites)
- **Complex**: Vite + vanilla JavaScript for dynamic sites with interactive features

## What This Skill Does

### 1. Analyzes Site Brief
- Reads `site-brief.json` from the current directory
- Extracts: business type, brand colors, fonts, page count, special features
- Determines complexity level (simple vs complex)

### 2. Generates Website Structure

For **simple sites**:
```
generated-site/
├── index.html
├── styles.css
├── [page-name].html (for each page beyond home)
├── vercel.json
├── .gitignore
└── README.md
```

For **complex sites**:
```
generated-site/
├── package.json
├── vite.config.js
├── index.html
├── main.js
├── style.css
├── vercel.json
├── .gitignore
└── src/
    ├── components/
    ├── utils/
    └── styles/
```

### 3. Implements Modern Features

**HTML & Structure**:
- Semantic HTML5 (header, nav, main, section, article, footer)
- Complete meta tags (viewport, charset, description)
- Open Graph tags for social sharing
- Favicon link placeholder
- Proper heading hierarchy (h1, h2, h3)

**Styling**:
- CSS custom properties for brand colors and fonts
- Mobile-first responsive design (320px, 768px, 1024px breakpoints)
- Smooth scroll behavior
- Scroll animations with Intersection Observer
- Professional typography with system fonts or Google Fonts

**JavaScript (Complex Sites)**:
- Smooth scroll navigation
- Scroll-triggered animations
- Mobile menu toggle
- Form handling with validation
- Toast notifications for success/error

**Accessibility (WCAG AA)**:
- Proper alt text placeholders for images
- Semantic landmarks (nav, main, footer)
- Color contrast ratios ≥4.5:1
- Keyboard navigation support
- Focus indicators on interactive elements
- Form labels properly associated with inputs

**Form Placeholders**:
- Contact form markup with Resend integration hooks
- Newsletter signup embed slot (Beehiiv iframe ready)
- Form validation structure (client-side)
- Honeypot field for spam protection

**Deployment Ready**:
- `vercel.json` configuration for Vercel deployment
- `.gitignore` excluding node_modules, dist, .env
- Environment variable setup instructions
- Serverless function ready for Resend integration

## Skill Workflow

### Input
1. User provides the site brief (created by site-interviewer skill)
2. Brief includes: business name, colors, fonts, page structure, features

### Processing
1. Read and parse `site-brief.json`
2. Determine complexity (count pages, check for dynamic features)
3. Select appropriate template (simple-html or vite-js)
4. Generate files based on template
5. Customize with site-specific content
6. Create config files

### Output
1. Complete website folder (`generated-site/`)
2. All HTML/CSS/JS files ready to use
3. `vercel.json` for deployment
4. `.gitignore` file
5. Setup instructions for forms (Resend)
6. Setup instructions for deployment (Vercel)

## Features by Site Type

### Simple HTML Sites
- Single responsive design system
- No build step required
- No dependencies
- Pure CSS animations and transitions
- Perfect for: portfolios, landing pages, small business sites

### Complex Sites with Vite
- Modern build tooling
- Component-based structure
- Module system for CSS
- NPM for dependency management
- Perfect for: e-commerce, dashboards, interactive experiences

## Form & Newsletter Integration

### Contact Form
- Located on contact page or contact section
- Wired for Resend email delivery
- Client-side validation (required fields, email format)
- Honeypot field (`_redirect`) for spam protection
- Success/error toast notifications
- Environment variables: `VITE_RESEND_FROM_EMAIL`

### Newsletter Signup
- Beehiiv embed iframe (zero-configuration)
- Appears in footer and/or dedicated section
- Form ID from Beehiiv provided by user
- Requires: Beehiiv publication ID and form ID

## Color & Typography System

All generated sites use CSS custom properties for easy theme customization:

```css
:root {
  --primary: #2563eb;
  --secondary: #1f2937;
  --accent: #f59e0b;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f9fafb;
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-serif: Georgia, serif;
}
```

Colors and fonts automatically derive from `site-brief.json` brand specifications.

## Responsive Design Breakpoints

```css
/* Mobile First */
/* default: 320px+ */
/* tablet: 768px+ */
/* desktop: 1024px+ */
```

All components scale elegantly across devices:
- Navigation adapts (hamburger menu on mobile)
- Grid layouts reflow (1 col → 2 col → 3+ col)
- Typography scales (16px → 18px → 20px)
- Touch targets remain 48px+ on mobile

## Accessibility Features

- WCAG AA compliant color contrast
- Semantic HTML structure with landmarks
- Alt text placeholders for all images
- Keyboard navigation (Tab, Enter, Escape)
- Focus visible styles for interactive elements
- Form validation with error messages
- Skip-to-main-content link (hidden off-screen)
- Image captions for decorative images

## Image Placeholders

All generated sites include image placeholder slots ready for integration with the brand-to-images skill:

```html
<img 
  src="{{ PLACEHOLDER: hero-image }}" 
  alt="Brand hero illustration"
  class="hero-image"
/>
```

The form-wiring skill will replace these with actual image URLs.

## Deployment Files

### vercel.json
Configures:
- Environment variables for Resend
- Serverless function routes
- Build and output settings
- Redirects and rewrite rules

### .gitignore
Excludes:
- `node_modules/`
- `dist/` (build output)
- `.env.local` (environment variables)
- `.DS_Store` (macOS files)
- `*.log` (log files)

## Next Steps After Generation

1. **Review Generated Files**: Open the generated site in a browser
2. **Add Brand Assets**: Use brand-to-images skill to add logos, hero images
3. **Wire Forms**: Use form-wiring skill to connect Resend and Beehiiv
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Configure Environment**: Add Resend API key to Vercel environment

## Example Usage

```
User: Generate a website for my digital marketing agency
1. Site interviewer collects: name, colors, pages needed, features
2. Creates site-brief.json
3. Site generator reads brief
4. Generates complete website (or Vite project)
5. User reviews files
6. User adds images and configures forms
7. User deploys to Vercel
```

## Technical Specifications

- **HTML**: Semantic HTML5
- **CSS**: Modern CSS (custom properties, Grid, Flexbox)
- **JavaScript**: Vanilla ES6+ (no frameworks required)
- **Build Tool**: Vite (for complex sites)
- **Deployment**: Vercel (serverless + static)
- **Email**: Resend API (via Vercel functions)
- **Newsletter**: Beehiiv (embedded iframe)

## Quality Standards

Generated websites meet these standards:

- Lighthouse Score: 90+
- Mobile-first responsive
- Sub-3s load time
- WCAG AA accessible
- SEO optimized (meta tags, semantic HTML)
- Form validation
- Error handling
- Production-ready code

---

*See references/ folder for detailed guides on Resend form setup and Vercel configuration.*
