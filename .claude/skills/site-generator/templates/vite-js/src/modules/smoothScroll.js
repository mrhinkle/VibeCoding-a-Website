/**
 * Smooth Scroll Module
 * Handles smooth scrolling for anchor links and programmatic scrolling
 */

export function setupSmoothScroll() {
  // Handle anchor link clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just '#' or if target doesn't exist
      if (href === '#' || !document.querySelector(href)) {
        return;
      }
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      scrollToElement(target);
    });
  });

  // Expose scroll function globally for onclick handlers
  window.scrollToElement = scrollToElement;
}

/**
 * Scroll to an element with smooth animation
 * @param {HTMLElement} element - The element to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollToElement(element, options = {}) {
  if (!element) {
    console.warn('Element not found for scrolling');
    return;
  }

  const {
    behavior = 'smooth',
    block = 'start',
    offset = 0,
    duration = 300
  } = options;

  // Check if browser supports smooth scrolling
  const supportsSmooth = 'scrollBehavior' in document.documentElement.style;

  if (supportsSmooth) {
    element.scrollIntoView({
      behavior,
      block
    });
  } else {
    // Fallback for browsers that don't support smooth scrolling
    smoothScrollTo(element.offsetTop - offset, duration);
  }
}

/**
 * Manual smooth scroll implementation for fallback support
 * @param {number} targetY - Y position to scroll to
 * @param {number} duration - Duration of scroll animation in ms
 */
function smoothScrollTo(targetY, duration = 300) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollY = startY + distance * ease;
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}