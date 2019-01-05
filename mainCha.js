
function GiveValueRandom () {
  let var1 = getRandomIntInclusive(0,3);
  let var2 = getRandomIntInclusive(1,13);
  let tot = var2+13*var1;
  return tot,var2;
}

///Pour l'instant on crée ici une seule lsite contenant toutes les cartes
///dont les valeurs vont de 0 a 51 (de 1 a 52 cartes),
/// Ne serait-il pas plus judicieux de créer des listes de liste en fonction des symboles de cartes
/// Et ainsi d'attribuer directement une valeur a chaque carte en faisant de random successif sur chaque liste
/// Il faut aussi penser que systematiquement le random prendra une valeur de moins puisque la lsite aura un index de moins
///Faudra également mettre le Jquery dela prémière fonction en JS pur, parce que j'en ai parlé avec lui et il aime pas.
///Du coup j'ai exporté les libs pour le moment mais voila quoi ...
function ArrayImage () {
  var Listeimage = Array();
  for (i=1;i=52;i++);
    Listeimage.push('./img/'+i.toString()+'.BMP');
  return Listeimage;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
