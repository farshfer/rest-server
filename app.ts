import dotenv from 'dotenv';
import Server from './models/server';

//configurar dot.env
dotenv.config();
//para poder leer la configuracion de nuestro archivo conf

//creando una instancia par ael servidor
const server = new Server

server.listen();