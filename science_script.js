let cardsBar = [...document.querySelectorAll(".section__science-item")];

let options = {
  rootMargin: '0px',
  threshold: 0.5
}

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardsBar.forEach(card => card.classList.add("fadeInUp"));
    }
  })
}, options);

cardsBar.forEach(item => observer2.observe(item));