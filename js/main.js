// Navigation scroll effect
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });
}

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
});

// Set active nav link based on current page
function setActiveNav() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (currentPage.includes(href) || (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNav();

// FAQ toggle
function toggleFaq(element) {
  const item = element.parentElement;
  item.classList.toggle('open');
}

// Form submission
function submitForm(event) {
  event.preventDefault();
  
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!fname || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }
  
  const successMsg = document.getElementById('successMsg');
  successMsg.style.display = 'block';
  
  // Reset form
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
  
  // Hide success message after 6 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 6000);
}

// Intersection Observer for reveal animations
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(element => observer.observe(element));
}

// Initialize reveal animations when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}