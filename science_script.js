let cardsBar = [...document.querySelectorAll(".section__science-item")];

let options = {
  rootMargin: '0px',
  threshold: 0.5
}

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

observeArrayWithTimeOut(cardsBar, "fadeInUp", 500);