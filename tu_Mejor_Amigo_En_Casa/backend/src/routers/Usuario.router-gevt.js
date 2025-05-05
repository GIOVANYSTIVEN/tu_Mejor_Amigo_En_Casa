import express from 'express';
import { registrarUsuarioGevt } from '../controllers/Usuario.controller-gevt.js';

const routerusuariogevt = express.Router();
routerusuariogevt.post('/', registrarUsuarioGevt); 

export default routerusuariogevt;