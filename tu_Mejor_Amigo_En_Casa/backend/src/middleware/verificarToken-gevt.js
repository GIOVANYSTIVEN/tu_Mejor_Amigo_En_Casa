import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY || 'clave_secreta_gevt';

const verificarToken = (req, res, next) => {
  try {
    const token = req.headers['token'] || req.headers['authorization'];

    if (!token) {
      return res.status(403).json({ 
        message: 'Token requerido',
        error: 'No se proporcionó un token de autenticación'
      });
    }

    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(actualToken, secretKey, (err, decoded) => {
      if (err) {
        let errorMessage = 'Token inválido';
        if (err.name === 'TokenExpiredError') {
          errorMessage = 'Token expirado';
        } else if (err.name === 'JsonWebTokenError') {
          errorMessage = 'Token malformado';
        }

        return res.status(401).json({ 
          message: errorMessage,
          error: err.message
        });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error en la autenticación',
      error: error.message
    });
  }
};

export default verificarToken;