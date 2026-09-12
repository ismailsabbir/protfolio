/* =========================================================
   MOBILE MENU
========================================================= */

const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
    header.classList.toggle("open");
});


/* Close mobile menu after clicking navigation */

document.querySelectorAll("nav a").forEach((a) => {

    a.addEventListener("click", () => {
        header.classList.remove("open");
    });

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const obs = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(".reveal").forEach((element) => {
    obs.observe(element);
});


/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */

const bar = document.querySelector(".scrollbar");

addEventListener("scroll", () => {

    if (!bar) return;

    const scrollHeight =
        document.documentElement.scrollHeight - innerHeight;

    const progress =
        scrollHeight > 0
            ? (scrollY / scrollHeight) * 100
            : 0;

    bar.style.width = progress + "%";

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const secs = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

addEventListener("scroll", () => {

    let current = "home";

    secs.forEach((section) => {

        if (scrollY >= section.offsetTop - 170) {
            current = section.id;
        }

    });


    links.forEach((link) => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );

    });

});


/* =========================================================
   SEE MORE / SEE LESS PROJECTS
========================================================= */

const projectGrid = document.querySelector("#projectGrid");
const seeMoreButton = document.querySelector("#seeMoreProjects");


seeMoreButton?.addEventListener("click", () => {

    if (!projectGrid) return;


    /* Toggle all hidden projects */

    projectGrid.classList.toggle("show-all");


    /* Check current state */

    const isExpanded =
        projectGrid.classList.contains("show-all");


    /* Update accessibility state */

    seeMoreButton.setAttribute(
        "aria-expanded",
        isExpanded
    );


    /* Change button text */

    if (isExpanded) {

        seeMoreButton.innerHTML = `
            Show Less Projects
            <span>↑</span>
        `;

        seeMoreButton.classList.add("active");

    } else {

        seeMoreButton.innerHTML = `
            See More Projects
            <span>↓</span>
        `;

        seeMoreButton.classList.remove("active");

    }

});