const Resena = require('../models/Resena');

// Obtener todos los documentos
const getAllResenas = async (req, res) => {
  try {
    const resena = await Resena.find();
    res.json(resena);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

// Agregar un Resena
const createResena = async (req, res) => {
  try {
    const newResena = await Resena.create(req.body);
    res.status(201).send(newResena);
  } catch (error) {
    res.status(500).send({ 'error': error });
  }
};

// Obtener un documento en específico
const getResenaById = async (req, res) => {
  try {
    const resena = await Resena.findOne({_id: req.params.id});
    return res.json(resena);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

// Actualizar una Resena
const updateResena = async (req, res) => {
  try {
    const resena = await Resena.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true });
    res.json(resena);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

// Eliminar una Resena
const deleteResena = async (req, res) => {
  try {
		const resena = await Resena.findByIdAndDelete({_id: req.params.id});
    if (!resena) {
      return res.status(404).json({
        error: "Resena no encontrada"
      })
    }
    res.json(resena);
  } catch (error) {
    return res.status(400).json({ 'error': error })
  }
};

module.exports = {
  createResena,
  getAllResenas,
  getResenaById,
  updateResena,
  deleteResena
};