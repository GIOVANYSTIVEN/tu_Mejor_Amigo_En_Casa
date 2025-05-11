import { gevtObtenerRazas, gevtObtenerCategorias, gevtObtenerGenero, gevtCrearMascota } from '../api.js';

const BACKEND_URL = 'http://192.168.1.12:3000';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  const mensajeError = document.getElementById('mensajeError');

  await gevtCargarSelects();

  document.getElementById('formAdicionarMascota').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('NombreGevt', document.getElementById('nombre').value);
    formData.append('idrazasGevt', document.getElementById('raza').value);
    formData.append('idcategoriasGevt', document.getElementById('categoria').value);
    formData.append('idgeneroGevt', document.getElementById('genero').value);
    formData.append('Foto', document.getElementById('foto').files[0]);

    try {
      await gevtCrearMascota(formData);
      window.location.href = 'gevt_listarMascotas.html';
    } catch (error) {
      mensajeError.textContent = 'Error al crear la mascota';
    }
  });

  // Cargar datos en los select
  async function gevtCargarSelects() {
    try {
      const [razas, categorias, generos] = await Promise.all([
        gevtObtenerRazas(),
        gevtObtenerCategorias(),
        gevtObtenerGenero()
      ]);

      const selectRaza = document.getElementById('raza');
      razas.forEach(r => {
        selectRaza.innerHTML += `<option value="${r.idrazasGevt}">${r.NombreGevt}</option>`;
      });

      const selectCategoria = document.getElementById('categoria');
      categorias.forEach(c => {
        selectCategoria.innerHTML += `<option value="${c.idcategoriasGevt}">${c.NombreGevt}</option>`;
      });

      const selectGenero = document.getElementById('genero');
      generos.forEach(g => {
        selectGenero.innerHTML += `<option value="${g.idgeneroGevt}">${g.NombreGevt}</option>`;
      });
    } catch (error) {
      mensajeError.textContent = 'Error al cargar los selectores';
    }
  }
});