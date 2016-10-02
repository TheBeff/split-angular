const db = require('../../db/_db');

const Groups = db.define('group', {
	name: db.Sequelize.STRING,
});

module.exports = Groups;