$(document).ready(function() {
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),  
    });
    
    $('.site-wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ],
        nextArrow:$('.next'),
        prevArrow:$('.prev'),  
    });
});