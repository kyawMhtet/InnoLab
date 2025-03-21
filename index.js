
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("myTopnav");

    if (window.scrollY < window.innerHeight / 2) {
        navbar.classList.add("opacity-0", "-translate-y-full");
        navbar.classList.remove("bg-black", "shadow-lg");
    } else {
        navbar.classList.remove("opacity-0", "-translate-y-full");
        navbar.classList.add("bg-black", "shadow-lg");
    }
    if (window.scrollY === 0) {
        navbar.classList.remove("opacity-0", "-translate-y-full", "bg-black", "shadow-lg");
    }
});


