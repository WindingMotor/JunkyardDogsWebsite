
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const stickyOffset = 400;

  if (window.scrollY >= stickyOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

