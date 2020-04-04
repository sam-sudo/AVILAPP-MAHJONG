 function inicio(){
    document.getElementById('puntos').value = 0;
};
window.onload = inicio;

var varMostrar;


cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1]))){
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
    varMostrar = arrVariableActual[1]
    //mostrar(varMostrar)
    

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
        case "avanzado":
              document.getElementById('tFacil').style.display= 'none';
              document.getElementById('tMedio').style.display= 'none';
              document.getElementById('tDificil').style.display= 'flex';
              document.getElementById('tNideCoña').style.display= 'flex';
         break;
    }
}