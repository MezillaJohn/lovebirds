const NavElements = document.querySelector(".navElements");
const Harmburger = document.querySelector(".harmburger");
const HarmburgerMenu = document.querySelector(".harmburger-menu");
const Overlay = document.querySelector(".overlay");
const HarmburgerClose = document.querySelector(".harmburger-close");
const Navigation = document.querySelector(".wrapper");

const addHandler = () => {
  Overlay.classList.remove("hidden");
  HarmburgerMenu.classList.remove("hidden");
  HarmburgerClose.classList.remove("hidden");
};

const removeHandler = () => {
  Overlay.classList.add("hidden");
  HarmburgerMenu.classList.add("hidden");
  HarmburgerClose.classList.add("hidden");
};

Harmburger.addEventListener("click", function () {
  addHandler();
});

const removeHarmburgerMenuHandler = () => {
  removeHandler();
};

Overlay.addEventListener("click", removeHarmburgerMenuHandler);
HarmburgerClose.addEventListener("click", removeHarmburgerMenuHandler);

/////////////////////////////////////////
// smooth scroll animation
Navigation.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    e.target.classList.contains("navLink") ||
    e.target.classList.contains("navBtn")
  ) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    removeHandler();
  }
});
