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

var numClickFacil = 0;
var firstFacil;
var secondFacil;
var matchFacil = 0;

var numClick = 0;
var first;
var second;
var match = 0;

var cartas = [];
cartas[0] = '../img/cartas/carta1.png';
cartas[1] = '../img/cartas/carta1.png';
cartas[2] = '../img/cartas/carta2.png';
cartas[3] = '../img/cartas/carta2.png';
cartas[4] = '../img/cartas/carta3.png';
cartas[5] = '../img/cartas/carta3.png';
cartas[6] = '../img/cartas/carta4.png';
cartas[7] = '../img/cartas/carta4.png';
cartas[8] = '../img/cartas/carta5.png';
cartas[9] = '../img/cartas/carta5.png';
cartas[10] = '../img/cartas/carta6.png';
cartas[11] = '../img/cartas/carta6.png';
cartas[12] = '../img/cartas/carta7.png';
cartas[13] = '../img/cartas/carta7.png';
cartas[14] = '../img/cartas/carta8.png';
cartas[15] = '../img/cartas/carta8.png';
cartas[16] = '../img/cartas/carta9.png';
cartas[17] = '../img/cartas/carta9.png';
cartas[18] = '../img/cartas/carta10.png';
cartas[19] = '../img/cartas/carta10.png';
cartas[20] = '../img/cartas/carta11.png';
cartas[21] = '../img/cartas/carta11.png';
cartas[22] = '../img/cartas/carta12.png';
cartas[23] = '../img/cartas/carta12.png';
cartas[24] = '../img/cartas/carta13.png';
cartas[25] = '../img/cartas/carta13.png';


var parejas = []
var parejas2 = []





//------------------------------------------------------------------------------------------

function shuffleFacil(array){
    var currentIndex = 8, temporaryValue, randomIndex;
    while(0 !=currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        
        if(randomIndex <=7){
            currentIndex -=1;
            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }
    return array;
    
}

var f;
f = shuffleFacil(cartas);
function cambiarImagenFacil(card){
    if(numClickFacil==0){
        firstFacil = card;
        document.images[card].src = cartas[card];
        numClickFacil = 1;
    }else if((numClickFacil == 1)){
        numClickFacil = 2;
        secondFacil = card;
        document.images[card].src = cartas[card];
        timer = setInterval(controlFacil, 500);
    }
}


function controlFacil(){
    clearInterval(timer);
    numClickFacil = 0;

    

    if(cartas[firstFacil] == cartas[secondFacil] && firstFacil != secondFacil){
        matchFacil++;
        puntos(15)
        
        document.images[firstFacil].style.visibility = 'hidden'
        document.images[secondFacil].style.visibility = 'hidden'
        
        

        if(matchFacil == 4){
            desaparecer()
            location.href = '../html/puntuacion.html?nombre='+congratulation()
        }
    }else{
        puntos(-4)
        document.images[firstFacil].src = "../img/cartas/abajo.png"
        document.images[secondFacil].src = "../img/cartas/abajo.png"
      
      }
      
      
  }



  function congratulation(){

    return prompt("ENORABUENA!!! ¿CUAL ES TU NOMBRE CAMPEÓN?","nombre")
  }

function desaparecer(){

    document.getElementById('tFacil').style.display= 'none';

}
var punto = 0

function puntos(x){
    punto += parseInt(x)
    if(punto <= 0){
        punto=0
        document.getElementById('puntos').value = punto
    }else{
    punto+=parseInt(x)
    document.getElementById('puntos').value = punto;
    }
}


//------------------------MEDIO-------------------------------------------------------------------

function shuffleMedio(array){
    var currentIndex = 26, temporaryValue, randomIndex;
    while(8 !=currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        if(randomIndex >7){
            currentIndex -=1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        
    }
    return array;
    
}

var g;
g = shuffleMedio(cartas);
function cambiarImagenMedia(card){
    
    if(numClick==0){
        first = card;
        document.images[card].src = cartas[card];
        numClick = 1;
    }else if(numClick == 1){
        numClick = 2;
        second = card;
        document.images[card].src = cartas[card];
        timer = setInterval(controlMedio, 500);
    }
}

function controlMedio(){
  clearInterval(timer);
  numClick = 0;
  if(cartas[second] == cartas[first] ){
      match++;
      if(match == 9){
          alert('Nivel Medio Completado');
          location.reload();
      }
  }else{
      document.images[first].src = "../img/cartas/abajo.png"
      document.images[second].src = "../img/cartas/abajo.png"
  }
}






//------------------------FIN MEDIO-------------------------------------------------------------------

