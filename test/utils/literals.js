const user = {

    userComprador: {
        email: 'comprador1@example.com',
        contrasenia: '123456789'
    },

    userSucursal: {
        email: 'sucursal1b@example.com',
        contrasenia: '123456789'
    },

    userAdministrador: {
        email: 'administrador1@example.com',
        contrasenia: '123456789'
    }
}

const registerUser = {
    
    completeUser: {
        nombre: 'John',
        apellido: 'Doe',
        email: `john${Math.floor(Math.random()*9999)}@testemail.com`,
        cedula: `1${Math.floor(Math.random()*9999999)}`,
        contrasenia: 'Testing.123',
        confirmContrasenia: 'Testing.123'
    },

    completeUsuarioSucursal: {
        nombre: 'Luis',
        apellido: 'Suarez',
        email: `luis${Math.floor(Math.random()*9999)}@testemail.com`,
        cedula: '98989898',
        contrasenia: 'Testing.123'
    }
}

const local = {

    completeLocal: {
        nombre: 'test1',
        direccion: 'Mini 821',
        telefono: `2${Math.floor(Math.random()*9999999)}`
    },

    completeLocal2: {
        nombre: 'test2',
        direccion: 'Florida 1208',
        telefono: `2${Math.floor(Math.random()*9999999)}`
    },

    completeLocal3: {
        nombre: 'test3',
        direccion: 'Comandante Braga 2697',
        telefono: `2${Math.floor(Math.random()*9999999)}`
    }
}

export const literals = {
    user,
    registerUser,
    local
}