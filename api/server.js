const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/auth-router');
const authenticate = require('../auth/auth-model');
const users = require('../users/users-router');
const partiesRouter = require('../parties/parties-router');
const categoriesRouter = require('../categories/categories-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, users);
server.use('/api/parties', authenticate, partiesRouter);
server.use('/api/categories', authenticate, categoriesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to The Party Planner' });
});

module.exports = server;

