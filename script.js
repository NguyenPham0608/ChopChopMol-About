// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00ffcc', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    retina_detect: true
});

// JavaScript for container interactivity
const container = document.querySelector('.fancy-container');
const aboutContainer = document.getElementById('about');

container.addEventListener('click', () => {
    // Apply 3D perspective spin and fade animation to the Ascending the container
    container.style.animation = 'perspectiveSpinFade 0.6s ease-in-out forwards';
    aboutContainer.classList.add('on');

});

// Keyboard accessibility
container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        container.click();
    }
});