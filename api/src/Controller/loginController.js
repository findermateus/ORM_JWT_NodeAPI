import LoginRepository from "../Repository/loginRepository.js";

class LoginController {
    login(req, res) {
        try {
            const user = req.body.user;
            const password = req.body.password;
            const token = LoginRepository.verifyUser(user, password);
            if (!token) {
                console.log("token false");
                res.status(401).json({ message: 'Usuário ou senha inválidos.' });
                return;
            }
            res.json({ auth: true, token: token });
        } catch (error) {
            res.status(401).json({ message: 'Ocorreu um erro ao efetuar o login' });
        }
    }
    logout(req, res) {
        res.end();
    }
}

export default LoginController;
