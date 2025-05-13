document.addEventListener("DOMContentLoaded", () => {
    // 1. Back to Top Scroll
    const backToTop = document.querySelector(".foot-panel1");
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 2. Hero Image Slider
    const sliderImages = document.querySelectorAll(".img-container1 .img");
    let currentIndex = 0;

    function cycleImages() {
        sliderImages.forEach((img, i) => {
            img.style.display = i === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % sliderImages.length;
    }

    if (sliderImages.length > 0) {
        sliderImages.forEach(img => img.style.display = "none");
        cycleImages(); // Show first image immediately
        setInterval(cycleImages, 3000); // Change every 3 sec
    }

    // 3. Learn More Button Scroll
    const learnMoreBtn = document.querySelector("button");
    learnMoreBtn.addEventListener("click", () => {
        const targetSection = document.querySelector(".hero-sec2");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });

    // 4. Highlight Active Nav Link (basic scroll spy)
    const navLinks = document.querySelectorAll(".nav-bar a");
    const sections = ["home", "aboutus", "ourserv", "ourfact", "ourwork", "ourcontact"];

    function highlightNav() {
        const scrollY = window.scrollY;

        sections.forEach((id, index) => {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY + 100) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    // Optional: only works if your target sections have IDs matching hrefs
    window.addEventListener("scroll", highlightNav);

    // 5. Optional mobile nav toggle (only works if you implement menu toggle)
    // const menuToggle = document.querySelector(".menu-toggle");
    // const navBar = document.querySelector(".nav-bar");
    // menuToggle.addEventListener("click", () => {
    //     navBar.classList.toggle("open");
    // });
});
