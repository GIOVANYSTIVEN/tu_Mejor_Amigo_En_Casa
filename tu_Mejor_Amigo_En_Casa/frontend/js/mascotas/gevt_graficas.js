import {
  gevtObtenerMascotas,
  gevtDescargarReporteMascotas,
  gevtDescargarReporteMascotasPorEstado
} from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '..//frontend/index.html'; 
  }

  const ctxCategorias = document.getElementById('graficaCategorias').getContext('2d');
  const ctxEstados = document.getElementById('graficaEstados').getContext('2d');
  const tipoSeleccion = document.getElementById('tipoSeleccion');
  const descargarBtn = document.getElementById('descargarBtn');
  const mensajeError = document.getElementById('mensajeError');

  let graficasCreadas = false;

  const colores = [
    '#4B8FE2',
    '#5DCB7B',
    '#FFB347',
    '#FF6F61',
    '#9B59B6',
    '#F39C12'
  ];

  const cargarGraficas = async () => {
    try {
      const mascotas = await gevtObtenerMascotas();

      // Grafica de Categorias
      const categorias = {};
      mascotas.forEach(m => {
        const categoria = m.categoriasGevt?.NombreGevt || 'Sin categoria';
        categorias[categoria] = (categorias[categoria] || 0) + 1;
      });

      new Chart(ctxCategorias, {
        type: 'bar',
        data: {
          labels: Object.keys(categorias),
          datasets: [{
            label: 'Cantidad de Mascotas',
            data: Object.values(categorias),
            backgroundColor: colores,
            borderColor: colores.map(c => c),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Cantidad', color: 'white' }, ticks: { color: 'white' } },
            x: { title: { display: true, text: 'Categorias', color: 'white' }, ticks: { color: 'white' } }
          },
          plugins: {
            legend: { labels: { color: 'white' } }
          }
        }
      });

      // Grafica de Estados
      const estados = {};
      mascotas.forEach(m => {
        const estado = m.estado ? m.estado.toUpperCase() : 'PENDIENTE';  
        estados[estado] = (estados[estado] || 0) + 1;
      });

      // Validar que haya estados para mostrar
      if (Object.keys(estados).length === 0) {
        mensajeError.textContent = 'No hay estados disponibles para mostrar en la grafica.';
        return;
      }

      new Chart(ctxEstados, {
        type: 'pie',
        data: {
          labels: Object.keys(estados),
          datasets: [{
            data: Object.values(estados),
            backgroundColor: colores.slice(0, Object.keys(estados).length)
          }]
        },
        options: {
          plugins: {
            legend: { position: 'bottom', labels: { color: 'white' } }
          }
        }
      });

      graficasCreadas = true;
    } catch (error) {
      mensajeError.textContent = 'Error al cargar las graficas: ' + error.message;
      console.error('Error al cargar graficas:', error);
    }
  };

  await cargarGraficas();

  descargarBtn.addEventListener('click', async () => {
    const tipo = tipoSeleccion.value;
    try {
      if (tipo === 'reportes') {
        const estado = prompt('Ingrese el estado (ADOPTADO o PENDIENTE) o deje en blanco para reporte completo:')?.trim().toUpperCase();
        if (estado && estado !== 'ADOPTADO' && estado !== 'PENDIENTE') {
          throw new Error('Estado invalido. Use ADOPTADO o PENDIENTE.');
        }
        if (estado) {
          await gevtDescargarReporteMascotasPorEstado(estado);
          mensajeError.textContent = `Reporte por estado (${estado}) descargado exitosamente.`;
        } else {
          await gevtDescargarReporteMascotas();
          mensajeError.textContent = 'Reporte completo descargado exitosamente.';
        }
      } else if (tipo === 'graficas') {
        if (!graficasCreadas) await cargarGraficas();
        const canvas1 = document.getElementById('graficaCategorias');
        const canvas2 = document.getElementById('graficaEstados');

        const link1 = document.createElement('a');
        link1.href = canvas1.toDataURL('image/png');
        link1.download = 'grafica_categorias.png';
        link1.click();

        const link2 = document.createElement('a');
        link2.href = canvas2.toDataURL('image/png');
        link2.download = 'grafica_estados.png';
        link2.click();

        mensajeError.textContent = 'Graficas descargadas exitosamente.';
      }
    } catch (error) {
      mensajeError.textContent = 'Error al descargar: ' + error.message;
      console.error('Error al descargar:', error);
    }
  });
});