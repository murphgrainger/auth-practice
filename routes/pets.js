var express = require('express');
var router = express.Router();
const queries = require("../db/queries");

router.get('/', function(req, res, next) {
    queries.getPets().then(function(pet) {
        res.json(pet)
    })
});

router.post('/', function(req, res, next) {
    queries.addPet(req.body).then(function(pet) {
        res.json(pet)
    })
});

router.get('/:id', function(req, res, next) {
    queries.getOnePet(req.body, req.params.id).then(function(pet) {
        res.json(pet)
    })
});

router.put('/:id', function(req, res, next) {
    queries.editPet(req.body, req.params.id).then(function(pet) {
        res.json(pet)
    })
});

router.delete('/:id', function(req, res, next) {
    queries.deletePet(req.params.id).then(function(pet) {
        res.json(pet)
    })
});




function resError(res, statusCode, message) {
    res.status(statusCode);
    res.send(message);
}

module.exports = router;
