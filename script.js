// Configurações Globais
const phrase = "Olá, sou Ícaro Souza.";
let index = 0;

// 1. Efeito de Digitação (Typewriter)
function type() {
    const textElement = document.getElementById('typing-text');
    if (textElement && index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, 120); // Velocidade da digitação um pouco mais natural
    }
}

// 2. Rolagem Suave para o botão "Conhecer mais"
function scrollParaSobre() {
    const sobreSection = document.getElementById('sobre');
    if (sobreSection) {
        sobreSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 3. Animação de Revelação ao Rolar (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .glass-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Começa a revelar um pouco mais cedo
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all 0.6s cubic-bezier(0.5, 0, 0, 1)";
        }
    });
}

// 4. Inicialização
window.addEventListener('DOMContentLoaded', () => {
    // Inicia o efeito de digitação com um leve delay
    setTimeout(type, 500);
    
    // Configura o estado inicial invisível para as animações de scroll
    const cards = document.querySelectorAll('.skill-card, .glass-card');
    cards.forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(40px)";
    });
    
    // Verifica se há scroll inicial
    reveal();
});

// Listener de Scroll
window.addEventListener("scroll", reveal);
