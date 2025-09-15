// Toggle navigation on mobile
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu on mobile after clicking
        navbar.classList.remove('active');
    });
});
