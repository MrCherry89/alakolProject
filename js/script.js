$(document).ready(function () {
  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".halls-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $(".halls-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".halls-slider-wrap .slider-navigation .slick-next"),
  });

  $(".information-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $(".information-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".information-slider-wrap .slider-navigation .slick-next"),
  });

  $(".yard-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $(".yard .title-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".yard .title-wrap .slider-navigation .slick-next"),
  });

  $(".location-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    dpeed: 800, 
    autoplay: true,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".main-menu li a").smoothScroll({
    speed: 1000,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });

$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});


  AOS.init();
});
