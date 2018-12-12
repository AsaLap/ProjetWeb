$("#donnezcarte").click(function (img,imgprint) {
  getRandomIntInclusive(1,52);
  var Imageprinter = img[imgprint];
  var removedimg = img.splice(pos, imgprint)
  addImgInDiv(Imageprinter);
  return img

});

function addImgInDiv() {
  varnewImg=createImg(Imageprinter);
  var divJS=getElementById('myDiv');
  divJS.appendChild(newImg)
}

function createImg(Imageprinter) {
  var img = document.createElement('img');
  img.src=Imageprinter;
  return img;
}

function getRandomIntInclusive(1, 52) {
  1 = Math.ceil(1);
  52 = Math.floor(52);
  val=Math.floor(Math.random() * (52 - 1 +1)) + 1;
  val - 1 = imgprint;
  return imgprint;
}


function GiveCardInit () {
  var img = ["./img/1.BMP","./img/2.BMP","./img/3.BMP","./img/4.BMP","./img/5.BMP","./img/6.BMP"]
  for (1,2,1)
    getRandomIntInclusive(1,52);
    var Imageprinter = img[imgprint];
    var removedimg = img.splice(pos, imgprint)
    addImgInDiv(Imageprinter);
  return img
}
