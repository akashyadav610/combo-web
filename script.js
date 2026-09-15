const nav = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const modal = document.getElementById("previewModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 25);
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.querySelectorAll(".preview-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.template;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
