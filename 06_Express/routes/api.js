var express = require('express');
var router = express.Router();

// GET
router.get('/', function(req, res, next) {
    res.send(data); 
});

// GET BY ID
router.get('/:id', function(req, res, next) {
    let id = req.param.id
    let userNum = data.find(item => item.id == id)
    res.send(data[userNum]);
});

// CREATE
router.post('/', function(req, res, next) {
    const newUser = req.body
    newUser.id = newID()
    data.push(newUser)
    res.send(data[data.length]);
});

// UPDATE
router.put('/:id', function(req, res, next) {
    let userNum = data.find(item => item.id == id)
    data[userNum] = req.body
    res.send(msg);
});

// DELETE
router.delete('/:id', function(req, res, next) {
    let userNum = data.find(item => item.id == id)
    data[userNum].delete
    res.send(msg);
});

module.exports = router;