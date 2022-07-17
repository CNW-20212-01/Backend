import { dbConfig } from "../config";
const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});
export {dbConnection}
