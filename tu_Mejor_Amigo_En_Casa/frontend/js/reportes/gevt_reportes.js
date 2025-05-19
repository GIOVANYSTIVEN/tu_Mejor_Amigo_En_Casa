// frontend/js/reportes/gevt_reportes.js
import { gevtObtenerMascotas, gevtObtenerRazas } from '../api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '../index.html';

    try {
        const [mascotas, razas] = await Promise.all([gevtObtenerMascotas(), gevtObtenerRazas()]);

        const razasMap = razas.reduce((map, r) => {
            map[r.idrazasGevt] = r.NombreGevt;
            return map;
        }, {});

        const mascotasPorRaza = mascotas.reduce((acc, m) => {
            const razaNombre = razasMap[m.idrazasGevt] || 'Sin raza';
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
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true },
                },
                plugins: {
                    legend: {
                        labels: { color: '#000' },
                    },
                },
            },
        });

        document.getElementById('generarPdf').addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.text('Lista de Mascotas por Raza', 10, 10);
            mascotas.forEach((m, i) => {
                doc.text(`${i + 1}. ${m.NombreGevt} - Raza: ${razasMap[m.idrazasGevt] || 'Sin raza'}`, 10, 20 + (i * 10));
            });
            doc.save('mascotas_por_raza.pdf');
        });
    } catch (error) {
        alert('Error al cargar los reportes: ' + error.message);
        console.error('Error:', error);
    }
});