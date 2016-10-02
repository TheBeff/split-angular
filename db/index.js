
const db = require('./_db');

const Groups = require('../api/groups/groups-model.js');
const Users = require('../api/users/users-model.js');

Users.hasOne(Groups);
Groups.belongsTo(Users);

function syncAndSeed(){
	return db.sync({force: true})
	  .then(function(){
	  	Promise.all([
	  		Users.create({username: 'jeff', password: '123'}),
	  		Users.create({username: 'le', password: 'abc'}),
	  		Groups.create({name: 'admin'})])
	  });
}


module.exports = {
	models: {
		Users,
		Groups
	},
	db,
	syncAndSeed
}
