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
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
//luego de instalar los paquetes del servidor express para
//para utilizar en aplicaciones escalables
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
//inicializamos una clase privada la cual solo será usada en este archivo
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios' //end point donde se hará petición
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000'; // se le coloca el puerto ya que si es  
        //indefinido tomará como referencia ese puerto 
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        //dfiniendo rutas
        this.routes();
    }
    // TODO: Conectar base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw new Error("error");
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    //metodo
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    //levantando el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        });
    }
}
//por si queremos exportar la clase
exports.default = Server;
//# sourceMappingURL=server.js.map