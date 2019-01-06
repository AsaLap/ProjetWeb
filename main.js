// Fonction modifiant la taille des items en fonction de la taille de la page internet
var resizeHeight = function(){
  var sH = window.innerHeight;
  var sW = window.innerWidth;
  var mean = (sH + sW) / 2;
  var info = document.getElementById('playerInfo').innerHeight;
  desk.style.height = mean*50/100 + 'px';
  desk.style.backgroundSize = mean*80/100 + 'px';
  playerCards.style.paddingTop = mean/20-info + 'px'; //Permet d'espacer les deux items flexs dealerCards et Cards
  playerCards.style.height = (mean*50/100)/5 + 'px';
  dealerCards.style.height = (mean*50/100)/5 + 'px';
  playerInfo.style.paddingTop = mean/20-info*2 + 'px';
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
  if (valCarte > 10){
    valCarte = 10;
  }
  if (listeIndexImg.indexOf(indexImg) == -1) {
    listeIndexImg.push(indexImg);
    var division = document.getElementById(id);
    var carte = document.createElement('img');
    carte.src = "img/"+indexImg.toString()+".BMP";
    carte.className = "cards";
    division.appendChild(carte);
    if (id == "playerCards"){
      playerCompteur+=valCarte;
    } else {
      dealerCompteur+=valCarte;
    }
  } else {
    tirageCarte(id);
  }
  //créer ici le changement d'affichage des valeurs
  document.getElementById('pointsJoueur').innerHTML ="Les points du joueur : "+playerCompteur.toString();
  document.getElementById('pointsDealer').innerHTML = "Les points du dealer : "+dealerCompteur.toString();



  if (playerCompteur == 42){
    window.alert("Gagné !!")
  } else if (playerCompteur > 42){
    window.alert("Perdu !!");
  } else if (dealerCompteur == 42){
    window.alert("Perdu !!");
  } else if (dealerCompteur > 42){
    window.alert("Gagné !!");
  }
  console.log(valCarte);
  console.log(playerCompteur);
  console.log(dealerCompteur);
}

function staying(){
  while (dealerCompteur <= playerCompteur){
    tirageCarte("dealerCards");
  }
  comptage();
}

function comptage(){
  if (dealerCompteur < 42 && playerCompteur < 42){
    if (dealerCompteur > playerCompteur){
      window.alert("Perdu !");
    } else if (dealerCompteur < playerCompteur){
      window.alert("Gagné !");
    }
  }
}
function startingAgain(){
  window.location.reload();
}


function listeners(){
  card.addEventListener('click',function(){tirageCarte("playerCards")});
  stay.addEventListener("click",function(){staying()});
  startAgain.addEventListener("click",function(){startingAgain()});
}

// <!--- MAIN --->
window.onload = resizeHeight;
var card = document.getElementById("donnezcarte");
var stay = document.getElementById("noCard");
var startAgain = document.getElementById("restart");
var listeIndexImg = Array();
var dealerCompteur = 0;
var playerCompteur = 0;
tirageCarte("dealerCards");
listeners();
