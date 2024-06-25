import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            console.log(error)
            return res.status(401).json({ message: "Token inválido" }).end();
        }
        req.user = decoded.user;
        next();
    });
}
