const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
	nombre: { type: String, required: true },
	correo: { type: String, required: true },
	contrasena: { type: String, required: true }
}, {
	created: { type: Date, default: Date.now },
    updated: Date
})

module.exports = model('Usuario', UsuarioSchema);