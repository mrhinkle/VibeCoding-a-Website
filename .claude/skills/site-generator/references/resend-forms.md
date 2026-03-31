# Resend Contact Forms with Vercel Serverless Functions

Guide to setting up contact forms that send emails via Resend and Vercel serverless functions.

## Architecture Overview

```
User Form Submit
    ↓
Browser Fetch /api/contact
    ↓
Vercel Serverless Function
    ↓
Resend API
    ↓
Email Sent to Business
    ↓
User Sees Success Message
```

## Complete Contact Form Setup

### Step 1: HTML Form Markup

```html
<form id="contactForm" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required
      aria-required="true"
    />
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
      aria-required="true"
    />
  </div>

  <div class="form-group">
    <label for="subject">Subject</label>
    <input 
      type="text" 
      id="subject" 
      name="subject" 
      required
      aria-required="true"
    />
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea 
      id="message" 
      name="message" 
      rows="5" 
      required
      aria-required="true"
    ></textarea>
  </div>

  <!-- Honeypot spam field (hidden) -->
  <input 
    type="text" 
    name="_redirect" 
    style="display: none;" 
    aria-hidden="true"
  />

  <button type="submit" class="btn btn-primary">
    Send Message
  </button>
</form>

<!-- Toast notification (hidden until needed) -->
<div id="toast" class="toast" role="alert" aria-live="polite">
  <span id="toastMessage"></span>
</div>
```

### Step 2: Client-Side Form Handler (JavaScript)

```javascript
// Form submission handler
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  try {
    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _redirect: formData.get('_redirect'), // honeypot
    };

    // Validate client-side
    if (!data.name.trim()) throw new Error('Name is required');
    if (!data.email.includes('@')) throw new Error('Valid email is required');
    if (!data.subject.trim()) throw new Error('Subject is required');
    if (!data.message.trim()) throw new Error('Message is required');

    // Check honeypot
    if (data._redirect) {
      // If honeypot is filled, pretend success (don't send)
      showToast('Thank you! We received your message.', 'success');
      form.reset();
      return;
    }

    // Show loading state
    button.disabled = true;
    button.textContent = 'Sending...';

    // Send to serverless function
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      showToast('Message sent! We\'ll get back to you soon.', 'success');
      form.reset();
    } else {
      throw new Error(result.error || 'Failed to send message');
    }
  } catch (error) {
    showToast(error.message || 'Something went wrong. Please try again.', 'error');
  } finally {
    // Restore button state
    button.disabled = false;
    button.textContent = originalText;
  }
});

// Toast notification helper
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  toastMessage.textContent = message;
  toast.className = `toast toast-${type} show`;

  if (type === 'success') {
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
  // Errors remain until user dismisses or submits again
}
```

### Step 3: Toast Styling (CSS)

```css
/* Toast notifications */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.toast-success {
  background-color: #10b981;
  color: white;
}

.toast-error {
  background-color: #ef4444;
  color: white;
}

.toast-info {
  background-color: #3b82f6;
  color: white;
}

@media (max-width: 640px) {
  .toast {
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
}
```

## Step 4: Vercel Serverless Function (api/contact.ts)

### Create the file: `api/contact.ts`

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _redirect?: string;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message, _redirect } = req.body as ContactFormData;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check honeypot field (spam protection)
  if (_redirect) {
    // Pretend success to confuse bots, but don't send email
    return res.status(200).json({ success: true });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Send email via Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@example.com',
      to: process.env.RESEND_TO_EMAIL || 'contact@example.com',
      replyTo: email, // User can reply to this email
      subject: `New Contact Form: ${subject}`,
      html: generateEmailHTML({
        name,
        email,
        subject,
        message,
      }),
    });

    // Optional: Send confirmation email to user
    await sendConfirmationEmail(email, name);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: data.id,
    });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    });
  }
}

// Generate email HTML for business owner
function generateEmailHTML(data: ContactFormData) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { border-bottom: 2px solid #007bff; padding-bottom: 10px; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: #f5f5f5; border-radius: 4px; }
          .footer { margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>

          <div class="field">
            <div class="label">From:</div>
            <div class="value">${data.name} &lt;${data.email}&gt;</div>
          </div>

          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${escapeHtml(data.subject)}</div>
          </div>

          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
          </div>

          <div class="footer">
            <p>Reply to this email to respond directly to ${data.name}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Send confirmation email to user
async function sendConfirmationEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@example.com',
      to: email,
      subject: 'We received your message',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif;">
            <p>Hi ${name},</p>
            <p>Thank you for contacting us! We've received your message and will get back to you as soon as possible.</p>
            <p>Best regards,<br>The Team</p>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Don't throw - main email was sent
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
```

## Step 5: Environment Variables (.env.local)

Create `.env.local` file in project root (for local development):

```
VITE_RESEND_FROM_EMAIL=noreply@yourdomain.com
VITE_RESEND_TO_EMAIL=contact@yourdomain.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

Never commit this file to Git!

## Step 6: Vercel Environment Setup

Add to Vercel dashboard:
1. `RESEND_API_KEY` (your Resend API key)
2. `RESEND_FROM_EMAIL` (verified domain address)
3. `RESEND_TO_EMAIL` (where to send inquiries)

See form-wiring skill for detailed Vercel setup instructions.

## Testing Checklist

- [ ] Form submits without errors
- [ ] Toast shows success message
- [ ] Email received in inbox
- [ ] Email formatting looks good
- [ ] Reply-to address is user's email
- [ ] Honeypot field blocks spam bots
- [ ] Form validates required fields
- [ ] Form shows error toast on validation failure
- [ ] Button shows loading state while sending
- [ ] Works on mobile devices

## Advanced: Multiple Form Types

To support different form types (contact, inquiry, sponsorship):

```typescript
export default async function handler(req, res) {
  const { formType, ...data } = req.body;

  let toEmail = process.env.RESEND_TO_EMAIL;
  let emailSubject = 'New Contact Form';

  // Route to different email based on form type
  switch (formType) {
    case 'sponsorship':
      toEmail = process.env.RESEND_SPONSORSHIP_EMAIL;
      emailSubject = 'New Sponsorship Request';
      break;
    case 'support':
      toEmail = process.env.RESEND_SUPPORT_EMAIL;
      emailSubject = 'New Support Request';
      break;
  }

  // ... rest of function
}
```

## Rate Limiting (Optional)

To prevent spam/abuse:

```typescript
// Add at top of function
const clientIp = req.headers['x-forwarded-for'] || 'unknown';
const key = `contact-form:${clientIp}`;

// Check rate limit (requires Redis or database)
const count = await getRequestCount(key);
if (count > 5) {
  return res.status(429).json({ error: 'Too many requests. Please try again later.' });
}

// Increment counter
await incrementRequestCount(key, 60); // 60 second window
```

---

Refer to Resend API docs for advanced features: https://resend.com/docs
