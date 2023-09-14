"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
// los controladores son funciones que se van a llamar eventualmente
// controlador para obtener los usuarios en total
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
    // msg: 'getUsuarios'
});
exports.getUsuarios = getUsuarios;
//controlador para obtener un usuario
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id); // realiza una busque con el llave primaria id
    //colocamos una validación para el id del usuario
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${id}`
        });
    }
    //res.json(usuario);
    /*res.json({
        msg: 'getUsuario',
        id
    })*/
});
exports.getUsuario = getUsuario;
//controlador para crear un nuevo usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {body} = req;
    try {
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador',
        });
    }
    /*res.json({
        msg: 'postUsuario',
        body
    })*/
});
exports.postUsuario = postUsuario;
// controlador para actualizar el usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body,
        id
    });
};
exports.putUsuario = putUsuario;
// controlador para eliminar un usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map