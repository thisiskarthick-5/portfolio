// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Typing Animation
const words = ["Frontend Developer", "Web Designer", "Creative Coder"];
let index = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (charIndex < words[index].length) {
        typingElement.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect)