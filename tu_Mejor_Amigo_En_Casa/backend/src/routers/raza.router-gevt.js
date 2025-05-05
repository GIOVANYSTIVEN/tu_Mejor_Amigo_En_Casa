import express from 'express';
import { crearRazaGevt, listarRazaGevt, buscarRazaGevt, actualizarRazaGevt, eliminarRazaGevt } from '../controllers/Razas.Controlles-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';

const routerRazagevt = express.Router();

routerRazagevt.post('/', verificarToken, crearRazaGevt);
routerRazagevt.get('/', listarRazaGevt);
routerRazagevt.get('/:id', verificarToken, buscarRazaGevt);
routerRazagevt.put('/:id', verificarToken, actualizarRazaGevt);
routerRazagevt.delete('/:id', verificarToken, eliminarRazaGevt);

export default routerRazagevt;