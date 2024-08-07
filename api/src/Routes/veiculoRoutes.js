import express from 'express';
import VeiculoController from '../Controller/veiculoController.js'
import { verifyJWT } from '../Infrastructure/jwt.js';

const veiculoController = new VeiculoController();
const router = express.Router();

router.post('/create', verifyJWT, veiculoController.create);
router.get('/loadAll', verifyJWT, veiculoController.loadAll);
router.post('/loadByTipo', verifyJWT, veiculoController.loadByTipo);
router.post('/loadByP', verifyJWT, veiculoController.loadByProprietario);
router.delete('/delete', verifyJWT, veiculoController.delete);


export default router;