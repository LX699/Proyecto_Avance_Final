const { Schema, model } = require('mongoose');

const ResenaSchema = new Schema({
	titulo: { type: String, required: true },
	descripcion: { type: String, required: true },
	contenido: { type: String, required: true }
}, {
	timestamps: true
})

module.exports = model('Resena', ResenaSchema);