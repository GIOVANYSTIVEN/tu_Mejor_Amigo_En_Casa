// backend/controllers/Reportes.controller-gevt.js
import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';

const prisma = new PrismaClient();

export const gevtGenerarReporteMascotas = async (req, res) => {
    try {
        console.log('Iniciando generación de reporte completo...');

        const mascotas = await prisma.mascotas.findMany({
            include: { Razas: true, Categorias: true, Genero: true },
        });

        const resumenEstado = await prisma.mascotas.groupBy({
            by: ['estado'],
            _count: { estado: true },
        });

        if (!mascotas || mascotas.length === 0) {
            console.log('No se encontraron mascotas para generar el reporte.');
            return res.status(404).json({ error: 'No se encontraron mascotas para generar el reporte' });
        }

        console.log('Mascotas encontradas:', mascotas.length);
        console.log('Resumen de estados:', resumenEstado);

        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=reporte_mascotas.pdf');
        doc.pipe(res);

        // Título
        doc.fontSize(18).fillColor('#223A78').text('Reporte de Mascotas', { align: 'center' });
        doc.moveDown(1);

        // Resumen por estado
        doc.fontSize(14).fillColor('#000000').text('Resumen por Estado:', { underline: true });
        doc.moveDown(0.5);
        resumenEstado.forEach((estado) => {
            doc.fontSize(12).text(`- ${estado.estado}: ${estado._count.estado} mascotas`);
        });
        doc.moveDown(1.5);

        // Lista de mascotas
        doc.fontSize(14).text('Detalles de Mascotas:', { underline: true });
        doc.moveDown(0.5);

        let yPosition = doc.y;
        mascotas.forEach((mascota, index) => {
            doc.fontSize(12).text(`Mascota ${index + 1}:`);
            doc.text(`  Nombre: ${mascota.NombreGevt || 'Sin nombre'}`);
            doc.text(`  Raza: ${mascota.Razas?.NombreGevt || 'Sin raza'}`);
            doc.text(`  Categoría: ${mascota.Categorias?.NombreGevt || 'Sin categoría'}`);
            doc.text(`  Género: ${mascota.Genero?.NombreGevt || 'Sin género'}`);
            doc.text(`  Estado: ${mascota.estado || 'Sin estado'}`);
            doc.moveDown(0.5);

            yPosition = doc.y;
            if (yPosition > 700) {
                doc.addPage();
                yPosition = 50;
                doc.fontSize(14).text('Detalles de Mascotas:', { underline: true });
                doc.moveDown(0.5);
            }
        });

        doc.end();
        console.log('Reporte completo generado exitosamente.');
    } catch (error) {
        console.error('Error en la generación del reporte completo:', error);
        res.status(500).json({ error: 'Error al generar el reporte: ' + error.message });
    }
};

export const gevtGenerarReporteMascotasPorEstado = async (req, res) => {
    try {
        console.log('Iniciando generación de reporte por estado...');

        const { estado } = req.query;
        if (!estado || !['ADOPTADO', 'PENDIENTE'].includes(estado)) {
            console.log('Estado inválido:', estado);
            return res.status(400).json({ error: 'Estado inválido. Use ADOPTADO o PENDIENTE' });
        }

        const mascotas = await prisma.mascotas.findMany({
            where: { estado },
            include: { Razas: true, Categorias: true, Genero: true },
        });

        if (!mascotas || mascotas.length === 0) {
            console.log(`No se encontraron mascotas con estado ${estado}`);
            return res.status(404).json({ error: `No se encontraron mascotas con estado ${estado}` });
        }

        console.log(`Mascotas encontradas con estado ${estado}:`, mascotas.length);

        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=reporte_mascotas_${estado.toLowerCase()}.pdf`);
        doc.pipe(res);

        doc.fontSize(18).fillColor('#223A78').text(`Reporte de Mascotas - Estado: ${estado}`, { align: 'center' });
        doc.moveDown(1);

        let yPosition = doc.y;
        mascotas.forEach((mascota, index) => {
            doc.fontSize(12).text(`Mascota ${index + 1}:`);
            doc.text(`  Nombre: ${mascota.NombreGevt || 'Sin nombre'}`);
            doc.text(`  Raza: ${mascota.Razas?.NombreGevt || 'Sin raza'}`);
            doc.text(`  Categoría: ${mascota.Categorias?.NombreGevt || 'Sin categoría'}`);
            doc.text(`  Género: ${mascota.Genero?.NombreGevt || 'Sin género'}`);
            doc.text(`  Estado: ${mascota.estado || 'Sin estado'}`);
            doc.moveDown(0.5);

            yPosition = doc.y;
            if (yPosition > 700) {
                doc.addPage();
                yPosition = 50;
                doc.fontSize(18).fillColor('#223A78').text(`Reporte de Mascotas - Estado: ${estado}`, { align: 'center' });
                doc.moveDown(1);
            }
        });

        doc.end();
        console.log(`Reporte por estado ${estado} generado exitosamente.`);
    } catch (error) {
        console.error('Error en la generación del reporte por estado:', error);
        res.status(500).json({ error: 'Error al generar el reporte: ' + error.message });
    }
};

export const gevtObtenerResumenEstado = async (req, res) => {
    try {
        const resumen = await prisma.mascotas.groupBy({
            by: ['estado'],
            _count: { estado: true },
        });
        console.log('Resumen de estados enviado:', resumen);
        res.json(resumen);
    } catch (error) {
        console.error('Error al obtener resumen:', error);
        res.status(500).json({ error: 'Error al obtener resumen: ' + error.message });
    }
};