"use-strict";

// Selectors - Buttons
const btnResume = document.querySelector(".btn--resume");
let currentNavItem = btnResume;
const btnPortfolio = document.querySelector(".btn--portfolio");
const btnUses = document.querySelector(".btn--uses");

// Selectors - Containers
const resumeContainer = document.querySelector(".resume--container");
const educationContainer = document.querySelector(".education--container");
const portfolioContainer = document.querySelector(".portfolio--container");
const usesContainer = document.querySelector(".uses--container");
const toolingContainer = document.querySelector(".tooling--container");
let currentSections = [resumeContainer, educationContainer];

// Event Listeners
btnResume.addEventListener("click", function (e) {
  if (e.currentTarget !== currentNavItem) {
    _toggleNavStyles(currentNavItem);
    currentNavItem = e.currentTarget;
    _toggleNavStyles(currentNavItem);
    _toggleSection(currentNavItem);
  }
  if (navigator.maxTouchPoints > 0)
    resumeContainer.scrollIntoView({ behavior: "smooth" });
});

btnPortfolio.addEventListener("click", function (e) {
  if (e.currentTarget !== currentNavItem) {
    _toggleNavStyles(currentNavItem);
    currentNavItem = e.currentTarget;
    _toggleNavStyles(currentNavItem);
    _toggleSection(currentNavItem);
  }
  if (navigator.maxTouchPoints > 0)
    portfolioContainer.scrollIntoView({ behavior: "smooth" });
});

btnUses.addEventListener("click", function (e) {
  if (e.currentTarget !== currentNavItem) {
    _toggleNavStyles(currentNavItem);
    currentNavItem = e.currentTarget;
    _toggleNavStyles(currentNavItem);
    _toggleSection(currentNavItem);
  }
  if (navigator.maxTouchPoints > 0)
    usesContainer.scrollIntoView({ behavior: "smooth" });
});

// Functions
function _toggleNavStyles(target) {
  target.classList.toggle("bg-gray-100");
  target.classList.toggle("text-blue-600");
  target.classList.toggle("cursor-default");
  target.classList.toggle("hover:cursor-pointer");
  target.classList.toggle("hover:text-blue-600");
  target.classList.toggle("hover:bg-gray-100");
}

function _toggleSection(target) {
  _hideCurrentSection();
  currentSections.length = 0;
  switch (target.outerText) {
    case "Portfolio":
      currentSections.push(portfolioContainer);
      portfolioContainer.classList.toggle("hide");
      _showSelectedSection();
      break;
    case "Uses":
      currentSections.push(usesContainer);
      usesContainer.classList.toggle("hide");
      _showSelectedSection();
      break;
    default:
      currentSections.push(resumeContainer);
      currentSections.push(educationContainer);
      resumeContainer.classList.toggle("hide");
      educationContainer.classList.toggle("hide");
      _showSelectedSection();
      break;
  }
}

function _hideCurrentSection() {
  currentSections.forEach((section) =>
    ["hide", "hide-section", "show-section"].forEach((cl) =>
      section.classList.toggle(cl)
    )
  );
}

function _showSelectedSection() {
  currentSections.forEach((section) =>
    setTimeout(() => {
      section.classList.toggle("hide-section");
      section.classList.toggle("show-section");
    }, 75)
  );
}
