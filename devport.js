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