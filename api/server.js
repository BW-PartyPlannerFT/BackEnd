const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/auth-router');
const authenticate = require('../auth/auth-model');
const users = require('../users/users-router');
const partiesRouter = require('../parties/parties-router');
const categoriesRouter = require('../categories/categories-router');
const shoppingListsRouter = require('../shoppingList/shoppingLists-router')
const todoListsRouter = require('../todoList/todoLists-router');
const picturesRouter = require('../pictures/pictures-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, users);
server.use('/api/parties', authenticate, partiesRouter);
server.use('/api/categories', authenticate, categoriesRouter);
server.use('/api/shoppingLists', authenticate, shoppingListsRouter);
server.use('/api/todoLists', authenticate, todoListsRouter);
server.use('/api/pictures', authenticate, picturesRouter);


server.get('/', (req, res) => {
    res.status(200).json(`Check out API documentation at https://github.com/BW-PartyPlannerFT/BackEnd`);
});

module.exports = server;

