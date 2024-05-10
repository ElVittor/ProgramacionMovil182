function suma(a, b){ //a Tambien es parametro
    console.log(arguments);
    return a + b; //Parametros
}

let resultado = suma(5, 6); //5 es el Argumento
console.log(resultado);
console.log(typeof(suma()));