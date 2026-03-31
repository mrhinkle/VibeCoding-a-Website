/**
 * Toast Notification System
 * Provides non-intrusive feedback to users with auto-dismissing notifications
 * Supports success, error, info, and warning message types
 * Manages multiple concurrent toasts with staggered positioning
 */

const TOAST_DEFAULTS = {
  duration: 4000,
  position: 'bottom-right',
  type: 'info',
};

let toastCount = 0;

/**
 * Show a toast notification
 * @param {string} message - The message text to display
 * @param {Object} options - Configuration options
 * @param {string} options.type - 'success', 'error', 'info', or 'warning'
 * @param {number} options.duration - Milliseconds before auto-dismiss (0 = no auto-dismiss)
 * @param {string} options.position - Position on screen ('top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right')
 * @returns {string} Toast ID for manual dismissal
 */
export function showToast(message, options = {}) {
  const config = { ...TOAST_DEFAULTS, ...options };
  const toastId = `toast-${++toastCount}`;

  // Get or create toast container
  let container = document.querySelector(`[data-toast-position="${config.position}"]`);
  if (!container) {
    container = createToastContainer(config.position);
  }

  // Create toast element
  const toast = createToastElement(toastId, message, config.type);
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  // Auto-dismiss if duration is set
  if (config.duration > 0) {
    setTimeout(() => {
      dismissToast(toastId);
    }, config.duration);
  }

  return toastId;
}

/**
 * Manually dismiss a toast by ID
 * @param {string} toastId - The ID returned from showToast
 */
export function dismissToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.classList.remove('toast-visible');
    // Remove element after animation completes
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
}

/**
 * Create a toast container for a specific position
 * @param {string} position - Position identifier
 * @returns {HTMLElement} The container element
 */
function createToastContainer(position) {
  const container = document.createElement('div');
  container.className = 'toast-container';
  container.setAttribute('data-toast-position', position);
  container.setAttribute('role', 'region');
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('aria-label', 'Notifications');

  // Position the container using CSS class
  const positionClass = position.replace('-', '_');
  container.classList.add(`toast_${positionClass}`);

  document.body.appendChild(container);
  return container;
}

/**
 * Create a toast element
 * @param {string} id - Unique identifier
 * @param {string} message - Message text
 * @param {string} type - Toast type
 * @returns {HTMLElement} The toast element
 */
function createToastElement(id, message, type) {
  const toast = document.createElement('div');
  toast.id = id;
  toast.className = `toast toast_${type}`;
  toast.setAttribute('role', 'status');

  // Create toast content with icon and message
  const icon = getIcon(type);
  const messageEl = document.createElement('span');
  messageEl.className = 'toast__message';
  messageEl.textContent = message;

  const contentEl = document.createElement('div');
  contentEl.className = 'toast__content';
  contentEl.appendChild(icon);
  contentEl.appendChild(messageEl);

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'toast__close';
  closeBtn.setAttribute('type', 'button');
  closeBtn.setAttribute('aria-label', 'Dismiss notification');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    dismissToast(id);
  });

  toast.appendChild(contentEl);
  toast.appendChild(closeBtn);

  return toast;
}

/**
 * Get the appropriate icon for a toast type
 * @param {string} type - Toast type
 * @returns {HTMLElement} Icon element
 */
function getIcon(type) {
  const icon = document.createElement('span');
  icon.className = 'toast__icon';

  const iconMap = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  };

  icon.textContent = iconMap[type] || '•';
  return icon;
}

// Export convenience functions
export const showSuccess = (message, duration = 4000) =>
  showToast(message, { type: 'success', duration });

export const showError = (message, duration = 5000) =>
  showToast(message, { type: 'error', duration });

export const showInfo = (message, duration = 4000) =>
  showToast(message, { type: 'info', duration });

export const showWarning = (message, duration = 4000) =>
  showToast(message, { type: 'warning', duration });
