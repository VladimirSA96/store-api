const { config } = require('../config/config.js');

//const USER = encodeURIComponent(config.dbUser);
//const PASSWORD = encodeURIComponent(config.dbPassword);
// Importante: La propiedad debe llamarse 'url' para que Sequelize la reconozca automáticamente
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: config.dbEngine,
  },
  production: {
    url: config.dbUrl,
    dialect: config.dbEngine,
    dialectOptions: {
      ssl : {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}