import express from 'express';
import ProprietarioController from '../Controller/proprietarioController.js'
import { verifyJWT } from '../Infrastructure/jwt.js';

const proprietarioController = new ProprietarioController();
const router = express.Router();

router.post('/create', verifyJWT, proprietarioController.create);
router.get('/loadAll', verifyJWT, proprietarioController.loadAll);
router.delete('/delete', verifyJWT, proprietarioController.delete);

export default router;