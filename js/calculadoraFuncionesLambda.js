const sumar = (n1, n2) => n1 + n2;

const sumarCompleto = (n1, n2) => {

    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}
const restarCompleto = (n1, n2) => {
    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}
const multiplicarCompleto = (n1, n2) => {
    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}
const dividirCompleto = (n1, n2) => {
    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

function cambiarImagen() {
    document.getElementById('imagen1').src = 'https://img.freepik.com/vector-gratis/cute-shiba-inu-business-holding-dinero-cartoon-vector-icon-illustration-concepto-icono-negocio-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3887.jpg?w=740&t=st=1700320482~exp=1700321082~hmac=d82fef9a144425df4726021269fa3564d19dd5ee51516086b2a2e76146e8d16a.png';

}
const parsear = (id) => parseInt(document.getElementById(id).value)

function conceptosJS() {
    let var1 = 10;
    let var1Texto = 'Texto1';
    console.log(var1);
    console.log(var1Texto);

    /* var es un tipo de dato que ya esta quedando en desuso*/
    var var2 = 10;
    var var2Texto = 'Texto2';
    console.log(var2);
    console.log(var2Texto);

    const const1 = 10;
    const const1Texto = 'Texto3';
    console.log(const1);
    console.log(const1Texto);
    //declaracion de arreglos

    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[4])

    diasSemana[5] = "Sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)
    diasSemana.unshift("Feriado")
    console.log(diasSemana)
    const edades = [1, 2, 3, 4, 5];
    console.log(edades)
    const edades2 = [6, 7, 8]
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)

    for (const dia of diasSemana) {
        console.log(dia)
        if (dia == 'Martes') {
            console.log('martes dos por uno')
        }
    }

    //Declaracion de objetos
    const estudiante = {
        nombre: "Juan",
        apellido: "Jimenez",
        edad: 27,
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante)
    console.log(estudiante.apellido)
    estudiante.nombre = "Ignacio"
    console.log(estudiante.nombre)

    const persona = {
        nombre: "Juan",
        apellido: "Jimenez",
        edad: 27,
        direccion: {
            callePrincipal: "Mercadillo",
            calleSecundaria: "10 de Agosto",
            numeracion: "oe1-112",
            barrio: "Santa Clara"
        }
    }
    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.callePrincipal)

    //Arreglo de  4 pacientes que tengan 3 atributos

    const pacientes = [{
        nombre: "Juan",
        apellido: "Jimenez",
        edad: 17
    },

  {
        nombre: "Luis",
        apellido: "Jimenez",
        edad: 19
    },
   {
        nombre: "Tito",
        apellido: "Jimenez",
        edad: 51
    },
     {
        nombre: "Andrea",
        apellido: "Jimenez",
        edad: 26
    }]
   
    console.log(pacientes)
    console.table(pacientes)
    console.log(pacientes[0].nombre)
    pacientes.pop()
    console.table(pacientes)
    //Desestructuracion de arreglos
    const diasSemana2=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    const [dia1, dia2 ,dia3, dia4, dia5]= diasSemana2
    console.log(dia1)
    console.log(dia5)
    //directamente
    const [d1,d2,d3,d4,d5]=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    console.log(d2)
    console.log(d4)

    //Desestructuracion de objetos
    const vehiculo ={marca:"toyota",modelo:"prius",anio:2022}
    const {marca,modelo,anio}=vehiculo
    console.log(marca)
    console.log(anio)

    //declarar en una sola linea un objeto que tegan como atributo otro objeto y desestructurar al principal como al secundario 

  
    const {tipo, habitad, especie: {nombre,anioDesc}} = { tipo:'mamifero', habitad:'selva',especie:{nombre:'elefante',anioDesc:154}};
    console.log(tipo)
    console.log(nombre)
  
}