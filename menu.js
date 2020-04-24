let display = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = display ? "hidden" : "initial";
  
  menuSection.classList.toggle("on", display);
  display = !display;
});