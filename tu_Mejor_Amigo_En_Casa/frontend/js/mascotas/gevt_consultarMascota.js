import { gevtObtenerMascota, gevtObtenerRazas, gevtObtenerCategorias, gevtObtenerGenero } from '../api.js';

const BACKEND_URL = 'http://192.168.1.12:3000';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/frontend/index.html';
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const mensajeError = document.getElementById('mensajeError');

  try {
    const [razas, categorias, generos, mascota] = await Promise.all([
      gevtObtenerRazas(),
      gevtObtenerCategorias(),
      gevtObtenerGenero(),
      gevtObtenerMascota(id)
    ]);

    const razaMap = razas.reduce((map, r) => ({ ...map, [r.idrazasGevt]: r.NombreGevt }), {});
    const categoriaMap = categorias.reduce((map, c) => ({ ...map, [c.idcategoriasGevt]: c.NombreGevt }), {});
    const generoMap = generos.reduce((map, g) => ({ ...map, [g.idgeneroGevt]: g.NombreGevt }), {});

    document.getElementById('nombre').textContent = mascota.NombreGevt || 'Sin nombre';
    document.getElementById('raza').textContent = razaMap[mascota.idrazasGevt] || 'Sin raza';
    document.getElementById('categoria').textContent = categoriaMap[mascota.idcategoriasGevt] || 'Sin categoría';
    document.getElementById('genero').textContent = generoMap[mascota.idgeneroGevt] || 'Sin género';
    document.getElementById('estado').textContent = mascota.estado || 'PENDIENTE';
    document.getElementById('latitude').textContent = mascota.latitude || 'No definida';
    document.getElementById('longitude').textContent = mascota.longitude || 'No definida';

    const mascotaFoto = document.getElementById('mascota-foto');
    if (mascotaFoto) {
      mascotaFoto.src = mascota.Foto ? `${BACKEND_URL}/public/img/${mascota.Foto}` : '../../assets/default.jpg';
      mascotaFoto.alt = `Foto de ${mascota.NombreGevt || 'Mascota'}`;
    }
  } catch (error) {
    mensajeError.textContent = 'Error al cargar la mascota: ' + error.message;
    console.error('Error al cargar datos:', error);
  }
});