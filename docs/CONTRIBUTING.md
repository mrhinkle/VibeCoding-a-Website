# Contributing to VibeCoding

Thank you for your interest in contributing to VibeCoding! We believe this project works best when it's shaped by real users and practitioners. Whether you're building new skills, writing tutorials, or reporting bugs, your contribution matters.

## How to Contribute

### 1. Contributing Skills

Skills are the heart of VibeCoding. New skills extend what you can build with the system.

**What makes a good skill:**
- Solves one specific problem well (single responsibility)
- Takes clear inputs (like site-brief.json) and produces clear outputs
- Is well-documented with examples
- Includes reference files and helper scripts
- Works reliably with Claude Code

**To contribute a skill:**

1. **Fork the repo** and create a feature branch
   ```bash
   git checkout -b skill/my-new-skill
   ```

2. **Create the skill directory** under `.claude/skills/`
   ```bash
   mkdir .claude/skills/my-new-skill
   cd .claude/skills/my-new-skill
   ```

3. **Write SKILL.md** with:
   - Metadata (name, description, version, author, tags)
   - Clear explanation of what it does
   - Step-by-step instructions for using it
   - The data schema it expects (if applicable)
   - Example outputs
   - Tips for getting best results

4. **Create supporting files** in subdirectories:
   - `references/` — Documentation, question banks, templates
   - `scripts/` — Helper scripts (Python, Node, bash)
   - `templates/` — HTML/CSS templates (if applicable)

5. **Document the skill** clearly so someone new can use it
   - See existing skills (site-interviewer, performance-optimizer) as examples
   - Explain the "why" not just the "what"

6. **Test thoroughly**
   - Run the skill with Claude Code
   - Test edge cases
   - Verify outputs are correct

7. **Submit a PR** with:
   - Clear title: "Skill: add [skill-name]"
   - Description of what the skill does
   - Example outputs
   - Testing notes

### 2. Contributing Course Content

VibeCoding includes lessons, guides, and case studies. We're always looking for:

- **Written tutorials** — Step-by-step guides for specific scenarios
- **Video guides** — Walkthroughs of skills or workflows
- **Case studies** — Real stories of sites built with VibeCoding
- **Best practices** — Tips for better results
- **Troubleshooting guides** — Solutions to common problems

**To contribute course content:**

1. **Create a markdown file** in `/course/modules/` with clear structure:
   ```markdown
   # Module Title

   ## Learning Objectives
   - What will learners understand?

   ## Step-by-Step Guide
   [Your content here]

   ## Example
   [Show a real example]

   ## Common Mistakes
   - [What often goes wrong]

   ## Next Steps
   [What comes after]
   ```

2. **Use clear headings** and short paragraphs
3. **Include screenshots or diagrams** if helpful
4. **Test the tutorial** by following it yourself
5. **Add metadata** to `/course/modules/index.md` linking to your content
6. **Submit a PR** with your content

### 3. Contributing Example Sites

Example sites show what's possible. They live in `/examples/`.

**Guidelines for example sites:**
- **Real, complete, production-ready** — Not mockups or stubs
- **Beautiful and functional** — Good design + good UX
- **Well-commented** — Explain your design decisions
- **Performance-tested** — Show Core Web Vitals metrics
- **Documented** — Include a README explaining what it does
- **Extensible** — Make it clear how to customize it

**To contribute an example:**

1. **Create a directory** under `/examples/`
   ```bash
   mkdir examples/my-example-site
   ```

2. **Build your site** (HTML/CSS or Vite + JS)
   - Use semantic HTML
   - Follow CSS best practices
   - Mobile-responsive design
   - Accessibility (WCAG 2.1 AA)

3. **Create a README.md** explaining:
   - What this site demonstrates
   - Tech used
   - How to customize it
   - Performance metrics (Lighthouse scores)
   - Deployment instructions

4. **Include a site-brief.json** showing what the interviewer discovered
5. **Test thoroughly** on mobile, desktop, different browsers
6. **Submit a PR** with screenshots

### 4. Reporting Bugs

Found a problem? Help us fix it!

**When reporting a bug, include:**
- **What you were trying to do** — Be specific
- **What happened** — Expected vs. actual behavior
- **Steps to reproduce** — Clear, numbered steps
- **System info** — OS, Claude Code version, browser version
- **Screenshots or error messages** — If applicable
- **Workaround** — Did you find a way around it?

**Example bug report:**
```markdown
## Bug: Site Generator doesn't handle special characters in brand name

### What I was trying to do
Generate a site for "O'Brien's Consulting"

### What happened
The generator threw an error:
```
SyntaxError: Unexpected token ' in JSON at position 234
```

### Steps to reproduce
1. Run site-interviewer
2. Enter "O'Brien's Consulting" as the business name
3. Complete the interview
4. Run site-generator

### System info
- OS: macOS 14.2
- Claude Code v2.1.0
- Browser: Chrome 122

### Workaround
Changed name to "OBrien's Consulting" (no apostrophe)
```

**Submit via GitHub Issues:** [Create an issue](https://github.com/yourusername/VibeCoding-a-Website/issues/new)

### 5. Pull Request Guidelines

All contributions come through pull requests (PRs).

**Before you PR:**
1. **Read the existing code** — Understand the style and patterns
2. **Test your changes** — Verify nothing breaks
3. **Lint your code** — Follow the style guide
4. **Document your work** — Add comments where needed
5. **Check for conflicts** — Pull latest main branch

**When you create a PR:**

1. **Title:** Be clear and specific
   - Good: "Skill: add social-media-share for easy sharing buttons"
   - Bad: "Updates"

2. **Description:** Include:
   - What this PR does
   - Why it matters
   - How to test it
   - Any breaking changes
   - Screenshots (if visual)

3. **Link to issues:** If your PR fixes an issue, mention it
   ```markdown
   Closes #123
   ```

4. **Be patient:** Reviews take time, feedback is constructive

5. **Make requested changes** — Update your PR if reviewers suggest improvements

### 6. Code of Conduct

We're building a welcoming community. Be respectful:

- **Be kind** — Harsh feedback is harder to hear
- **Assume good intent** — We're all learning
- **Listen actively** — Others have good ideas
- **Stay on topic** — Keep discussions focused
- **No spam or self-promotion** — This is for the community
- **Report problems** — Flag harassment or violations

**In short:** Treat others how you want to be treated.

---

## Review Process

1. **Submission** — You create a PR
2. **Automated checks** — Linting, tests run
3. **Code review** — Maintainers review your work
4. **Feedback** — Questions or suggestions for improvement
5. **Revisions** — You make changes (if needed)
6. **Approval** — Maintainers approve the PR
7. **Merge** — Your contribution is merged to main
8. **Release** — Included in next VibeCoding release

---

## Development Setup

Want to work on VibeCoding locally?

### 1. Clone and Install
```bash
git clone https://github.com/yourusername/VibeCoding-a-Website.git
cd VibeCoding-a-Website
```

### 2. Install Claude Code
```bash
# If not already installed
curl https://install.claude.ai/code | bash
```

### 3. Verify Setup
```bash
claude --version
# Should show: Claude Code v2.1.0 (or later)
```

### 4. Test Skills
```bash
# Test the site-interviewer skill
claude skill:run site-interviewer
```

---

## Getting Help

Have questions? We're here to help:

- **Read the docs** — Start with [README.md](../README.md) and the guides in `/docs/`
- **Search issues** — Your question might already be answered
- **Ask in discussions** — [GitHub Discussions](https://github.com/yourusername/VibeCoding-a-Website/discussions)
- **Email the maintainer** — mark@theaienterprise.io

---

## Recognition

Contributors to VibeCoding are:
- Listed in [CONTRIBUTORS.md](./CONTRIBUTORS.md) (we'll create this as contributors join!)
- Credited in release notes
- Featured in project announcements
- Invited to the contributor Discord (coming soon)

Thank you for making VibeCoding better. 🚀
