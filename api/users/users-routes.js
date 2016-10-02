const router = require('express').Router();
const Users = require('../../db/index.js').models.Users;

router.put('/:id', function(req, res, next){
	Users.findById(req.params.id})
	  .then(function(user){
	  	user.update({password: req.body.password});
	  })
	  .then(function(user){
	  	res.sendStatus(200);
	  })
	  .catch(next);
});

router.get('/:id', function(req, res, next){
	Users.find({where: {id: req.params.id}}, include: ['Groups'])
	  .then(function(user){
	  	res.send(user);
	  })
	  .catch(next);
});

module.exports = router;