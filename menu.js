let menuIcon = document.querySelector(".menu__icon")
let closeIcon = document.querySelector(".close__icon")
let navbar = document.querySelector(".navbar__list")
let navbarItems = document.querySelectorAll(".navbar__links")

menuIcon.addEventListener("click", () => {
  navbar.classList.add("open")
}, false)

closeIcon.addEventListener("click", () => {
  navbar.classList.remove("open")
}, false)

navbarItems.forEach(item => {
  item.addEventListener("click", () => {
    if(navbar.classList.contains("open")){
      navbar.classList.remove("open")
    }
  }, false)
});

window.addEventListener("resize", () => {
  if(window.innerWidth > 800 && navbar.classList.contains("open")) {
    console.log("heyyyyyyyy")
    navbar.classList.remove("open")
  }
}, false);