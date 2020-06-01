var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.7,
      spaceBetween: 10,
    },
    "@0.25": {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    "@0.50": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@0.75": {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    "@1.25": {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
