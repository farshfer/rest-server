import {Sequelize} from 'sequelize';

//estableciendo los parametros para poderse conectar a la bdd
const db = new Sequelize('bd-pro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

export default db;
