const router = require('express').Router();
const Users = require('../../db/index.js').models.Users;

router.put('/:id', function(req, res, next){
	Users.findById(req.params.id)
	  .then(function(user){
	  	user.update({password: req.body.password});
	  })
	  .then(function(){
	  	res.sendStatus(200);
	  })
	  .catch(next);
});

module.exports = router;