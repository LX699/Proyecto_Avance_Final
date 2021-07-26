const { Router } = require('express');
const router = Router();

const ResenaController = require('../controllers/ResenaController');

router.get('/resenas', ResenaController.getAllResenas);
router.post('/resenas/create', ResenaController.createResena);
router.get('/resenas/:id', ResenaController.getResenaById);
router.put('/resenas/:id', ResenaController.updateResena);
router.delete('/resenas/:id', ResenaController.deleteResena);

module.exports = router;