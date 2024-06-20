import express from 'express';
import ProprietarioController from '../Controller/proprietarioController.js'
import { verifyJWT } from '../infrastructure/jwt.js';
const router = express.Router();

router.post('/proprietario', verifyJWT, ProprietarioController.create);
router.get('/proprietario', verifyJWT, ProprietarioController.loadAll);
export default router;