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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function tirageCarte(id){
  let var1 = getRandomIntInclusive(0,3);
  let valCarte = getRandomIntInclusive(1,13);
  let indexImg = valCarte+13*var1;
  if (listeIndexImg.indexOf(indexImg) == -1) {
    listeIndexImg.push(indexImg);
    var division = document.getElementById(id);
    var carte = document.createElement('img');
    carte.src = "img/"+indexImg.toString()+".BMP";
    carte.className = "cards";
    division.appendChild(carte);
  } else {
    tirageCarte(id);
  }
  return valCarte;
}

// function stay(){}


// function startAgain(){}


function listeners(){ //debuguer cette merde
  card.addEventListener('click',tirageCarte("playerCards"));
  // stay.addEventListener("click",);
  // startAgain.addEventListener("click",);
}

// <!--- MAIN --->
window.onload = resizeHeight;
var card = document.getElementById("donnezcarte");
var stay = document.getElementById("noCard");
var startAgain = document.getElementById("restart");
var listeIndexImg = Array();
var dealerCompteur = 0;
var playerCompteur = 0;
playerCompteur += tirageCarte("playerCards");
dealerCompteur += tirageCarte("dealerCards");
// listeners();
