const router = require('express').Router();
const Groups = require('../../db/index.js').models.Groups;

router.get('/', function(req, res, next){
  Groups.findAll({where: {}})
    .then(function(groups){
    	res.send(groups);
    })
    .catch(next);
});

module.exports = router;