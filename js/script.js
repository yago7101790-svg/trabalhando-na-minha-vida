// ======================================
// MENU MOBILE
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// ======================================
// FECHAR MENU AO CLICAR EM UM LINK
// ======================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ======================================
// ANO AUTOMÁTICO
// ======================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ======================================
// FORMULÁRIO DE CONTATO
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("nome").value.trim();

        const message = document.getElementById("formMessage");

        if (name === "") {

            message.textContent =
                "Por favor, informe seu nome.";

            return;

        }

        message.textContent =
            `⚽ Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;

        contactForm.reset();

    });

}


// ======================================
// ANIMAÇÃO DOS CARDS
// ======================================

const cards = document.querySelectorAll(
    ".news-card, .service-card, .value-card"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// ======================================
// EFEITO NO HEADER AO ROLAR
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(3, 6, 4, 0.98)";

    } else {

        header.style.background = "rgba(5, 8, 7, 0.94)";

    }

});