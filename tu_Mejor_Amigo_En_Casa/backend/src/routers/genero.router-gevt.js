import express from 'express';
import { crearGeneroGevt, listarGeneroGevt, buscarGeneroGevt, actualizarGeneroGevt, eliminarGeneroGevt } from '../controllers/Genero.Controller-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';

const routerGenerogevt = express.Router();

routerGenerogevt.post('/', verificarToken, crearGeneroGevt);
routerGenerogevt.get('/', listarGeneroGevt);
routerGenerogevt.get('/:id', verificarToken, buscarGeneroGevt);
routerGenerogevt.put('/:id', verificarToken, actualizarGeneroGevt);
routerGenerogevt.delete('/:id', verificarToken, eliminarGeneroGevt);

export default routerGenerogevt;