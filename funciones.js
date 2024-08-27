// 1. Función Suma:
function sumar(a, b) {
    console.log(a + b);
    return a + b;
};

sumar(2, 5);
sumar(2, 7);
sumar(3, 5);

// 2. Función que Multiplica:
function multiplicar(a, b) {
    console.log(a * b);
    return a * b;
};

multiplicar(2, 5);
multiplicar(2, 7);
multiplicar(3, 5);

// 3. Función con Parámetro por Defecto:
function saludar(nombre='invitado') {
    console.log(`Hola, ${nombre} `);
};

saludar();

// 4. Función que Devuelve un Objeto:
function crearPersona(nombre, edad) {
    let persona = {
        nombre: nombre,
        edad: edad,
    }
    return persona;
};

persona1 = crearPersona('Osvaldo', 37);
console.log(persona1);

// 5. Función que Modifica un Objeto:
function actualizarEdad(persona, nuevaEdad) {
    if (typeof nuevaEdad === 'number' && 100 > nuevaEdad > 0) {
        persona.edad = nuevaEdad;
    } else {
        console.log('Edad no válida')
    }
};

actualizarEdad(persona1, 45);
console.log(persona1);

// 6. Función Recursiva:
function factorial(numero) {
    try {
        if (typeof numero !== 'number') {
            throw new TypeError('El argumento debe ser un número');
        }

        if (numero < 0) {
            throw new RangeError('El número debe ser positivo');
        }

        if (numero === 0) {
            return 1;
        } else {
            return numero * factorial(numero-1);
        }
    } catch (error) {
        console.error(error.message);
    }
};

console.log(factorial('asdf'));

// 7. Función con Función Interna:
function despedir() {
    function adios() {
        console.log('Adiós');
    };
    return adios();
};

despedir();

// 8. Función que Usa Otra Función:
function procesarArray(array, funcion) {
    for (let numero of array) {
        funcion(numero, 2);
    }
};

procesarArray([1,2,3,4], multiplicar);

// 9. Función que Devuelve Otra Función:
function crearMultiplicador(x) {
    return function(y) {
        return x * y;
    }
};

let multix2 = crearMultiplicador(2);
let multix5 = crearMultiplicador(5);

console.log(multix2(3));
console.log(multix5(3));

// 10. Función Anónima:
let sumarAnonima = function(a, b) {
    return a + b;
};

let resultado = sumarAnonima(2,5);
console.log(resultado);