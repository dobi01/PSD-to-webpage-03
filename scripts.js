$(function () {
  $('body').removeClass('fade-out');

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

});
