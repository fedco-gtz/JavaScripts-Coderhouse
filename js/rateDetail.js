document.getElementById("mostrarPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target == this) {
      this.style.display = "none";
    }
  });