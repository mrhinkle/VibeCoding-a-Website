# Module 05: Forms & Email
**Time: 7 minutes core | 22 minutes expanded**

---

## Why Forms Matter

A form is how you convert visitors into leads.

Someone lands on your site. They're interested. But they leave without contacting you unless there's a simple way to do it.

A form is that way.

This module teaches you to wire up contact forms so submissions go to your email (and optionally to your newsletter service). By the end, visitors can fill out a form and you'll instantly get their information.

---

## Core: Wiring Up Your Form (7 minutes)

### Step 1: Run the form-wiring Skill

1. In Claude Code chat, type: `/form-wiring`
2. Claude will ask: "What email should form submissions go to?"
3. Enter your email address (the one you check regularly)
4. Claude will ask: "Do you want newsletter signup integration?"
5. For now, say no (we'll add it next)

Claude now configures your forms to send you submissions.

---

### Step 2: Set Up a Resend Account

Resend is the email service that sends your form submissions. It's free to start.

1. Go to [resend.com](https://resend.com)
2. Click "Sign Up"
3. Enter your email and create a password
4. Verify your email (check your inbox)
5. You're signed up

Resend is now your email service. You're not sending emails yourself; Resend sends them on your behalf.

---

### Step 3: Connect Your Domain

After signing up:

1. In Resend, go to "Domains"
2. Click "Add Domain"
3. Enter your domain name (you'll set this up in Module 07, for now use Resend's default: `noreply@resend.dev`)
4. Resend gives you DNS records to add to your domain host
5. Follow the prompts and verify

For now, use the default Resend domain. You'll upgrade to your custom domain later.

---

### Step 4: Test Your Form

1. Go to your site preview
2. Fill out the contact form with test data
3. Click submit
4. Check your email inbox
5. You should receive the form submission in seconds

If it doesn't arrive, check your spam folder. Resend emails sometimes go there initially.

---

## That's Core

Your form now captures leads and emails them to you instantly.

In the next section, let's integrate your newsletter.

---

## Expanded: Advanced Form Setup (15 minutes more)

### Add Beehiiv Newsletter Signup

Beehiiv is a newsletter platform. You can integrate it with your form so subscribers go directly to your list.

1. Go to [beehiiv.com](https://beehiiv.com) and create a free account
2. Create a new publication (your newsletter)
3. In Beehiiv settings, find "API Keys"
4. Copy your API key
5. In Claude Code, tell it: "Integrate Beehiiv with my contact form. Use this API key: [paste key]"

Claude updates your form to send newsletter subscribers directly to Beehiiv.

---

### Multiple Form Types

Your site might need different forms:

**Contact Form**
- Name, email, message
- Goes to your email inbox
- You reply manually

**Inquiry Form**
- Name, email, company, service interest
- Goes to your inbox + CRM (if you use one)
- More detailed than contact form

**Application Form**
- Name, email, experience, portfolio URL
- For job applications or partner recruitment
- Goes to your inbox + spreadsheet

**Lead Magnet Form**
- Name, email
- Exchanges for a free resource (guide, template, etc.)
- Goes to your email + newsletter list

Tell Claude Code which forms you need. It builds them all.

---

### Lead Magnets & Gated Content

A lead magnet is something valuable you give away free in exchange for an email address.

Examples:
- Free strategy guide (PDF)
- Email course (5 short emails)
- Checklist (one-page download)
- Template (spreadsheet or document)
- Discount code (10% off first purchase)

To set up a lead magnet:

1. Create the resource (a PDF, spreadsheet, etc.)
2. Host it somewhere (Google Drive, Dropbox, or your server)
3. Tell Claude Code: "Add a lead magnet form. When they submit, redirect them to [your resource link]"
4. Claude builds the form and redirect

Now visitors can trade their email for your resource. They get value, you get their email. Win-win.

---

### Custom Confirmation Pages

After someone submits a form, they see a "thank you" page. You can customize this.

Default: "Thank you for your submission. We'll be in touch soon."

Custom: "Thank you! Check your email for your free guide. Meanwhile, here are 3 resources that might help: [links]"

Tell Claude Code: "Create a custom thank you page with these resources: [links]"

Claude rebuilds the form redirect to show your custom page.

---

### Autoresponder Flows

An autoresponder is an automatic email that goes out when someone submits a form.

Example flow:
1. Visitor submits contact form
2. Instantly receives: "Thanks for reaching out. We'll respond within 24 hours."
3. You get the form submission in your inbox
4. You manually reply

This reassures visitors they didn't submit into a void.

To set up autoresponders in Resend:

1. Go to Resend
2. Create an email template
3. Set it to trigger on new form submissions
4. Write your message
5. Test it

Autoresponders build trust and manage expectations.

---

### Integrating Third-Party Services

Beyond Beehiiv and Resend, you might want to integrate:

**HubSpot** – CRM (customer relationship management)
- Form submissions create contacts automatically
- You can automate follow-ups

**Zapier** – Workflow automation
- Form submission → Google Sheet (keep a spreadsheet)
- Form submission → Slack (get notified in your Slack)
- Form submission → Calendar event

**Stripe** – Payments (if you sell something)
- Add a form that collects payment
- Charge immediately on submission

Tell Claude Code: "Integrate my form with HubSpot" or "Send form submissions to Zapier."

Claude sets it up for you.

---

### Handling Form Data & Privacy

When visitors submit forms, you're collecting their data. Be responsible:

1. **Privacy Policy** – Add a note on your form: "We respect your privacy. We'll never sell your data."
2. **Data Storage** – Keep submissions in a secure place (email inbox, CRM, spreadsheet with password protection)
3. **GDPR/CCPA Compliance** – If you have visitors from Europe/California, add an opt-in checkbox: "I consent to being contacted"

Claude Code includes basic privacy text by default, but review it and customize if needed.

---

### Handling Form Submissions at Scale

If you expect thousands of form submissions:

1. **Use a CRM** – HubSpot, Pipedrive, or similar
   - Keeps all contacts organized
   - Tracks follow-up status
   - No risk of losing emails

2. **Use Zapier to Google Sheets**
   - Each submission becomes a row
   - Easy to search and filter
   - Backup of all submissions

3. **Set up automated responses**
   - Resend autoresponders
   - Lead magnet delivery
   - Calendar booking (Calendly integration)

Small business (1–10 leads/week)? Email is fine.
Medium business (50+ leads/week)? Use a CRM.
Large business (500+ leads/week)? Use a CRM + Zapier + multiple autoresponders.

---

## Callout: Test Your Forms

Before you go live, test every form:

1. Fill it out with real data
2. Submit
3. Check your email
4. Confirm you received it
5. Click any links in the email
6. Make sure everything works

Forms are the most important part of your site. They must work.

---

## Tip: Form Copy Matters

The words on your form influence conversion rates.

Instead of:
"Enter your details below"

Try:
"Get a free 30-minute strategy call. Just tell us a bit about yourself."

The second feels personal. It explains the benefit. People are more likely to fill it out.

Spend 2 minutes refining your form copy. It pays off.

---

## After This Module

Your forms are now:
- Collecting submissions
- Sending them to your email
- Optionally, adding subscribers to your newsletter
- Showing custom confirmation pages

In Module 06, we'll do a quality check before launch. Then Module 07 is the fun part—deploying live.

See you in Module 06.
