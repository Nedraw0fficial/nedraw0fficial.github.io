// Animated floating pixel shapes
function createPixelShapes() {
    const colors = ['#FF10F0', '#00F0FF', '#FFFF00', '#39FF14', '#BC13FE', '#FF6A00'];
    const shapes = ['◆', '●', '■', '▲', '★', '◢'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 30 + 20}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            text-shadow: 0 0 20px currentColor;
            pointer-events: none;
            z-index: 0;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: floatShape ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        document.body.appendChild(shape);
    }
}

// Add keyframes for floating shapes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatShape {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg); }
        50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg); }
        75% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg); }
    }
`;
document.head.appendChild(style);

// Glitch effect on hero title
function glitchEffect() {
    const title = document.querySelector('h1');
    if (!title) return;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            title.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #FF10F0,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00F0FF,
                0 0 10px #FF10F0,
                0 0 20px #FF10F0,
                0 0 40px #FF10F0
            `;
            
            setTimeout(() => {
                title.style.textShadow = '';
            }, 100);
        }
    }, 200);
}

// Add neon glow to elements on hover
function addHoverGlow() {
    const elements = document.querySelectorAll('.content-box, .image-container, table');
    
    elements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Animated stars in hero
function createAnimatedStars() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.textContent = '★';
        star.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            color: ${['#FF10F0', '#00F0FF', '#FFFF00', '#39FF14'][Math.floor(Math.random() * 4)]};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            text-shadow: 0 0 20px currentColor;
            animation: twinkle ${Math.random() * 3 + 2}s infinite, float ${Math.random() * 5 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1;
        `;
        hero.appendChild(star);
    }
}

// Add retro typing effect to subtitle
function typewriterEffect() {
    const subtitle = document.querySelector('.subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '3px solid #00F0FF';
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                subtitle.style.borderRight = 'none';
            }, 500);
        }
    }, 100);
}

// Particle trail on mouse move
let particles = [];
function createParticleTrail() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            const particle = document.createElement('div');
            const colors = ['#FF10F0', '#00F0FF', '#FFFF00', '#39FF14'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                box-shadow: 0 0 10px ${color};
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                pointer-events: none;
                z-index: 9998;
                border-radius: 50%;
                animation: particleFade 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                particle.remove();
                particles = particles.filter(p => p !== particle);
            }, 1000);
        }
    });
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Content boxes entrance animation
function animateContentBoxes() {
    const boxes = document.querySelectorAll('.content-box');
    
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            box.style.transition = 'all 0.8s ease-out';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add RGB split effect on images
function rgbSplitEffect() {
    const images = document.querySelectorAll('.image-container');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            const image = this.querySelector('img');
            if (image) {
                image.style.filter = 'contrast(1.2) saturate(1.4) brightness(1.1)';
                
                // Create RGB split layers
                const original = image.style.transform;
                let glitchCount = 0;
                const glitchInterval = setInterval(() => {
                    if (glitchCount < 3) {
                        image.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                        glitchCount++;
                    } else {
                        clearInterval(glitchInterval);
                        image.style.transform = original;
                    }
                }, 50);
            }
        });
    });
}

// Initialize all effects when page loads
window.addEventListener('DOMContentLoaded', () => {
    createPixelShapes();
    glitchEffect();
    addHoverGlow();
    createAnimatedStars();
    
    // Delay some effects for better performance
    setTimeout(() => {
        typewriterEffect();
        animateContentBoxes();
        createParticleTrail();
        rgbSplitEffect();
    }, 500);
});

// Add pulse effect to navigation on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
