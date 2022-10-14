const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/* MODO 1 */

// const btnOpenMobileMenu = document.querySelector(".icon-mobile-nav");
// const btnCloseMobileMenu = document.querySelector(".close-mobile-menu");
// const headerEl = document.querySelector(".header");

// btnOpenMobileMenu.addEventListener("click", function () {
//   headerEl.classList.add("nav-open");
// });

// btnCloseMobileMenu.addEventListener("click", function () {
//   headerEl.classList.remove("nav-open");
// });

/* MODO 2 */

const headerEl = document.querySelector(".header");
const btnMobileMenu = document.querySelector(".btn-mobile-nav");

btnMobileMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// const ctaEl = document.getElementById("cta");
// const btnGoToCta = document.getElementById("btnGoToCta");

// btnGoToCta.addEventListener("click", function () {
//   ctaEl.scrollIntoView({ behavior: "smooth" });
// });

const mainNavList = document.querySelector(".main-nav");
const mainNavLink = document.querySelector(".main-nav-link");

// mainNavList.addEventListener("click", function () {
//   headerEl.classList.remove("nav-open");
// });

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      // console.log(link);
      headerEl.classList.remove("nav-open");
    }
  });
});

////////////////////////////////////////
// STICKY NAV

const sectionHeroEl = document.querySelector(".section-hero");

const callback = function (entries) {
  const entrie = entries[0];
  // console.log(entrie);
  if (!entrie.isIntersecting) document.body.classList.add("sticky");
  if (entrie.isIntersecting) document.body.classList.remove("sticky");
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-65px",
};

const observer = new IntersectionObserver(callback, options);
observer.observe(sectionHeroEl);

////////////////////////////////////////
