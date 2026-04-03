---
name: security-auditor
description: Comprehensive security audit for VibeCoding sites. Triggers on "security check", "is my site secure", "API key exposed", "vulnerability", "security audit", "hacked", "password", "SSL", "HTTPS", "security headers", "XSS", "CSRF", "secrets", "data breach", ".env file", "privacy policy", "GDPR", "cookie consent". Scans for exposed API keys, dependency vulnerabilities, missing security headers, HTTPS issues, XSS/CSRF vulnerabilities, and privacy compliance. Non-developers building with third-party APIs need this.
---

# Security Auditor

## Why This Matters

You're building a website with real API keys (Resend, Beehiiv, etc.), form submissions, and serverless functions—but you might not have a security background. That's okay. This audit checks what you can't see: exposed credentials, outdated packages with known vulnerabilities, missing security headers, and privacy compliance gaps.

Security isn't optional. A breached API key can cost thousands. XSS vulnerabilities let hackers steal data from your visitors. This skill finds and fixes these issues in plain language.

---

## Audit Areas

### 1. **Secrets Scanning** (Critical)

**What we check:**
- All files for exposed API keys, tokens, passwords
- Git history for accidentally committed secrets
- .env file is in .gitignore
- Hardcoded credentials in JavaScript/functions
- Vercel environment variables properly scoped

**Why it matters:**
One exposed Resend key gives someone your email sending ability. One leaked database URL lets them access your data.

**How to fix:**
- Never commit .env files
- Use Vercel Environment Variables (Settings → Environment Variables)
- Rotate any exposed credentials immediately
- Add this to .gitignore: `.env.local`, `.env`, `*.pem`

---

### 2. **Dependency Vulnerabilities**

**What we check:**
- Run `npm audit` for known CVEs
- Identify outdated packages with security patches
- Classify severity (Critical, High, Medium, Low)

**Why it matters:**
Your dependencies might have known exploits. A vulnerable library is a backdoor waiting to be used.

**How to fix:**
```bash
npm audit fix              # Auto-fix minor vulnerabilities
npm audit fix --force      # Fix breaking changes (test after)
npm outdated              # See what's outdated
```

---

### 3. **Security Headers Audit**

These headers tell browsers how to handle your site safely. Missing them = leaving doors unlocked.

**Content-Security-Policy (CSP)**
Prevents inline scripts and restricts where resources load from.
```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.vercel.com; style-src 'self' 'unsafe-inline'"
        }
      ]
    }
  ]
}
```

**X-Content-Type-Options: nosniff**
Prevents the browser from guessing file types (blocks some attacks).

**X-Frame-Options: DENY** or **SAMEORIGIN**
Prevents your site from being embedded in iframes (clickjacking protection).

**Referrer-Policy: strict-origin-when-cross-origin**
Hides your URL when users navigate away (privacy).

**Permissions-Policy**
Blocks access to camera, microphone, geolocation unless explicitly needed.
```json
{
  "key": "Permissions-Policy",
  "value": "camera=(), microphone=(), geolocation=()"
}
```

**Strict-Transport-Security (HSTS)**
Forces all connections to HTTPS.
```json
{
  "key": "Strict-Transport-Security",
  "value": "max-age=31536000; includeSubDomains"
}
```

---

### 4. **HTTPS/SSL Verification**

**What we check:**
- Certificate validity and expiration
- Mixed content (HTTP resources loaded on HTTPS page)
- HSTS configuration
- HTTP → HTTPS redirect (should be single 301)

**Why it matters:**
HTTPS encrypts data in transit. Without it, passwords and API keys can be intercepted.

**How to fix:**
- Vercel handles HTTPS automatically (free, auto-renewed)
- Enable HSTS in vercel.json (see above)
- Audit mixed content: open DevTools Console, look for warnings
- Ensure all image/script/style URLs use `https://` or relative paths

---

### 5. **Input Validation & XSS Prevention**

XSS (Cross-Site Scripting) = attacker injects malicious scripts into your site.

**What we check:**
- Form inputs sanitized before processing
- User input rendered without escaping
- innerHTML usage (should use textContent)
- URL parameter injection risks
- Email template injection (Resend functions)

**Common mistakes:**
```javascript
// BAD: User input directly in HTML
document.getElementById('output').innerHTML = userInput;

// GOOD: Use textContent
document.getElementById('output').textContent = userInput;

// BAD: Embedding user input in URLs
<a href="https://example.com?search=${userInput}">Click</a>

// GOOD: URL encode user input
<a href="https://example.com?search=${encodeURIComponent(userInput)}">Click</a>
```

---

### 6. **CSRF Protection**

CSRF = Attacker tricks you into submitting a form on another site without realizing.

**What we check:**
- Forms without CSRF tokens
- API endpoints without origin validation
- SameSite cookie attributes

**How to fix:**
- Most frameworks (Next.js, SvelteKit) have CSRF protection built-in
- For custom forms: add hidden token field
- Set SameSite cookies: `SameSite=Strict` or `SameSite=Lax`

---

### 7. **Third-Party Script Audit**

**What we check:**
- What external scripts are loaded?
- Are they loaded with integrity attributes (SRI)?
- What data do analytics scripts collect?
- Are CDN resources pinned to versions?

**Why it matters:**
A compromised CDN or analytics script can steal data from all your visitors.

**SRI Example (Subresource Integrity):**
```html
<script src="https://cdn.jsdelivr.net/npm/library@3.0.0/dist/library.min.js"
        integrity="sha384-ABC123..."></script>
```

---

### 8. **Rate Limiting & Abuse Prevention**

**What we check:**
- Contact form spam protection
- Serverless functions rate-limited
- Honeypot field (decoy field to catch bots)
- Bot detection measures

**How to fix:**
```javascript
// Honeypot field in form (hidden from users)
<input type="text" name="website" style="display:none;">

// Serverless function (Vercel) - check for honeypot
if (request.body.website) {
  return new Response('Invalid', { status: 400 });
}

// Rate limiting using Vercel KV or similar
// Consider services like Resend rate limits (150 emails/day free tier)
```

---

### 9. **Privacy Compliance**

**What we check:**
- Privacy policy page exists and is linked
- Cookie consent banner (if cookies used)
- Data collection disclosure
- Contact info for data deletion requests
- Analytics opt-out mechanism

**Why it matters:**
GDPR, CCPA, and other regulations require transparency. Fines are thousands per violation.

**Required elements:**
- Visible privacy policy link (footer is fine)
- Disclose what data you collect (email, IP, analytics)
- How long you keep data
- Third-party tools (Resend, Beehiiv) mentioned
- Contact email for privacy requests

---

### 10. **CORS Configuration**

CORS = who can access your API from different domains.

**What we check:**
- API endpoints allow correct origins only
- No wildcard (*) on sensitive endpoints
- Preflight requests handled

**How to fix:**
```javascript
// Serverless function - set CORS headers
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Don't use wildcard for sensitive endpoints
  // res.setHeader('Access-Control-Allow-Origin', '*'); // BAD
}
```

---

### 11. **Vercel-Specific Security**

**What we check:**
- Serverless function timeout (default 10s, max 60s)
- Environment variable scoping (production vs preview)
- Preview deployment access (public vs protected)
- Function region configuration

**Best practices:**
- Keep timeouts short (5-10s) unless needed
- Use production environment variables only for prod deployments
- Protect preview deployments if they access production data
- Store sensitive data in Vercel Secrets, not in code

---

### 12. **Security Checklist** (Pre-Launch)

- [ ] No .env files committed to git
- [ ] API keys in Vercel Environment Variables only
- [ ] npm audit shows no critical vulnerabilities
- [ ] All security headers configured in vercel.json
- [ ] HTTPS enabled (Vercel auto-enables)
- [ ] Forms have CSRF protection
- [ ] User input sanitized (textContent, not innerHTML)
- [ ] Analytics/third-party scripts have SRI or are from trusted CDNs
- [ ] Contact form has honeypot and rate limiting
- [ ] Privacy policy page exists and is linked
- [ ] No mixed content (all assets use HTTPS)
- [ ] Preview deployments protected if accessing production data

---

### 13. **Security Report Format**

Results will be presented as:

**Overall Grade: A (Excellent)**
- ✓ No critical issues found
- ⚠ 2 warnings (fix within 1 week)
- ℹ 3 recommendations (best practices)

**CRITICAL** (Red) — Must fix before launch
**WARNING** (Yellow) — Should fix within 1 week
**RECOMMENDATION** (Blue) — Implement eventually

Each finding includes: what's wrong, why it matters, and exactly how to fix it.

---

## How to Use This Skill

Ask me to:
- "Run a security audit on my site"
- "Check for exposed API keys"
- "Is my site vulnerable to XSS?"
- "Generate my vercel.json security headers"
- "Audit my privacy compliance"

I'll scan your codebase, dependencies, and configuration, then give you:
1. Security grade and priority issues
2. Exact code to fix each issue
3. Explanations in plain language
4. Step-by-step implementation guide

---

## Plain Language Security Definitions

**API Key** - Secret password that lets your code use services like Resend. Never share.

**XSS (Cross-Site Scripting)** - Attacker injects code into your site that runs in visitors' browsers.

**CSRF (Cross-Site Request Forgery)** - Attacker tricks user into submitting a form they didn't intend to.

**HTTPS** - Secure connection that encrypts data between browser and server.

**CSP (Content-Security-Policy)** - Rules that tell browsers what scripts and resources are allowed.

**SRI (Subresource Integrity)** - Verifies third-party files (CDN scripts) haven't been modified.

**CORS** - Rules for who can access your API from different websites.

**Vulnerability** - Bug in code that attackers can exploit.

**CVE** - Numbered ID for a known vulnerability (e.g., CVE-2024-1234).

---

## When to Run This Audit

- Before launching site (mandatory)
- After updating dependencies
- After adding new third-party integrations
- Monthly routine security check
- Immediately if you suspect any security issue

Security isn't something you do once—it's ongoing. Small fixes prevent big problems.
