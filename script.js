
let cards = [...document.querySelectorAll(".info__card-img")];
let cardsBar = document.querySelector(".section__science-container");

let options = {
  rootMargin: '0px',
  threshold: 1.0
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach( entry => {
    if(entry.isIntersecting) {
      cards.forEach( card => card.classList.add("fadeInUp"))
    }
  })
}, options);

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach( entry => {
    if(entry.isIntersecting) {
      cardsBar.classList.add("fadeInUp");
    }
  })
}, options);


cards.forEach(item => observer.observe(item));
observer2.observe(cardsBar);


