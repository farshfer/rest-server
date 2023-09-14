"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//estableciendo los parametros para poderse conectar a la bdd
const db = new sequelize_1.Sequelize('bd-pro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});
exports.default = db;
//# sourceMappingURL=connection.js.map