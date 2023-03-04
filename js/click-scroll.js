//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6, 7];

$.each(sectionArray, function(index, value) {

  $(document).scroll(function() {
    var offsetSection = $('#' + 'section_' + value).offset().top - 84;
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    if(docScroll1 >= offsetSection){
      if ($('body').is('.home')) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
      }
      //Hardcoded af but I don't really care
      else if ($('body').is('.athletics')) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(index + 2).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index + 2).removeClass('inactive');
      }
      else if ($('body').is('.academics')) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(index + 3).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index + 3).removeClass('inactive');
      }
      else if ($('body').is('.contact')) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
        $('.navbar-nav .nav-item .nav-link').eq(index + 4).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index + 4).removeClass('inactive');
      }
    }

  });

  $('.click-scroll').eq(index).click(function(e) {
    var offsetClick = $('#' + 'section_' + value).offset().top - 84;
    e.preventDefault();
    $('html, body').animate({
      'scrollTop': offsetClick
    }, 300)
  });

});

$(document).ready(function() {
  //$('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
  //$('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
  //$('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});