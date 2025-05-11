import { gevtObtenerCategorias, gevtCrearCategoria, gevtActualizarCategoria, gevtEliminarCategoria } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('formCategoria');
  const nombre = document.getElementById('nombre');
  const categoriaId = document.getElementById('categoriaId');
  const lista = document.getElementById('listaCategorias');

  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  await gevtCargarCategorias();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { nombre: nombre.value };

    try {
      if (categoriaId.value) {
        await gevtActualizarCategoria(categoriaId.value, data);
      } else {
        await gevtCrearCategoria(data);
      }

      form.reset();
      categoriaId.value = '';
      await gevtCargarCategorias();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  async function gevtCargarCategorias() {
    lista.innerHTML = '';
    const categorias = await gevtObtenerCategorias();

    categorias.forEach(c => {
      const li = document.createElement('li');

      const spanNombre = document.createElement('span');
      spanNombre.textContent = c.nombre;
      spanNombre.className = 'nombre-categoria';

      const acciones = document.createElement('div');
      acciones.className = 'btn-acciones';

      const btnEditar = document.createElement('button');
      btnEditar.innerHTML = `<img src="../../assets/btn-edit.svg" alt="Editar">`;
      btnEditar.onclick = () => {
        window.location = `gevt_editarCategoria.html?id=${c.id}`;
      };

      const btnEliminar = document.createElement('button');
      btnEliminar.innerHTML = `<img src="../../assets/btn-delete.svg" alt="Eliminar">`;
      btnEliminar.onclick = async () => {
        if (confirm('¿Estás seguro de eliminar esta categoría?')) {
          await gevtEliminarCategoria(c.id);
          await gevtCargarCategorias();
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