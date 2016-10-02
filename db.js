const Sequelize = require('sequelize');
const config = require('./config.json');

const db =  new Sequelize(config.database_uri, {logging: false});

const Groups = require('./api/groups/groups-model.js');
const Users = require('./api/users/users-model.js');

Users.hasOne(Groups);
Groups.belongsTo(Users);

function sync(){
	return db.sync({force: true});
}

module.exports = {
	models: {
		Users,
		Groups
	},
	db
}