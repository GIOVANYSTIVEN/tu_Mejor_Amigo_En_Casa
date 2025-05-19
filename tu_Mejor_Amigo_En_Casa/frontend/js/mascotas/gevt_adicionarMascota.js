import { gevtObtenerMascota, gevtActualizarMascota, gevtObtenerRazas, gevtObtenerCategorias, gevtObtenerGenero } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '../../index.html';
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  if (!id) {
    alert('ID de mascota no proporcionado');
    window.location.href = 'gevt_listarMascotas.html';
    return;
  }

  const formEditarMascota = document.getElementById('formEditarMascota');
  const mensajeError = document.getElementById('mensajeError');

  try {
    const [mascota, razas, categorias, generos] = await Promise.all([
      gevtObtenerMascota(id),
      gevtObtenerRazas(),
      gevtObtenerCategorias(),
      gevtObtenerGenero(),
    ]);

    document.getElementById('nombre').value = mascota.NombreGevt;
    document.getElementById('latitude').value = mascota.latitude || '';
    document.getElementById('longitude').value = mascota.longitude || '';

    const razaSelect = document.getElementById('raza');
    razas.forEach(raza => {
      const option = document.createElement('option');
      option.value = raza.idrazasGevt;
      option.textContent = raza.NombreGevt;
      if (raza.idrazasGevt === mascota.idrazasGevt) option.selected = true;
      razaSelect.appendChild(option);
    });

    const categoriaSelect = document.getElementById('categoria');
    categorias.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria.idcategoriasGevt;
      option.textContent = categoria.NombreGevt;
      if (categoria.idcategoriasGevt === mascota.idcategoriasGevt) option.selected = true;
      categoriaSelect.appendChild(option);
    });

    const generoSelect = document.getElementById('genero');
    generos.forEach(genero => {
      const option = document.createElement('option');
      option.value = genero.idgeneroGevt;
      option.textContent = genero.NombreGevt;
      if (genero.idgeneroGevt === mascota.idgeneroGevt) option.selected = true;
      generoSelect.appendChild(option);
    });

    const estadoSelect = document.getElementById('estado');
    estadoSelect.value = mascota.estado;

    formEditarMascota.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(formEditarMascota);
      const fotoInput = document.getElementById('foto');
      if (fotoInput.files.length > 0) {
        formData.append('Foto', fotoInput.files[0]);
      }

      try {
        const response = await gevtActualizarMascota(id, formData);
        alert('Mascota actualizada exitosamente');
        window.location.href = 'gevt_listarMascotas.html';
      } catch (error) {
        mensajeError.textContent = 'Error al actualizar: ' + error.message;
        console.error('Error al actualizar:', error);
      }
    });
  } catch (error) {
    mensajeError.textContent = 'Error al cargar los datos: ' + error.message;
    console.error('Error:', error);
  }
});