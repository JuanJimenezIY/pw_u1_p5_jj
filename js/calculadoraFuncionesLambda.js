const sumar = (n1,n2) => n1+n2;

const sumarCompleto = (n1,n2)=> {

    var resultado= parsear('idnumero1')+ parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
const restarCompleto = (n1,n2)=> {
    var resultado= parsear('idnumero1')- parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
const multiplicarCompleto = (n1,n2)=> {
    var resultado= parsear('idnumero1')* parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}
const dividirCompleto = (n1,n2)=> {
    var resultado= parsear('idnumero1')/ parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function cambiarImagen(){
    document.getElementById('imagen1').src='https://img.freepik.com/vector-gratis/cute-shiba-inu-business-holding-dinero-cartoon-vector-icon-illustration-concepto-icono-negocio-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3887.jpg?w=740&t=st=1700320482~exp=1700321082~hmac=d82fef9a144425df4726021269fa3564d19dd5ee51516086b2a2e76146e8d16a.png';

}
const parsear = (id)=> parseInt(document.getElementById(id).value)

function conceptosJS(){
    let var1 = 10;
    let var1Texto='Texto1';
    console.log(var1);
    console.log(var1Texto);

    /* var es un tipo de dato que ya esta quedando en desuso*/
    var var2 =10;
    var var2Texto='Texto2';
    console.log(var2);
    console.log(var2Texto);

    const const1=10;
    const const1Texto='Texto3';
    console.log(const1);
    console.log(const1Texto);
    //declaracion de arreglos

    const diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diasSemana);
}