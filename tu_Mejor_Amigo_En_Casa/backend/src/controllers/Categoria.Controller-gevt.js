import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const crearCategoriaGevt = async (req, res) => {
  const { NombreGevt } = req.body;
  try {
    const categoria = await prisma.categorias.create({
      data: { NombreGevt }
    });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoria', error: error.message });
  }
};

export const listarCategoriaGevt = async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar categorias', error: error.message });
  }
};

export const buscarCategoriaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await prisma.categorias.findUnique({
      where: { idcategoriasGevt: parseInt(id) }
    });

    if (!categoria) {
      return res.status(404).json({ message: 'Categoria no encontrada' });
    }

    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la categoria', error: error.message });
  }
};

export const actualizarCategoriaGevt = async (req, res) => {
  const { id } = req.params;
  const { NombreGevt } = req.body;
  try {
    const categoria = await prisma.categorias.update({
      where: { idcategoriasGevt: parseInt(id) },
      data: { NombreGevt }
    });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoria', error: error.message });
  }
};

export const eliminarCategoriaGevt = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.categorias.delete({
      where: { idcategoriasGevt: parseInt(id) }
    });
    res.json({ message: 'Categoria eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoria', error: error.message });
  }
};
