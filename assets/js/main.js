// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.site-nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-header')) {
      nav.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
