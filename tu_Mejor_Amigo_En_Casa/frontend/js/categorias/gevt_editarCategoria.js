import { gevtObtenerCategorias, gevtActualizarCategoria } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoriaId = urlParams.get('id');
  const inputNombre = document.getElementById('nombre');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  if (categoriaId) {
    try {
      const categorias = await gevtObtenerCategorias();
      const categoria = categorias.find(c => c.id == categoriaId);

      if (categoria) {
        inputNombre.value = categoria.nombre;
      } else {
        alert('Categoría no encontrada');
        window.location.href = 'gevt_listarCategorias.html';
      }
    } catch (error) {
      alert('Error al cargar la categoría: ' + error.message);
      window.location.href = 'gevt_listarCategorias.html';
    }
  }

  document.getElementById('formEditarCategoria').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoNombre = inputNombre.value;

    if (categoriaId && nuevoNombre) {
      try {
        await gevtActualizarCategoria(categoriaId, { nombre: nuevoNombre });
        alert('Categoría actualizada con éxito');
        window.location.href = 'gevt_listarCategorias.html';
      } catch (error) {
        alert('Error al actualizar la categoría: ' + error.message);
      }
    } else {
      alert('Por favor, ingrese un nombre válido');
    }
  });
});