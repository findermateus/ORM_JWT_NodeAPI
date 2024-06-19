import express from 'express';
import LoginController from './../Controller/loginController.js'

const router = express.Router();

router.post('/login', LoginController.login);
router.post('/logout', LoginController.logout);

export default router;