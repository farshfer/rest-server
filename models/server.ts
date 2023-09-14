import express, {Application}   from 'express'
import userRoutes from '../routes/usuario';
//luego de instalar los paquetes del servidor express para
//para utilizar en aplicaciones escalables
import cors from 'cors';
import db from '../db/connection';


//inicializamos una clase privada la cual solo será usada en este archivo
class Server{
    
    //definimos propiedades a utilizar
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios' //end point donde se hará petición
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'; // se le coloca el puerto ya que si es  
        //indefinido tomará como referencia ese puerto 

        //Metodos iniciales
        this.dbConnection();
        this.middlewares();

        //dfiniendo rutas
        this.routes();
    }
    
    // TODO: Conectar base de datos

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Database online')

        } catch (error) {
            throw new Error("error");
        }
    }
    
    middlewares() { //son funciones que se ejecutan antes de nuestras rutas

        //cors
        this.app.use( cors());

        //lectura del body
        this.app.use( express.json())
        // Carpeta Publica
        this.app.use(express.static('public'));


    }

    //metodo
    routes(){

        this.app.use( this.apiPaths.usuarios, userRoutes)

    }


    //levantando el servidor
    listen() {
        this.app.listen(this.port, () =>{ //pedimos el puerto con un callback para el server y el puerto
            console.log('Servidor corriendo en puerto'+ this.port );
        })

    }
}

//por si queremos exportar la clase
export default Server;