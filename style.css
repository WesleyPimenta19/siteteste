```javascript
// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Fecha o menu quando clicar em um link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// =========================
// ANO AUTOMÁTICO
// =========================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// =========================
// FORMULÁRIO DE CONTATO
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Preencha todos os campos.";
        return;
    }

    formMessage.textContent =
        `Obrigado, ${name}! Sua mensagem foi preenchida com sucesso.`;

    contactForm.reset();

});


// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});
```
