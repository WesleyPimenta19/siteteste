// 1. Atualizar o ano do rodapé automaticamente
document.addEventListener('DOMContentLoaded', () => {
    const footerDate = document.querySelector('footer p:last-child');
    const anoAtual = new Date().getFullYear();
    footerDate.innerHTML = `© ${anoAtual} Wesley Luan. Desenvolvido para apresentação profissional.`;
});

// 2. Efeito de revelação ao rolar a página (opcional, mas fica elegante)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});
