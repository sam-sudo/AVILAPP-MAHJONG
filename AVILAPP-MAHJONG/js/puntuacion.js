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

//----------------------------PUNTUACIONES-----------------------------------

//----------------------------PUNTUACIONES facil------------------------------


function cargar(){
       

  str = document.getElementById("nombreFacil").innerHTML
  

  if(localStorage.getItem('puntosFacil') === null){

      var puntosJSON1 = {'Jugador': "----",'Puntos':"0"}
      localStorage.setItem('puntosFacil',JSON.stringify(puntosJSON1))

      var accesoPuntosFacil = localStorage.getItem('puntosFacil')

      var nombreJugadorFacil = JSON.parse(accesoPuntosFacil)['Jugador']
      var puntosJugadorFacil = parseInt(JSON.parse(accesoPuntosFacil)['Puntos'] )

      document.getElementById("nombreFacil").innerHTML= nombreJugadorFacil
      document.getElementById("puntosFacil").innerHTML= puntosJugadorFacil
      
  }else{

      var accesoPuntosFacil = localStorage.getItem('puntosFacil')
      var nombreJugadorFacil = JSON.parse(accesoPuntosFacil)['Jugador']
      var puntosJugadorFacil = parseInt(JSON.parse(accesoPuntosFacil)['Puntos'] )
      
      
          document.getElementById("nombreFacil").innerHTML= nombreJugadorFacil
          document.getElementById("puntosFacil").innerHTML= puntosJugadorFacil
          
      
  }

//----------------------------PUNTUACIONES medio-----------------------------------

  str = document.getElementById("nombreMedio").innerHTML

  if(localStorage.getItem('puntosMedio') === null){

      var puntosJSON1 = {'Jugador': "----",'Puntos':"0"}
      localStorage.setItem('puntosMedio',JSON.stringify(puntosJSON1))

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )

      document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
      document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio

  }else{

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )


          document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
          document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio
          
         
}

//----------------------------PUNTUACIONES dificil-----------------------------------

str = document.getElementById("nombreMedio").innerHTML

  if(localStorage.getItem('puntosMedio') === null){

      var puntosJSON1 = {'Jugador': "----",'Puntos':"0"}
      localStorage.setItem('puntosMedio',JSON.stringify(puntosJSON1))

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )

      document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
      document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio

  }else{

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )


          document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
          document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio
          
         
}

//----------------------------PUNTUACIONES niDeCoña-----------------------------------

str = document.getElementById("nombreMedio").innerHTML

  if(localStorage.getItem('puntosMedio') === null){

      var puntosJSON1 = {'Jugador': "----",'Puntos':"0"}
      localStorage.setItem('puntosMedio',JSON.stringify(puntosJSON1))

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )

      document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
      document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio

  }else{

      var accesoPuntosMedio = localStorage.getItem('puntosMedio')

      var nombreJugadorMedio = JSON.parse(accesoPuntosMedio)['Jugador']
      var puntosJugadorMedio = parseInt(JSON.parse(accesoPuntosMedio)['Puntos'] )


          document.getElementById("nombreMedio").innerHTML= nombreJugadorMedio
          document.getElementById("puntosMedio").innerHTML= puntosJugadorMedio
          
         
}



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