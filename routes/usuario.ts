import {Router} from 'express';
import { getUsuarios,getUsuario,postUsuario,putUsuario,deleteUsuario } from '../controllers/usuarios';

const router = Router();

//definiendo los endpoint
router.get('/',       getUsuarios);
router.get('/:id',    getUsuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteUsuario);






export default router;