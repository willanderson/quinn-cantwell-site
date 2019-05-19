$(document).ready(function() {

  $("#mobile-btn").click(function() {
    var isOpen = $(".mobile-drawer").is(':visible')
    var slideDir = isOpen ? 'slideUpOut' : 'slideDownIn'
    $(".mobile").toggleClass("change");
    $("body").toggleClass("hiddenoverflow");
    $('.mobile-drawer').velocity('transition.' + slideDir, { duration: 250 });
  });

});
