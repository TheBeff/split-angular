const db = require('../../db/_db');

const Users = db.define('users', {
	username: db.Sequelize.STRING,
	password: db.Sequelize.STRING
});


module.exports = Users;