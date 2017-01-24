var express = require('express');
var router = express.Router();
const queries = require("../db/queries");

router.get('/', function(req, res, next) {
    queries.getUsers().then(function(user) {
        res.json(user)
    })
});

router.post('/signup', function(req, res, next) {
    console.log(req.body);
    if (validUser(req.body)) {
        queries.postNewUser(req.body).then(function(user) {
            res.json(user)
        });
    } else {
        resError(res, 500, 'Use a valid');
    }
})

router.post('/login', function(req, res, next) {
    queries.loginUser(req.body).then(function(user) {
        res.json(user)
    });
})

function validUser(user) {
    return typeof user.name == 'string' &&
        user.name.trim() !== '' &&
        typeof user.email == 'string' &&
        typeof user.password == 'string';
}

function resError(res, statusCode, message) {
    res.status(statusCode);
    res.send(message);
}

module.exports = router;
