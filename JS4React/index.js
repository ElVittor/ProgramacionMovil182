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
const suma = (a,b)=> a+b */

//Objetos
const usuario={
    nombre:"Victor",
    apellidoP: "Lozano",
    Edad:35,
    direccion:{//OBjeto dentro del objeto
        pais:"México",
        ciudad:"Querétaro",
        calle:'Mirador de las Cumbres'
    },
    amigos:['Pedro','Picapiedra'],
    estatus:true,
    enviaCorreo: enviarCorr() => 'enviando ...'
}