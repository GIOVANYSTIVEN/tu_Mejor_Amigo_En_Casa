import { gevtObtenerGenero, gevtActualizarGenero } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const generoId = urlParams.get('id');
  const inputNombre = document.getElementById('nombre');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  if (generoId) {
    try {
      const generos = await gevtObtenerGenero();
      const genero = generos.find(g => g.id == generoId);

      if (genero) {
        inputNombre.value = genero.nombre;
      } else {
        alert('Género no encontrado');
        window.location.href = 'gevt_listarGenero.html';
      }
    } catch (error) {
      alert('Error al cargar el género: ' + error.message);
      window.location.href = 'gevt_listarGenero.html';
    }
  }

  document.getElementById('formEditarGenero').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoNombre = inputNombre.value;

    if (generoId && nuevoNombre) {
      try {
        await gevtActualizarGenero(generoId, { nombre: nuevoNombre });
        alert('Género actualizado con éxito');
        window.location.href = 'gevt_listarGenero.html';
      } catch (error) {
        alert('Error al actualizar el género: ' + error.message);
      }
    } else {
      alert('Por favor, ingrese un nombre válido');
    }
  });
});