
let cards = [...document.querySelectorAll(".info__card-img")];
let cardsBar = [...document.querySelectorAll(".section__science-item")];

//services images
let leftImg = document.querySelector(".services__container img[alt*='Decep']");
let rightImg = document.querySelector(".services__container img[alt*='behav']");

let options = {
  rootMargin: '0px',
  threshold: 0.5
}

  // HELPERS

  const observeArray = (array, animationType) => {
    array.forEach((item, i) => {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            item.classList.add(animationType);
          }
        })
      }, options);
      observer.observe(item);
    })
  };

  const observeArrayWithTimeOut = (array, animationType, velocity = 1000) => {
    array.forEach((item, i) => {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              console.log(i)
              item.classList.add(animationType);
            }, i * velocity)
          }
        })
      }, options);
      observer.observe(item);
    })
  };

observeArray(cards, "fadeInUp");
observeArrayWithTimeOut(cardsBar, "fadeInUp", 500);

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

// Prevent zoom

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && (event.key == 'Meta' || event.key == '-' || event.key == '=' || event.key == 'Control') ) {
      event.preventDefault();
    }
  });

  document.addEventListener("mousewheel DOMMouseScroll", (event) => {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  });
