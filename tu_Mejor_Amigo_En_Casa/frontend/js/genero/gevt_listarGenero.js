import { gevtObtenerGenero, gevtCrearGenero, gevtActualizarGenero, gevtEliminarGenero } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('formGenero');
  const nombre = document.getElementById('nombre');
  const generoId = document.getElementById('generoId');
  const lista = document.getElementById('listaGeneros');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  await gevtCargarGeneros();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { nombre: nombre.value };

    try {
      if (generoId.value) {
        await gevtActualizarGenero(generoId.value, data);
      } else {
        await gevtCrearGenero(data);
      }

      form.reset();
      generoId.value = '';
      await gevtCargarGeneros();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  async function gevtCargarGeneros() {
    lista.innerHTML = '';
    const generos = await gevtObtenerGenero();

    generos.forEach(g => {
      const li = document.createElement('li');

      const spanNombre = document.createElement('span');
      spanNombre.textContent = g.nombre;
      spanNombre.className = 'nombre-genero';

      const acciones = document.createElement('div');
      acciones.className = 'btn-acciones';

      const btnEditar = document.createElement('button');
      btnEditar.innerHTML = `<img src="../../assets/btn-edit.svg" alt="Editar">`;
      btnEditar.onclick = () => {
        window.location = `gevt_editarGenero.html?id=${g.id}`;
      };

      const btnEliminar = document.createElement('button');
      btnEliminar.innerHTML = `<img src="../../assets/btn-delete.svg" alt="Eliminar">`;
      btnEliminar.onclick = async () => {
        if (confirm('¿Estás seguro de eliminar este género?')) {
          await gevtEliminarGenero(g.id);
          await gevtCargarGeneros();
        }
      };

      acciones.appendChild(btnEditar);
      acciones.appendChild(btnEliminar);

      li.appendChild(spanNombre);
      li.appendChild(acciones);
      lista.appendChild(li);
    });
  }
});