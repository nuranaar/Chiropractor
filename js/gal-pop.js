// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('.myImg');
var modalImg = document.querySelectorAll(".modal-content");
var captionText = document.getElementById("caption");
for(var i=0; i<modalImg.length; i++){ 
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg[i].src = img[i].src;
        captionText.innerHTML = img[i].alt;
    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}