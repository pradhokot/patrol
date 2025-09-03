$(document).ready(function () {
   if ($(window).width() >= 992) {
      $('#offcanvasMenu .offcanvas-header').remove();
      $('.navbar-collapse').show();
   } else {
      $('#offcanvasMenu .offcanvas-header').show();
      $('.navbar-collapse').remove();
   }
});