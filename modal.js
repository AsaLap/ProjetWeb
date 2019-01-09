// Get the modal
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onload = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.removeChild(img);
}
setTimeout(function() {
    $("#myModal").fadeOut();
}, 1000);

function addImgInDiv(path,id) {
  var img=document.createElement('img');
  img.src=path;
  div=document.getElementById(id);
  div.appendChild(img);
}

function modalInit(){
  var modal = document.getElementById('modalWin');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  setTimeout(function() {
      $("#modalWin").fadeOut();
  }, 2000);
  document.body.removeChild(img);
  divButton = document.getElementById('buttonz');
  buttonCard = document.getElementById('donnezcarte');
  buttonStay = document.getElementById('noCard');
  divButton.removeChild(buttonCard);
  divButton.removeChild(buttonStay);
}
