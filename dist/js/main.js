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

  $(".viewed-slider").slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow:
      '<div class="viewed-slider-arrow viewed-slider-arrow__left-normal"></div>',
    nextArrow:
      '<div class="viewed-slider-arrow viewed-slider-arrow__right-normal"></div>'
  });
});
