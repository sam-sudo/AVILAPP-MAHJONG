 function inicio(){
    document.getElementById('puntos').value=0;
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

var numClick = 0;
var first;
var second;
var match = 0;

var cardsFacil = [];
cardsFacil[0] = '../img/cartas/carta1.png';
cardsFacil[1] = '../img/cartas/carta1.png';
cardsFacil[2] = '../img/cartas/carta2.png';
cardsFacil[3] = '../img/cartas/carta2.png';
cardsFacil[4] = '../img/cartas/carta3.png';
cardsFacil[5] = '../img/cartas/carta3.png';
cardsFacil[6] = '../img/cartas/carta4.png';
cardsFacil[7] = '../img/cartas/carta4.png';
var cardsMedio = [];
cardsMedio[18] = '../img/cartas/carta5.png';
cardsMedio[19] = '../img/cartas/carta5.png';
cardsMedio[20] = '../img/cartas/carta6.png';
cardsMedio[21] = '../img/cartas/carta6.png';
cardsMedio[22] = '../img/cartas/carta7.png';
cardsMedio[23] = '../img/cartas/carta7.png';
cardsMedio[24] = '../img/cartas/carta8.png';
cardsMedio[25] = '../img/cartas/carta8.png';
cardsMedio[8] = '../img/cartas/carta9.png';
cardsMedio[9] = '../img/cartas/carta9.png';
cardsMedio[10] = '../img/cartas/carta10.png';
cardsMedio[11] = '../img/cartas/carta10.png';
cardsMedio[12] = '../img/cartas/carta11.png';
cardsMedio[13] = '../img/cartas/carta11.png';
cardsMedio[14] = '../img/cartas/carta12.png';
cardsMedio[15] = '../img/cartas/carta12.png';
cardsMedio[16] = '../img/cartas/carta13.png';
cardsMedio[17] = '../img/cartas/carta13.png';



function shuffleFacil(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while(0 !==currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -=1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var f;
f = shuffleFacil(cardsFacil);
function cambiarImagenFacil(card){
    if(numClick==0){
        first = card;
        document.images[card].src = cardsFacil[card];
        numClick = 1;
    }else if(numClick == 1){
        numClick = 2;
        second = card;
        document.images[card].src = cardsFacil[card];
        timer = setInterval(controlFacil, 500);
    }else{
        alert('Pulsa en una imagen')
    }
}

function controlFacil(){
  clearInterval(timer);
  numClick = 0;
  if(cardsFacil[second] == cardsFacil[first]){
      match++;
      if(match == 4){
          alert('Nivel Facil Completado');
          location.reload();
      }
  }else{
      document.images[first].src = "../img/cartas/abajo.png"
      document.images[second].src = "../img/cartas/abajo.png"
  }
}




<<<<<<< HEAD
function shuffleMedio(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  while(0 !==currentIndex){
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex -=1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

var m;
m = shuffleMedio(cardsMedio);
function cambiarImagenMedia(card){
    if(numClick==0){
        first = card;
        document.images[card].src = cardsMedio[card];
        numClick = 1;
    }else if(numClick == 1){
        numClick = 2;
        second = card;
        document.images[card].src = cardsMedio[card];
        timer = setInterval(controlMedio, 500);
    }else{
        alert('You can click on an image once')
    }
}


function controlMedio(){
  clearInterval(timer);
  numClick = 0;
  if(cardsMedio[second] == cardsMedio[first]){
      match++;
      if(match == 9){
          alert('Nivel Medio Completado');
          location.reload();
      }
  }else{
      document.images[first].src = "../img/cartas/abajo.png"
      document.images[second].src = "../img/cartas/abajo.png"
  }
=======
     if (cambio[x] == 0 && contador <2) {
          image[x].src = "../img/cartas/carta1.png";
          cambio[x] = 1
    
          if(contador == 1){
            carta2 = x
            contador++;
          }
          if(contador == 0){
            carta1 = x
            contador++;
          }
      } 
     
     //si las dos imagenes no son iguales se dan la vuelta
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
>>>>>>> 4958b4842da992b591564cb53ca81adbcfd75602
}
    





