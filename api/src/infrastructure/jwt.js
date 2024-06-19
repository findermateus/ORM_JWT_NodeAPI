import jwt from 'jsonwebtoken';

export function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (error, decoded) => {
        if (error) res.status(401).end();
        req.user = decoded.user;
    })
    next();
}
