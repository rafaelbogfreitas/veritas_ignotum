
let cards = [...document.querySelectorAll(".info__card-img")];
let cardsBar = [...document.querySelectorAll(".section__science-item")];

//services images
let leftImg = document.querySelector(".services__container img[alt*='Decep']");
let rightImg = document.querySelector(".services__container img[alt*='behav']");

console.log(leftImg)

let options = {
  rootMargin: '0px',
  threshold: 0.5
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cards.forEach(card => card.classList.add("fadeInUp"))
    }
  })
}, options);

cards.forEach(item => observer.observe(item));

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardsBar.forEach(card => card.classList.add("fadeInUp"));
    }
  })
}, options);

cardsBar.forEach(item => observer2.observe(item));

const leftObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      leftImg.classList.add("fadeInLeft");
    }
  })
}, options);

leftObserver.observe(leftImg);

const rightObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      rightImg.classList.add("fadeInRight");
    }
  })
}, options);

rightObserver.observe(rightImg);