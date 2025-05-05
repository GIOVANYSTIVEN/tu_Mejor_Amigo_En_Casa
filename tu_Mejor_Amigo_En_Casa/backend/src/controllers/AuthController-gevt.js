import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = process.env.SECRET_KEY || 'clave_secreta_gevt';

export const loginGevt = async (req, res) => {
  const { CorreoGevt, PasswordGevt } = req.body;
  console.log('Datos recibidos:', { CorreoGevt, PasswordGevt });

  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { CorreoGevt }
    });

    console.log('Usuario encontrado:', usuario);

    if (!usuario || usuario.PasswordGevt !== PasswordGevt) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }


    const token = jwt.sign(
      { id: usuario.idusuariosGevt, correo: usuario.CorreoGevt },
      secretKey,
      { expiresIn: '2h' } 
    );

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno al iniciar sesión' });
  }
};
