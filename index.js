let lastScrollTop = 0;
const navbar = document.getElementById("myTopnav");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down - hide navbar
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.3s ease-in-out";
  } else {
    // Scrolling up - show navbar
    navbar.style.transform = "translateY(0)";
  }

  // Reset navbar at the top
  if (currentScroll <= 0) {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}



