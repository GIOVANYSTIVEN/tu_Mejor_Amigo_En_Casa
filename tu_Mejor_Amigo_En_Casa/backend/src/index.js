import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import authRoutes from './routers/auth-gevt.js';
import routerusuariogevt from './routers/Usuario.router-gevt.js'
import routerRazagevt from './routers/raza.router-gevt.js';
import routerCategoriagevt from './routers/Categoria.router-gevet.js'
import routerGenerogevt from './routers/genero.router-gevt.js'
import routermascotasgevt from './routers/mascotas.router-gevt.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuario',routerusuariogevt);
app.use('/api/raza', routerRazagevt);
app.use('/api/categoria',routerCategoriagevt);
app.use('/api/genero',routerGenerogevt);
app.use('/api/mascotas',routermascotasgevt);


app.get('/test', (req, res) => res.send('Servidor funcionando'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});