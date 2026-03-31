# Module 04: Generate Your Website
**Time: 12 minutes core | 42 minutes expanded**

---

## The Moment of Truth

You've done the work. You have your brand identity, your images, your vision.

Now Claude Code will build your actual website.

This module is watching magic happen. Literally. You'll see a website appear in front of you. Code, HTML, CSS, all generated. Functional. Beautiful. Yours.

This takes 10–15 minutes for a standard site. Larger sites might take 20–30 minutes. Grab coffee.

---

## Core: Generate Your Site (12 minutes)

### Step 1: Prepare Your Inputs

You need three things ready:
1. Your `site-brief.json` from Module 02
2. Your image files from Module 03 in a folder on your computer
3. Your API key (from Module 01)

Have these open in tabs or windows. You'll reference them soon.

---

### Step 2: Run the site-generator Skill

1. In Claude Code chat, type: `/site-generator`
2. Claude will ask: "Are you ready to generate your website?"
3. Paste your site-brief.json content
4. When it asks "Do you want to add images?" say yes
5. Upload your images (drag-and-drop or browse)

Claude now has everything it needs.

---

### Step 3: Watch Claude Build

Claude will start building. You'll see it:
1. Create the project structure (folders, files)
2. Write HTML for each page
3. Add CSS styling
4. Set up responsive design
5. Wire up interactivity
6. Integrate your images

This happens in real time. You'll see code appearing. It's mesmerizing.

The skill will run for 10–20 minutes depending on complexity. Don't interrupt it. Let it work.

---

### Step 4: Review the Output

When Claude finishes, you'll see:
- A complete website project
- Multiple files and folders
- A preview (if available)
- A message: "Your site is ready"

You now have a fully functional website codebase on your computer. It's real code. It's deployable. It's yours.

---

### Step 5: Preview Locally

Before we deploy to the internet, let's see it in your browser.

**Option A: Simple Preview (Easiest)**
1. In Claude Code, find the file `index.html`
2. Right-click it
3. Select "Open with" > "Browser"
4. Your site opens in a new tab

You can now click around, fill out forms, click buttons. It works.

**Option B: Local Development Server (Better for Testing)**
If you installed Node.js in Module 01:

1. Open Terminal/Command Prompt
2. Navigate to your project:
   ```
   cd ~/Documents/VibeCoding-a-Website/your-site-name
   ```
3. Run:
   ```
   npm install
   ```
4. Then:
   ```
   npm run dev
   ```
5. Your terminal will show a URL (usually `http://localhost:5173`)
6. Open that URL in your browser

This is a "live preview." When you edit code, the browser updates automatically. Developers use this constantly.

---

### That's Core

Your site is generated, built, and previewed locally.

In Module 07, we'll deploy it to the internet. But first, if you want to customize anything, read the expanded section.

---

## Expanded: Customizing Your Site (30 minutes more)

Your generated site is functional and beautiful. But it's also customizable.

You can change colors, layouts, fonts, and functionality. Here's how.

### Understanding the Site Structure

Your website has this basic structure:

```
your-site/
├── index.html          (your home page)
├── about.html          (about page, if applicable)
├── contact.html        (contact form)
├── css/
│   ├── style.css       (main styles)
│   └── responsive.css  (mobile styles)
├── js/
│   └── script.js       (interactive features)
├── images/
│   ├── hero.jpg        (your brand images)
│   ├── feature-1.jpg
│   └── ...
└── assets/
    └── fonts/          (custom fonts)
```

You don't need to understand all of this. But know that:
- **HTML files** contain the structure and content
- **CSS files** contain the styling (colors, fonts, spacing)
- **JS files** contain the interactivity (forms, animations)
- **Images** are in the images folder

### HTML Basics for Beginners

HTML is the skeleton of your website. It has tags that describe content:

```html
<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
<button>Click me</button>
<img src="image.jpg" alt="description">
```

Tags are instructions. `<h1>` says "this is the most important heading." `<p>` says "this is a paragraph." `<img>` says "put an image here."

You don't need to memorize tags. But if you see them, don't be scared. They're just labels.

Common tags:
- `<h1>`, `<h2>`, `<h3>` – Headings (different sizes)
- `<p>` – Paragraph of text
- `<button>` – Clickable button
- `<a href="link">` – Hyperlink
- `<img src="">` – Image
- `<form>` – Form for collecting data
- `<div>` – Generic container (groups other elements)

That's 90% of HTML. The rest is detail.

### CSS Basics for Beginners

CSS makes things look good. It controls colors, spacing, fonts, and layout.

Example:
```css
h1 {
  color: blue;
  font-size: 32px;
  margin-bottom: 20px;
}
```

This says: "All h1 headings should be blue, 32px large, with 20px of space below them."

Common CSS properties:
- `color` – Text color
- `background-color` – Background color
- `font-size` – Size of text
- `margin` – Space outside an element
- `padding` – Space inside an element
- `border` – Lines around elements
- `display` – How to arrange elements

You don't need to memorize these. But if you want to change how something looks, CSS is where you do it.

---

### Customizing Colors

Want to change your primary color throughout the site?

1. Open `css/style.css` in Claude Code
2. Find the line that defines your primary color (looks like `--primary-color: #2563eb;`)
3. Change the color code to your hex color
4. Save (Ctrl+S or Cmd+S)
5. Refresh your browser preview
6. The color updates everywhere

Hex color codes are 6 characters: `#` followed by letters and numbers. Google "color picker" and you'll find tools that give you hex codes for any color you want.

---

### Customizing Fonts

Want bigger headings? Different font family?

1. Open `css/style.css`
2. Find `h1 { ... }` section
3. Change `font-size: 32px;` to your preferred size (try 40px, 48px, etc.)
4. Save and refresh
5. The headings update

To change the font family:
1. Open the `<head>` section of your HTML
2. Find where fonts are imported (looks like `@import url('...');`)
3. Google Fonts has instructions for swapping fonts
4. Replace the URL
5. Save and refresh

Don't get stuck here. If font changes feel complicated, skip this and do it later via Manus.

---

### Customizing Layouts

Want a different section order? Different column layout?

This requires understanding CSS Grid or Flexbox, which is more advanced.

**Safe option:** Use Manus instead. It has a visual editor for layouts. Easier than code.

**Adventurous option:** Tell Claude Code "I want the services section on the left and images on the right." Claude will rewrite the CSS for you.

---

### Adding Animations

Want buttons that glow when hovered? Text that fades in? Smooth scrolling?

Claude Code can add these. In Claude Code chat, say:

"Add a smooth fade-in animation when the page loads" or "Make buttons glow when hovered"

Claude will write the CSS animations for you. No code required from you.

---

### Responsive Design: What It Means

"Responsive design" means your site looks great on phones, tablets, and desktops.

Your generated site is already responsive. Test it:

1. Open your site preview in your browser
2. Press F12 (opens Developer Tools)
3. Click the phone icon (toggles mobile view)
4. Resize the window
5. Your site adapts

This happens automatically because Claude Code included mobile-first CSS.

You don't need to do anything. But if you want to adjust mobile fonts or spacing:

1. Find `@media (max-width: 768px)` in your CSS
2. Adjust font sizes, margins, etc. inside that section
3. Save and refresh
4. Test on your phone view

---

### Common Customization Requests

**"I want to change the hero image"**
1. Replace the image file in your images folder
2. Give it the same filename (e.g., `hero.jpg`)
3. Refresh your browser
4. Done

**"I want to add a section"**
1. Tell Claude Code: "Add a team section below services"
2. Claude writes the HTML and CSS
3. You review and approve
4. It's done

**"I want to remove a page"**
1. Delete the HTML file (e.g., delete `about.html`)
2. Remove the link to it from your navigation
3. Save
4. Done

**"I want to customize the form"**
1. Tell Claude Code: "Add fields for phone number and company to the contact form"
2. Claude updates the form
3. Done

---

### Troubleshooting Common Issues

**"The site looks weird on my phone"**
Check that you're using the mobile view (step 3 above). If it still looks weird, try a different browser. Or tell Claude Code: "Fix the mobile layout—text should be larger."

**"I changed the code but nothing happened"**
Make sure you saved (Ctrl+S). Then refresh your browser (Ctrl+R or Cmd+R).

**"I broke something and now it doesn't work"**
Don't panic. Use Ctrl+Z (undo) in Claude Code to revert your last change. Or ask Claude Code: "The site doesn't load anymore. Can you fix it?"

**"The images are huge and the site is slow"**
Manus compresses images automatically, but if they're large files, they slow things down. Claude Code can optimize them. Just ask.

---

## Callout: Don't Over-Customize

Your generated site is 95% ready. Spending 4 hours to customize the final 5% is a waste.

Ship now. Customize later.

Users care about content and functionality, not whether your heading font is exactly 40px or 42px.

---

## Tip: Use Claude Code for Customization

Instead of editing code yourself, ask Claude Code to do it.

"Make the buttons larger" → Claude rewrites the CSS.
"Change the color scheme to green and gold" → Claude updates all colors.
"Add a testimonials section" → Claude builds it.

This is why you have Claude Code. Use it. Your brain power is better spent on strategy than syntax.

---

## After This Module

You have a fully customized, live-on-your-computer website.

It handles everything: pages, images, responsive design, forms (partially—we'll wire them up in Module 05).

The site is ready to deploy. But before we do, we need to set up email handling.

See you in Module 05.
