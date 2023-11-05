var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const navbarModel = document.querySelector(".nav-list-mobile")
// toggle mobile navbar

function toggleNavbar() {
  navbarModel.classList.add("show-modal");

}

function closeModal() {
  setTimeout(() => {
    navbarModel.classList.contains("show-modal") &&
      navbarModel.classList.remove("show-modal")
  })
}


hamburgerIcon.addEventListener("click", toggleNavbar)

navbarModel.addEventListener("click", closeModal)


// about section tabs

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}