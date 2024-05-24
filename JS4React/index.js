/* //Funciones

function suma(a,b){
    return a+b;
}

console.log(suma(2,3));

//Fat Arrow

const suma = (a,b)=> {
    return a+b
}

//Fat Arrow Function Simpñificada
const suma = (a,b)=> a+b 

//Objetos
const usuario = {
    nombre: "Victor",
    apellidoP: "Lozano",
    Edad: 35,
    direccion: { // Objeto dentro del objeto
        pais: "México",
        ciudad: "Querétaro",
        calle: 'Mirador de las Cumbres'
    },
    amigos: ['Pedro', 'Picapiedra'],
    estatus: true,
    enviaCorreo: function() { 
        return 'enviando ...';
    }
}

console.log(usuario)
console.log(usuario.direccion.calle)
console.log(usuario.amigos)
console.log(usuario.enviaCorreo())

//Trabajo con DOM

const titulo= document.createElement('h1');
titulo.innerText='Título creado con JS';
document.body.append(titulo);

const boton = document.createElement('button');
boton.innerText = 'Presiona aquí';
document.body.append(boton);

boton.addEventListener('click',function(){
    //console.log('Evento Click Ejecutando ... ')
    titulo.innerText="Evento Click Ejecutado";
    alert('Se Logró');
});*/
 
//Funciones de Arreglos

const nombres = ['Alan', 'Iza', 'Pablo', 'Juan Luis']
/*
for(let i = 0; i<nombres.length; i++){
    const elemento = nombres[i]
    console.log(elemento)
}

//FUNCION FOREACH
nombres.forEach(function (nombre){
    console.log(nombre)
})




//Funcion MAP para generar copia de un Array
const array2 = nombres.map(function(nombre){
    console.log(nombre);
    return nombre;
});

console.log(nombres);
console.log(array2);

//FUNCION FIND: Ubicar elementos en un arreglo
const resultado=nombres.find(function(nombre){
    if(nombre==='Pablo'){
        return nombre
    }
})
console.log(resultado)

//FUNCION FILTER: Filtrar elementos de un arreglo
const resultado = nombres.filter(function(nombre){
    if(nombre !='Pablo'){
        return nombre
    }
})

console.log(nombres)
console.log(resultado)

//FUNCION CONCAT sumar 2 arreglos 0 en 1
const edades =[78,89,12,8,10,15] 
//console.log(nombres.concat(edades))

//SPREAD OPERATOR
console.log([...nombres,...edades])

//EXPORT & IMPORT MODULES
*/
import {suma,resta} from './calculadora.js';

console.log(suma(45,54));
console.log(resta(45,54));
