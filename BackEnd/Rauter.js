const express = require('express');
const rauter = express.Router();
const controller = require('./controller');

rauter.get('/users', controller.getUsers);
rauter.post('/createuser', controller.addUser);
rauter.post('/updateuser', controller.updateUser);
rauter.post('/deleteuser', controller.deleteUser);

module.exports = rauter;