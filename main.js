// Fonction modifiant la taille des items en fonction de la taille de la page internet
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

function tirageCarte(id){
  //Première partie de la fonction : détermination aléatoire d'une carte
  let x = 5;
  //Deuxième partie, création de la carte sur le plateau de jeu
  var division = document.getElementById(id);
  var carte = document.createElement('img');
  carte.src = "img/"+x.toString()+".BMP";
  carte.className = "cards";
  division.appendChild(carte);
}

function listeners(){
  card.addEventListener('click',tirageCarte("playerCards"));
  console.log("test");
  // stay.addEventListener("click",);
  // startAgain.addEventListener("click",);
}

// <!--- MAIN --->
window.onload = resizeHeight;
var card = document.getElementById("donnezcarte");
var stay = document.getElementById("noCard");
var startAgain = document.getElementById("restart");
listeners();


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
