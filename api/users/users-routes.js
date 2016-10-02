const router = require('express').Router();
const Users = require('../../db/index.js').models.Users;

router.put('/:id', function(req, res, next){
	console.log(req);
	Users.findById(req.params.id)
	  .then(function(user){
	  	user.update({password: req.body.password});
	  })
	  .then(function(user){
	  	console.log(user.username + "'s password has been updated.");
	  })
	  .catch(next);
});

module.exports = router;