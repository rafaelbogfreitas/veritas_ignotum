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

document.addEventListener("resize", () => {
  navbar.classList.remove("open")
}, false);