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