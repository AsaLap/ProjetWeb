// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onload = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.removeChild(img);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

setTimeout(function() {
    $("#myModal").fadeOut();
}, 1000);

$("#play").click(function(){
  console.log("coucou");
});


function addImgInDiv(path,id) {
  var img=document.createElement('img');
  img.src=path;
  div=document.getElementById(id);
  div.appendChild(img);
}

function modalInit(){
  var modal = document.getElementById('modalWin');
  // Get the image and insert it inside the modal - use its "alt" text as a caption
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
