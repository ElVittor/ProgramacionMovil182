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
console.log(usuario.enviaCorreo())*/

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
});