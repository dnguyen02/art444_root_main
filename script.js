function myFunction(x) {
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