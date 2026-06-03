const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting Pinnacle Pizza!");
});
