function toggleHamburgerMenu(x) {
    x.classList.toggle("change");
    document.querySelector(".nav-links").classList.toggle("show");
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.container');
  
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        hamburger.classList.remove('change');
      }
    });
  });

  let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    
    header.style.top = "-100px"; 
  } else {
    
    header.style.top = "0"; 
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

function toggleDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
  const modeToggle = document.getElementById('modeToggle');
  const icon = modeToggle.querySelector('i');

  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  // Check current hour
  const currentHour = new Date().getHours();

  if (currentHour >= 18) {
    // If after 6PM, automatically on dark mode
    document.body.classList.add("dark-mode");

    // switch the mode toggle icon to sun
    const modeToggleIcon = document.querySelector('#modeToggle i');
    if (modeToggleIcon) {
      modeToggleIcon.classList.remove('fa-moon');
      modeToggleIcon.classList.add('fa-sun');
    }
  }
});