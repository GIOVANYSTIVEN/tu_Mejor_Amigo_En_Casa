import { gevtObtenerRazas, gevtActualizarRaza } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const razaId = urlParams.get('id');
  const inputNombre = document.getElementById('nombre');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  if (razaId) {
    try {
      const razas = await gevtObtenerRazas();
      const raza = razas.find(r => r.id == razaId);

      if (raza) {
        inputNombre.value = raza.nombre;
      } else {
        alert('Raza no encontrada');
        window.location.href = 'gevt_listarRaza.html';
      }
    } catch (error) {
      alert('Error al cargar la raza: ' + error.message);
      window.location.href = 'gevt_listarRaza.html';
    }
  }

  document.getElementById('formEditarRaza').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoNombre = inputNombre.value;

    if (razaId && nuevoNombre) {
      try {
        await gevtActualizarRaza(razaId, { nombre: nuevoNombre });
        alert('Raza actualizada con éxito');
        window.location.href = 'gevt_listarRaza.html';
      } catch (error) {
        alert('Error al actualizar la raza: ' + error.message);
      }
    } else {
      alert('Por favor, ingrese un nombre válido');
    }
  });
});