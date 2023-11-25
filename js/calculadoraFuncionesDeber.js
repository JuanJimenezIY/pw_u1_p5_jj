function reset() {
    document.getElementById('idResultado').innerText = '';
}

function operacion(op) {
    document.getElementById('idResultado').innerText =  document.getElementById('idResultado').innerText+op;
}

function numeros(num) {
   document.getElementById('idResultado').innerText =document.getElementById('idResultado').innerText+num ;
  
}

function resultado() {
    let respuesta = document.getElementById('idResultado').innerText;
    let res = eval(respuesta);
    document.getElementById('idResultado').innerText = res;
}

