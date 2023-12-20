const estudiantes= [
]
console.table(estudiantes)
const app= Vue.createApp({

    //OPTIONS API 
    methods:{
   

        agregarEstudiante(){

            console.log('agregando estudiante') 
           // const estu={nombre:this.nombre,apellido:this.apellido};
            //this.lista.unshift(estu)
           // this.lista.push(estu)
            this.lista.push({nombre:this.nombre,apellido:this.apellido,edad:this.edad,ciudad:this.ciudad,correo:this.correo})
           
        },
       

    },
    watch:{

    },
    //data es uno de las opciones que tiene una declaracion diferente 
    data(){
        return {
           
            lista: estudiantes,
            nombre:undefined,
            apellido:undefined,
            edad:undefined,
            ciudad:undefined,
            correo:undefined
        }
    }
})

app.mount('#myApp')