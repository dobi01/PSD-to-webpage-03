$(function () {
  $('body').removeClass('fade-out');


  // CAROUSELS
  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    autoPlay: 3000,
    wrapAround: true
  });

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
  var windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)");
  
  function mediaQueryFunction(x) {
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
      $('nav ul').css('display', 'block');
      
      // $('nav ul li a').click(function () {  
      //   $('nav ul').css('display', 'block');
      //   // let isVisible = $('nav ul').is(':visible');
      //   // if (isVisible) {
      //   //   $('nav ul').fadeIn('15000');
      //   // } else {
      //   //   $('nav ul').css('display', 'block');
      //   // }
      // });
    }
  }

  windowMaxWidth1200px.addListener(mediaQueryFunction);
  mediaQueryFunction(windowMaxWidth1200px);
 
});
