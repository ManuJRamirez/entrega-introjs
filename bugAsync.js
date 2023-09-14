// Este programa simula una llamada asincrónica para obtener un usuario

function obtenerUsuario(id, cb) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
            cb(null, usuario);
        }
    }, 2000);
};

obtenerUsuario(1,(error, usuario) => {
    console.log(usuario);
});
