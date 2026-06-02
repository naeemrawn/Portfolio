// ==========================
// Dynamic Footer Year
// ==========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==========================
// Navbar Shadow on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});

// ==========================
// Contact Form Alert
// ==========================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

};