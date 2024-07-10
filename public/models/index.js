const { Sequelize } = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.js')(sequelize, Sequelize);
db.Course = require('./course.js')(sequelize, Sequelize);
db.Presence = require('./presence.js')(sequelize, Sequelize);

// Définissez les relations ici
db.User.hasMany(db.Course);
db.Course.belongsTo(db.User);

db.User.hasMany(db.Presence);
db.Presence.belongsTo(db.User);

db.Course.hasMany(db.Presence);
db.Presence.belongsTo(db.Course);

module.exports = db;