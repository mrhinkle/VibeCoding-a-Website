/**
 * Form Handler Module
 * Manages form validation and submission for contact forms
 */

import axios from 'axios';
import { showToast } from './toast.js';

export function setupFormHandling() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', handleFormSubmit);

  // Real-time validation
  setupRealTimeValidation(contactForm);
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn?.querySelector('#btn-text');
  const btnSpinner = submitBtn?.querySelector('#btn-spinner');

  // Clear previous messages
  clearFormMessages(form);

  // Validate form
  if (!validateForm(form)) {
    return;
  }

  // Show loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending...';
    if (btnSpinner) btnSpinner.classList.remove('hidden');
  }

  try {
    const formData = collectFormData(form);

    // Check honeypot field (anti-spam)
    const honeypot = form.querySelector('input[name="website"]')?.value;
    if (honeypot) {
      console.warn('Honeypot field detected - spam attempt');
      showSuccess(form);
      return;
    }

    // Send to API
    const response = await axios.post('/api/contact', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    if (response.status === 200) {
      showSuccess(form);
      form.reset();
    } else {
      showError(form);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error.response?.status === 429) {
      showToast('Too many requests. Please wait a moment and try again.', 'warning');
    } else if (error.response?.status === 500) {
      showToast('Server error. Please try again later.', 'error');
    } else {
      showError(form);
    }
  } finally {
    // Reset button state
    if (submitBtn) {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
      if (btnSpinner) btnSpinner.classList.add('hidden');
    }
  }
}

/**
 * Validate form fields
 */
function validateForm(form) {
  let isValid = true;

  // Clear all errors
  form.querySelectorAll('.form-error').forEach(error => {
    error.textContent = '';
  });
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('error');
  });

  // Validate required fields
  const fields = [
    {
      id: 'name',
      validate: (value) => value.trim().length > 0,
      error: 'Name is required'
    },
    {
      id: 'email',
      validate: (value) => value.trim().length > 0 && isValidEmail(value),
      error: (value) => !value.trim() ? 'Email is required' : 'Please enter a valid email address'
    },
    {
      id: 'subject',
      validate: (value) => value.length > 0,
      error: 'Please select a subject'
    },
    {
      id: 'message',
      validate: (value) => value.trim().length >= 10,
      error: (value) => value.trim().length === 0 ? 'Message is required' : 'Message must be at least 10 characters'
    },
    {
      id: 'consent',
      validate: (value) => value === true,
      error: 'You must agree to be contacted'
    }
  ];

  fields.forEach(field => {
    const element = form.querySelector(`#${field.id}`);
    if (!element) return;

    const value = element.type === 'checkbox' ? element.checked : element.value;
    const isFieldValid = field.validate(value);

    if (!isFieldValid) {
      const errorMsg = typeof field.error === 'function' ? field.error(value) : field.error;
      setFieldError(form, field.id, errorMsg);
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Set field error state
 */
function setFieldError(form, fieldId, message) {
  const field = form.querySelector(`#${fieldId}`);
  const errorDiv = form.querySelector(`#${fieldId}-error`);

  if (errorDiv) {
    errorDiv.textContent = message;
  }

  field.closest('.form-group')?.classList.add('error');
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Collect form data
 */
function collectFormData(form) {
  return {
    name: form.querySelector('#name')?.value || '',
    email: form.querySelector('#email')?.value || '',
    phone: form.querySelector('#phone')?.value || '',
    company: form.querySelector('#company')?.value || '',
    subject: form.querySelector('#subject')?.value || '',
    message: form.querySelector('#message')?.value || '',
    consent: form.querySelector('#consent')?.checked || false
  };
}

/**
 * Show success message
 */
function showSuccess(form) {
  const successMsg = form.querySelector('#form-success');
  if (successMsg) {
    successMsg.classList.remove('hidden');
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  showToast('Message sent successfully!', 'success');
}

/**
 * Show error message
 */
function showError(form) {
  const errorMsg = form.querySelector('#form-error-message');
  if (errorMsg) {
    errorMsg.classList.remove('hidden');
    errorMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  showToast('Failed to send message. Please try again.', 'error');
}

/**
 * Clear form messages
 */
function clearFormMessages(form) {
  form.querySelector('#form-success')?.classList.add('hidden');
  form.querySelector('#form-error-message')?.classList.add('hidden');
}

/**
 * Setup real-time validation
 */
function setupRealTimeValidation(form) {
  const emailField = form.querySelector('#email');
  const messageField = form.querySelector('#message');

  if (emailField) {
    emailField.addEventListener('blur', () => {
      if (emailField.value && !isValidEmail(emailField.value)) {
        setFieldError(form, 'email', 'Please enter a valid email address');
      } else {
        clearFieldError(form, 'email');
      }
    });
  }

  if (messageField) {
    messageField.addEventListener('blur', () => {
      if (messageField.value && messageField.value.trim().length < 10) {
        setFieldError(form, 'message', 'Message must be at least 10 characters');
      } else {
        clearFieldError(form, 'message');
      }
    });
  }
}

/**
 * Clear field error state
 */
function clearFieldError(form, fieldId) {
  const field = form.querySelector(`#${fieldId}`);
  const errorDiv = form.querySelector(`#${fieldId}-error`);

  if (errorDiv) {
    errorDiv.textContent = '';
  }

  field.closest('.form-group')?.classList.remove('error');
}