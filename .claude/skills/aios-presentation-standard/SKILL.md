---
name: aios-presentation-standard
description: Create, edit, and audit presentations according to the AIOS Presentation Quality Protocol (PQP). Use this skill whenever the user requests a presentation for MarketingProfs, Peripety Labs, or demands high-stakes professional slides with the "AIOS" or "Agentic" aesthetic. Covers both dark-mode (online presentations) and white-background (AIOS official curriculum) variants. Also use when fixing broken logos, duplicate elements, inconsistent whitespace, footer text, or chart clarity issues in existing AIOS decks.
---

# AIOS Presentation Standard

## When to Use Each Variant

| Variant | Use For | Background | Footer |
|---|---|---|---|
| **White Mode** | AIOS official curriculum (e.g., AI for Business Professionals modules, MarketingProfs classroom sessions) | `#FFFFFF` | Orange course title, bottom-left |
| **Dark Mode** | Online presentations, webinars, keynotes, external talks | `#0F1115` | None |

Always start from a template in `templates/` rather than writing from scratch.

---

## Template Library

### White Mode (AIOS Official Curriculum)

| File | Slide Type | Key Layout |
|---|---|---|
| `white_title_slide.html` | Title/opening | Centered hero text, presenter info with orange left-border |
| `white_content_slide.html` | Two-column comparison | Side-by-side panels, old vs. new paradigm |
| `white_chart_slide.html` | Data visualization | CSS horizontal bars with gap callout + insight panel |
| `white_framework_slide.html` | Framework overview | 5-step horizontal flow with orange letter + connector line |
| `white_action_plan_slide.html` | Closing action | 3-column card grid with numbered steps and time badges |

### Dark Mode (Online Presentations)

| File | Slide Type | Key Layout |
|---|---|---|
| `dark_title_slide.html` | Title/opening | Full-bleed dark, gradient h1, meta-grid for speaker info |
| `dark_content_slide.html` | Stats/data | 2×2 stat boxes, highlight box, footnotes |
| `dark_framework_slide.html` | Framework overview | 5-column grid with arrow connectors, dark cards |
| `dark_action_plan_slide.html` | Closing action | Numbered step cards with orange accent |

---

## 1. Design System

### Color Palettes

| Token | Dark Mode | White Mode |
|---|---|---|
| Background | `#0F1115` | `#FFFFFF` |
| Primary Text | `#FFFFFF` | `#111111` |
| Secondary Text | `#A5B3CE` | `#555555` |
| Accent | `#f44800` | `#f44800` |
| Divider | `#333333` | `#111111` or `#E1E4E8` |
| Panel/Card BG | `#1A1D24` | `#F5F7FA` or `#FFF5F0` |

### Typography

- **Headings**: `Inter Tight` — weights 600, 800
- **Mono/Labels**: `JetBrains Mono` — weights 400, 700
- **Minimum sizes**: 13px footer; 16px descriptions; 20px body; 24px subtitles; 46–80px h1

### Slide Dimensions

- Width: `1280px`, `min-height: 720px`
- **Content slides**: `padding: 60px 80px 80px`
- **Title slides**: `padding: 80px 100px 80px`
- **Never less than 80px bottom** — the chrome zone (footer + logo) occupies ~70px

---

## 2. Required Chrome (Every Slide)

All three elements MUST be **inside** `.slide-container`.

### Top-Right: AIOS Icon
```css
.aios-icon-topright {
    position: absolute; top: 40px; right: 40px;
    width: 50px; height: 50px; object-fit: contain;
}
```

### Bottom-Right: AIOS Logo Wordmark
```css
/* White mode: color wordmark */
.aios-logo-bottom {
    position: absolute; bottom: 8px; right: 40px;
    height: 48px; width: auto; object-fit: contain;
}
/* Dark mode: white wordmark lockup */
.aios-lockup { position: absolute; bottom: 20px; right: 80px; display: flex; align-items: center; }
.aios-lockup-icon { height: 36px; width: auto; object-fit: contain; }
```
**Centering math (white mode)**: footer text center = `bottom: ~32px`; logo center = `8 + 24 = 32px`. ✓

### Bottom-Left: Footer Text (white mode, non-title slides only)
```css
.slide-footer {
    position: absolute; bottom: 24px; left: 40px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px; color: #f44800;
    font-weight: 600; letter-spacing: 0.3px; white-space: nowrap;
}
```
**Standard footer text**: `AI FOR BUSINESS PROFESSIONALS | BEYOND THE PROMPT: CREATING REPRODUCIBLE WORKFLOWS`

---

## 3. Content Delivery Patterns

Both variants use the same content structure — only the visual treatment differs. Match the slide type to the pattern below.

### Pattern A — Hook / Problem Statement
*White*: Large h1 with `border-bottom: 2px solid #111111` header divider. Subtitle in JetBrains Mono. Key stat in large orange text.
*Dark*: Same structure. Stat boxes use `border: 1px solid #333; background: #1A1D24`. Highlight box: `border-left: 4px solid #f44800; background: rgba(244,72,0,0.1)`.

```html
<!-- White example (from white_content_slide.html) -->
<div class="header">
    <h1>Why AI is Different</h1>
    <p class="subtitle">// It's not just another tech upgrade.</p>
</div>
<div class="comparison-container">
    <div class="side old"> ... Previous Tech ... </div>
    <div class="side new"> ... Generative AI ... </div>
</div>
```

### Pattern B — Data / Gap Visualization
Use CSS horizontal bars (not Chart.js) for maximum reliability. See `white_chart_slide.html`.

```html
<div class="bar-track">
    <div class="bar-fill access"><span class="bar-pct">~100%</span></div>
</div>
<div class="gap-callout">
    <div class="gap-line"></div><div class="gap-label">92% Gap</div><div class="gap-line"></div>
</div>
<div class="bar-track">
    <div class="bar-fill workflow"><span class="bar-pct-outside">&lt;8%</span></div>
</div>
```

### Pattern C — Framework / Process Flow
5-step horizontal layout. Orange letter, bold title, short description. Arrow connectors between steps.

```html
<!-- White example (from white_framework_slide.html) -->
<div class="framework-container">
    <div class="connector"></div>
    <div class="step-box">
        <div class="letter">S</div>
        <div class="step-title">Sort</div>
        <div class="step-desc">Audit your tasks.</div>
    </div>
    <!-- repeat for M, A, R, T -->
</div>
```

*Dark variant*: Replace `step-box` with `step-card` (dark background), add `::after` arrow connector. See `dark_framework_slide.html`.

### Pattern D — Action Plan / Closing
3-column card grid. Numbered steps with time badges. One card highlighted in orange.

```html
<!-- White example (from white_action_plan_slide.html) -->
<div class="plan-grid">
    <div class="plan-card">
        <span class="step-number">01</span>
        <div class="time-badge">1 Hour</div>
        <div class="card-title">Audit</div>
        <div class="card-desc">Identify one repetitive task.</div>
    </div>
    <div class="plan-card highlight"> ... </div>
    <div class="plan-card"> ... </div>
</div>
```

### Pattern E — Stats / Evidence
Large numbers (80–96px) with supporting labels. Use 2×2 grid for 4 stats.

```html
<!-- Dark example (from dark_content_slide.html) -->
<div class="stats-grid">
    <div class="stat-box highlight">
        <div class="stat-number">77<span class="stat-sup">%</span></div>
        <div class="stat-label">Use AI at least weekly</div>
        <div class="stat-desc">But only for one-off tasks</div>
    </div>
    <!-- repeat -->
</div>
<div class="insight-box">
    <p class="insight-text">The gap isn't <strong>access</strong> — it's <strong>workflow</strong>.</p>
</div>
```

---

## 4. Key Differences Between Variants

| Element | Dark Mode | White Mode |
|---|---|---|
| `body` bg | `#0F1115` | `#FFFFFF` |
| h1 color | `#FFFFFF` | `#111111` |
| Subtitle color | `#A5B3CE` | `#555555` |
| Header divider | `border-bottom: 2px solid #333` | `border-bottom: 2px solid #111111` |
| Card background | `#1A1D24` | `#F5F7FA` |
| Card border | `1px solid #333` | `1px solid #E1E4E8` |
| Logo | White wordmark (`.aios-lockup`) | Color wordmark (`.aios-logo-bottom`) |
| Footer text | None | Orange JetBrains Mono, bottom-left |
| Subtitle prefix | `>` (terminal prompt) | `//` (code comment) |

---

## 5. Common Editor Artifacts to Strip

The slide editor injects these — always remove when editing HTML directly:

- `<ms-img style="..."><img ...></ms-img>` → replace with clean `<img class="aios-logo-bottom">`
- `style="transform: translate(...)"` on `.slide-footer` or logo → remove the style attribute
- Logo `<img>` placed **after** closing `</div>` of `.slide-container` → move inside

---

## 6. Narrative Structure (45-Min Deck)

| Section | Slides | Minutes | Pattern Used |
|---|---|---|---|
| Hook | 1–4 | 8 min | Title → Comparison (A) → Stats (E) → Chart (B) |
| System Thinking | 5–9 | 10 min | Comparison (A) → Stats (E) |
| S.M.A.R.T. Framework | 10–15 | 12 min | Framework (C) × 5 steps |
| Live Demo | 16 | 8 min | Full-bleed demo slide |
| Landscape + Maturity | 17–18 | 5 min | Stats (E) |
| Close + Action | 19–23 | 7 min | Action Plan (D) → Q&A → Resources |

---

## 7. Quality Checklist

- [ ] Logo inside `.slide-container`, not outside
- [ ] `padding-bottom: 80px` minimum on `.slide-container`
- [ ] Non-title slides: footer text present, no inline transforms
- [ ] Logo: `height: 48px`, `bottom: 8px`, `right: 40px` (white); `height: 36px`, `bottom: 20px`, `right: 80px` (dark)
- [ ] No `<ms-img>` wrappers remaining
- [ ] No broken image `src` paths
- [ ] Charts: CSS bars preferred; Chart.js canvas wrapped in `<div style="height: 300px;">`
- [ ] Footer spelling: "PROFESSIONALS" not "PROFESSIONAS"; "REPRODUCIBLE" not "REPRODUCTIBLE"
- [ ] Title slide: no footer text; logo present
- [ ] PDF export: minimum 20pt readable text in output (verify with font audit script)

---

## 8. PDF Export Standard

**CRITICAL**: Always use `scripts/render_slides_to_pdf.py` when exporting to PDF. Do NOT use the default Chromium headless settings — they scale fonts down by 0.75x.

### Root Cause
Chromium renders at 96dpi but prints at 72dpi, applying a 0.75x scale to all fonts. A 20px CSS font becomes 15pt in the PDF without the fix.

### The Fix
The render script uses two compensating flags:
1. `--force-device-scale-factor=1.333` (= 96/72) — counteracts the dpi conversion
2. `@page { size: 1280pt 720pt; margin: 0; }` — forces exact slide dimensions with no margins

### Usage
```python
# Edit SLIDE_DIR, OUTPUT_PDF, and SLIDE_IDS at the top of the script, then:
python3 scripts/render_slides_to_pdf.py
```

### Verification
After rendering, verify minimum font sizes:
```python
from pypdf import PdfReader
import re
r = PdfReader('output.pdf')
for i, page in enumerate(r.pages):
    content = page.get_contents()
    data = content.get_data().decode('latin-1', errors='replace')
    sizes = [float(s) for s in re.findall(r'(\d+(?:\.\d+)?)\s+Tf', data)]
    # Filter out SVG logo artifacts (always appear as ~4.27pt scaled 3x)
    readable = [s for s in sizes if s > 10]
    if readable:
        print(f'Page {i+1}: min readable = {min(readable):.1f}pt')
```
Expected minimum: **20pt** for body text (= 20px CSS at 1:1 scale).

### Upload to Google Drive
```python
import configparser, json, requests
cfg = configparser.ConfigParser()
cfg.read('/home/ubuntu/.gdrive-rclone.ini')
token = json.loads(cfg['manus_google_drive']['token'])['access_token']
with open('output.pdf', 'rb') as f:
    data = f.read()
resp = requests.patch(
    f'https://www.googleapis.com/upload/drive/v3/files/{FILE_ID}?uploadType=media',
    headers={'Authorization': f'Bearer {token}', 'Content-Type': 'application/pdf'},
    data=data
)
print(resp.status_code, resp.json())
```
