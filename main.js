// Fonction modification la taille des items en fonction de la taille de la page internet
var resizeHeight = function(){
  var sH = window.innerHeight;
  var sW = window.innerWidth;
  var mean = (sH + sW) / 2;
  desk.style.height = mean*50/100 + 'px';
  desk.style.backgroundSize = mean*80/100 + 'px';
  playerCards.style.paddingTop = mean/20 + 'px'; //Permet d'espacer les deux items flexs dealerCards et Cards
  playerCards.style.height = (mean*50/100)/5 + 'px';
  dealerCards.style.height = (mean*50/100)/5 + 'px';
  return mean;
}

// changer l'appel pour être responsive en cas de redimensionnement de fenêtre
window.onload = resizeHeight;

//On chope l'id de la div dans laquelle on va insérer l'image
var conteneur = document.getElementById('playerCards');
//Création de l'objet html à insérer
var element = document.createElement('img');
//Définition de la source de l'image (en fonction de x normalement)
element.src = "img/8.BMP";
// element.class('cards'); //Attribuer la class "cards" à la carte nouvellement créée
//Attribution du tout à la div
conteneur.appendChild(element);


// fonction tirage de carte(compteur Joueur ou Dealer,id de la div du joueur ou du dealer)
// x = random(1;13);
// nbAlea = x + random(4) * 13;
// if nbAlea is not in listeDejaTirees{
//    listeDejaTirees.append(nbAlea);
//    compteur += x;
//    creer une img avec le numéro de la carte nbAlea;
//    return x;
// }
// else{
//    on refait;
// }
