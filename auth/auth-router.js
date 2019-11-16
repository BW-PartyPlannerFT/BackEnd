const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets');
const router = express.Router();

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json({ message: 'This username is already taken' });
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy ({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `welcome ${user.username}`, token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error)
    });
});

function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;