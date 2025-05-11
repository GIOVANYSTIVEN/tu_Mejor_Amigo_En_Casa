import express from 'express';
import { crearMascotaGevt, listarMascotasGevt, buscarMascotaGevt, actualizarMascotaGevt, eliminarMascotaGevt } from '../controllers/Mascotas.Controllers-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';
import { upload } from '../middleware/multer-gevt.js'; 

const routerMascotagevt = express.Router();

routerMascotagevt.post('/', upload.single('Foto'), verificarToken, crearMascotaGevt);
routerMascotagevt.get('/', listarMascotasGevt);
routerMascotagevt.get('/:id', verificarToken, buscarMascotaGevt);
routerMascotagevt.put('/:id', upload.single('Foto'), verificarToken, actualizarMascotaGevt);
routerMascotagevt.delete('/:id', verificarToken, eliminarMascotaGevt);

export default routerMascotagevt;