var varMostrar;


cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1]))){
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
    varMostrar = arrVariableActual[1]

} else
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
}




//----------------------------SONIDO BOTON-----------------------------------

var reproducir = new Audio();
reproducir.src = "music/sonidoBoton.mp3";
       
var audio = true;

function auudios() {
    if(audio == false){
    reproducir.play();
    }
}
function auudiosStop() {
    
    reproducir.pause()
    
}

var image = document.getElementById('imgSonido')

var cambio = 0;

function cambiarImagen(){
     if (cambio == 0) {
        document.getElementById('imgSonido').src = "img/ico/musical.png";
        cambio = 1
        audio = false
        auudios()
      } else {
        document.getElementById('imgSonido').src = "img/ico/mute.png";
        cambio = 0
        audio = true
        auudiosStop();
      }
     
}
//----------------------------FIN SONIDO BOTON-----------------------------------