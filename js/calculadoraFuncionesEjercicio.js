let num1;
function reset() {
    document.getElementById('idResultado').innerText = '';
}

function operacion(op) {
    num1=document.getElementById('idResultado').innerText =  document.getElementById('idResultado').innerText+op;
    document.getElementById('idResultado').innerText = '';
   
}

function numeros(num) {
   document.getElementById('idResultado').innerText =document.getElementById('idResultado').innerText+num ;
  
}
function back(){

    document.getElementById('idResultado').innerText= document.getElementById('idResultado').innerText.slice(0,-1);
}

function resultado() {

    let num2 = document.getElementById('idResultado').innerText;
    let respuesta=num1+num2;
    let res = eval(respuesta);
    document.getElementById('idResultado').innerText = res;
}

