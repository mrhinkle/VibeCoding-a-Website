# Resend Account Setup & Configuration

Complete step-by-step guide to set up Resend for email delivery and integrate with your website.

## What is Resend?

Resend is a modern email service for developers and businesses. It:
- Sends transactional emails (contact forms, confirmations)
- Handles email delivery and bounces
- Tracks opens and clicks
- Provides detailed logs and analytics
- Works seamlessly with Vercel serverless functions

Cost: Free tier includes 100 emails/day; paid plans available.

## Step 1: Create Resend Account

1. Go to https://resend.com
2. Click "Sign Up"
3. Enter email address and password
4. Click email verification link (check inbox/spam)
5. Accept terms of service
6. Account created!

## Step 2: Create API Key

1. Log into Resend dashboard
2. Click "API Keys" in left sidebar
3. Click "Create API Key"
4. Name it (e.g., "MyWebsite Contact Form")
5. Copy the key (starts with `re_`)
6. Store it safely (you'll need it for Vercel)

**Important**: Treat API key like a password. Never commit to Git.

## Step 3: Verify Domain

Resend requires domain verification to send emails from your domain.

### Why Verify?
- Emails appear "from your domain"
- Improves email deliverability
- Builds sender reputation

### How to Verify (Vercel Domains)

If using Vercel-managed domain:
1. In Resend dashboard, click "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., mysite.com)
4. Resend generates DNS records
5. Copy DNS records to Vercel:
   - Go to Vercel project settings
   - Click "Domains"
   - Click your domain
   - Add DNS records from Resend
6. Wait 5-30 minutes for propagation
7. Resend automatically verifies when DNS updates

### How to Verify (Existing Domain)

If using external registrar (GoDaddy, Namecheap, etc.):
1. In Resend dashboard, click "Add Domain"
2. Enter your domain
3. Copy DNS records (MX, TXT, DKIM)
4. Log into your domain registrar
5. Add DNS records in registrar settings
6. Wait for DNS propagation (24-48 hours)
7. Resend verifies automatically

## Step 4: Set Default From Address

Once domain is verified:
1. In Resend dashboard, go "Domains"
2. Click your domain
3. Set "Default From Address" (e.g., noreply@mydomain.com)
4. This address will appear in contact form emails

## Step 5: Add Vercel Environment Variables

Once you have your API key and domain set up:

### In Vercel Dashboard:

1. Go to your Vercel project
2. Click "Settings" tab
3. Click "Environment Variables" in left sidebar
4. Click "Add"
5. Add these variables:

**Variable 1: RESEND_API_KEY**
- Name: `RESEND_API_KEY`
- Value: `re_xxxxxxxxxxxxxx` (your API key)
- Environments: Select all (Production, Preview, Development)
- Click "Add"

**Variable 2: RESEND_FROM_EMAIL**
- Name: `RESEND_FROM_EMAIL`
- Value: `noreply@yourdomain.com` (or verified address)
- Environments: Select all
- Click "Add"

**Variable 3: RESEND_TO_EMAIL**
- Name: `RESEND_TO_EMAIL`
- Value: `contact@yourdomain.com` (where you receive inquiries)
- Environments: Select all
- Click "Add"

6. Redeploy your site (Vercel will prompt)

## Step 6: Test with Vercel Function

After adding environment variables, test the connection:

### Create test-email.ts in api/ folder:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: 'Test Email from Resend',
      html: '<p>If you see this, Resend is working!</p>',
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
```

Then:
1. Visit `yoursite.com/api/test-email`
2. Check your email for test message
3. If received, Resend is connected!
4. Delete test-email.ts after confirming

## Step 7: Monitor Resend Dashboard

After emails start flowing:

1. Log into Resend dashboard
2. Click "Logs" to see all email history
3. View stats: delivered, bounced, opened, clicked
4. Monitor any failed deliveries
5. Check sender reputation (should be high)

## Resend Limits & Pricing

### Free Tier
- 100 emails/day
- Unlimited sending addresses
- Perfect for startups and testing

### Pro Tier ($20/month)
- 10,000 emails/month
- Email templates
- Dedicated IP option
- Priority support

### Enterprise
- Custom limits
- Phone support
- SLA guarantees

## Common Issues & Solutions

### "Domain not verified" error
- Check DNS records are added to registrar
- Wait 24-48 hours for propagation
- Use online DNS checker to confirm
- Use `noreply@resend.dev` for testing (temporary)

### Emails going to spam
- Verify domain in Resend
- Add SPF, DKIM, DMARC records
- Keep from address consistent
- Don't send marketing content from contact forms
- Monitor sender reputation in Resend

### "Invalid API key" error
- Confirm API key in Vercel matches Resend dashboard
- Check for typos or extra spaces
- Generate new API key if needed
- Redeploy site after updating key

### Emails not sending
- Check Vercel function logs for errors
- Verify API key is correct
- Check network tab in browser dev tools
- Ensure "from" email matches verified domain
- Check Resend logs for failures

## Tips for Success

1. **Start with Free Tier**: Test everything before upgrading
2. **Monitor Reputation**: Check Resend dashboard weekly
3. **Keep Addresses Consistent**: Use same "from" address
4. **Set Up Backup**: Keep manual email backup in case of failures
5. **Test Before Launch**: Send test emails from contact form
6. **Read Resend Docs**: https://resend.com/docs (excellent)
7. **Use Email Preview**: Test how emails render in different clients

## What Happens When User Submits Form

1. User fills contact form and clicks "Send"
2. Form data goes to `/api/contact` function
3. Function receives data, validates it
4. Function calls Resend API with `resend.emails.send()`
5. Resend delivers email to business inbox
6. Resend optionally sends confirmation to user
7. Browser shows success message
8. User sees confirmation in Resend dashboard

## Resend API Documentation

Full API reference: https://resend.com/docs/api-reference

Key methods:
- `resend.emails.send()` - Send single email
- `resend.batch.send()` - Send multiple emails
- `resend.contacts.create()` - Add to contact list
- `resend.lists.create()` - Create audience segment

For advanced features, see Resend documentation.

---

Next: Wire the form-wiring skill to your generated website!
