import { gevtObtenerMascotas, gevtEliminarMascota } from '../api.js';

const BACKEND_URL = 'http://192.168.1.12:3000';

document.addEventListener('DOMContentLoaded', async () => {
  const listaMascotas = document.getElementById('listaMascotas');
  const mensajeError = document.getElementById('mensajeError');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  // Eventos tactiles para los botones de la barra superior
  const btnVolver = document.querySelector('.btn-superior.izquierda');
  const btnCerrar = document.querySelector('.btn-superior.derecha');

  if (btnVolver) {
    btnVolver.addEventListener('touchend', (e) => {
      e.preventDefault();
      history.back();
    });
  }

  if (btnCerrar) {
    btnCerrar.addEventListener('touchend', (e) => {
      e.preventDefault();
      window.location.href = '../../index.html';
    });
  }

  await gevtCargarMascotas();

  // Cargar lista de mascotas
  async function gevtCargarMascotas() {
    try {
      const mascotas = await gevtObtenerMascotas();
      listaMascotas.innerHTML = '';
      if (mascotas.length === 0) {
        mensajeError.textContent = 'No hay mascotas registradas';
        return;
      }
      mascotas.forEach(m => {
        const elementoMascota = document.createElement('div');
        elementoMascota.className = 'mascota-item-gevt';
        elementoMascota.innerHTML = `
          <img src="${m.Foto ? `${BACKEND_URL}/public/img/${m.Foto}` : '../../assets/default.jpg'}" alt="${m.NombreGevt}" class="foto-lista-mascota" onerror="this.src='../../assets/default.jpg'">
          <div class="info-mascota">
            <p class="nombre-mascota">${m.NombreGevt || 'Sin nombre'}</p>
            <p class="raza-mascota">${m.Razas?.NombreGevt || 'Sin raza'}</p>
          </div>
          <div class="acciones-mascota">
            <img src="../../assets/btn-show.svg" class="icono-accion" alt="Ver" onclick="window.location.href='gevt_consultarMascota.html?id=${m.idmascotasGevt}'">
            <img src="../../assets/btn-edit.svg" class="icono-accion" alt="Editar" onclick="window.location.href='gevt_editarMascota.html?id=${m.idmascotasGevt}'">
            <img src="../../assets/btn-delete.svg" class="icono-accion" alt="Eliminar" onclick="window.gevtEliminarMascota(${m.idmascotasGevt})">
          </div>
        `;
        // Eventos tactiles para las acciones
        const btnVer = elementoMascota.querySelector('img[alt="Ver"]');
        const btnEditar = elementoMascota.querySelector('img[alt="Editar"]');
        const btnEliminar = elementoMascota.querySelector('img[alt="Eliminar"]');

        btnVer.addEventListener('touchend', (e) => {
          e.preventDefault();
          window.location.href = `gevt_consultarMascota.html?id=${m.idmascotasGevt}`;
        });

        btnEditar.addEventListener('touchend', (e) => {
          e.preventDefault();
          window.location.href = `gevt_editarMascota.html?id=${m.idmascotasGevt}`;
        });

        btnEliminar.addEventListener('touchend', (e) => {
          e.preventDefault();
          window.gevtEliminarMascota(m.idmascotasGevt);
        });

        listaMascotas.appendChild(elementoMascota);
      });
    } catch (error) {
      mensajeError.textContent = 'Error al cargar las mascotas: ' + error.message;
      console.error('Error al cargar las mascotas:', error);
    }
  }

  window.gevtEliminarMascota = async (id) => {
    if (!confirm('Estas seguro de eliminar esta mascota?')) return;
    try {
      await gevtEliminarMascota(id);
      await gevtCargarMascotas();
    } catch (error) {
      mensajeError.textContent = 'Error al eliminar la mascota: ' + error.message;
      console.error('Error al eliminar:', error);
    }
  };
});