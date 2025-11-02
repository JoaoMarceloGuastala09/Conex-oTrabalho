// Espera o DOM carregar
window.addEventListener('load', () => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            alpha: Math.random()
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
});

const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.carrossel-btn.esquerda');
const btnDireita = document.querySelector('.carrossel-btn.direita');

btnEsquerda.addEventListener('click', () => {
    carrossel.scrollBy({ left: -300, behavior: 'smooth' });
});

btnDireita.addEventListener('click', () => {
    carrossel.scrollBy({ left: 300, behavior: 'smooth' });
});


function hideLogo() {
    const container = document.getElementById('logo-container');
    const siteContent = document.getElementById('site-content');
    const musicaFundo = document.getElementById('hollowKnightMusicaFundo');

    siteContent.style.display = 'block';

    musicaFundo.volume = 0.05;
    musicaFundo.muted = false;
    musicaFundo.play();

    container.style.opacity = '0';
    container.addEventListener('transitionend', () => {
        container.style.display = 'none';
    }, { once: true });
}
