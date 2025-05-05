import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const crearRazaGevt = async (req, res) => {
  const { NombreGevt } = req.body;
  try {
    const raza = await prisma.razas.create({
      data: { NombreGevt }
    });
    res.json(raza);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear raza', error: error.message });
  }
};

export const listarRazaGevt = async (req, res) => {
  try {
    const razas = await prisma.razas.findMany();
    res.json(razas);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar razas', error: error.message });
  }
};

export const buscarRazaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    const raza = await prisma.razas.findUnique({
      where: { idrazasGevt: parseInt(id) }
    });
    res.json(raza);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar raza', error: error.message });
  }
};
export const actualizarRazaGevt = async (req, res) => {
  const { id } = req.params;
  const { NombreGevt } = req.body;
  try {
    const raza = await prisma.razas.update({
      where: { idrazasGevt: parseInt(id) },
      data: { NombreGevt }
    });
    res.json(raza);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar raza', error: error.message });
  }
};

export const eliminarRazaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.razas.delete({
      where: { idrazasGevt: parseInt(id) }
    });
    res.json({ message: 'Raza eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar raza', error: error.message });
  }
};