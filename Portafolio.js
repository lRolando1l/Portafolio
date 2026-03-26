function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
});
function enviarFormulario() {
  alert("Mensaje enviado correctamente 🚀");
  return false;
}
const aboutSection = document.querySelector(".about");
window.addEventListener("scroll", () => {
  const top = aboutSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    aboutSection.style.opacity = 1;
    aboutSection.style.transform = "translateY(0)";
  }
});

aboutSection.style.opacity = 0;
aboutSection.style.transform = "translateY(50px)";
aboutSection.style.transition = "0.6s";

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    projectCards.forEach(c => {
      if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
  });
});
const expItem = document.querySelector(".experience-item");
const savedState = localStorage.getItem("acordeonAbierto");
if (savedState === null || savedState === "true") {
  expItem.classList.add("active");
}
expItem.addEventListener("click", () => {
  expItem.classList.toggle("active");
  const estaAbierto = expItem.classList.contains("active");
  localStorage.setItem("acordeonAbierto", estaAbierto);
});
document.querySelectorAll(".exp-card").forEach(card => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});