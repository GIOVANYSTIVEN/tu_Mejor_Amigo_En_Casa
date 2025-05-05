import express from 'express';
import { loginGevt } from '../controllers/AuthController-gevt.js';

const router = express.Router();
router.post('/login', loginGevt);

export default router;