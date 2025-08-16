function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggleBtn = document.querySelector(".menu-toggle");

  menu.classList.toggle("showing");
  toggleBtn.classList.toggle("active");

  // Switch icon ☰ <-> ✖
  if (menu.classList.contains("showing")) {
    toggleBtn.textContent = "✕";
  } else {
    toggleBtn.textContent = "☰";
  }
}

// Shrink header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 1) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

