/* THEME TOGGLE */

const themeToggle = document.querySelector(".theme-toggle");

document.body.classList.add("light-mode");
themeToggle.textContent = "🌙";

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeToggle.textContent = "🌙";

    } else {

        themeToggle.textContent = "☀️";

    }

});

/*ROLES CHANGER*/

const roles = [

    "Creative Frontend Developer",

    "ECE Student & Frontend Developer",

    "UI Enthusiast"
];

const typingText = document.querySelector(".typing-text");

let roleIndex = 0;

function changeText() {

    typingText.style.opacity = 0;

    typingText.style.transform = "translateY(10px)";

    setTimeout(() => {

        typingText.textContent = roles[roleIndex];

        typingText.style.opacity = 1;

        typingText.style.transform = "translateY(0)";

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;
        }

    }, 500);
}

setInterval(changeText, 2500);

/* ACTIVE NAVBAR LINKS */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop - 120 &&
            window.scrollY < sectionTop + sectionHeight - 120
        ) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");
        }
    });
});

/*LIGHT THEME*/

/* NAVBAR SCROLL EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();