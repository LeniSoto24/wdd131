const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});