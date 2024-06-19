import express from 'express';
import PersonController from './../Controller/personController.js'
import jwt, { verifyJWT } from '../infrastructure/jwt.js';
const router = express.Router();

router.post('/person', verifyJWT, PersonController.create);
router.get('/person', verifyJWT, PersonController.loadAll);
export default router;