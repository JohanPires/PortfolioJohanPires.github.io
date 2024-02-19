const nav = document.querySelector("nav");
const home = document.querySelector("#header-container");
const skills = document.querySelector("#skills-container");
const project = document.querySelector("#project-container");
const contact = document.querySelector("#contact-container");
const menu = document.querySelector(".menu");
const navLink = document.querySelector("nav ul");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    nav.style.top = "0px";
    nav.style.opacity = 1;
  } else if (window.scrollY < 50) {
    nav.style.top = "-70px";
    nav.style.opacity = 0;
  }
});

menu.addEventListener("click", () => {
  navLink.classList.toggle("activ2");
});
