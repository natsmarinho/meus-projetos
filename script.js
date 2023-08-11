const btnMode = document.querySelector(".btn-mode").addEventListener("click", changeTheme);
const elementosCabecalho = document.querySelector(".dark-mode");
const rodape = document.querySelector("footer");
const container = document.querySelector(".main-container");
const corpo = document.querySelector("body");
const htmlIcon = document.querySelector("#stacks-icon-html");
const cssIcon = document.querySelector("#stacks-icon-css");
const jsIcon = document.querySelector("#stacks-icon-js");
const githubIcon = document.querySelector("#stacks-icon-github");
const setaIcon = document.querySelector(".path-seta");
const contactGithub = document.querySelector("#contact-github");
const contactLinkedin = document.querySelector("#contact-linkedin");
const contactTwitter = document.querySelector("#contact-twitter");


function changeTheme() {
    this.classList.toggle("active");
    elementosCabecalho.classList.toggle("active");
    rodape.classList.toggle("active");
    corpo.classList.toggle("active");
    htmlIcon.classList.toggle("active");
    cssIcon.classList.toggle("active");
    jsIcon.classList.toggle("active");
    githubIcon.classList.toggle("active");
    setaIcon.classList.toggle("active");
    contactGithub.classList.toggle("active");
    contactLinkedin.classList.toggle("active");
    contactTwitter.classList.toggle("active");
}



const btnNextProject = document.querySelector(".next-slider").addEventListener("click", proximoSlide);
const btnPrevProject = document.querySelector(".prev-slider").addEventListener("click", prevSlide);
const projectList = document.querySelector(".project-list");
const projectItem = document.querySelectorAll(".projects");

let currentIndex = 0;

 function showSlide(index) {
    if (index < 0) {
      currentIndex = projectItem.length - 1;
    } else if (index >= projectItem.length) {
      currentIndex = 0;
    }

    projectItem.forEach((item, idx) => {
      if (idx === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

function proximoSlide() {
  currentIndex++;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}
showSlide(currentIndex);
