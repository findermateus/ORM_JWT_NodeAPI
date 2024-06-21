import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) res.status(401).end();
        console.log(decoded);
        req.user = decoded.user;
    })
    next();
}
