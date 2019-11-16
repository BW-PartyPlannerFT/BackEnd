const db = require('../database/db-config');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Authorizatio declined' });
            } else {
                req.user = { username: decodedToken.user };
                next();
            }
        });
     } else {
            res.status(401).json({ message: 'Access denied, provide valid token in the request header (see documentation)'});
    };
};