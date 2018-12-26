// Modifier la fonction pour que le tout soit en fonction de la diagonale et pas seulement la hauteur (problème si page haute mais fine)
var resizeHeight = function(){
  desk = document.getElementById('desk');
  cards = document.getElementById('cards');
  var sH = window.innerHeight;
  desk.style.height = sH*80/100 + 'px';
  desk.style.backgroundSize = sH+0.4*sH + 'px';
  cards.style.paddingTop = sH/10 + 'px'; //Permet d'espacer les deux items flex dealerCards et Cards
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
