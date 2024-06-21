import LoginRepository from "../Repository/loginRepository.js";

class LoginController {
    static login(req, res) {
        const user = req.body.user;
        const password = req.body.password;
        const token = LoginRepository.verifyUser(user, password);
        if (token === false) {
            console.log("token false");
            res.status(401).json({ message: 'Usuário ou senha inválidos.' });
            return;
        }
        res.json({ auth: true, token: token });
    }
    static logout(req, res) {
        res.end();
    }
}

export default LoginController;
