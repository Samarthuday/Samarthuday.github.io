// Mobile navigation toggle
const btn = document.getElementById("btn");
const nav = document.querySelector("header ul");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Back to top button visibility based on scroll position
const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Typing effect for "Btech Student" in the header section
let txtIndex = 0;
let charIndex = 0;
const texts = ["Computer Science Student", "Developer", "Problem Solver", "Athlete", "Leader"];
const speed = 150; // Typing speed

function typeWriter() {
  const text = texts[txtIndex];
  
  if (charIndex < text.length) {
    document.querySelector(".typing-effect").innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      // After typing the text, clear it and move to the next text
      document.querySelector(".typing-effect").innerHTML = "";
      txtIndex = (txtIndex + 1) % texts.length; // Cycle through texts
      charIndex = 0; // Reset charIndex for next text
      typeWriter();
    }, 2000); // Pause before starting the next text
  }
}

// Execute typing effect when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

// Optional: Additional typing effect for multiple texts
const bars = document.querySelector(".bars");
const menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
});

// Dark mode toggle
const sun = document.querySelector(".fa-sun");

sun.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing effect using Typed.js
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-element", {
    strings: ["Btech Student.", "Frontend Developer.", "UI/UX Enthusiast."],
    startDelay: 1000,
    typeSpeed: 50,
    backSpeed: 80,
    loop: true,
    loopCount: Infinity,
  });
});