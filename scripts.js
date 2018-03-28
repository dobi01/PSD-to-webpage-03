$(function () {
  $('body').removeClass('fade-out');

  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    autoPlay: 3000,
    wrapAround: true
  });
});
