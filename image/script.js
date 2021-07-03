/*Função Menu ativar */
function menuaparecer() {
    var x = document.getElementById("menuverti");
    if (x.className.indexOf("menuativa-show") == -1) {
      x.className += " menuativa-show";
    } else { 
      x.className = x.className.replace(" menuativa-show", "");
    }
  }