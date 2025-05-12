import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Controlador para generar el reporte en PDF lista completa
export const gevtGenerarReporteMascotas = async (req, res) => {
  try {
    console.log('Iniciando generacion de reporte...');

    // Obtener todas las mascotas con sus relaciones
    const mascotas = await prisma.mascotas.findMany({
      include: {
        Razas: true,
        Categorias: true,
        Genero: true,
      },
    });
    console.log('Datos obtenidos de la base de datos:', mascotas);

    if (!mascotas || mascotas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron mascotas para generar el reporte' });
    }

    // Crear un nuevo documento PDF
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const pdfPath = path.join(process.cwd(), 'reporte_mascotas.pdf');
    const stream = fs.createWriteStream(pdfPath);

    // Manejar errores si no se puede crear el stream
    stream.on('error', (err) => {
      console.error('Error al crear el stream:', err);
      throw new Error('No se pudo crear el archivo PDF');
    });

    doc.pipe(stream);

    // Titulo del reporte
    doc.fontSize(20).text('Reporte de Mascotas', { align: 'center' });
    doc.moveDown(1);

    // Encabezados de la tabla
    doc.fontSize(12).font('Helvetica-Bold');
    doc.text('Nombre', 50, 100);
    doc.text('Raza', 150, 100);
    doc.text('Categoria', 250, 100);
    doc.text('Genero', 350, 100);
    doc.text('Estado', 450, 100);
    doc.moveDown(1);

    // Linea separadora
    doc.moveTo(50, 120).lineTo(550, 120).stroke();

    // Datos de las mascotas
    let yPosition = 130;
    doc.font('Helvetica').fontSize(10);
    mascotas.forEach((mascota, index) => {
      doc.text(mascota.NombreGevt || 'Sin nombre', 50, yPosition);
      doc.text(mascota.Razas?.NombreGevt || 'Sin raza', 150, yPosition);
      doc.text(mascota.Categorias?.NombreGevt || 'Sin categoria', 250, yPosition);
      doc.text(mascota.Genero?.NombreGevt || 'Sin genero', 350, yPosition);
      doc.text(mascota.estado || 'Sin estado', 450, yPosition);

      yPosition += 20;

      // Añadir una linea divisoria despues de cada fila
      doc.moveTo(50, yPosition).lineTo(550, yPosition).stroke();
      yPosition += 10;

      // Si se llena la pagina, añadir una nueva pagina
      if (yPosition > 700) {
        doc.addPage();
        yPosition = 50;
        doc.fontSize(12).font('Helvetica-Bold');
        doc.text('Nombre', 50, 30);
        doc.text('Raza', 150, 30);
        doc.text('Categoria', 250, 30);
        doc.text('Genero', 350, 30);
        doc.text('Estado', 450, 30);
        doc.moveTo(50, 50).lineTo(550, 50).stroke();
        doc.font('Helvetica').fontSize(10);
        yPosition = 60;
      }
    });

    // Finalizar el PDF
    doc.end();

    // Enviar el archivo PDF como respuesta
    stream.on('finish', () => {
      console.log('PDF generado y listo para descargar:', pdfPath);
      res.download(pdfPath, 'reporte_mascotas.pdf', (err) => {
        if (err) {
          console.error('Error al enviar el PDF:', err);
          res.status(500).json({ error: 'Error al enviar el PDF' });
        }
        // Eliminar el archivo temporal despues de enviarlo
        fs.unlinkSync(pdfPath);
        console.log('Archivo temporal eliminado:', pdfPath);
      });
    });
  } catch (error) {
    console.error('Error en la generacion del reporte:', error);
    res.status(500).json({ error: 'Error al generar el reporte: ' + error.message });
  }
};

// Controlador para generar el reporte en PDF (filtrado por estado)
export const gevtGenerarReporteMascotasPorEstado = async (req, res) => {
  try {
    console.log('Iniciando generacion de reporte por estado...');

    const { estado } = req.query; // Filtrar por estado (ADOPTADO o PENDIENTE)
    if (!estado || !['ADOPTADO', 'PENDIENTE'].includes(estado)) {
      return res.status(400).json({ error: 'Estado invalido. Use ADOPTADO o PENDIENTE' });
    }

    // Obtener mascotas filtradas por estado
    const mascotas = await prisma.mascotas.findMany({
      where: { estado },
      include: {
        Razas: true,
        Categorias: true,
        Genero: true,
      },
    });
    console.log('Datos obtenidos de la base de datos:', mascotas);

    if (!mascotas || mascotas.length === 0) {
      return res.status(404).json({ error: `No se encontraron mascotas con estado ${estado}` });
    }

    // Crear un nuevo documento PDF
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const pdfPath = path.join(process.cwd(), `reporte_mascotas_${estado.toLowerCase()}.pdf`);
    const stream = fs.createWriteStream(pdfPath);

    stream.on('error', (err) => {
      console.error('Error al crear el stream:', err);
      throw new Error('No se pudo crear el archivo PDF');
    });

    doc.pipe(stream);

    // Titulo del reporte
    doc.fontSize(20).text(`Reporte de Mascotas - Estado: ${estado}`, { align: 'center' });
    doc.moveDown(1);

    // Encabezados de la tabla
    doc.fontSize(12).font('Helvetica-Bold');
    doc.text('Nombre', 50, 100);
    doc.text('Raza', 150, 100);
    doc.text('Categoria', 250, 100);
    doc.text('Genero', 350, 100);
    doc.text('Estado', 450, 100);
    doc.moveDown(1);

    // Linea divisoria
    doc.moveTo(50, 120).lineTo(550, 120).stroke();

    // Datos de las mascotas
    let yPosition = 130;
    doc.font('Helvetica').fontSize(10);
    mascotas.forEach((mascota, index) => {
      doc.text(mascota.NombreGevt || 'Sin nombre', 50, yPosition);
      doc.text(mascota.Razas?.NombreGevt || 'Sin raza', 150, yPosition);
      doc.text(mascota.Categorias?.NombreGevt || 'Sin categoria', 250, yPosition);
      doc.text(mascota.Genero?.NombreGevt || 'Sin genero', 350, yPosition);
      doc.text(mascota.estado || 'Sin estado', 450, yPosition);

      yPosition += 20;

      doc.moveTo(50, yPosition).lineTo(550, yPosition).stroke();
      yPosition += 10;

      if (yPosition > 700) {
        doc.addPage();
        yPosition = 50;
        doc.fontSize(12).font('Helvetica-Bold');
        doc.text('Nombre', 50, 30);
        doc.text('Raza', 150, 30);
        doc.text('Categoria', 250, 30);
        doc.text('Genero', 350, 30);
        doc.text('Estado', 450, 30);
        doc.moveTo(50, 50).lineTo(550, 50).stroke();
        doc.font('Helvetica').fontSize(10);
        yPosition = 60;
      }
    });

    // Finalizar el PDF
    doc.end();

    stream.on('finish', () => {
      console.log('PDF generado y listo para descargar:', pdfPath);
      res.download(pdfPath, `reporte_mascotas_${estado.toLowerCase()}.pdf`, (err) => {
        if (err) {
          console.error('Error al enviar el PDF:', err);
          res.status(500).json({ error: 'Error al enviar el PDF' });
        }
        fs.unlinkSync(pdfPath);
        console.log('Archivo temporal eliminado:', pdfPath);
      });
    });
  } catch (error) {
    console.error('Error en la generacion del reporte por estado:', error);
    res.status(500).json({ error: 'Error al generar el reporte: ' + error.message });
  }
};