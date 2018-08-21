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

  $(".viewed-slider-2").slick({
    arrows: true,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
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
          slidesToScroll: 1
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

  

  $(".product-slider-top").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product-slider-bottom",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          prevArrow:
            '<div class="product-slider-arrow product-slider-arrow__left"></div>',
          nextArrow:
            '<div class="product-slider-arrow product-slider-arrow__right"></div>'
        }
      }
    ]
  });

  $(".product-slider-bottom").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow:
      '<div class="product-slider-arrow product-slider-arrow__left"></div>',
    nextArrow:
      '<div class="product-slider-arrow product-slider-arrow__right"></div>',
    asNavFor: ".product-slider-top"
  });

  /* tabs */
  $(document).ready(function() {
    $(".accordion-tabs")
      .children("li")
      .first()
      .children("a")
      .addClass("is-active")
      .next()
      .addClass("is-open")
      .show();
    $(".accordion-tabs").on("click", "li > a", function(event) {
      if (!$(this).hasClass("is-active")) {
        event.preventDefault();
        $(".accordion-tabs .is-open")
          .removeClass("is-open")
          .hide();
        $(this)
          .next()
          .toggleClass("is-open")
          .toggle();
        $(".accordion-tabs")
          .find(".is-active")
          .removeClass("is-active");
        $(this).addClass("is-active");
      } else {
        event.preventDefault();
      }
    });
  });

  /* Range */
  $("#slider-range").slider({
    range: true,
    min: 590,
    max: 60000,
    values: [590, 23900],
    slide: function (event, ui) {
      $("#price-more").val(ui.values[0]);
      $("#price-less").val(ui.values[1]);
    }
  });
  $("#price-more").val($("#slider-range").slider("values", 0));
  $("#price-less").val($("#slider-range").slider("values", 1));
  
  

});
