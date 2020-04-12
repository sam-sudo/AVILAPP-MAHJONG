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


function ajax_get_json(){
        
  var nombre = document.getElementById('info_nombre')
  var puntos = document.getElementById('info_puntos')
  var nombre2 = document.getElementById('info_nombre2')
  var puntos2 = document.getElementById('info_puntos2')


  var xmlhttp;

  if(window.XMLHttpRequest){
      xmlhttp= new XMLHttpRequest()

  }else{
      xmlhttp= new ActiveXObject("Microsoft.XMLHTTP")
  }

  xmlhttp.onreadystatechange = function(){

      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
          var datos = JSON.parse(xmlhttp.responseText)
          console.log(datos)
              
              nombre.innerHTML += datos[0]["nombre"] +"<br/>"
              puntos.innerHTML += datos[0]["puntos"] +"<br/>"
              nombre2.innerHTML += datos[1]["nombre"] +"<br/>"
              puntos2.innerHTML += datos[1]["puntos"] +"<br/>"
          
      }

  }

  xmlhttp.open("GET", "../json/datos.json", true)
  xmlhttp.send()

}
