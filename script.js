function toggleMenu() {
      //device vibration for 1ms
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


// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
    //device vibration for 2ms
    if (navigator.vibrate) {
        navigator.vibrate(2);
    }
  // Change button icon 🌙 <-> ☀️
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Light Theme";
  } else {
    themeToggle.textContent = "Dark Theme";
  }
});

function vibrate(){
      //device vibration for 1ms
    if (navigator.vibrate) {
        navigator.vibrate(2);
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const themeToggle = document.getElementById("theme-toggle");

  // 🔹 Vibration function
  function vibrate() {
    if (navigator.vibrate) {
      navigator.vibrate(2);
    }
  }

  // 🔹 Theme toggle click
  themeToggle.addEventListener("click", () => {
    vibrate();
  });

  // 🔹 Nav links click
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      vibrate();
    }
  });
});