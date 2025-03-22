// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar element
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Animasi scroll untuk navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(1, 1, 1, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgba(1, 1, 1, 0.8)';
  }
});

// Smooth scroll untuk link navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Tutup navbar mobile jika terbuka
      navbarNav.classList.remove('active');
    }
  });
});

// Animasi fade in untuk elements saat di-scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Tambahkan class 'animate' ke elements yang akan dianimasi
document.querySelectorAll('.about .row, .activity-item, .project-item, .org-item').forEach((el) => {
  el.classList.add('animate');
  observer.observe(el);
});

// Feather Icons
feather.replace();

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

