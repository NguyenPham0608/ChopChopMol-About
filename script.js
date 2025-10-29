window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const elements = document.querySelectorAll('.display-mol');

    elements.forEach(el => {
        // You can tweak the multiplier to change parallax speed
        const speed = el.dataset.speed || 0.4; // Default = 0.4
        el.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const elements = document.querySelectorAll('.display-mol-2');

    elements.forEach(el => {
        // You can tweak the multiplier to change parallax speed
        const speed = el.dataset.speed || 0.2; // Default = 0.4
        el.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Generate particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particlesContainer.appendChild(particle);
}

// Animate molecules on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease both';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Interactive molecule rotation effect