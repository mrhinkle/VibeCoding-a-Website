/**
 * VibeCoding Vite Template - Main Application File
 * Handles navigation, form submission, animations, and interactions
 */

import axios from 'axios';
import { setupMobileMenu } from './modules/mobileMenu.js';
import { setupSmoothScroll } from './modules/smoothScroll.js';
import { setupIntersectionObserver } from './modules/observer.js';
import { setupFormHandling } from './modules/formHandler.js';
import { showToast } from './modules/toast.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupSmoothScroll();
  setupIntersectionObserver();
  setupFormHandling();
  
  console.log('VibeCoding application initialized');
});

// Export utilities for use in other modules
export { axios, showToast };