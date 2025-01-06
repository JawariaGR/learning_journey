let contact = document.getElementById("contact");
let cont_btn = document.getElementById("cont-btn");
cont_btn?.addEventListener("click", () => {
  contact!.classList.toggle("hide");
});

let skills = document.getElementById("Skills");
let skill_btn = document.getElementById("skill-btn");

skill_btn?.addEventListener("click", () => {
  skills!.classList.toggle("hide");
});

let lang = document.getElementById("Languages");
let lan_btn = document.getElementById("lang-btn");

lan_btn?.addEventListener("click", () => {
  lang!.classList.toggle("hide");
});
let Award = document.getElementById("Award");
let Awa_btn = document.getElementById("Awa-btn");

Awa_btn?.addEventListener("click", () => {
  Award!.classList.toggle("hide");
});

let About = document.getElementById("about");
let about_btn = document.getElementById("abt-btn");

about_btn?.addEventListener("click", () => {
  About!.classList.toggle("hide");
});
let experience = document.getElementById("experience");
let exp_btn = document.getElementById("exp-btn");

exp_btn?.addEventListener("click", () => {
  experience!.classList.toggle("hide");
});

let education = document.getElementById("education");
let edu_btn = document.getElementById("edu-btn");

edu_btn!.addEventListener("click", () => {
  education!.classList.toggle("hide");
});

let print_btn = document.getElementById("print-btn");
print_btn!.addEventListener("click", () => {
  window.print();
});
