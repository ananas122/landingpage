(function () {
  //===== Preloader
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    window.onload = function () {
      window.setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.display = "none";
      }, 500);
    };
  }

  /*=====================================
    Sticky
  ======================================= */
  const header_navbar = document.querySelector("#navbar"); // changé .navbar-area en #navbar
  if (header_navbar) {
    window.onscroll = function () {
      const sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
      } else {
        header_navbar.classList.remove("sticky");
      }
    };
  }

  //===== Scroll Top
  const backToTo = document.querySelector(".scroll-top");
  if (backToTo) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTo.style.display = "flex";
      } else {
        backToTo.style.display = "none";
      }
    };
  }

  //===== Menu Scroll
  const pageLink = document.querySelectorAll(".page-scroll");
  if (pageLink.length > 0) {
    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPosition = document.querySelector(
          elem.getAttribute("href")
        ).offsetTop;
        window.scroll({
          top: targetPosition,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  }

  //===== Navbar Toggler
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  }

  //===== WOW Plugin
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }
})();

// Attente que le document soit prêt
document.addEventListener('DOMContentLoaded', function() {
  // Sélection de tous les éléments avec la classe "feature"
  const features = document.querySelectorAll('.feature');

  // Parcourir chaque élément et ajouter une classe pour le fade-in
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add('fade-in');
    }, index * 300); // Délai entre chaque animation
  });
});
