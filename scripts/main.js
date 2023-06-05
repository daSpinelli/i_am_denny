// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Dropdown menu
$(document).ready(function() {
  $('.dropdown').on('click', function() {
    $(this).toggleClass('show');
  });
});