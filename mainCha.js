$("#donnezcarte").click(function (img,imgprint) {
  getRandomIntInclusive(1,6);
  var Imageprinter = img[imgprint];
  var removedimg = img.splice(pos, imgprint)
  addImgInDiv(Imageprinter);
  return img
});

///Pour l'instant on crée ici une seule lsite contenant toutes les cartes
///dont les valeurs vont de 0 a 51 (de 1 a 52 cartes),
/// Ne serait-il pas plus judicieux de créer des listes de liste en fonction des symboles de cartes
/// Et ainsi d'attribuer directement une valeur a chaque carte en faisant de random successif sur chaque liste
/// Il faut aussi penser que systematiquement le random prendra une valeur de moins puisque la lsite aura un index de moins
///Faudra également mettre le Jquery dela prémière fonction en JS pur, parce que j'en ai parlé avec lui et il aime pas.
///Du coup j'ai exporté les libs pour le moment mais voila quoi ...
function GiveCardInit () {
  var img = ["./img/1.BMP","./img/2.BMP","./img/3.BMP","./img/4.BMP","./img/5.BMP","./img/6.BMP"]
  for (i=1;i=2;i++);
    getRandomIntInclusive(1,6);
    var Imageprinter = img[imgprint];
    var removedimg = img.splice(pos, imgprint)
    addImgInDiv(Imageprinter);
  return img
}

function addImgInDiv('myDiv',Imageprinter) {
  var newImg=createImg(Imageprinter);
  var divJS=getElementById('myDiv');
  divJS.appendChild(newImg)
}


function createImg(Imageprinter) {
  var img = document.createElement('img');
  img.src=Imageprinter;
  return img
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  val=Math.floor(Math.random() * (max - min +min)) + min;
  val - 1 = imgprint;
  return imgprint
}
