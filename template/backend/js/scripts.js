$(document).ready(function () {
   if ($(window).width() >= 992) {
      $('#offcanvasMenu .offcanvas-header, .nav-corner, .navbar-toggler').remove();
      $('.navbar-collapse').show();
   } else {
      $('#offcanvasMenu .offcanvas-header, .nav-corner, .navbar-toggler').show();
      $('.navbar-collapse').remove();
   }
});