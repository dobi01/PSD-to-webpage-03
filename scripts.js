$(function () {
  $('body').removeClass('fade-out');

  // CAROUSELS
  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true, 
    // autoPlay: true
  });

  // NAV LINKS
  $(document).on('click', 'a[href^="#"]', function(event) {
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 95
    }, 1500);
  });

  // MEDIA QUERY
  var windowMaxWidth1450px = window.matchMedia("(max-width: 1450px)");
  var windowMaxWidth1350px = window.matchMedia("(max-width: 1350px)");
  var windowMaxWidth1250px = window.matchMedia("(max-width: 1250px)");
  var windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)");
  
  function mediaQuery1450px(x) {
    if (x.matches) $('#premium .main-carousel').flickity( 'destroy' );
  }

  function mediaQuery1350px(x) {
    if (x.matches) $('#team .main-carousel').flickity( 'destroy' );
  }

  function mediaQuery1250px(x) {
    if (x.matches) $('#clients .main-carousel').flickity( 'destroy' );
  }

  windowMaxWidth1450px.addListener(mediaQuery1450px);
  mediaQuery1450px(windowMaxWidth1450px);

  windowMaxWidth1350px.addListener(mediaQuery1350px);
  mediaQuery1350px(windowMaxWidth1350px);

  windowMaxWidth1250px.addListener(mediaQuery1250px);
  mediaQuery1250px(windowMaxWidth1250px);


  $(window).on('resize', function() {
    let windowWidth= $(this).width();
    if (windowWidth <= 1450) $('#premium .main-carousel').flickity( 'destroy' );
    if (windowWidth <= 1350) $('#team .main-carousel').flickity( 'destroy' );
    if (windowWidth <= 1250) $('#clients .main-carousel').flickity( 'destroy' );
  });



  function mediaQuery1200px(x) {
    if (x.matches) { 
      $('nav ul').css('display', 'none');

      $('#menu-button').click(function () {
        let isVisible = $('nav ul').is(':visible');
        if (isVisible) {
          $('nav ul').fadeOut('fast');
        } else {
          $('nav ul').fadeIn('fast');
        }
      });
    
      $('nav ul li a').click(function () {  
        $('nav ul').fadeOut('fast');
      });

    } else {
      $('nav ul').css('display', 'inline-block');
    }
  }

  windowMaxWidth1200px.addListener(mediaQuery1200px);
  mediaQuery1200px(windowMaxWidth1200px);
 
});
