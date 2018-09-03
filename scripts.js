'use strict';

$(function () {
  $('body').removeClass('fade-out');

  // CAROUSELS
  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true, 
    // autoPlay: true
  });

  // ANIMATE NAV LINKS SCROLL
  function scrollFlow(offset) {
    $(document).on('click', 'a[href^="#"]', function(event) {
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - offset
      }, 1500);
    });
  }

  // MEDIA QUERIES FOR TOGGLE CAROUSELS AND MENU BAR
  const windowMaxWidth1450px = window.matchMedia("(max-width: 1450px)"),
        windowMaxWidth1350px = window.matchMedia("(max-width: 1350px)"),
        windowMaxWidth1250px = window.matchMedia("(max-width: 1250px)"),
        windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)"),
        carPremium = $('#premium .main-carousel'),
        carTeam = $('#team .main-carousel'),
        carClients = $('#clients .main-carousel'),
        offsetForDestop = 95,
        offsetForMobile = 40,
        navUl = $('nav ul'),
        menuButton = $('#menu-button'),
        navLinks = navUl.find('li a');

  function toggleFlickity(mediaQuery, carousel) {
    mediaQuery.matches ? carousel.flickity('destroy') : carousel.flickity();
  }

  windowMaxWidth1450px.addListener(toggleFlickity(windowMaxWidth1450px, carPremium));
  windowMaxWidth1350px.addListener(toggleFlickity(windowMaxWidth1350px, carTeam));
  windowMaxWidth1250px.addListener(toggleFlickity(windowMaxWidth1250px, carClients));

  $(window).on('resize', function() {
    let windowWidth= $(this).width();
    if (windowWidth >= 1250 && windowWidth <= 1450) {
      windowWidth <= 1450 ? carPremium.flickity('destroy') : carPremium.flickity();
      windowWidth <= 1350 ? carTeam.flickity('destroy') : carTeam.flickity();
      windowWidth <= 1250 ? carClients.flickity('destroy') : carClients.flickity();
    }
  });

  function toggleMenu(mediaQuery) {
    if (mediaQuery.matches) { 

      scrollFlow(offsetForMobile);
      navUl.addClass('invisible'); 

      menuButton.click(function() { 
        navUl.is(':visible') ? navUl.fadeOut('fast') : navUl.fadeIn('fast');
      });

      navLinks.click(function () {   
        navUl.fadeOut('fast');
      });

    } else {
      navUl.css('display', 'inline-block');
      navLinks.off('click');
      menuButton.off('click');
      scrollFlow(offsetForDestop);
    }
  }

  windowMaxWidth1200px.addListener(toggleMenu(windowMaxWidth1200px));
  
  // MODAL
  const buttonCall = $('#button-call'),
        modalCall = $('.call-me-back'),
        buttonSubmit = $('#button-submit'),
        doneMessage = $('.done-message');
  
  buttonCall.on('click', function() {
    modalCall.fadeIn('slow');
  });

  buttonSubmit.on('click', function() {
    modalCall.fadeOut('slow');
    doneMessage.fadeIn('slow');
    return false;
  })

  doneMessage.on('click', function() {
    $(this).fadeOut('slow');
  })

});
