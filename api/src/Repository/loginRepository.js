import Person from "../Entities/person.js";
import connection from "../infrastructure/connection.js";
import jwt from 'jsonwebtoken';

const SECRET = 'n3ServerSide';

function userFactory(user, password) {
    return {
        user,
        password
    };
}
// Dá pra implementar algum password hash aqui
const USER_LIST = [
    userFactory('Mateus', '123'),
    userFactory('Douglas', '321')
];


class LoginRepository {

    static authorizateUser(user) {
        const token = jwt.sign({ user: user }, SECRET, { expiresIn: 300 });
        return token;
    }

    static verifyUser(user, password) {
        const userAuth = userFactory(user, password);

        USER_LIST.forEach(user => {
            if (user.user === userAuth.user && user.password === userAuth.password) {
                authorizateUser(user.user);
                return true
            }
        });
        return false
    }
}

export default LoginRepository;