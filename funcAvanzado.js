// 1. Consumo de Datos desde una API:
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            return json;
        });
};

obtenerUsuarios();

// 2. Procesamiento de Datos de una API:
function imprimirNombresDeUsuarios() {
    obtenerUsuarios().then(usuarios => {
            if (usuarios && usuarios.length > 0) {
                const nombres = usuarios.map(usuario => usuario.name);
                console.log('Nombres de usuarios:', nombres);
            } else {
                console.log('No se encontraron usuarios.');
            }
        });
};

imprimirNombresDeUsuarios();

// 3. Autenticación Simulada:
function autenticarUsuario(credenciales) {
    return obtenerUsuarios().then(usuarios => {
        if (usuarios && usuarios.length > 0) {
            const usuarioEncontrado = usuarios.find(usuario => 
                usuario.username === credenciales.usuario && 
                usuario.address.zipcode === credenciales.contraseña
            );
            return usuarioEncontrado ? true : false;
        } else {
            return false; // No se encontraron usuarios
        }
    }).catch(error => {
        console.error('Error durante la autenticación:', error);
        return false;
    });
};

const credenciales = { usuario: 'Bret', contraseña: '92998-3874' };
autenticarUsuario(credenciales).then(resultado => {
    if (resultado) {
        console.log('Autenticación exitosa');
    } else {
        console.log('Autenticación fallida');
    }
});

// 4. Transformación de Datos:
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}

obtenerUsuarios().then(usuarios => {
    const usuariosMapeados = mapearUsuarios(usuarios);
    console.log('Usuarios mapeados:', usuariosMapeados);
});

// 5. Validación de Formularios:
function validarFormulario(campos) {
    const { nombre, email, password } = campos;

    if (!nombre || !email || !password) {
        return false;
    }

    return true;
}

obtenerUsuarios().then(usuarios => {
    const primerUsuario = usuarios[0];
    const campos = {
        nombre: primerUsuario.name,
        email: primerUsuario.email,
        password: 'ContraseñaCualquiera'
    };

    const esFormularioValido = validarFormulario(campos);
    console.log('¿Formulario válido?', esFormularioValido);
});

// 6. Paginación de Datos:
function obtenerPagina(datos, numPag) {
    const elementosPorPagina = 5;
    const inicio = (numPag - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

obtenerUsuarios().then(usuarios => {
    const pagina1 = obtenerPagina(usuarios, 1);
    console.log('Página 1:', pagina1);

    const pagina2 = obtenerPagina(usuarios, 2);
    console.log('Página 2:', pagina2);
});

// 7. Envío de Datos a una API:
function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        console.log('Respuesta de la API:', json);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
};

let data = {
        "userId": 10,
        "id": 101,
        "title": "sisinono",
        "body": "Estoy indeciso"
    }

enviarDatos(data);

// 8. Búsqueda de Usuarios:
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);

};

obtenerUsuarios().then(usuarios => {
    const usuarioEncontrado = buscarUsuarioPorEmail(usuarios, 'Julianne.OConner@kory.org');
    
    if (usuarioEncontrado) {
        console.log('Usuario encontrado:', usuarioEncontrado);
    } else {
        console.log('No se encontró un usuario con ese email.');
    }
});

// 9. Generación de Token de Autenticación:
function generarToken(usuario) {
    let token = btoa(`${usuario.id}:${usuario.name}:${usuario.email}`);
    return token
};

obtenerUsuarios().then(usuarios => {
    const token = generarToken(usuarios);
    console.log(`token: ${token}`);
});

// 10. Actualización de Información del Usuario:
function actualizarUsuario(usuario, cambios) {
    obtenerUsuarios.then()
};
