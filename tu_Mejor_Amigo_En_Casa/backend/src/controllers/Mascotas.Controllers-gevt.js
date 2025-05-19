import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const validarEstado = (estado) => {
  const estadosValidos = ['ADOPTADO', 'PENDIENTE'];
  return estadosValidos.includes(estado) ? estado : 'PENDIENTE';
};

const validarCoordenadas = (latitude, longitude) => {
  if (!latitude && !longitude) return { latitude: null, longitude: null };
  if (latitude === '' || longitude === '' || latitude === undefined || longitude === undefined) {
    return { latitude: null, longitude: null }; // Manejar valores vacíos o undefined
  }
  if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
    throw new Error('Latitud o longitud no son valores numéricos válidos');
  }
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    throw new Error('Coordenadas fuera de rango válido (lat: -90 a 90, lon: -180 a 180)');
  }
  return { latitude: lat, longitude: lon };
};

export const crearMascotaGevt = async (req, res) => {
  try {
    const { NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt, estado, latitude, longitude } = req.body;
    const Foto = req.file?.filename;

    if (!req.file) {
      return res.status(400).json({ message: 'Debe subir una imagen' });
    }

    const coordenadas = validarCoordenadas(latitude, longitude);

    const nuevaMascota = await prisma.mascotas.create({
      data: {
        NombreGevt,
        idrazasGevt: parseInt(idrazasGevt),
        idcategoriasGevt: parseInt(idcategoriasGevt),
        idgeneroGevt: parseInt(idgeneroGevt),
        estado: validarEstado(estado),
        Foto,
        ...coordenadas,
      },
    });
    res.json(nuevaMascota);
  } catch (error) {
    console.error('Error al crear mascota:', error);
    res.status(500).json({ message: 'Error al crear mascota', error: error.message });
  }
};

export const listarMascotasGevt = async (req, res) => {
  try {
    const mascotas = await prisma.mascotas.findMany({
      include: {
        Razas: true,
        Categorias: true,
        Genero: true,
      },
    });
    res.json(mascotas);
  } catch (error) {
    console.error('Error al listar mascotas:', error);
    res.status(500).json({ message: 'Error al listar mascotas', error: error.message });
  }
};

export const buscarMascotaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    const mascota = await prisma.mascotas.findUnique({
      where: { idmascotasGevt: parseInt(id) },
      include: {
        Razas: true,
        Categorias: true,
        Genero: true,
      },
    });
    res.json(mascota);
  } catch (error) {
    console.error('Error al buscar mascota:', error);
    res.status(500).json({ message: 'Error al buscar mascota', error: error.message });
  }
};

export const actualizarMascotaGevt = async (req, res) => {
  try {
    const { id } = req.params;
    const { NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt, estado, latitude, longitude } = req.body;
    const Foto = req.file?.filename;

    console.log('Datos recibidos en el backend:', {
      id,
      NombreGevt,
      idrazasGevt,
      idcategoriasGevt,
      idgeneroGevt,
      estado,
      latitude,
      longitude,
      Foto,
    });

    // Validar que los campos necesarios estén presentes
    if (!NombreGevt || !idrazasGevt || !idcategoriasGevt || !idgeneroGevt) {
      return res.status(400).json({ message: 'Faltan campos obligatorios (NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt)' });
    }

    const coordenadas = validarCoordenadas(latitude, longitude);

    // Validar que los IDs sean números válidos
    const razaId = parseInt(idrazasGevt);
    const categoriaId = parseInt(idcategoriasGevt);
    const generoId = parseInt(idgeneroGevt);
    if (isNaN(razaId) || isNaN(categoriaId) || isNaN(generoId)) {
      return res.status(400).json({ message: 'Los IDs de raza, categoría o género no son válidos' });
    }

    // Verificar que los IDs existan en la base de datos
    const raza = await prisma.razas.findUnique({ where: { idrazasGevt: razaId } });
    const categoria = await prisma.categorias.findUnique({ where: { idcategoriasGevt: categoriaId } });
    const genero = await prisma.genero.findUnique({ where: { idgeneroGevt: generoId } });

    if (!raza) return res.status(400).json({ message: `Raza con ID ${razaId} no encontrada` });
    if (!categoria) return res.status(400).json({ message: `Categoría con ID ${categoriaId} no encontrada` });
    if (!genero) return res.status(400).json({ message: `Género con ID ${generoId} no encontrado` });

    const dataActualizada = {
      NombreGevt,
      idrazasGevt: razaId,
      idcategoriasGevt: categoriaId,
      idgeneroGevt: generoId,
      estado: validarEstado(estado),
      ...coordenadas,
    };

    if (Foto) {
      dataActualizada.Foto = Foto;
    }

    const mascotaActualizada = await prisma.mascotas.update({
      where: { idmascotasGevt: parseInt(id) },
      data: dataActualizada,
    });

    res.json(mascotaActualizada);
  } catch (error) {
    console.error('Error al actualizar mascota:', error);
    res.status(500).json({ message: 'Error al actualizar mascota', error: error.message });
  }
};

export const eliminarMascotaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mascotas.delete({
      where: { idmascotasGevt: parseInt(id) },
    });
    res.json({ message: 'Mascota eliminada' });
  } catch (error) {
    console.error('Error al eliminar mascota:', error);
    res.status(500).json({ message: 'Error al eliminar mascota', error: error.message });
  }
};