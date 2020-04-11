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

function traerDatos(){
    alert('ter')
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", '../json/prueba.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        alert('ttt')
        if (this.readyState === 4 && this.status == "200") {
            alert('yyy')
            console.log(this.responseText)
        }

    }
}



//usage:



function carga(){

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("../json/prueba.json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    readTextFile("../json/prueba.json", function(text){
        var data = JSON.parse(text);
        alert(data.dato);
    })
    alert('eeerr')
    alert(data.dato);

}


/*
function carga(){
    document.getElementsByClassName("nombreUser")[0].innerHTML= varMostrar
}



function carga(){
    alert('eee')
    
    var json={
        "dato": "Esto es un dato simple",
        "primos": [ 1, 2, 3, 5, 7, 11, 13 ]
    }

    alert(json.dato)
}
*/
