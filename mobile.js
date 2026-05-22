
document.addEventListener('DOMContentLoaded', () => {

  
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-navigation');

  
  menuBtn.addEventListener('click', () => {

    mainNav.classList.toggle('active');

    
    const isExpanded =
      menuBtn.getAttribute('aria-expanded') === 'true';

    // Change true/false
    menuBtn.setAttribute('aria-expanded', !isExpanded);
  });

  // Select all links inside navigation
  const navLinks = mainNav.querySelectorAll('a');

  // Close menu after clicking any link
  navLinks.forEach(link => {

    link.addEventListener('click', () => {

      mainNav.classList.remove('active');

      menuBtn.setAttribute('aria-expanded', 'false');
    });

  });

});