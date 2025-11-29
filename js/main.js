/**
 * Portfolio Website - Main JavaScript
 * Simple and clean interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================
  // 1. Smooth Scroll for Navigation
  // ===================================

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');

      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===================================
  // 2. Active Navigation Link
  // ===================================

  const sections = document.querySelectorAll('.section');
  const navItems = document.querySelectorAll('.nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${current}`) {
        item.style.color = '#2563EB';
      } else {
        item.style.color = '';
      }
    });
  });

  // ===================================
  // 3. Fade-in Animation on Scroll
  // ===================================

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

});