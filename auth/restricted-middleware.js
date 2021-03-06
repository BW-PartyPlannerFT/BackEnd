const bcrypt = require('bcrypt');

const Users = require('../users/users-model');

module.exports = (req, res, next) => {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        })
        .catch(error => {
            res.status(500).json( error );
        })
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};