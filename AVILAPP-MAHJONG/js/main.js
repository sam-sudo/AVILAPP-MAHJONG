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
//----------------------------FIN SONIDO BOTON-----------------------------------

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