import express from 'express';
import { crearCategoriaGevt, listarCategoriaGevt, buscarCategoriaGevt, actualizarCategoriaGevt, eliminarCategoriaGevt } from '../controllers/Categoria.Controller-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';

const routerCategoriagevt = express.Router();

routerCategoriagevt.post('/', verificarToken, crearCategoriaGevt);
routerCategoriagevt.get('/', listarCategoriaGevt);
routerCategoriagevt.get('/:id', verificarToken, buscarCategoriaGevt);
routerCategoriagevt.put('/:id', verificarToken, actualizarCategoriaGevt);
routerCategoriagevt.delete('/:id', verificarToken, eliminarCategoriaGevt);

export default routerCategoriagevt;