import { Request, Response } from "express"
import Usuario from "../models/usuario"


// los controladores son funciones que se van a llamar eventualmente

// controlador para obtener los usuarios en total
export const getUsuarios = async( req: Request, res: Response) => {
   
    const usuarios = await Usuario.findAll();
   
    res.json({ usuarios });
    // msg: 'getUsuarios'


}

//controlador para obtener un usuario
export const getUsuario = async( req: Request, res: Response) => {
    
    const {id} = req.params;

    const usuario = await Usuario.findByPk( id ); // realiza una busque con el llave primaria id
    
    //colocamos una validación para el id del usuario
    if ( usuario ) {
        res.json(usuario)
    }else {
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${ id }`
        });
    }

    //res.json(usuario);

    /*res.json({
        msg: 'getUsuario',
        id
    })*/
}

//controlador para crear un nuevo usuario
export const postUsuario = async( req: Request, res: Response) => {
    
    
    //const {body} = req;
    
    try {
        
        const usuario = new Usuario(body);
        await usuario.save();

        res.json( usuario );
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador',

        })
    }



    /*res.json({
        msg: 'postUsuario',
        body
    })*/
}

// controlador para actualizar el usuario
export const putUsuario = ( req: Request, res: Response) => {
    
    const {id} = req.params;
    const {body} = req;
    
    res.json({
                msg: 'postUsuario',
        body,
        id
    })
}

// controlador para eliminar un usuario

export const deleteUsuario = ( req: Request, res: Response) => {
    
    const {id} = req.params;
    
    res.json({
        msg: 'deleteUsuario',
        id
    })
}