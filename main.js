// Fonction modification la taille des items en fonction de la taille de la page internet
var resizeHeight = function(){
  var sH = window.innerHeight;
  var sW = window.innerWidth;
  var mean = (sH + sW) / 2;
  desk.style.height = mean*50/100 + 'px';
  desk.style.backgroundSize = mean*80/100 + 'px';
  cards.style.paddingTop = mean/20 + 'px'; //Permet d'espacer les deux items flexs dealerCards et Cards
  cards.style.height = (mean*50/100)/5 + 'px';
  dealerCards.style.height = (mean*50/100)/5 + 'px';
  return mean;
}

// changer l'appel pour être responsive en cas de redimensionnement de fenêtre
window.onload = resizeHeight;

// Fonction JQuery modification de classe (aller sur OpenClassroom pour créer une fonction de modification de classe)
// $(function() {
//   // Sections height
//   $(window).resize(function() {
//     var sH = $(window).height();
//     $('.desk').css('height', sH + 'px');
//     console.log(sH);
//   });
// });
