function toggleMenu() {
  // device vibration for 2ms
  if (navigator.vibrate) {
    navigator.vibrate(2);
  }
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

// Theme toggle + persistence
const themeToggle = document.getElementById("theme-toggle");

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "Light Theme";
  } else {
    themeToggle.textContent = "Dark Theme";
  }

  const nav = document.querySelector("nav");

  // Vibration function
  function vibrate() {
    if (navigator.vibrate) {
      navigator.vibrate(2);
    }
  }

  // Theme toggle click
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light Theme";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark Theme";
    }

    vibrate();
  });

  // Nav links click vibration
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      vibrate();
    }
  });
});