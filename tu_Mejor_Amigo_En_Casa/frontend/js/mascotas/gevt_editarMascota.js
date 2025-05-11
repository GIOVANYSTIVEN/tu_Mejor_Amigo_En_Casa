import { gevtObtenerMascota, gevtObtenerRazas, gevtObtenerCategorias, gevtObtenerGenero, gevtActualizarMascota } from '../api.js';

const BACKEND_URL = 'http://192.168.1.12:3000';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const mensajeError = document.getElementById('mensajeError');

  await gevtCargarSelectsYMascota(id);

  const form = document.getElementById('formEditarMascota');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('NombreGevt', document.getElementById('nombre').value);
      formData.append('idrazasGevt', document.getElementById('raza').value);
      formData.append('idcategoriasGevt', document.getElementById('categoria').value);
      formData.append('idgeneroGevt', document.getElementById('genero').value);
      const foto = document.getElementById('foto').files[0];
      if (foto) formData.append('Foto', foto);

      try {
        const response = await gevtActualizarMascota(id, formData);
        console.log('Respuesta de actualizacion:', response);
        window.location.href = 'gevt_listarMascotas.html';
      } catch (error) {
        mensajeError.textContent = error.message || 'Error al actualizar la mascota';
        console.error('Error al actualizar:', error);
      }
    });
  } else {
    console.error('Formulario con ID "formEditarMascota" no encontrado');
    mensajeError.textContent = 'Error: Formulario no encontrado';
  }

  // Cargar datos en los select y datos de la mascota
  async function gevtCargarSelectsYMascota(id) {
    try {
      const [razas, categorias, generos, mascota] = await Promise.all([
        gevtObtenerRazas(),
        gevtObtenerCategorias(),
        gevtObtenerGenero(),
        gevtObtenerMascota(id)
      ]);

      const selectRaza = document.getElementById('raza');
      razas.forEach(r => {
        const option = document.createElement('option');
        option.value = r.idrazasGevt;
        option.textContent = r.NombreGevt;
        selectRaza.appendChild(option);
      });

      const selectCategoria = document.getElementById('categoria');
      categorias.forEach(c => {
        const option = document.createElement('option');
        option.value = c.idcategoriasGevt;
        option.textContent = c.NombreGevt;
        selectCategoria.appendChild(option);
      });

      const selectGenero = document.getElementById('genero');
      generos.forEach(g => {
        const option = document.createElement('option');
        option.value = g.idgeneroGevt;
        option.textContent = g.NombreGevt;
        selectGenero.appendChild(option);
      });

      if (mascota) {
        document.getElementById('nombre').value = mascota.NombreGevt || '';
        selectRaza.value = mascota.idrazasGevt || '';
        selectCategoria.value = mascota.idcategoriasGevt || '';
        selectGenero.value = mascota.idgeneroGevt || '';

        const mascotaFoto = document.getElementById('mascota-foto');
        if (mascotaFoto) {
          mascotaFoto.src = mascota.Foto ? `${BACKEND_URL}/public/img/${mascota.Foto}` : '../../assets/default.jpg';
          mascotaFoto.alt = `Foto de ${mascota.NombreGevt || 'Mascota'}`;
        }
      }
    } catch (error) {
      mensajeError.textContent = 'Error al cargar los selectores o la mascota';
      console.error('Error al cargar datos:', error);
    }
  }
});