function sumarNumerosCompleto(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('funcion SumarNumeros'+n1)
    console.log('funcion SumarNumeros'+n2)
    var resultado= n1+ n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
   
}
function restarNumeros(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('funcion SumarNumeros'+n1)
    console.log('funcion SumarNumeros'+n2)
    var resultado= n1-n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
function multiplicarNumeros(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('funcion SumarNumeros'+n1)
    console.log('funcion SumarNumeros'+n2)
    var resultado= n1*n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
function dividirNumeros(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('funcion SumarNumeros'+n1)
    console.log('funcion SumarNumeros'+n2)
    var resultado= n1/n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
function cambiarImagen(){
    document.getElementById('imagen1').src='https://img.freepik.com/vector-gratis/cute-shiba-inu-business-holding-dinero-cartoon-vector-icon-illustration-concepto-icono-negocio-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3887.jpg?w=740&t=st=1700320482~exp=1700321082~hmac=d82fef9a144425df4726021269fa3564d19dd5ee51516086b2a2e76146e8d16a.png';

}