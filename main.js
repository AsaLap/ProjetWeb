function() {
  // Sections height
  $(window).resize(function() {
    var sH = $(window).height();
    $('.NomDeTaClass').css('height', sH + 'px');
  });
}
