function Sistema() {
  this.usuarios = {}; // Colección de usuarios, implementada como un objeto clave-valor

  // Función para agregar un usuario
  this.agregarUsuario = function (nick) {
    //this.usuarios[nick] = new Usuario(nick); // Crea un nuevo usuario con el nick proporcionado
    if (!this.usuarios[nick]) {
      this.usuarios[nick] = new Usuario(nick);
    } else {
      console.log("El nick ya está en uso.");
    }
  };

  this.obtenerUsuarios = function () {
    // devuelve la lista completa de usuarios
    return this.usuarios;
  };

  this.usuarioActivo = function (nick) {
    return this.usuarios[nick] !== undefined; // Devuelve true si el usuario existe
  };

  this.eliminarUsuario = function (nick) {
    delete this.usuarios[nick]; // Elimina el usuario con el nick proporcionado
  };
}

function Usuario(nick) {
  this.nick = nick; // El usuario solo tiene un atributo: 'nick'
}
