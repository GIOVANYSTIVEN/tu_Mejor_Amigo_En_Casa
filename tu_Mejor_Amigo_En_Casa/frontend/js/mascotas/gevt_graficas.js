// frontend/js/mascotas/gevt_graficas.js
import { gevtObtenerMascotas, gevtObtenerResumenEstado, gevtObtenerReporteMascotasBlob, gevtObtenerReporteMascotasPorEstadoBlob, gevtDescargarReporteMascotas, gevtDescargarReporteMascotasPorEstado } from '../api.js';

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No se encontró el token. Redirigiendo al inicio.');
        window.location.href = '../../index.html';
        return;
    }

    const graficasContainer = document.getElementById('graficasContainer');
    const mapaContainer = document.getElementById('mapaContainer');
    const reportesContainer = document.getElementById('reportesContainer');
    const pdfPreviewContainer = document.getElementById('pdfPreviewContainer');
    const pdfPreview = document.getElementById('pdfPreview');
    const descargarReporte = document.getElementById('descargarReporte');
    const tipoSeleccion = document.getElementById('tipoSeleccion');
    const vistaPreviaReporteCompleto = document.getElementById('vistaPreviaReporteCompleto');
    const vistaPreviaReporteAdoptado = document.getElementById('vistaPreviaReporteAdoptado');
    const vistaPreviaReportePendiente = document.getElementById('vistaPreviaReportePendiente');
    const mensajeError = document.getElementById('mensajeError');

    let map = null;
    let chartCategorias = null;
    let chartEstados = null;
    let currentDownloadFunction = null;

    const loadGraficas = () => {
        if (chartCategorias) chartCategorias.destroy();
        if (chartEstados) chartEstados.destroy();

        Promise.all([gevtObtenerMascotas(), gevtObtenerResumenEstado()])
            .then(([mascotas, resumen]) => {
                console.log('Mascotas obtenidas para gráficas:', mascotas);
                console.log('Resumen de estados:', resumen);

                const categoriasMap = mascotas.reduce((acc, m) => {
                    const categoria = m.Categorias?.NombreGevt || 'Sin categoría';
                    acc[categoria] = (acc[categoria] || 0) + 1;
                    return acc;
                }, {});
                const ctxCategorias = document.getElementById('graficaCategorias').getContext('2d');
                chartCategorias = new Chart(ctxCategorias, {
                    type: 'bar',
                    data: {
                        labels: Object.keys(categoriasMap),
                        datasets: [{
                            label: 'Mascotas por Categoría',
                            data: Object.values(categoriasMap),
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } },
                        plugins: { legend: { labels: { color: '#ffffff' } } },
                        animation: { duration: 1000, easing: 'easeInOutQuad' },
                    },
                });

                const ctxEstados = document.getElementById('graficaEstados').getContext('2d');
                chartEstados = new Chart(ctxEstados, {
                    type: 'bar',
                    data: {
                        labels: resumen.map(r => r.estado),
                        datasets: [{
                            label: 'Mascotas por Estado',
                            data: resumen.map(r => r._count.estado),
                            backgroundColor: ['rgba(34, 58, 120, 0.6)', 'rgba(209, 46, 46, 0.6)'],
                            borderColor: ['rgba(34, 58, 120, 1)', 'rgba(209, 46, 46, 1)'],
                            borderWidth: 1,
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } },
                        plugins: { legend: { labels: { color: '#ffffff' } } },
                        animation: { duration: 1000, easing: 'easeInOutQuad' },
                    },
                });
            })
            .catch(error => {
                mensajeError.textContent = 'Error al cargar las gráficas: ' + error.message;
                console.error('Error al cargar gráficas:', error);
            });
    };

    const loadMapa = () => {
        if (map) {
            map.remove();
            map = null;
        }

        mapaContainer.style.height = '400px'; // Ajusta la altura según necesites

        map = L.map('map', {
            center: [4.60971, -74.08175], // Centro en Bogotá por defecto
            zoom: 10,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        gevtObtenerMascotas()
            .then(pets => {
                console.log('Mascotas obtenidas para el mapa:', pets);
                console.log("Coordenadas crudas:", pets.map(pet => ({
                    name: pet.NombreGevt,
                    lat: pet.latitude,
                    lon: pet.longitude
                })));

                const validPets = pets.filter(pet => {
                    const lat = parseFloat(pet.latitude);
                    const lon = parseFloat(pet.longitude);
                    const isValid = !isNaN(lat) && !isNaN(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
                    console.log(`Validando ${pet.NombreGevt}: lat=${lat}, lon=${lon}, válido=${isValid}`);
                    return isValid;
                });

                console.log("Mascotas con coordenadas válidas:", validPets);

                if (validPets.length === 0) {
                    mensajeError.textContent = 'No hay mascotas con coordenadas válidas para mostrar en el mapa.';
                    return;
                }

                validPets.forEach(pet => {
                    const lat = parseFloat(pet.latitude);
                    const lon = parseFloat(pet.longitude);
                    const marker = L.marker([lat, lon]).addTo(map).bindPopup(`
                        <b>${pet.NombreGevt}</b><br>
                        Raza: ${pet.Razas?.NombreGevt || "Sin raza"}<br>
                        Categoría: ${pet.Categorias?.NombreGevt || "Sin categoría"}<br>
                        Género: ${pet.Genero?.NombreGevt || "Sin género"}<br>
                        Estado: ${pet.estado || "Sin estado"}<br>
                        <a href="gevt_consultarMascota.html?id=${pet.idmascotasGevt}">Ver detalles</a>
                    `);
                    console.log(`Marcador agregado para ${pet.NombreGevt} en [${lat}, ${lon}]`, marker);
                });

                if (validPets.length > 0) {
                    const group = new L.featureGroup(
                        validPets.map(pet => L.marker([parseFloat(pet.latitude), parseFloat(pet.longitude)]))
                    );
                    map.fitBounds(group.getBounds(), { padding: [50, 50] });
                    console.log("Mapa ajustado a los límites de los marcadores");
                }
            })
            .catch(error => {
                mensajeError.textContent = 'Error al cargar el mapa: ' + error.message;
                console.error('Error al cargar mapa:', error);
            });
    };

    const loadVistaPreviaReporte = (fetchFunction, downloadFunction) => {
        fetchFunction()
            .then(blob => {
                if (!(blob instanceof Blob)) {
                    throw new Error('La respuesta no es un archivo Blob válido');
                }
                console.log('Blob recibido:', blob);
                if (blob.type !== 'application/pdf') {
                    throw new Error('El archivo recibido no es un PDF: ' + blob.type);
                }
                const blobUrl = URL.createObjectURL(blob);
                pdfPreview.src = blobUrl;
                pdfPreviewContainer.style.display = 'block';
                currentDownloadFunction = () => {
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = 'reporte.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(blobUrl);
                };
            })
            .catch(error => {
                mensajeError.textContent = 'Error al cargar la vista previa del PDF: ' + error.message;
                console.error('Error en vista previa:', error);
            });
    };

    tipoSeleccion.addEventListener('change', () => {
        const tipo = tipoSeleccion.value;
        mensajeError.textContent = '';
        pdfPreviewContainer.style.display = 'none';

        if (tipo === 'graficas') {
            graficasContainer.style.display = 'block';
            mapaContainer.style.display = 'none';
            reportesContainer.style.display = 'none';
            loadGraficas();
        } else if (tipo === 'mapa') {
            graficasContainer.style.display = 'none';
            mapaContainer.style.display = 'block';
            reportesContainer.style.display = 'none';
            loadMapa();
        } else {
            graficasContainer.style.display = 'none';
            mapaContainer.style.display = 'none';
            reportesContainer.style.display = 'block';
            if (map) map.remove();
            if (chartCategorias) chartCategorias.destroy();
            if (chartEstados) chartEstados.destroy();
        }
    });

    vistaPreviaReporteCompleto.addEventListener('click', () => {
        mensajeError.textContent = '';
        loadVistaPreviaReporte(gevtObtenerReporteMascotasBlob, gevtDescargarReporteMascotas);
    });

    vistaPreviaReporteAdoptado.addEventListener('click', () => {
        mensajeError.textContent = '';
        loadVistaPreviaReporte(
            () => gevtObtenerReporteMascotasPorEstadoBlob('ADOPTADO'),
            () => gevtDescargarReporteMascotasPorEstado('ADOPTADO')
        );
    });

    vistaPreviaReportePendiente.addEventListener('click', () => {
        mensajeError.textContent = '';
        loadVistaPreviaReporte(
            () => gevtObtenerReporteMascotasPorEstadoBlob('PENDIENTE'),
            () => gevtDescargarReporteMascotasPorEstado('PENDIENTE')
        );
    });

    descargarReporte.addEventListener('click', () => {
        if (currentDownloadFunction) {
            currentDownloadFunction();
        } else {
            mensajeError.textContent = 'Primero genera una vista previa para descargar';
        }
    });

    // Cargar gráficas por defecto al iniciar
    tipoSeleccion.value = 'graficas';
    graficasContainer.style.display = 'block';
    loadGraficas();
});