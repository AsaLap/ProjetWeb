var resizeHeight = function(){
  desk = document.getElementById("desk");
  var sH = window.innerHeight;
  desk.style.height = sH*80/100 + 'px';
  desk.style.backgroundSize = sH+0.4*sH + 'px';
}

// changer l'appel pour être responsive en cas de redimensionnement de fenêtre
window.onload = resizeHeight;

//
// $(function() {
//   // Sections height
//   $(window).resize(function() {
//     var sH = $(window).height();
//     $('.desk').css('height', sH + 'px');
//     console.log(sH);
//   });
// });
