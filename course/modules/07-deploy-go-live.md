# Module 07: Deploy & Go Live

Your site is built, tested, and polished. Now it's time to share it with the world. This module walks you through the deployment process—getting your website live on the internet so your customers can find it.

## Core Section (7 minutes)

### Why Deployment Matters

Deployment is the bridge between your computer and the world. Right now, your site lives only on your machine or in Claude Code's preview. Deployment makes it accessible 24/7 to anyone with an internet connection. Think of it like moving from a private office to a storefront on Main Street.

### Understanding Your Deployment Options

You have several paths forward, depending on your comfort level:

**Vercel (Recommended for beginners)**
Vercel is built specifically for web projects like yours. It's designed to work seamlessly with the code Claude generates. Setup takes minutes, and most steps are automatic.

**GitHub Pages (Free option)**
GitHub Pages hosts directly from your repository. It's free and simple, but has fewer customization options.

**Traditional hosting (Bluehost, GoDaddy, etc.)**
These services give you full control but require more technical knowledge. Save this option for later if you want to explore it.

### The Vercel Deployment Walkthrough

**Step 1: Create a Vercel Account**
Visit vercel.com and sign up using your GitHub account. This connects Vercel directly to your repositories—no passwords to remember.

**Step 2: Import Your Project**
Once logged in, click "Add New" and select "Project." Find your website repository in the list and click "Import."

**Step 3: Configure Settings**
Vercel auto-detects your project type. Review the settings (usually they're already correct) and click "Deploy." Vercel builds your site automatically.

**Step 4: Your Site Goes Live**
Within 1-2 minutes, you'll see a deployment screen showing your live URL. It looks something like: `your-site-name.vercel.app`. This is your live website!

### Connecting Your Custom Domain

Your Vercel domain works great for testing, but you probably want your own domain name (like yourcompany.com). Here's the simple path:

1. **Buy a domain** through any registrar (Namecheap, Google Domains, GoDaddy, etc.) for $10-15/year.

2. **Connect it in Vercel** by going to your project settings and clicking "Domains." Enter your domain name.

3. **Update DNS records** at your domain registrar. Vercel provides exact instructions—just copy and paste the values they show.

4. **Wait 24 hours** for the connection to propagate across the internet. DNS updates take time.

Once complete, yourcompany.com points to your live site!

### Testing Your Live Site

Before announcing it to customers:
- Open your domain in different browsers (Chrome, Safari, Firefox)
- Test on mobile phones
- Click all links to ensure they work
- Submit test forms to verify email collection
- Check loading speed using Google PageSpeed Insights

### Handling Environment Variables

If your site uses API keys (like for Resend or other services), Vercel has a secure place to store them so they're never exposed publicly.

In your Vercel project settings:
1. Click "Environment Variables"
2. Enter each key and its value
3. Deploy again—the variables are now available to your site

This keeps sensitive data safe while your site runs.

### Common Deployment Hiccups

**"Build failed" error:** Usually means a file is missing or code has a typo. Check the error message Vercel shows—it points to the exact problem. Fix it locally, push to GitHub, and Vercel rebuilds automatically.

**Site works locally but not on Vercel:** Different environments sometimes behave differently. Check that all file paths use forward slashes (/) not backslashes, and that any external resources use HTTPS, not HTTP.

**Custom domain isn't connecting:** Give DNS changes 48 hours to fully propagate. If it's been longer, double-check that you copied the DNS records correctly.

### Your Deployment Checklist

Before you launch:
- [ ] Run the quality-pass module one final time
- [ ] Test all forms with real submissions
- [ ] Check mobile responsiveness on actual devices
- [ ] Verify all links work (internal and external)
- [ ] Test email notifications are being received
- [ ] Set up basic analytics (optional but recommended)
- [ ] Verify SEO/AEO audit passed
- [ ] Create a Vercel account and import your project
- [ ] Test your live deployment thoroughly
- [ ] Connect your custom domain (if applicable)
- [ ] Share your live URL with your team

### Next Steps After Launch

Congratulations—you're live! Now:
- Share your site with your network
- Monitor analytics to see who's visiting
- Track form submissions and follow up with leads
- Gather feedback from early users
- Start planning improvements for version 2.0

You've gone from idea to live website. That's a massive accomplishment.

---

## Expanded Section (14 minutes)

### Advanced Deployment Strategies

**Staging Environment**
Before pushing to production, create a staging site—a copy of your live site used only for testing. With Vercel, you can:
1. Create a separate branch (like `staging`) in GitHub
2. Deploy that branch as a separate Vercel project
3. Test changes there before merging to the main branch
4. Once verified, merge to main for live production

This prevents mistakes from reaching your customers.

**Zero-Downtime Deployments**
Vercel handles zero-downtime deploys automatically. When you push code changes, Vercel builds the new version and swaps it over instantly—users never see a broken or loading site. This is one of Vercel's biggest advantages.

### Analytics & Monitoring

**Google Analytics Setup**
1. Create a free Google Analytics account
2. Add your tracking code to your site (ask Claude Code to add it)
3. Wait 24 hours for data to appear
4. Review insights like:
   - Which pages get visited most?
   - How long do visitors stay?
   - Where do visitors drop off?
   - What devices are they using?

This data tells you what's working and what needs improvement.

**Uptime Monitoring**
Use UptimeRobot.com (free tier) to monitor your site 24/7:
1. Create an account and add your domain
2. UptimeRobot checks every 5 minutes that your site is online
3. If your site goes down, you get an instant notification
4. See monthly uptime reports showing reliability

**Error Tracking**
Sentry (sentry.io) catches errors users experience:
1. Add their tracking code to your site
2. When something breaks, Sentry logs it
3. You see the exact error and what caused it
4. Fix issues before customers call you

### Database and Data Persistence

If your site collects data through forms, you have options:

**Email-based (Simple)**
Use Resend as you learned—form data arrives in your inbox. Good for low volumes (under 100/day).

**Supabase (Database)**
Add a real database to store all submissions:
1. Create a free Supabase account
2. Create a table for your form data
3. Ask Claude Code to connect your forms to the database
4. View all submissions in a dashboard
5. Export data as CSV anytime

This scales to thousands of submissions without breaking.

**Third-party integrations (Power user)**
Connect your forms directly to tools you already use:
- HubSpot for CRM management
- Zapier to trigger automated workflows
- Google Sheets to auto-populate spreadsheets
- Slack to notify your team instantly

### SSL/HTTPS Security

Your domain automatically gets a free SSL certificate (the "HTTPS" part). This encrypts data traveling between your site and visitors—it's non-negotiable for modern sites. Vercel handles this completely automatically.

You'll see a green lock icon in browser address bars, telling visitors your site is secure. This builds trust, especially if you're collecting emails or payment information.

### Performance at Scale

Your site works great with 100 visitors. What about 10,000?

**CDN (Content Delivery Network)**
Vercel uses a global CDN, meaning your site serves faster regardless of whether someone visits from Tokyo or Toronto. Distance doesn't matter—content comes from the nearest server.

**Image Optimization**
Vercel automatically compresses and optimizes images. A 5MB photo becomes 200KB without losing quality. This keeps pages loading fast even on slow connections.

**Database Optimization**
If you add a database, design queries carefully:
- Index frequently searched columns
- Limit result sets (don't load 1,000,000 records at once)
- Cache data when possible
- Monitor query performance

### SSL Certificates and Custom Domains

When you point a custom domain to Vercel:
1. Vercel automatically provisions an SSL certificate from Let's Encrypt
2. The certificate is free and renews automatically
3. Your site uses HTTPS from day one

No manual certificate management needed—it just works.

### Monitoring Costs

Vercel's free tier is generous, but here's what affects billing:

**Bandwidth**
- Free: 100GB/month
- Each GB over costs a few cents
- Typical small business site uses 1-5GB/month

**Function Invocations**
- Free: 1,000,000 invocations/month
- Form submissions, API calls, and backend functions count
- Most small sites never hit this limit

**Deployment Builds**
- Free: Unlimited
- Each push to GitHub triggers a rebuild (free)

Keep monitoring your Vercel dashboard to stay aware of usage.

### Disaster Recovery & Backups

Your GitHub repository IS your backup. Every version of your code is saved there.

If something goes wrong on Vercel:
1. The previous deployment version is just one click away—rollback instantly
2. Delete the Vercel project and redeploy from GitHub in minutes
3. Your code and history are always safe in GitHub

This is why using version control is so powerful.

**Database Backups**
If you use Supabase or another database:
1. Enable automatic daily backups (most services do this by default)
2. Test restore procedures quarterly
3. Keep export copies of critical data
4. Store important exports in multiple locations

### Compliance & Legal

**GDPR, CCPA, and privacy laws**
If you collect customer data, you need:
- Privacy policy explaining what data you collect and why
- Cookie notice if you use analytics
- Clear unsubscribe options for emails
- Data deletion capabilities (GDPR's "right to be forgotten")

Ask Claude Code to help draft these policies—they're not optional in most jurisdictions.

**Terms of Service**
Optional but recommended for commercial sites. It protects you legally and sets expectations with customers.

### Launch Marketing

Your site is live. Now tell the world:

**Pre-launch buzz**
- Email your list saying "going live Friday"
- Post on LinkedIn, Twitter, or Instagram
- Ask team to share with their networks
- Create a simple landing page for signup

**Launch day**
- Announce across all channels
- Send welcome email to your list
- Reach out to industry contacts
- Tag relevant accounts in social posts

**Post-launch momentum**
- Share customer stories and testimonials
- Post behind-the-scenes building content
- Ask for feedback and show you're listening
- Iterate based on user behavior

### Monitoring and Iteration

After launch, make checking these weekly habits:
1. **Analytics:** Which pages get traffic? Where do people drop off?
2. **Forms:** How many submissions? Is the email working?
3. **Speed:** Is the site still loading fast?
4. **Errors:** Are there any reported issues?
5. **Feedback:** What are customers saying?

Use this intel to prioritize improvements for version 2.0.

### Going Deeper

Congratulations—you're officially launched. The next level includes:
- A/B testing different page versions
- Advanced SEO strategies like link building
- Email marketing sequences
- Paid advertising (Google Ads, Facebook Ads)
- User behavior analysis with heatmaps

But those are adventures for another day. For now, enjoy your live website!

---

## Try It Yourself

1. Create your Vercel account right now (takes 2 minutes)
2. Import your project and watch it deploy
3. Test your live deployment as thoroughly as you would a production launch
4. If you have a domain, point it to Vercel and verify the connection works
5. Run one final quality audit on the live version
6. Share the URL with a colleague and ask for feedback

---

## Key Takeaways

- Deployment moves your site from local to live in minutes with Vercel
- Custom domains make your site look professional and trustworthy
- Always test thoroughly before announcing your site
- Analytics and monitoring tell you how your site performs
- GitHub and Vercel handle backups and disaster recovery automatically
- Staging environments let you test changes safely before going live
- Once live, focus on gathering feedback and iterating quickly
