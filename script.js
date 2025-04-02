document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll effect
    document.querySelector(".join-btn").addEventListener("click", function () {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });

    // Scroll animations
    window.addEventListener("scroll", function () {
        let heroSection = document.querySelector(".hero");
        let offset = window.scrollY / heroSection.offsetHeight;
        document.querySelector(".overlay").style.opacity = 0.6 + offset;
    });
});
