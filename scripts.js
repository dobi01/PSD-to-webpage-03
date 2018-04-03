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
  function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 95);
    }
  }
   
  $(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  window.setTimeout(offsetAnchor, 0);

  // MEDIA QUERY
  var windowMaxWidth1350px = window.matchMedia("(max-width: 1350px)");
  
  function mediaQuery1350px(x) {
    if (x.matches) $('#team .main-carousel').flickity( 'destroy' );
  }

  windowMaxWidth1350px.addListener(mediaQuery1350px);
  mediaQuery1350px(windowMaxWidth1350px);

  $(window).on('resize', function() {
    let windowWidth= $(this).width();
    if (windowWidth <= 1450) $('#premium .main-carousel').flickity( 'destroy' );
    if (windowWidth <= 1350) $('#team .main-carousel').flickity( 'destroy' );
    if (windowWidth <= 1250) $('#clients .main-carousel').flickity( 'destroy' );
  });


  var windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)");
  
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
      
      // $('nav ul li a').click(function () {  
      //   $('nav ul').css('display', 'inline-block');
      //   // let isVisible = $('nav ul').is(':visible');
      //   // if (isVisible) {
      //   //   $('nav ul').fadeIn('15000');
      //   // } else {
      //   //   $('nav ul').css('display', 'block');
      //   // }
      // });
    }
  }

  windowMaxWidth1200px.addListener(mediaQuery1200px);
  mediaQuery1200px(windowMaxWidth1200px);
 
});
