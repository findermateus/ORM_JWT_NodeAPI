import express from 'express';
import PersonController from './../Controller/personController.js'

const router = express.Router();

router.post('/person', PersonController.create);
router.get('/person', PersonController.loadAll);
export default router;