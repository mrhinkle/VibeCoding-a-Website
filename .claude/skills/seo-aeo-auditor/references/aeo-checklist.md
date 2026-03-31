# Answer Engine Optimization (AEO) Checklist

AEO optimizes your content to appear as direct answers in AI search engines (ChatGPT, Claude, Gemini, Perplexity).

## Content Structure

### Direct Answer Blocks
- [ ] Page begins with clear answer to main question
- [ ] Answer is 1-2 sentences (concise)
- [ ] Answer appears in first 100 words of content
- [ ] Answer is factual and specific (not vague)
- [ ] Answer is visually distinct (bold, callout box, or separate paragraph)
- [ ] Answer can stand alone without reading full article

**Example**:
```html
<div class="answer-block">
  <p><strong>What is lazy loading?</strong> Lazy loading defers loading 
  of off-screen images until the user scrolls near them, reducing 
  initial page load time by 50-70%.</p>
</div>
```

### Question & Answer Format
- [ ] Main question stated as H2 at page top
- [ ] Related questions as H2 throughout content
- [ ] Answer follows immediately after question
- [ ] 3-5 related questions per page (optimal for AI)
- [ ] Questions are natural language (how to, what is, why should, etc.)
- [ ] Each question addresses distinct aspect of topic

**Recommended Question Types**:
- What is [topic]?
- How do you [action]?
- Why is [benefit] important?
- When should you [action]?
- What are the benefits of [topic]?

### Comparison Tables
- [ ] Comparison table present for multi-option decisions
- [ ] Table header includes categories (Format, Speed, Quality, etc.)
- [ ] Each row compares one item across all criteria
- [ ] Apples-to-apples comparison (same metrics for all)
- [ ] Uses semantic HTML: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`
- [ ] Clear column headers in `<th>` tags

**Example Table Structure**:
```html
<table>
  <thead>
    <tr>
      <th>Image Format</th>
      <th>File Size</th>
      <th>Quality</th>
      <th>Best For</th>
      <th>Browser Support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JPEG</td>
      <td>Small</td>
      <td>Good</td>
      <td>Photography</td>
      <td>All</td>
    </tr>
    <tr>
      <td>WebP</td>
      <td>Smallest</td>
      <td>Excellent</td>
      <td>Modern browsers</td>
      <td>90%+ of users</td>
    </tr>
  </tbody>
</table>
```

### Step-by-Step Instructions
- [ ] Instructions use numbered list (1, 2, 3...)
- [ ] Each step is single action (not compound)
- [ ] Steps are in correct logical order
- [ ] Step language is imperative: "Open", "Click", "Enter"
- [ ] Estimated time to complete mentioned
- [ ] Common mistakes or tips included after steps
- [ ] Code blocks use proper formatting

**Example**:
```html
<h3>How to Optimize an Image</h3>
<ol>
  <li>Open terminal and navigate to image folder</li>
  <li>Run compression: <code>convert photo.jpg -quality 75 photo-optimized.jpg</code></li>
  <li>Check file size reduction: <code>ls -lh photo*.jpg</code></li>
  <li>Verify quality visually in image viewer</li>
</ol>
<p><strong>Tip:</strong> Start at 75% quality and adjust down if needed. 
Most users won't notice quality loss below 70%.</p>
```

### Lists & Breakdowns
- [ ] Pros/cons lists are balanced (not one-sided)
- [ ] Key benefits summarized in bullet list
- [ ] Key points highlighted near top
- [ ] Lists use consistent formatting
- [ ] Numbered vs. bulleted lists used appropriately

---

## Content Freshness & Authority

### Publication Metadata
- [ ] Author name and credential visible
- [ ] Publication date clearly displayed
- [ ] Last updated date visible (if recently updated)
- [ ] Author bio includes expertise
- [ ] Email or contact for corrections/feedback

**Example HTML**:
```html
<article>
  <h1>Image Optimization Guide</h1>
  <p class="byline">
    By <strong>Jane Smith</strong>, Performance Engineer at TechCorp
    <span class="date">Published March 30, 2026 • Updated March 28, 2026</span>
  </p>
</article>
```

### Content Freshness
- [ ] Content updated within last 6 months
- [ ] No "legacy" or "deprecated" content mixed in
- [ ] Outdated examples removed or updated
- [ ] Recent statistics cited (2024-2026 preferred)
- [ ] Tool recommendations are current

### Citation & Source Attribution
- [ ] All claims cite authoritative sources
- [ ] Links point to original research, not other blogs
- [ ] Quoted passages use quotation marks
- [ ] Paraphrased content attributed
- [ ] Publication date of sources included
- [ ] Academic/government sources preferred

**Example**:
```html
<p>According to <a href="...">a 2026 study by Google</a>, 
"53% of users abandon sites taking over 3 seconds to load." 
This research shows the business impact of performance optimization.</p>
```

---

## Factual Accuracy & Trust

### Fact-Checking
- [ ] All numbers are accurate and verifiable
- [ ] Statistical claims cite specific sources
- [ ] Percentages are attributed (e.g., "45% of users...")
- [ ] Terminology is used correctly
- [ ] No contradictions within article
- [ ] Industry standards respected

### Opinion vs. Fact
- [ ] Opinions clearly labeled ("In our experience...", "We recommend...")
- [ ] Expert opinions attributed to person
- [ ] Facts are objective, not opinion-based
- [ ] Recommendations supported by evidence
- [ ] Caveats and limitations mentioned

### Credibility Signals
- [ ] Author has relevant credentials
- [ ] Author has published on topic before
- [ ] Organization is reputable
- [ ] No conflicts of interest disclosed
- [ ] Transparent about sponsored content

---

## Answer Quality Scores

### Comprehensiveness
- [ ] Answer covers main question fully
- [ ] All aspects of topic addressed
- [ ] Depth appropriate for question (not oversimplified)
- [ ] Examples provided for clarification
- [ ] Edge cases or exceptions mentioned
- [ ] Related topics linked for deeper learning

**Checklist**:
- [ ] Minimum 2,000 words for comprehensive answer
- [ ] Minimum 5 main sections (H2)
- [ ] Minimum 3 examples or use cases
- [ ] Minimum 5 authoritative sources cited

### Actionability
- [ ] Reader knows what to do with information
- [ ] Next steps are clear
- [ ] Implementation details provided
- [ ] Tools or resources mentioned
- [ ] Common pitfalls warned against

### Clarity
- [ ] Jargon explained or avoided
- [ ] Concepts build on each other logically
- [ ] Transitions between sections are smooth
- [ ] Conclusion summarizes key points
- [ ] Key takeaways highlighted

---

## AEO Content Patterns

### Problem-Solution Pattern
- [ ] Problem clearly stated
- [ ] Impact of problem explained
- [ ] Solution directly addresses problem
- [ ] Multiple solutions offered when applicable
- [ ] Solution implemented in steps

**Pattern**:
```
1. Problem: Images slow down web pages
2. Impact: 53% of users abandon slow sites
3. Solution: Optimize images (JPEG, compression, srcset)
4. Implementation: Steps to optimize
5. Results: Expected improvements (50-70% smaller files)
```

### "How-To" Pattern
- [ ] Clear title: "How to [action]"
- [ ] Prerequisites listed upfront
- [ ] Tools/materials needed mentioned
- [ ] Numbered steps in sequence
- [ ] Time estimate provided
- [ ] Troubleshooting section for common issues
- [ ] Result/verification step at end

### Comparison Pattern
- [ ] 2-5 items compared (not too many)
- [ ] Same criteria for all items
- [ ] Recommendation for each use case
- [ ] Pros/cons listed for each
- [ ] Decision matrix or quick reference

### "What Is" Pattern
- [ ] Definition in first sentence
- [ ] Why it matters explained
- [ ] How it works in second section
- [ ] When to use it
- [ ] Examples provided
- [ ] Related concepts linked

---

## Data Presentation

### Statistics & Numbers
- [ ] All statistics sourced and recent (2023+)
- [ ] Context provided for numbers (not just "45%")
- [ ] Source clearly cited
- [ ] Number format consistent throughout
- [ ] Big numbers formatted clearly (1,000,000 not 1000000)

### Formatting for Readability
- [ ] Key numbers bolded or highlighted
- [ ] Important takeaways in callout boxes
- [ ] Code examples use proper formatting
- [ ] Math/formulas use correct notation
- [ ] Abbreviations defined on first use

### Visualizations
- [ ] Infographics used to explain complex concepts
- [ ] Charts compare related data points
- [ ] Diagrams show processes or architecture
- [ ] Alt text on all visual elements
- [ ] Captions explain what to notice

---

## Answer Engine Compatibility

### Schema Markup
- [ ] FAQPage schema for Q&A content
- [ ] Article schema with headline, author, datePublished
- [ ] structured data for any claims/statistics
- [ ] breadcrumbList schema for navigation

### Content Extraction Readiness
- [ ] Answer blocks are HTML-clean (not image-only)
- [ ] Key information in text, not just images
- [ ] Code blocks use <code> or <pre> tags
- [ ] Tables use semantic HTML
- [ ] Lists use <ol> or <ul> tags

### Link Fairness
- [ ] Links to sources visible in content
- [ ] Not overly self-promotional (< 2 self-links per 1,000 words)
- [ ] Competitor links included when relevant
- [ ] Primary sources linked, not just other blogs

---

## Topic Coverage Depth

### Topical Authority
- [ ] Multiple articles on related subtopics
- [ ] Articles interlink naturally
- [ ] Each article covers unique angle of topic
- [ ] Series or hub structure established
- [ ] Authority on topic evident

### Subtopic Coverage
For a main topic, cover related subtopics:

**Example: Image Optimization**
- [ ] What is image optimization?
- [ ] How to compress images
- [ ] JPEG vs PNG vs WebP comparison
- [ ] Responsive images and srcset
- [ ] Lazy loading implementation
- [ ] WebP conversion tools
- [ ] Performance impact measurement

---

## Content Gap Analysis

- [ ] All common questions answered
- [ ] All decision points addressed
- [ ] Implementation help provided
- [ ] Troubleshooting guide included
- [ ] Real-world examples given
- [ ] Edge cases mentioned
- [ ] Related topics linked

---

## Testing & Verification

- [ ] Submit content to AI search engines for crawling
- [ ] Check if content appears in AI-generated answers
- [ ] Compare answers from different AI engines
- [ ] Verify citations are attributed correctly
- [ ] Check that extracted content is accurate
- [ ] Monitor rankings for target questions
