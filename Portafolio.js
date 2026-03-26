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