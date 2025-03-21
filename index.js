let lastScrollTop = 0;
const navbar = document.getElementById("myTopnav");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.3s ease-in-out";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  if (currentScroll <= 0) {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const heroSection = document.querySelector("section"); // Hero section
  
    window.addEventListener("scroll", function () {
      const heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight) {
        scrollToTopBtn.classList.remove("hidden");
      } else {
        scrollToTopBtn.classList.add("hidden");
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  

function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}



