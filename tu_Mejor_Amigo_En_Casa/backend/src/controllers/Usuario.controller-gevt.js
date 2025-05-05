import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const registrarUsuarioGevt = async (req, res) => {
  const { CorreoGevt, Nombre_completoGevt, PasswordGevt } = req.body;

  if (!CorreoGevt || !Nombre_completoGevt || !PasswordGevt) {
    return res.status(400).json({ message: 'Identificación, nombre y contraseña son obligatorios' });
  }

  try {
    const usuario = await prisma.usuarios.create({
      data: {
        CorreoGevt,
        Nombre_completoGevt,
        PasswordGevt
      }
    });
    res.status(201).json({ message: 'Usuario registrado con éxito', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el Usuario' });
  }
};



