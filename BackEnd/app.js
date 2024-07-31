const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller');

app.use(cors());
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/users', (req, res) => {
    controller.getUsers( (req, res, next)  => {
        res.send();
    });
});
//app.post
app.post('/createuser', (req, res) => {
    controller.addUser( req.body, (callback) => {
        res.send(callback);
    })
});
//app.put
app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    })
});
//app.delete
app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    })
});

module.exports = app;