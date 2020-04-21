var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Ruta con parámetros opcionales '?'
// Se pueden aplicar expresiones regulares
// localhost:3000/users/1?name=Pepe
router.get('/:id?', function(req, res, next) {
  let user = req.params.id ? 'user ' + req.params.id : 'users'
  if (req.params.id && req.query.name){
    user += `: ${req.query.name}`
  }
  res.send(`respond with a resource of ${user}`);
});

module.exports = router;
