//----------------------------SONIDO BOTON-----------------------------------

var reproducir = new Audio();
reproducir.src = "../music/sonidoBoton.mp3";
        
function auudios() {
    
    reproducir.play();
    
    }
//----------------------------FIN SONIDO BOTON-----------------------------------

var vari;

function mostrar(x){

    vari = x;

    switch(x){
        case "facil":
            alert('facil')
            document.getElementById('tFacil').style.display="flex"
            document.getElementById('tMedio').style.display="none"
            document.getElementById('tDificil').style.display="none"
            document.getElementById('tNideCoña').style.display="none"
            break;
        case "medio":
              alert('medio')
              document.getElementById('tFacil').style.display="none"
            document.getElementById('tMedio').style.display="flex"
            document.getElementById('tDificil').style.display="none"
            document.getElementById('tNideCoña').style.display="none"
         break;
        case "avanzado":
              alert('avanzado')
              document.getElementById('tFacil').style.display="flex"
            document.getElementById('tMedio').style.display="none"
            document.getElementById('tDificil').style.display="none"
            document.getElementById('tNideCoña').style.display="none"
         break;
    }
}
function ventana(){
    
}

