import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const crearMascotaGevt = async (req, res) => {
  const { NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt, estado } = req.body;
  try {
    const nuevaMascota = await prisma.mascotas.create({
      data: {
        NombreGevt,
        idrazasGevt,
        idcategoriasGevt,
        idgeneroGevt,
        estado
      }
    });
    res.json(nuevaMascota);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear mascota', error: error.message });
  }
};

export const listarMascotasGevt = async (req, res) => {
  try {
    const mascotas = await prisma.mascotas.findMany({
      include: {
        razasGevt: true,
        categoriasGevt: true,
        generoGevt: true
      }
    });
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar mascotas', error: error.message });
  }
};

export const buscarMascotaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    const mascota = await prisma.mascotas.findUnique({
      where: { idmascotasGevt: parseInt(id) },
      include: {
        razasGevt: true,
        categoriasGevt: true,
        generoGevt: true
      }
    });
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar mascota', error: error.message });
  }
};

export const actualizarMascotaGevt = async (req, res) => {
  const { id } = req.params;
  const { NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt, estado } = req.body;
  try {
    const mascotaActualizada = await prisma.mascotas.update({
      where: { idmascotasGevt: parseInt(id) },
      data: {
        NombreGevt,
        idrazasGevt,
        idcategoriasGevt,
        idgeneroGevt,
        estado
      }
    });
    res.json(mascotaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar mascota', error: error.message });
  }
};

export const eliminarMascotaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mascotas.delete({
      where: { idmascotasGevt: parseInt(id) }
    });
    res.json({ message: 'Mascota eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar mascota', error: error.message });
  }
};
