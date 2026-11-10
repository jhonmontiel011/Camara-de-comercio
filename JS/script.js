/* ================================
   BARRA DE PROGRESO
================================ */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


/* ================================
   ANIMACIONES AL HACER SCROLL
================================ */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

elements.forEach(element => {

    observer.observe(element);

});


/* ================================
   CONTADORES
================================ */

const counters = document.querySelectorAll(".number");

let counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const increment =
                    target / 80;

                function updateCounter() {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent = target;

                    }

                }

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================================
   QUIZ
================================ */

let score = 0;

function answer(option) {

    const result =
        document.getElementById("quiz-result");

    if (option === 1) {

        score++;

        result.textContent =
            "✓ ¡Correcto! Las cámaras administran registros públicos delegados legalmente.";

        result.style.color = "#00e5ff";

    } else {

        result.textContent =
            "✗ No exactamente. Intenta recordar las funciones de la Cámara.";

        result.style.color = "#ff607c";

    }

    document.getElementById("score").textContent =
        score;

}


/* ================================
   MENÚ MÓVIL
================================ */

function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.right = "0";

        nav.style.flexDirection = "column";

        nav.style.padding = "25px";

        nav.style.background = "#070b14";
    }

}