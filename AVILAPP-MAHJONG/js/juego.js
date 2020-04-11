 function inicio(){
    document.getElementById('puntos').value=0;
    document.getElementById('vidas').value=10;
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
            document.getElementById('vida').style.display= 'none';

            break;
        case "medio":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'flex';
              document.getElementById('tDificil').style.display= 'none';
              document.getElementById('tNideCoña').style.display= 'none';
            document.getElementById('vida').style.display= 'none';

         break;
        case "dificil":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'none';
              document.getElementById('tDificil').style.display= 'flex';
              document.getElementById('tNideCoña').style.display= 'none';
            document.getElementById('vida').style.display= 'none';

         break;
         case "avanzado":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'none';
              document.getElementById('tDificil').style.display= 'none';
              document.getElementById('tNideCoña').style.display= 'flex';
            document.getElementById('vida').style.display= 'flex';

         break;
    }
}
//---------------------------------------------FIN CAMBIO DE NIVELES--------------------------------------------------------------

var numClickFacil = 0;
var firstFacil;
var secondFacil;
var matchFacil = 0;



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
cartas[26] = '../img/cartas/carta14.png';
cartas[27] = '../img/cartas/carta14.png';
cartas[28] = '../img/cartas/carta15.png';
cartas[29] = '../img/cartas/carta15.png';
cartas[30] = '../img/cartas/carta16.png';
cartas[31] = '../img/cartas/carta16.png';
cartas[32] = '../img/cartas/carta17.png';
cartas[33] = '../img/cartas/carta17.png';
cartas[34] = '../img/cartas/carta18.png';
cartas[35] = '../img/cartas/carta18.png';
cartas[36] = '../img/cartas/carta19.png';
cartas[37] = '../img/cartas/carta19.png';
cartas[38] = '../img/cartas/carta20.png';
cartas[39] = '../img/cartas/carta20.png';
cartas[40] = '../img/cartas/carta21.png';
cartas[41] = '../img/cartas/carta21.png';
cartas[42] = '../img/cartas/carta22.png';
cartas[43] = '../img/cartas/carta22.png';
cartas[44] = '../img/cartas/carta23.png';
cartas[45] = '../img/cartas/carta23.png';
cartas[46] = '../img/cartas/carta24.png';
cartas[47] = '../img/cartas/carta24.png';
cartas[48] = '../img/cartas/carta25.png';
cartas[49] = '../img/cartas/carta25.png';


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
var numClickMedio = 0;
var firstMedio;
var secondMedio;
var matchMedio = 0;
function shuffleMedio(array){
    var currentIndex = 26, temporaryValue, randomIndex;
    while(8 !=currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        if(randomIndex >7 ){
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
    
    if(numClickMedio==0){
        firstMedio = card;
        document.images[card].src = cartas[card];
        numClickMedio = 1;
    }else if(numClickMedio == 1){
        numClickMedio = 2;
        secondMedio = card;
        document.images[card].src = cartas[card];
        timer = setInterval(controlMedio, 500);
    }
}

function controlMedio(){
  clearInterval(timer);

  numClickMedio = 0;

  if(cartas[secondMedio] == cartas[firstMedio] && firstMedio != secondMedio){
      matchMedio++;
      puntos(15)
      document.images[firstMedio].style.visibility = 'hidden'
      document.images[secondMedio].style.visibility = 'hidden'
      if(matchMedio == 9){
          alert('ole oleeee')
          location.href = '../html/puntuacion.html?nombre='+congratulation()
      }
  }else{
      document.images[firstMedio].src = "../img/cartas/abajo.png"
      document.images[secondMedio].src = "../img/cartas/abajo.png"
      puntos(-4)
  }
} 








//------------------------FIN MEDIO-------------------------------------------------------------------

//----------------------------------------DIFICIL /AVANZADO-------------------------------------------

var numClickDificil = 0;
var firstDificil;
var secondDificil;
var matchDificil = 0;
function shuffleDificil(array){
    var currentIndex = 49, temporaryValue, randomIndex;
    while(27 !=currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        if(randomIndex >25 ){
            currentIndex -=1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }
    return array;
}

var d;
d = shuffleDificil(cartas);
function cambiarImagenDificil(card){
    
    if(numClickDificil==0){
        firstDificil = card;
        document.images[card].src = cartas[card];
        numClickDificil = 1;
    }else if(numClickDificil == 1){
        numClickDificil = 2;
        secondDificil = card;
        document.images[card].src = cartas[card];
        timer = setInterval(controlDificil, 500);
    }
}

function controlDificil(){
  clearInterval(timer);

  numClickDificil = 0;

  if(cartas[secondDificil] == cartas[firstDificil] && firstDificil != secondDificil){
      matchMedio++;
      puntos(15)
      document.images[firstDificil].style.visibility = 'hidden'
      document.images[secondDificil].style.visibility = 'hidden'
      if(matchMedio == 12){
        alert('ole oleeee')
        location.href = '../html/puntuacion.html?nombre='+congratulation()
      }
  }else{
    puntos(-4)
      document.images[firstDificil].src = "../img/cartas/abajo.png"
      document.images[secondDificil].src = "../img/cartas/abajo.png"
  }
}

//----------------------------------------Ni de coña-------------------------------------------

var vidas = 10

function VidasJuego(x){
    vidas += parseInt(x)
    if(vidas <= 0){
        vidas=0
        document.getElementById('vidas').value = vidas
    }else{
    vidas+=parseInt(x)
    document.getElementById('vidas').value = vidas;
    }
}




var numClickNDC = 0;
var firstNDC;
var secondNDC;
var matchNDC = 0;



var cartasNDC = [];
cartasNDC[0] = '../img/cartas/carta1.png';
cartasNDC[1] = '../img/cartas/carta1.png';
cartasNDC[2] = '../img/cartas/carta2.png';
cartasNDC[3] = '../img/cartas/carta2.png';
cartasNDC[4] = '../img/cartas/carta3.png';
cartasNDC[5] = '../img/cartas/carta3.png';
cartasNDC[6] = '../img/cartas/carta4.png';
cartasNDC[7] = '../img/cartas/carta4.png';
cartasNDC[8] = '../img/cartas/carta5.png';
cartasNDC[9] = '../img/cartas/carta5.png';
cartasNDC[10] = '../img/cartas/carta6.png';
cartasNDC[11] = '../img/cartas/carta6.png';
cartasNDC[12] = '../img/cartas/carta7.png';
cartasNDC[13] = '../img/cartas/carta7.png';
cartasNDC[14] = '../img/cartas/carta8.png';
cartasNDC[15] = '../img/cartas/carta8.png';
cartasNDC[16] = '../img/cartas/carta9.png';
cartasNDC[17] = '../img/cartas/carta9.png';
cartasNDC[18] = '../img/cartas/carta10.png';
cartasNDC[19] = '../img/cartas/carta10.png';
cartasNDC[20] = '../img/cartas/carta11.png';
cartasNDC[21] = '../img/cartas/carta11.png';
cartasNDC[22] = '../img/cartas/carta12.png';
cartasNDC[23] = '../img/cartas/carta12.png';
cartasNDC[24] = '../img/cartas/carta13.png';
cartasNDC[25] = '../img/cartas/carta13.png';
cartasNDC[26] = '../img/cartas/carta14.png';
cartasNDC[27] = '../img/cartas/carta14.png';
cartasNDC[28] = '../img/cartas/carta15.png';
cartasNDC[29] = '../img/cartas/carta15.png';
cartasNDC[30] = '../img/cartas/carta16.png';
cartasNDC[31] = '../img/cartas/carta16.png';
cartasNDC[32] = '../img/cartas/carta17.png';
cartasNDC[33] = '../img/cartas/carta17.png';
cartasNDC[34] = '../img/cartas/carta18.png';
cartasNDC[35] = '../img/cartas/carta18.png';
cartasNDC[36] = '../img/cartas/carta19.png';
cartasNDC[37] = '../img/cartas/carta19.png';
cartasNDC[38] = '../img/cartas/carta20.png';
cartasNDC[39] = '../img/cartas/carta20.png';
cartasNDC[40] = '../img/cartas/carta21.png';
cartasNDC[41] = '../img/cartas/carta21.png';
cartasNDC[42] = '../img/cartas/carta22.png';
cartasNDC[43] = '../img/cartas/carta22.png';
cartasNDC[44] = '../img/cartas/carta23.png';
cartasNDC[45] = '../img/cartas/carta23.png';
cartasNDC[46] = '../img/cartas/carta24.png';
cartasNDC[47] = '../img/cartas/carta24.png';
cartasNDC[48] = '../img/cartas/carta25.png';
cartasNDC[49] = '../img/cartas/carta25.png';
cartasNDC[50] = '../img/cartas/carta13.png';
cartasNDC[51] = '../img/cartas/carta13.png';
cartasNDC[52] = '../img/cartas/carta14.png';
cartasNDC[53] = '../img/cartas/carta14.png';
cartasNDC[54] = '../img/cartas/carta15.png';
cartasNDC[55] = '../img/cartas/carta15.png';
cartasNDC[56] = '../img/cartas/carta16.png';
cartasNDC[57] = '../img/cartas/carta16.png';
cartasNDC[58] = '../img/cartas/carta17.png';
cartasNDC[59] = '../img/cartas/carta17.png';
cartasNDC[60] = '../img/cartas/carta18.png';
cartasNDC[61] = '../img/cartas/carta18.png';
cartasNDC[62] = '../img/cartas/carta19.png';
cartasNDC[63] = '../img/cartas/carta19.png';
cartasNDC[64] = '../img/cartas/carta20.png';
cartasNDC[65] = '../img/cartas/carta20.png';
cartasNDC[66] = '../img/cartas/carta21.png';
cartasNDC[67] = '../img/cartas/carta21.png';
cartasNDC[68] = '../img/cartas/carta22.png';
cartasNDC[69] = '../img/cartas/carta22.png';
cartasNDC[70] = '../img/cartas/carta23.png';
cartasNDC[71] = '../img/cartas/carta23.png';
cartasNDC[72] = '../img/cartas/carta24.png';
cartasNDC[73] = '../img/cartas/carta24.png';
cartasNDC[74] = '../img/cartas/carta25.png';
cartasNDC[75] = '../img/cartas/carta25.png';


function shuffleNDC(array){
    var currentIndex = 73, temporaryValue, randomIndex;
    while(51 !=currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        if(randomIndex >49 ){
            currentIndex -=1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }
    return array;
}

var NDC;
NDC = shuffleNDC(cartasNDC);
function cambiarImagenNDC(card){
    
    if(numClickNDC==0){
        firstNDC = card;
        document.images[card].src = cartasNDC[card];
        numClickNDC = 1;
    }else if(numClickNDC == 1){
        numClickNDC = 2;
        secondNDC = card;
        document.images[card].src = cartasNDC[card];
        timer = setInterval(controlNDC, 500);
    }
}

function controlNDC(){
  clearInterval(timer);

  numClickNDC = 0;

  if(cartasNDC[secondNDC] == cartasNDC[firstNDC] && firstNDC != secondNDC){
      VidasJuego(1);
      matchNDC++;
      puntos(15)
      document.images[firstNDC].style.visibility = 'hidden'
      document.images[secondNDC].style.visibility = 'hidden'
      if(matchNDC == 12){
        alert('ole oleeee')
        location.href = '../html/puntuacion.html?nombre='+congratulation()
      }
  }else{
    puntos(-4)
    VidasJuego(-1);
      document.images[firstNDC].src = "../img/cartas/abajo.png"
      document.images[secondNDC].src = "../img/cartas/abajo.png"
      if(vidas == 0){
          alert('Perdiste')
          location.reload();
      }
  }
}

