import express from 'express';
import LoginController from './../Controller/loginController.js'

const loginController = new LoginController();
const router = express.Router();

router.post('/login', loginController.login);
router.post('/logout', loginController.logout);

export default router;