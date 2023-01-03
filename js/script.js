const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", mobileMenuToggle);

function mobileMenuToggle() {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  //   mobileMenu.classList.toggle("flex");
}

// mobile menu closing fix
const mobileMenuLinks = document.getElementsByClassName("mobileMenuLinks");
var mobileMenuLinksArrays = [...mobileMenuLinks];
mobileMenuLinksArrays.forEach((element) => {
  element.addEventListener("click", mobileMenuToggle);
});
