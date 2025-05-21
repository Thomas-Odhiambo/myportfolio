// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on click
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.slide-left, .scale-in, .pop-in').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Project Modal Handling
const projectCards = document.querySelectorAll('.project-card');
const modals = document.querySelectorAll('.project-modal');
const closeButtons = document.querySelectorAll('.modal-close');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const modal = document.getElementById(`modal-${projectId}`);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.project-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.onclick = (e) => {
    if (e.target.classList.contains('project-modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Image Carousel (Add your preferred carousel implementation)

// Form Validation
const form = document.getElementById('contactForm');
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== '') {
            input.parentNode.classList.add('filled');
        } else {
            input.parentNode.classList.remove('filled');
        }
    });
});

// Form Submission Animation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button');
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
        form.reset();
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        }, 2000);
    }, 1500);
});

// Back to Top Button
const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});