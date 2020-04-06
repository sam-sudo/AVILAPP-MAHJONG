 function inicio(){
    document.getElementById('puntos').value = 0;
};
window.onload = inicio;


//---------------------------------------------CAMBIO DE NIVELES--------------------------------------------------------------
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


function visible(){

    switch(varMostrar){
        case "facil":
            document.getElementById('tFacil').style.display= 'flex';
            document.getElementById('tMedio').style.display= 'none';
            document.getElementById('tDificil').style.display= 'none';
            document.getElementById('tNideCoña').style.display= 'none';
            break;
        case "medio":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'flex';
              document.getElementById('tDificil').style.display= 'none';
              document.getElementById('tNideCoña').style.display= 'none';
         break;
        case "dificil":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'none';
              document.getElementById('tDificil').style.display= 'flex';
              document.getElementById('tNideCoña').style.display= 'none';
         break;
         case "avanzado":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'none';
              document.getElementById('tDificil').style.display= 'none';
              document.getElementById('tNideCoña').style.display= 'flex';
         break;
    }
}
//---------------------------------------------FIN CAMBIO DE NIVELES--------------------------------------------------------------

var image = document.getElementsByClassName('carta')

var cambio = new Array(33)



for(var i = 0 ; i < cambio.length ; i++){
     cambio[i] = 0
}

contador = 0;

var carta1
var carta2

function cambiarImagen(x){

     if (cambio[x] == 0 && contador <2) {
          image[x].src = "../img/cartas/carta1.png";
          cambio[x] = 1
    
          if(contador == 1){
            carta2 = x
          }if(contador == 0){
          carta1 = x
          }
      } 
     contador++;
     if(contador == 2){
        setTimeout(time,500);
        function time(){
        image[carta1].src = "../img/cartas/abajo.png";
        image[carta2].src = "../img/cartas/abajo.png";
        cambio[carta1] = 0
        cambio[carta2] = 0
        contador = 0;
        }
        
  }
    }
    





