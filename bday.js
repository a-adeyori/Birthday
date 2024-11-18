function goToSurprise() {
    window.location.href = 'https://drive.google.com/file/d/1kB02yID9t7wu5852HDtKAzXdtu8uxWnH/view?usp=sharing';
}

// Enhanced flower animation
document.addEventListener('DOMContentLoaded', () => {
    const flowersContainer = document.querySelector('.flowers-container');
    
    // Create SVG flower element
    function createFlowerSVG() {
        return `
            <svg viewBox="0 0 100 100" width="40" height="40">
                <path fill="#4a90e2" d="M50 0 C60 20 80 30 100 30 C80 40 60 60 50 100 C40 60 20 40 0 30 C20 30 40 20 50 0">
                    <animate attributeName="d" dur="2s" repeatCount="indefinite"
                    values="M50 0 C60 20 80 30 100 30 C80 40 60 60 50 100 C40 60 20 40 0 30 C20 30 40 20 50 0;
                            M50 0 C65 25 85 35 100 30 C85 45 65 65 50 100 C35 65 15 45 0 30 C15 35 35 25 50 0;
                            M50 0 C60 20 80 30 100 30 C80 40 60 60 50 100 C40 60 20 40 0 30 C20 30 40 20 50 0"/>
                </path>
            </svg>
        `;
    }

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = Math.random() * 5 + 5 + 's';
        flower.style.opacity = Math.random() * 0.5 + 0.5;
        flower.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        flower.innerHTML = createFlowerSVG();
        flowersContainer.appendChild(flower);
        
        // Remove flower after animation
        setTimeout(() => {
            flower.remove();
        }, 10000);
    }
    
    // Create flowers continuously
    setInterval(createFlower, 2000);
    
    // Create initial flowers
    for(let i = 0; i < 10; i++) {
        setTimeout(createFlower, i * 300);
    }
});
