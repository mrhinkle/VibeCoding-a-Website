# Vercel Configuration Guide

Complete guide to configuring both simple and complex sites for Vercel deployment.

## What is Vercel?

Vercel is a platform for deploying frontend projects and serverless functions:
- Static site hosting (for HTML/CSS)
- Serverless functions (for contact forms, APIs)
- Automatic deployments from GitHub
- Environment variables for secrets
- Built-in CDN and caching
- Free tier includes custom domain

Cost: Free for static sites + limited functions; Pro plan for more.

## vercel.json Configuration

The `vercel.json` file tells Vercel how to build and deploy your site.

### For Simple HTML Sites

```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "installCommand": "",
  "framework": "html",
  "env": [
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "RESEND_TO_EMAIL"
  ],
  "functions": {
    "api/**/*.ts": {
      "runtime": "node20.x"
    }
  },
  "redirects": [
    {
      "source": "/blog/:slug",
      "destination": "/blog.html?post=:slug",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Explanation**:
- `buildCommand`: Empty (no build needed for plain HTML)
- `outputDirectory`: `.` (current directory)
- `installCommand`: Empty (no dependencies)
- `framework`: `html`
- `env`: List of environment variables needed
- `functions`: Configure serverless functions
- `redirects`: URL redirects
- `headers`: Security headers

### For Vite + JavaScript Sites

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "env": [
    "VITE_API_URL",
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "RESEND_TO_EMAIL"
  ],
  "functions": {
    "api/**/*.ts": {
      "runtime": "node20.x"
    }
  },
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

**Explanation**:
- `buildCommand`: Run Vite build
- `outputDirectory`: `dist` (Vite build folder)
- `installCommand`: Install npm dependencies
- `framework`: `vite`
- `rewrites`: API route rewrites for functions

## Environment Variables

### Adding to Vercel Dashboard

1. Go to Vercel project page
2. Click "Settings" tab
3. Click "Environment Variables" in sidebar
4. Add each variable:

**Example Variables**:

| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxx...` | All (✓ Prod, ✓ Preview, ✓ Dev) |
| `RESEND_FROM_EMAIL` | `noreply@yourdomain.com` | All |
| `RESEND_TO_EMAIL` | `contact@yourdomain.com` | All |

### Environment Variable Types

**Production**: Variables available in live site
**Preview**: Variables available in preview deployments (PR builds)
**Development**: Variables available when running locally

For contact forms, add to all three.

## Serverless Function Configuration

### Simple HTML Site with api/contact.ts

```
your-site/
├── index.html
├── styles.css
├── contact.html
├── api/
│   └── contact.ts
├── vercel.json
└── .gitignore
```

### Vite Site with api/contact.ts

```
your-site/
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   └── style.css
├── api/
│   └── contact.ts
├── vercel.json
├── .gitignore
└── dist/ (generated)
```

### Function Node Runtime

Specify Node.js version in vercel.json:

```json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "node20.x"
    },
    "api/**/*.js": {
      "runtime": "node20.x"
    }
  }
}
```

Available runtimes: `node18.x`, `node20.x`, `python3.11`, `go1.21`

## Build & Deploy Settings

### Auto-Deploy from GitHub

1. Push site to GitHub repository
2. Go to vercel.com
3. Click "New Project"
4. Connect GitHub account
5. Select repository
6. Vercel auto-detects framework
7. Deploy!

Every push to main branch auto-deploys.

### Custom Domain Setup

1. Go to Vercel project > Settings > Domains
2. Click "Add Domain"
3. Enter your domain (e.g., mysite.com)
4. Choose option:
   - **Use Vercel nameservers** (easier, recommended)
   - **Add DNS records** (if using external registrar)
5. Follow setup instructions
6. Domain active in 5-30 minutes

### SSL Certificate

Vercel automatically provisions free SSL certificate:
- HTTPS enabled by default
- Auto-renews
- No additional setup needed

## Caching & Performance

### Cache Control Headers

In vercel.json:

```json
{
  "headers": [
    {
      "source": "/images/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/styles/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    },
    {
      "source": "/",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

### Caching Strategy
- **Static assets** (images, fonts): 1 year (never change filenames if caching)
- **CSS/JS**: 1 year (hash filenames in Vite for cache busting)
- **HTML**: 1 hour (users always get latest version)
- **API responses**: No cache (always fresh)

## Redirects & Rewrites

### Redirects (301/302)

```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    },
    {
      "source": "/blog/:slug",
      "destination": "/posts/:slug",
      "permanent": true
    }
  ]
}
```

### Rewrites (URL masking)

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```

Use rewrites for:
- SPA routing (all routes → index.html)
- API route masking
- Clean URLs

## Security Headers

Important security headers to add:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}
```

## Monitoring & Debugging

### Vercel Analytics

1. Go to project > Analytics tab
2. View real-time metrics:
   - Page views
   - Request count
   - Response times
   - Status codes

### Function Logs

1. Go to project > Logs tab
2. Filter by:
   - Function name
   - Status (success/error)
   - Date range

### Debug Issues

1. Check deployment logs in Vercel dashboard
2. View function logs for errors
3. Use browser DevTools network tab
4. Check Resend logs for email issues

## .gitignore for Vercel

Include in your repository:

```
# Dependencies
node_modules/
package-lock.json
yarn.lock

# Build output
dist/
.next/
out/

# Environment variables (never commit!)
.env
.env.local
.env.*.local

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db

# Logs
npm-debug.log
yarn-error.log

# Misc
.vercel
```

## Deployment Checklist

Before deploying:

- [ ] vercel.json created and configured
- [ ] .gitignore excludes sensitive files
- [ ] Environment variables added to Vercel
- [ ] package.json has correct build command
- [ ] outputDirectory points to correct folder
- [ ] No console errors in build
- [ ] Contact form works locally
- [ ] Resend API key correct in Vercel
- [ ] Domain configured (if custom)
- [ ] SSL certificate active
- [ ] Security headers in place

## Troubleshooting

### "Build failed"
- Check Vercel logs for error message
- Verify build command in vercel.json
- Check node_modules installation
- Ensure all imports are correct

### "Function timed out"
- Check function logs in Vercel dashboard
- Optimize function code
- Increase timeout (if needed)
- Check Resend API calls

### "Environment variable not found"
- Verify variable added to Vercel dashboard
- Redeploy after adding variables
- Check variable name (case-sensitive)
- Ensure variable is in correct environment

### "Domain not connecting"
- Check DNS settings if using external registrar
- Wait 24-48 hours for propagation
- Use `nslookup` to verify DNS
- Try Vercel nameservers instead

---

For more help: https://vercel.com/docs
