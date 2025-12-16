// Smooth Scroll to Menu Section
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.querySelector('#menucard').scrollIntoView({ behavior: 'smooth' });
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Back-to-top button visibility
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
