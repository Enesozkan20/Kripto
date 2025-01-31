const navMenu = document.querySelector("#nav-menu");
const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.querySelector("#menu-btn");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-bars")) {
        navMenu.classList.add("show-menu");
    }

    if (e.target.classList.contains("fa-times")) {
        navMenu.classList.remove("show-menu");
    }
});
