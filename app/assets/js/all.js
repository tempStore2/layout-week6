var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
