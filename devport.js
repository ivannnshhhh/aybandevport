window.addEventListener('scroll', () => {
    const video = document.querySelector('.hero-video');
    const scrolled = window.pageYOffset;
    video.style.transform = `translateY(${scrolled * 0.5}px)`; 
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

const words = ["Welcome, I'm Aybanskiee", "Future Web Developer", "Check My Project", "Download My Resume", "Halimaw Magmahal"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const target = document.getElementById("headline");
const speed = 100; // adjust typing speed

function typeEffect() {
    const current = words[index];
    const displayed = current.substring(0, charIndex);
    target.textContent = displayed;
    
    if (!isDeleting) {
        if (charIndex < current.length) {
            charIndex++;
        } else {
            // word is fully displayed, pause before deleting
            isDeleting = true;
            setTimeout(typeEffect, 1000); // pause duration
            return;
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
        } else {
            // move to next word
            isDeleting = false;
            index++;
            if (index >= words.length) index = 0;
        }
    }
    
    setTimeout(typeEffect, speed);
}

typeEffect();

document.querySelectorAll('.project-card, .about, .contact').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = `${e.offsetX - 10}px`;
        ripple.style.top = `${e.offsetY - 10}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
.btn {
    position: relative;
    overflow: hidden;
}
`;
document.head.appendChild(style);