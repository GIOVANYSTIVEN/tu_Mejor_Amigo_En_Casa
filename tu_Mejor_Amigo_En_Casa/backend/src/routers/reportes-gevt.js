import { Router } from 'express';
import { gevtGenerarReporteMascotas , gevtGenerarReporteMascotasPorEstado} from '../controllers/Reportes.controller-gevt.js';
import verificarToken from '../middleware/verificarToken-gevt.js';


const routerreportegevt = Router();
 
routerreportegevt.get('/mascotas', verificarToken, gevtGenerarReporteMascotas);
routerreportegevt.get('/mascotas/estado', verificarToken, gevtGenerarReporteMascotasPorEstado);

export default routerreportegevt;