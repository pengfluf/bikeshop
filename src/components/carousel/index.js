import './carousel.scss';
import './slick.scss';

import './slide1.jpg';
import './slide2.jpg';
import './slide3.jpg';

import $ from 'jquery';
import slick from 'slick-carousel';

require.ensure([], (require) => {
  $('.carousel__content').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.carousel__control--prev',
    nextArrow: '.carousel__control--next',
    appendDots: '.carousel__content',
    dots: true,
    dotsClass: 'carousel__indicators',
    mobileFirst: true,
    pauseOnHover: false
  });

  $('.carousel__scroll-icon').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    },1000);
});

});
