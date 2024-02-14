const nav = document.querySelector("nav");
const home = document.querySelector("#header-container");
const skills = document.querySelector("#skills-container");
const project = document.querySelector("#project-container");
const contact = document.querySelector("#contact-container");
const menu = document.querySelector(".menu");
const navLink = document.querySelector("nav ul");
// const form = document.querySelector("form");

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

// const sendMail = () => {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "johan2408.jp@gmail.com",
//     Password: "DA01FBE7A320139EA2B5C8DF7CF9295E1210",
//     To: "them@website.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// };
