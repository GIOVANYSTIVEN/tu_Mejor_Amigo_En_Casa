import { gevtObtenerMascotas, gevtObtenerRazas } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) window.location.href = '../index.html';

  try {
    const [mascotas, razas] = await Promise.all([gevtObtenerMascotas(), gevtObtenerRazas()]);

    const razasMap = razas.reduce((map, r) => {
      map[r.id] = r.nombre;
      return map;
    }, {});

    const mascotasPorRaza = mascotas.reduce((acc, m) => {
      const razaNombre = razasMap[m.RazaId] || 'Sin raza';
      acc[razaNombre] = (acc[razaNombre] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(mascotasPorRaza);
    const data = Object.values(mascotasPorRaza);

    const ctx = document.getElementById('graficaMascotasPorRaza').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Mascotas por Raza',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    document.getElementById('generarPdf').addEventListener('click', () => {
      const doc = new jspdf.jsPDF();
      doc.text('Lista de Mascotas', 10, 10);
      mascotas.forEach((m, i) => {
        doc.text(`${i + 1}. ${m.Nombre} - Raza: ${razasMap[m.RazaId] || 'Sin raza'}`, 10, 20 + (i * 10));
      });
      doc.save('mascotas.pdf');
    });
  } catch (error) {
    alert('Error al cargar los reportes');
  }
});