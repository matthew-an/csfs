document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('example-collapse-navbar');
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('main-navbar');
  
  // Mobile menu functionality
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      // Toggle the hidden class
      mobileMenu.classList.toggle('hidden');
      
      // Toggle the menu icon between bars and times
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.className = 'text-gray-300 fas fa-bars';
      } else {
        menuIcon.className = 'text-gray-300 fas fa-times';
      }
    });
    
    // Close menu when clicking on a link (for better UX)
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'text-gray-300 fas fa-bars';
      });
    });
  }
  
  // Simple scroll behavior for flat design
  let lastScrollTop = 0;
  let ticking = false;
  
  function updateNavbar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Simple shadow on scroll
    if (scrollTop > 10) {
      navbar.classList.remove('shadow-sm');
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
      navbar.classList.add('shadow-sm');
    }
    
    // Simple show/hide behavior
    if (scrollTop <= 100) {
      navbar.style.transform = 'translateY(0)';
    }
    else if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.style.transform = 'translateY(-100%)';
    }
    else if (scrollTop < lastScrollTop) {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Also handle resize events to ensure proper behavior
  window.addEventListener('resize', function() {
    // Reset navbar position on resize
    if (window.innerWidth >= 1024) { // lg breakpoint
      navbar.style.transform = 'translateY(0)';
    }
  });
});



