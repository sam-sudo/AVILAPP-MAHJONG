
 varMostrar = new Boolean(true);

//-------------------------RECOGER DATOS DE LA URL--------------------------------------------

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

//-------------------------FIN RECOGER DATOS DE LA URL--------------------------------------------


//----------------------------SONIDO BOTON-----------------------------------

var reproducir = new Audio();
reproducir.src = "../music/sonidoBoton.mp3";
       
var audio = true;

function auudios() {
    if(audio == false){
    reproducir.play();
    }
}
function auudiosStop() {
    
    reproducir.pause()
    
}

function sonido(){

     if (varMostrar == "false") {

        audio = false
        auudios()

      } else {

        audio = true
        auudiosStop();

      }
     
}












//----------------------------FIN SONIDO BOTON-----------------------------------




