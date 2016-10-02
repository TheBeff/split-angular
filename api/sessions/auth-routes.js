const router = require('express').Router();
const Users = require('../../db/index.js').models.Users;

var currentUser = {};

router.post('/login', function(req, res, next){
	Users.findOne({
		where: req.body
	})
	.then(function(user){
		if(!user){
		  res.sendStatus(401);
		} else {
		  currentUser = user;
		  req.session.userId = user.id;
		  res.sendStatus(204);	
		}
	})
	.catch(next);
});

router.delete('/logout', function(req, res, next){
	currentUser = {};
	req.session.userId = "";
	res.redirect('/');
});

// router.get

module.exports = router;