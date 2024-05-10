let nombre = "Batman";
let anime = "Comic mas bien";
let edad = 30;

let personaje = {
    nombre: "Batman",
    anime: "Comic mas bien",
    edad: 30,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(['anime']);

/* personaje.edad = 13; */
personaje['edad'] = 16;

let llave = edad;
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje)

