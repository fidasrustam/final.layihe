var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex - 1].style.display = "grid";
}

const spaceship = document.querySelector(".spaceship");
let previousPlanet, currentPlanet;

function viewFacts(id) {
  currentPlanet = document.getElementById(id);
  document.getElementById("planetData").style.display = "block";

  if (previousPlanet) previousPlanet.classList.add("hidden");
  currentPlanet.classList.remove("hidden");
  currentPlanet.scrollIntoView();

  scrollAnimation(currentPlanet);
  previousPlanet = currentPlanet;
}

function scrollAnimation(planet) {
  const facts = planet.querySelectorAll(".facts");
  const appearOptions = { threshold: 0.5, rootMargin: "0px 0px 50px 0px" };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideUp");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  facts.forEach(fact => appearOnScroll.observe(fact));
}

const navbar = document.querySelector("nav");
const header = document.querySelector("header");

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    navbar.style.backgroundColor = entry.isIntersecting ? "transparent" : "#000";
  });
}, { rootMargin: "-200px" }).observe(header);

const sidePanel = document.getElementById("solarSideCard");
let infoPanelPrevious = document.getElementById('sideInfoSun');

function closeSidePanel() {
  sidePanel.style.right = "-100%";
}

function openSidePanel(id) {
  const infoPanelCurrent = document.getElementById(id);
  sidePanel.style.right = "0";

  infoPanelPrevious.classList.add('hidden');
  infoPanelCurrent.classList.remove('hidden');

  infoPanelPrevious = infoPanelCurrent;
}

function moveToPlanetCarousel() {
  document.getElementById('planet-carousel').scrollIntoView();
}

function resetDropdown() {
  document.querySelector("details").removeAttribute('open');
}

const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

function showMobileMenu() {
  hamburgerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  setTimeout(() => {
    mobileMenu.querySelector('.top-section').classList.toggle('active');
    mobileMenu.querySelector('.bottom-section').classList.toggle('active');
  }, 300);
}

function resetMobileMenu() {
  if (mobileMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenu.querySelector('.top-section').classList.remove('active');
    mobileMenu.querySelector('.bottom-section').classList.remove('active');
  }
}
