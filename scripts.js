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
  function scrollFlow(x) {
    $(document).on('click', 'a[href^="#"]', function(event) {
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - x
      }, 1500);
    });
  }

  // MEDIA QUERY
  const windowMaxWidth1450px = window.matchMedia("(max-width: 1450px)"),
        windowMaxWidth1350px = window.matchMedia("(max-width: 1350px)"),
        windowMaxWidth1250px = window.matchMedia("(max-width: 1250px)"),
        windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)"),
        carPremium = $('#premium .main-carousel'),
        carTeam = $('#team .main-carousel'),
        carClients = $('#clients .main-carousel'),
        offset95 = 95,
        offset40 = 40,
        navUl = $('nav ul'),
        menuButton = $('#menu-button'),
        navLinks = $('nav ul li a');

  function mediaQuery1450px(x) {
    if (x.matches) {
      carPremium.flickity('destroy');
    } else {
      carPremium.flickity();
    }
  }

  function mediaQuery1350px(x) {
    if (x.matches) {
      carTeam.flickity('destroy');
    } else {
      carTeam.flickity();
    }
  }

  function mediaQuery1250px(x) {
    if (x.matches) {
      carClients.flickity('destroy');
    } else {
      carClients.flickity();
    }
  }

  windowMaxWidth1450px.addListener(mediaQuery1450px);
  mediaQuery1450px(windowMaxWidth1450px);

  windowMaxWidth1350px.addListener(mediaQuery1350px);
  mediaQuery1350px(windowMaxWidth1350px);

  windowMaxWidth1250px.addListener(mediaQuery1250px);
  mediaQuery1250px(windowMaxWidth1250px);

  $(window).on('resize', function() {
    let windowWidth= $(this).width();
    if (windowWidth <= 1450) carPremium.flickity('destroy');
    if (windowWidth <= 1350) carTeam.flickity('destroy');
    if (windowWidth <= 1250) carClients.flickity('destroy');
  });

  function mediaQuery1200px(x) {
    if (x.matches) { 

      scrollFlow(offset40);
      navUl.addClass('invisible'); 

      menuButton.click(function() { 
        let isVisible = navUl.is(':visible');
        if (isVisible) {
          navUl.fadeOut('fast');
        } else {
          navUl.fadeIn('fast');
        }
      });

      navLinks.click(function () {   
        navUl.fadeOut('fast');
      });

    } else {
      navUl.css('display', 'inline-block');
      navLinks.off('click');
      menuButton.off('click');
      scrollFlow(offset95);
    }
  }

  windowMaxWidth1200px.addListener(mediaQuery1200px);
  mediaQuery1200px(windowMaxWidth1200px);
 
});
