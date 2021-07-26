const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');

router.post('/usuarios/create', UsuarioController.createUsuario);
router.get('/usuarios/:id', UsuarioController.getUsuarioById);
router.put('/usuarios/:id', UsuarioController.updateUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router;