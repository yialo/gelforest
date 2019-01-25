$(document).ready(function(){
  $('.interesting__list').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.interesting__buttons'),
  });
});
