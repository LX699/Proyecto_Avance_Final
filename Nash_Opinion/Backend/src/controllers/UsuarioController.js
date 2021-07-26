const Usuario = require('../models/Usuario');

// Obtener todos los documentos

const createUsuario = async (req, res) => {
  try {
    const newUsuario = await Usuario.create(req.body);
    res.status(201).send(newUsuario);
  } catch (error) {
    res.status(500).send({ 'error': error });
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({_id: req.params.id});
    return res.json(usuario);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true });
    res.json(usuario);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

const deleteUsuario = async (req, res) => {
  try {
		const usuario = await Usuario.findByIdAndDelete({_id: req.params.id});
    if (!usuario) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      })
    }
    res.json(usuario);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

module.exports = {
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
};