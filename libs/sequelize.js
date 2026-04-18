const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('../db/models')

const options = {
    dialect: config.dbEngine,
    logging: config.isProd ? false : console.log
};

if (config.isProd) {
    options.dialectModule = require('pg');
}

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(config.dbUrl, options);

// setupModels(sequelize);

// sequelize.sync();

// module.exports = sequelize;