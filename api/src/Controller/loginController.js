import LoginRepository from "../Repository/loginRepository.js";

class LoginController {
    static login(req, res) {
        try {
            const user = req.body.user;
            const password = req.body.password;
            const token = LoginRepository.verifyUser(user, password);
            if (token === false) {
                res.status(401).json({ message: 'Usuário ou senha inválidos.' });
            }
            res.json({ auth: true, token: token });
        } catch (error) {
            res.status(401).json({ message: 'Não foi possível realizar o login', error })
        }
    }
    logout(req, res) {
        res.end();
    }
}
