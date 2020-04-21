var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let msg = 'Acceso no permitido'
    if (req.query.nombre === 'Alejandro') {
        msg = 'Saludos ' + req.query.nombre    
    }
    res.send(msg); 
});

router.post('/', function(req, res, next) {
    let msg = 'Debe introducir un correo'
    if (req.body.email) {
        msg = `Mensaje enviado a ${req.body.email}`
    }
    res.send(msg); 
});

module.exports = router;
