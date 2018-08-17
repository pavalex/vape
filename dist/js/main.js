new WOW().init();

$(document).ready(function() {
  /* slick */
  $(".slider-bg").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    prevArrow: '<div class="slider-arrow slider-arrow__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow__right"></div>'
  });
});
