"use strict";

//slider

$(".slider-block").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
});

$(".brands__slider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        centerMode: true,
      },
    },
  ],
});

// burger
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
