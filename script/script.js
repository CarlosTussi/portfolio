var modal = document.getElementById("myModal");

var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("close")[0];

//When user click to open contact box dialogue
btn.onclick = function() {
    modal.style.display = "block";
    
}

//When use tries to close the modal
span.onclick = function() {
    modal.style.display = "none";
}