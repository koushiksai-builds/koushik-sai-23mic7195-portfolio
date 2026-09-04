/* =====================================================
   Koushik Sai Portfolio
   JavaScript
   ===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* ================= DARK MODE ================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if (isDark) {

        themeToggle.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "☾";

        localStorage.setItem("theme", "light");

    }

});


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-highlights, .skill-category, .project-card, .timeline-item, .activity-card, .interests-wrapper, .contact-box"
);


/* Add reveal class */

revealElements.forEach(element => {

    element.classList.add("reveal");

});


/* Observer */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {

            item.classList.add("active");

        }

    });

});


/* ================= SMOOTH BUTTON EFFECT ================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});
