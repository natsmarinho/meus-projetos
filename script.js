const btnMode = document.querySelector(".btn-mode").addEventListener("click", changeTheme);
const elementosCabecalho = document.querySelector(".dark-mode");
const rodape = document.querySelector("footer");
const container = document.querySelector(".main-container")

function changeTheme() {
    this.classList.toggle("active");
    elementosCabecalho.classList.toggle("active");
    rodape.classList.toggle("active");
}