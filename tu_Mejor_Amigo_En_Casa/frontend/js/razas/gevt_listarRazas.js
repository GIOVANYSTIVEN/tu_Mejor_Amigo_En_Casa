import { gevtObtenerRazas, gevtCrearRaza, gevtActualizarRaza, gevtEliminarRaza } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('formRaza');
  const nombre = document.getElementById('nombre');
  const razaId = document.getElementById('razaId');
  const lista = document.getElementById('listaRazas');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  await gevtCargarRazas();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { nombre: nombre.value };

    try {
      if (razaId.value) {
        await gevtActualizarRaza(razaId.value, data);
      } else {
        await gevtCrearRaza(data);
      }

      form.reset();
      razaId.value = '';
      await gevtCargarRazas();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  async function gevtCargarRazas() {
    lista.innerHTML = '';
    const razas = await gevtObtenerRazas();

    razas.forEach(r => {
      const li = document.createElement('li');

      const spanNombre = document.createElement('span');
      spanNombre.textContent = r.nombre;
      spanNombre.className = 'nombre-raza';

      const acciones = document.createElement('div');
      acciones.className = 'btn-acciones';

      const btnEditar = document.createElement('button');
      btnEditar.innerHTML = `<img src="../../assets/btn-edit.svg" alt="Editar">`;
      btnEditar.onclick = () => {
        window.location = `gevt_editarRaza.html?id=${r.id}`;
      };

      const btnEliminar = document.createElement('button');
      btnEliminar.innerHTML = `<img src="../../assets/btn-delete.svg" alt="Eliminar">`;
      btnEliminar.onclick = async () => {
        if (confirm('¿Estás seguro de eliminar esta raza?')) {
          await gevtEliminarRaza(r.id);
          await gevtCargarRazas();
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