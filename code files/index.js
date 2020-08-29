//scrolling to top effects
let scrollTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", respondToScrolling);

//this function makes the scroll top button visible

function respondToScrolling() {
  if (window.pageYOffset > 200) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
}

// mobile hamburger menu

const menuButton = document
  .getElementById("menu")
  .addEventListener("click", openMobileNavBar);

const crossButton = document
  .getElementById("cross")
  .addEventListener("click", resetMobileNavBar);

const openMenu = document.querySelector(".mob-nav-bar");

// this functions opens or increase the height of the mobile navigation

function openMobileNavBar() {
  openMenu.style.height = "240px";
}

//this function resets the height of the mobile navigation bar

function resetMobileNavBar() {
  openMenu.style.height = "0px";
}
