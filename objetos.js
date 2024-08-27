// 1. Creación de un Objeto Básico:
let libro = {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    _añoDePublicacion: 2003,

    // 10. Métodos Getters y Setters:
    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            this._añoDePublicacion = nuevoAño;
        } else {
            console.log(`"${nuevoAño}" no es válido como año`);
        }
    },

    // 3. Métodos en Objetos:
    descripcion: function() {
        console.log(`El libro "${libro.titulo}" está escrito por "${libro.autor}"`);
    }

};

console.log(libro);

// 2. Anidación de Objetos:
let direccion = {
    calle: 'Luis Franchini 422',
    ciudad: 'Larroque',
    pais: 'Argentina',
};

let estudiante = {
    nombre: 'Julián',
    edad: 19,
    direccion: direccion,
};

console.log(estudiante);

libro.descripcion();

// 4. Iteración sobre Propiedades de un Objeto:
let producto = {
    nombre: 'Jabón',
    precio: 1000,
    disponible: true,
};

for (let propiedad in producto) { 
    console.log(producto[propiedad]);
};

// 5. Actualización de Propiedades:

function actualizarPropiedad(objeto, propiedad, valor) {
    objeto[propiedad] = valor;
};

actualizarPropiedad(producto, 'precio', 900)

console.log(producto);

// 6. Comprobación de Propiedades:
function tienePropiedad(objeto, cadena) {
    for (let propiedad in objeto) {
        if (propiedad === cadena) {
            return true;
        };
    };

    return false;
};

console.log(tienePropiedad(producto, 'precio')); // true
console.log(tienePropiedad(producto, 'nombres')); // false

// 7. Eliminación de Propiedades:
function eliminarPropiedad(objeto, propiedad) {
    console.log(objeto);
    delete objeto[propiedad];
    console.log(objeto);
};

eliminarPropiedad(producto, 'disponible');

// 8. Combinar Objetos:
let persona1 = {
    nombre:'José',
    edad: 47,
    profesion: 'Plomero'
};

let persona2 = {
    nombre:'Lorenzo',
    edad: 21,
    estudios: 'Lic. en Sistemas',
};

let persona1y2 = Object.assign(persona1, persona2);

console.log(persona1y2);

// 9. Copiar Objetos:
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

actualizarPropiedad(copiaEstudiante, 'nombre', 'Juanse');
actualizarPropiedad(copiaEstudiante, 'edad', 30);

console.log(estudiante);
console.log(copiaEstudiante);

// 10. Métodos Getters y Setters:
libro.añoDePublicacion = 1997;
console.log(libro.añoDePublicacion);