import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('Usuario',{
    //comenzamos a llamar los campos de la tabla de la base de datos
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});

export default Usuario

// a travez de los modelos nos vamos a comunicar con la BDD
// haciendo saneamiento de los querys de manera segura