new WOW().init();

$(document).ready(function() {
  /* modal-callback */
  $(".header-middle-btn").on("click", function() {
    $(".overlay").fadeIn(400);
  });

  $(".header-middle-btn-mobile").on("click", function() {
    $(".overlay").fadeIn(400);
  });

  $(".footer-contacts-btn").on("click", function() {
    $(".overlay").fadeIn(400);
  });

  $(".callback-close").on("click", function() {
    $(".overlay").fadeOut(400);
    $("#callback-name").val("");
    $("#callback-phone").val("");
  });

  $(".overlay").click(function() {
    $(document).on("click", function(event) {
      var select = $(".callback");
      if ($(event.target).closest(select).length) return;
      $(".overlay").fadeOut(400);
      $("#callback-name").val("");
      $("#callback-phone").val("");
      $(document).unbind("click");
      event.stopPropagation();
    });
  });

  /* basket-modal */
  $(".header-middle-basket-block__subtitle").on("click", function() {
    $(".overlay-basket").fadeIn(400);
  });

  $(".basket-modal-close").on("click", function() {
    $(".overlay-basket").fadeOut(400);
  });

  $(".overlay-basket").click(function() {
    $(document).on("click", function(event) {
      var select = $(".basket-modal");
      if ($(event.target).closest(select).length) return;
      $(".overlay-basket").fadeOut(400);
      $(document).unbind("click");
      event.stopPropagation();
    });
  });

  /* menu */
  $(".header-middle-link-burger").click(function() {
    $(".header-bottom").slideToggle("hide-block");
    // $(".hamburger").toggleClass("hamburger-active");
  });

  /* jquery.maskedinput */
  $(".callback-form-input__tel").mask("+9(999) 999-99-99");

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
      '<div class="viewed-slider-arrow viewed-slider-arrow__right-normal"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          prevArrow:
            '<div class="viewed-slider-arrow viewed-slider-arrow__left-normal"></div>',
          nextArrow:
            '<div class="viewed-slider-arrow viewed-slider-arrow__right-normal"></div>'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            '<div class="viewed-slider-arrow viewed-slider-arrow__left-normal"></div>',
          nextArrow:
            '<div class="viewed-slider-arrow viewed-slider-arrow__right-normal"></div>'
        }
      }
    ]
    // prevArrow:
    //   '<div class="viewed-slider-arrow viewed-slider-arrow__left-normal"></div>',
    // nextArrow:
    //   '<div class="viewed-slider-arrow viewed-slider-arrow__right-normal"></div>',
  });
});
