import express from 'express';
import ProprietarioController from '../Controller/personController.js'
import { verifyJWT } from '../Infrastructure/jwt.js';
const router = express.Router();

router.post('/person', verifyJWT, ProprietarioController.create);
router.get('/person', verifyJWT, ProprietarioController.loadAll);
export default router;