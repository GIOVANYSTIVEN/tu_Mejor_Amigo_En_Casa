import express from 'express';
import { crearMascotaGevt, listarMascotasGevt, buscarMascotaGevt, actualizarMascotaGevt, eliminarMascotaGevt } from '../controllers/Mascotas.Controllers-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';

const routerMascotagevt = express.Router();

routerMascotagevt.post('/', verificarToken, crearMascotaGevt);
routerMascotagevt.get('/', listarMascotasGevt);
routerMascotagevt.get('/:id', verificarToken, buscarMascotaGevt);
routerMascotagevt.put('/:id', verificarToken, actualizarMascotaGevt);
routerMascotagevt.delete('/:id', verificarToken, eliminarMascotaGevt);

export default routerMascotagevt;