const hamburgerBtn = document.getElementById("hamburgerBtn");
const navList = document.querySelector("nav ul");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  navList.classList.toggle("open")
});
navList.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    navList.classList.remove("open")
  })
});
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark"
});
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show")
  })
}, {
  threshold: .15
});
els.forEach(el => obs.observe(el));
window.addEventListener("scroll", () => {
  document.querySelector("nav").style.boxShadow = window.scrollY > 10 ? "0 4px 20px rgba(0,0,0,.08)" : "none"
});