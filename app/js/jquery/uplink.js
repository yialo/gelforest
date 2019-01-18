$(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('.page-footer__uplink').fadeIn('slow');
    } else {
      $('.page-footer__uplink').fadeOut('slow');
    }
  });
  $('.page-footer__uplink').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
