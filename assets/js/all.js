"use strict";

// 輪播
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
}); // 分頁更換字體顏色

$(".page-product").each(function () {
  if (window.location.href.includes("product.html")) {
    $(this).addClass("text-success");
  }
});
$(".page-product").each(function () {
  if (window.location.href.includes("tatami-cup.html")) {
    $(this).addClass("text-dark");
  }
});
$(".page-dark").each(function () {
  if (window.location.href.includes("product.html")) {
    $(this).addClass("text-dark");
  }
});
$(".page-dark").each(function () {
  if (window.location.href.includes("tatami-cup.html")) {
    $(this).addClass("text-dark");
  }
}); // 箭頭方向

$(".product").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("expand").siblings().removeClass("expand");
});
//# sourceMappingURL=all.js.map
