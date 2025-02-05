$(document).ready(function () {
  $('.testimonials').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 992, // Below 992x
      settings: {
          slidesToShow: 1,  // Show 1 slide
          slidesToScroll: 1,
          arrows:false
      }
  },
    ]

  });
});