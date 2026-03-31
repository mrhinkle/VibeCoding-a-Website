/**
 * Intersection Observer Module
 * Handles scroll-triggered animations and lazy loading
 */

export function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element becomes visible
        entry.target.classList.add('scroll-animate');
        
        // Optional: stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.card, .feature-card, .testimonial-card, .step-card, .info-item, .faq-item'
  );

  animatedElements.forEach((element, index) => {
    // Stagger animations using inline CSS custom property
    element.style.setProperty('--animation-delay', `${index * 0.1}s`);
    observer.observe(element);
  });

  // Set up lazy loading for images
  setupLazyLoading();

  return observer;
}

/**
 * Lazy load images using Intersection Observer
 */
function setupLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if (!lazyImages.length) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        // Load the image
        img.src = src;
        img.removeAttribute('data-src');

        // Add loaded class for fade-in effect
        img.classList.add('loaded');

        // Stop observing this image
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}