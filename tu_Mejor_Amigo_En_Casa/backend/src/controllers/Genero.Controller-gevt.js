import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const crearGeneroGevt = async (req, res) => {
  const { NombreGevt } = req.body;
  try {
    const genero = await prisma.genero.create({
      data: { NombreGevt }
    });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear genero', error: error.message });
  }
};

export const listarGeneroGevt = async (req, res) => {
  try {
    const genero = await prisma.genero.findMany();
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar genero', error: error.message });
  }
};

export const buscarGeneroGevt = async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await prisma.genero.findUnique({
      where: { idgeneroGevt: parseInt(id) }
    });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar genero', error: error.message });
  }
};
export const actualizarGeneroGevt = async (req, res) => {
  const { id } = req.params;
  const { NombreGevt } = req.body;
  try {
    const genero = await prisma.genero.update({
      where: { idgeneroGevt: parseInt(id) },
      data: { NombreGevt }
    });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar genero', error: error.message });
  }
};

export const eliminarGeneroGevt = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.genero.delete({
      where: { idgeneroGevt: parseInt(id) }
    });
    res.json({ message: 'Genero eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar genero', error: error.message });
  }
};