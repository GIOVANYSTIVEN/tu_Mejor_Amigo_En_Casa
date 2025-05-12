import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
const validarEstado = (estado) => {
  const estadosValidos = ['ADOPTADO', 'PENDIENTE'];
  return estadosValidos.includes(estado) ? estado : 'PENDIENTE';
};

export const crearMascotaGevt = async (req, res) => {
  try {
    const { NombreGevt, idrazasGevt, idcategoriasGevt, idgeneroGevt, estado } = req.body;
    const Foto = req.file?.filename;

    if (!req.file) {
      return res.status(400).json({ message: 'Debe subir una imagen' });
    }

    const nuevaMascota = await prisma.mascotas.create({
      data: {
        NombreGevt,
        idrazasGevt: parseInt(idrazasGevt),
        idcategoriasGevt: parseInt(idcategoriasGevt),
        idgeneroGevt: parseInt(idgeneroGevt),
        estado: validarEstado(estado),
        Foto
      }
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
        Genero: true
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
        Razas: true,
        Categorias: true,
        Genero: true
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
  const Foto = req.file?.filename;

  try {
    const dataActualizada = {
      NombreGevt,
      idrazasGevt: parseInt(idrazasGevt),
      idcategoriasGevt: parseInt(idcategoriasGevt),
      idgeneroGevt: parseInt(idgeneroGevt),
      estado: validarEstado(estado),  
    };

    if (Foto) dataActualizada.Foto = Foto;

    const mascotaActualizada = await prisma.mascotas.update({
      where: { idmascotasGevt: parseInt(id) },
      data: dataActualizada
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