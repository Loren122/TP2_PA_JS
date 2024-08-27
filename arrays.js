// 1. Agregar y Eliminar Elementos:
let frutas = ["manzana","banana","pera"];

frutas.push("ananá");

console.log(frutas);

frutas.pop();

console.log(frutas);

// 2. Array Bidimensional:
let matriz = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matriz[1][1]);

// 3. Iterar sobre un Array:
for (let fruta of frutas) {
    console.log(fruta);
};

// 4. Uso de map:
function elevarAlCuadrado(numeros) {
    let alCuadrado = numeros.map(function(a) {
        return a**2;
    })
    return alCuadrado;
}

let numeros = [3,5,7,-11] 
console.log(elevarAlCuadrado(numeros));

// 5. Uso de filter:
function filtrarMayoresDe(numeros, ref) {
    let mayoresDe = [];
    for (let numero of numeros) {
        if (numero > ref) {
            mayoresDe.push(numero);
        }
    }
    return mayoresDe;
}

console.log(filtrarMayoresDe(numeros, 4));

// 6. Uso de reduce:
function sumarElementos(numeros) {
    const valorInicial = 0;
    const sumaElementos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial,)
    return sumaElementos;
};

console.log(sumarElementos(numeros));

// 7. Uso de some:
let mayorQue10 = (elemento) => elemento > 10;

console.log(numeros.some(mayorQue10));

// 8. Uso de every:
let positivo = (elemento) => elemento > 0;

console.log(numeros.every(positivo));

// 9. Uso de find:
let personas = [
    {nombre: 'Lorenzo', edad: 21},
    {nombre: 'Estanislao', edad: 31},
    {nombre: 'Mirko', edad: 15},
    {nombre: 'Mateo', edad: 7},
    {nombre: 'Franco', edad: 37},
    {nombre: 'Nicolás', edad: 10},

];

function mayorDe30(persona) {
    return persona.edad > 30;
};

console.log(personas.find(mayorDe30));

// 10. Uso de sort:
let palabras = ['casa', 'banana', 'esto','arbol','delfin'];

console.log(palabras.sort());
