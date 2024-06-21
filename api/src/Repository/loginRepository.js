import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

function userFactory(user, password) {
    return {
        user: user,
        password: password
    }
}
// Dá pra implementar algum password hash aqui e jogar isso no banco
const user1 = userFactory('Douglas', '321')
const user2 = userFactory('Mateus', '123')
const USER_LIST = [
    user1,
    user2
];

class LoginRepository {

    authorizateUser(user) {
        const token = jwt.sign({ user: user }, SECRET, { expiresIn: 300 });
        return token;
    }

    verifyUser(user, password) {
        const userAuth = userFactory(user, password);
        let token = false
        USER_LIST.forEach(user => {
            if (user.user == userAuth.user && user.password == userAuth.password) {
                token = this.authorizateUser(user.user);
            }
        });
        return token;
    }
}
const loginRepository = new LoginRepository();

export default loginRepository;