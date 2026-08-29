```css
/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    line-height: 1.6;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}


/* =========================
   VARIÁVEIS
========================= */

:root {
    --primary: #38bdf8;
    --background: #0f172a;
    --background-light: #111c33;
    --card: #16233d;
    --text: #e2e8f0;
    --text-light: #94a3b8;
    --border: #263653;
    --max-width: 1100px;
}


/* =========================
   CONTAINER
========================= */

.container {
    width: 90%;
    max-width: var(--max-width);
    margin: 0 auto;
}


/* =========================
   HEADER
========================= */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.96);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
}

.navbar {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    color: white;
}

.logo span {
    color: var(--primary);
}

.nav-menu {
    display: flex;
    gap: 28px;
}

.nav-menu a {
    color: var(--text-light);
    font-size: 14px;
    transition: 0.3s;
}

.nav-menu a:hover {
    color: var(--primary);
}

.menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 70px;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
}

.hero-text {
    max-width: 650px;
}

.subtitle {
    color: var(--primary);
    font-size: 18px;
    margin-bottom: 10px;
}

.hero h1 {
    font-size: clamp(45px, 8vw, 80px);
    line-height: 1.1;
    color: white;
    margin-bottom: 10px;
}

.hero h2 {
    font-size: clamp(25px, 4vw, 40px);
    color: var(--text-light);
    margin-bottom: 25px;
}

.hero-text > p:not(.subtitle) {
    color: var(--text-light);
    max-width: 600px;
    font-size: 18px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.btn {
    display: inline-block;
    padding: 13px 24px;
    background: var(--primary);
    color: #082f49;
    border: 2px solid var(--primary);
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: transparent;
    color: var(--primary);
}

.btn-outline {
    background: transparent;
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: #082f49;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-placeholder {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 5px solid var(--primary);
    background: var(--card);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    font-weight: bold;
    color: var(--primary);
    box-shadow: 0 0 50px rgba(56, 189, 248, 0.15);
}


/* =========================
   SEÇÕES
========================= */

.section {
    padding: 100px 0;
}

.section-dark {
    background: var(--background-light);
}

.section-title {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
}

.section-title span {
    color: var(--primary);
    font-weight: bold;
}

.section-title h2 {
    font-size: 32px;
    color: white;
}

.section-title::after {
    content: "";
    height: 1px;
    width: 150px;
    background: var(--border);
}


/* =========================
   SOBRE
========================= */

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.about-text p {
    color: var(--text-light);
    margin-bottom: 20px;
}

.about-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.about-info div {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border);
}

.about-info strong {
    display: inline-block;
    width: 130px;
    color: white;
}

.about-info span {
    color: var(--text-light);
}


/* =========================
   EXPERIÊNCIA
========================= */

.timeline {
    position: relative;
    max-width: 900px;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 110px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--border);
}

.timeline-item {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 40px;
    margin-bottom: 50px;
}

.timeline-date {
    color: var(--primary);
    font-size: 14px;
}

.timeline-content {
    position: relative;
}

.timeline-content::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--primary);
    border-radius: 50%;
    left: -46px;
    top: 8px;
}

.timeline-content h3 {
    color: white;
    font-size: 22px;
}

.timeline-content h4 {
    color: var(--primary);
    margin: 5px 0 15px;
}

.timeline-content p {
    color: var(--text-light);
    margin-bottom: 15px;
}

.timeline-content ul {
    list-style: disc;
    margin-left: 20px;
    color: var(--text-light);
}


/* =========================
   FORMAÇÃO
========================= */

.education {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.education-card {
    padding: 30px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: 0.3s;
}

.education-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.education-year {
    color: var(--primary);
    font-size: 14px;
}

.education-card h3 {
    margin: 12px 0 5px;
    color: white;
}

.education-card h4 {
    color: var(--text-light);
    margin-bottom: 15px;
}

.education-card p {
    color: var(--text-light);
}


/* =========================
   HABILIDADES
========================= */

.skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px 60px;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.skill-header span:first-child {
    color: white;
    font-weight: bold;
}

.skill-header span:last-child {
    color: var(--primary);
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: #25334d;
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--primary);
    border-radius: 10px;
}


/* =========================
   PROJETOS
========================= */

.projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.project-card {
    padding: 30px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
}

.project-icon {
    font-size: 35px;
    margin-bottom: 20px;
}

.project-card h3 {
    font-size: 22px;
    color: white;
    margin-bottom: 15px;
}

.project-card p {
    color: var(--text-light);
    margin-bottom: 20px;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.project-technologies span {
    padding: 5px 10px;
    background: #20304b;
    color: var(--primary);
    border-radius: 4px;
    font-size: 12px;
}

.project-link {
    color: var(--primary);
    font-weight: bold;
}


/* =========================
   CONTATO
========================= */

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.contact-text h3 {
    font-size: 30px;
    color: white;
    margin-bottom: 15px;
}

.contact-text > p {
    color: var(--text-light);
    margin-bottom: 30px;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-links a {
    color: var(--text-light);
    transition: 0.3s;
}

.contact-links a:hover {
    color: var(--primary);
}


/* =========================
   FORMULÁRIO
========================= */

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: white;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid var(--border);
    border-radius: 5px;
    background: var(--card);
    color: white;
    outline: none;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary);
}

.form-group textarea {
    resize: vertical;
}

#form-message {
    color: var(--primary);
}


/* =========================
   FOOTER
========================= */

.footer {
    padding: 30px 0;
    border-top: 1px solid var(--border);
    text-align: center;
    color: var(--text-light);
    font-size: 14px;
}

.footer p {
    margin: 5px 0;
}


/* =========================
   RESPONSIVIDADE
========================= */

@media (max-width: 800px) {

    .menu-toggle {
        display: block;
    }

    .nav-menu {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--background);
        flex-direction: column;
        align-items: center;
        padding: 25px;
        gap: 20px;
        display: none;
    }

    .nav-menu.active {
        display: flex;
    }

    .hero-content {
        flex-direction: column-reverse;
        text-align: center;
        padding: 60px 0;
    }

    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
    }

    .profile-placeholder {
        width: 200px;
        height: 200px;
        font-size: 60px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .education {
        grid-template-columns: 1fr;
    }

    .skills {
        grid-template-columns: 1fr;
    }

    .projects {
        grid-template-columns: 1fr;
    }

    .contact-content {
        grid-template-columns: 1fr;
    }

    .timeline::before {
        display: none;
    }

    .timeline-item {
        display: block;
    }

    .timeline-date {
        margin-bottom: 10px;
    }

    .timeline-content::before {
        display: none;
    }

    .section-title::after {
        width: 50px;
    }
}


@media (max-width: 500px) {

    .container {
        width: 88%;
    }

    .section {
        padding: 70px 0;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 25px;
    }

    .hero-text > p:not(.subtitle) {
        font-size: 16px;
    }

    .section-title h2 {
        font-size: 25px;
    }

    .about-info strong {
        display: block;
        width: auto;
        margin-bottom: 3px;
    }

    .hero-buttons {
        width: 100%;
    }

    .btn {
        width: 100%;
        text-align: center;
    }

}
```
