console.log("elementos Vue")
console.log(Vue)
const estudiantes= [{nombre:'Juan',apellido:'Jimenez'},
    {nombre:'Luis',apellido:'Yaguari'},
    {nombre:'Andres',apellido:'Mejia'},
    {nombre:'Fernando',apellido:'Mosquera'},
    {nombre:'',apellido:'Vizcaino'}
]
console.log(estudiantes)
console.table(estudiantes)
const app= Vue.createApp({
    /*template:`
    <h1>Hola mundo</h1>
    <p>Desdee App.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7,8]}}</p>
    <p>{{false?'Verdadero':'Falso'}}</p>
    `*/
    //OPTIONS API 
    methods:{
        cambiarMensaje(){
            console.log("Se esta cambiando el mensaje")
            console.log(this.mensaje)
           this.mensaje='Valor cambiado'
           
        },
        cambiarNumero(){
            this.valor+=1;
        },

        agregarEstudiante(){

            console.log('agregando estudiante') 
           // const estu={nombre:this.nombre,apellido:this.apellido};
            //this.lista.unshift(estu)
           // this.lista.push(estu)
            this.lista.push({nombre:this.nombre,apellido:this.apellido})
        },
        presionandoTecla(charCode){
            console.log("presionando")
            console.log(charCode)
        },
        agregarEnter(event){
            
            if(event.charCode==13){
               this.agregarEstudiante();
            }
         
        },
        agregarEstudianteMod(){
           
            console.log("presionando2...")
            
        }

    },
    watch:{

    },
    //data es uno de las opciones que tiene una declaracion diferente 
    data(){
        return {
            mensaje:'Hola mundo desde Vue.JS',
            valor:100,
            lista: estudiantes,
            nombre:undefined,
            apellido:undefined,
        }
    }
})

app.mount('#myApp')