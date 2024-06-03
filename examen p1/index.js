console.log("Prueba de asincornia");

//Ejecercio 1

let numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

async function generarPares(arr) {
    let pares = [];
    
    for (let num of arr) {
        if (num % 2 === 0) {
            pares.push(num);
        }
    }
    return pares;
}

generarPares(numeros).then(pares => {
    console.log("Original:", numeros);
    console.log("Pares:", pares);
});


// Ejercicio 2

/* I. Declara el siguiente arreglo
estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];
II. Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años
III. Imprimir los 2 arreglos como resultado */

let estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

async function Mayoresde18(arr){
    let mayores = [];

    for (let estudiante of arr){
        if(estudiante.age > 18){
            mayores.push(estudiante.name);
            }
        }
    return mayores;
}

Mayoresde18(estudiantes).then(mayores => {
    console.log("Todos los estudiantes: ", estudiantes);
    console.log("Estudiantes mayores de 18: ", mayores);
});