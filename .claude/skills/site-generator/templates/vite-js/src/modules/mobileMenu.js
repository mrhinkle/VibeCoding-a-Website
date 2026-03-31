/**
 * Mobile Menu Toggle Module
 * Handles hamburger menu functionality for responsive navigation
 */

export function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!menuToggle || !navMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  // Toggle menu on button click
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  }

  function closeMenu() {
    setMenuState(false);
  }

  function setMenuState(isOpen) {
    menuToggle.setAttribute('aria-expanded', isOpen);
    navMenu.setAttribute('aria-hidden', !isOpen);
    
    if (isOpen) {
      navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
    } else {
      navMenu.style.maxHeight = '0';
    }
  }
}