// Configurações Globais
const phrase = "Olá, me chamo Ícaro Souza, Bem Vindo !";
let index = 0;

// 1. Efeito de Digitação (Typewriter)
function type() {
    const textElement = document.getElementById('typing-text');
    if (textElement && index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, 100); // Velocidade da digitação
    }
}

// 2. Rolagem Suave para o botão "Conhecer mais"
function scrollParaSobre() {
    const sobreSection = document.getElementById('sobre');
    if (sobreSection) {
        sobreSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn("Seção #sobre não encontrada no HTML.");
    }
}

// 3. Animação de Revelação ao Rolar (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .glass-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; 
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all 0.8s ease-out";
        }
    });
}

// 4. Inicialização Segura
window.addEventListener('DOMContentLoaded', () => {
    // Inicia o efeito de digitação
    type();
    
    // Configura o estado inicial invisível para as animações de scroll
    const cards = document.querySelectorAll('.skill-card, .glass-card');
    cards.forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(30px)";
    });
    
    // Verifica se há scroll inicial (caso o usuário dê F5 no meio da página)
    reveal();
});

// Listener de Scroll
window.addEventListener("scroll", reveal);