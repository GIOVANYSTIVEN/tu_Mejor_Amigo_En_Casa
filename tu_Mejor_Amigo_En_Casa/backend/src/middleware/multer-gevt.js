import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'public/img',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `mascota_${Date.now()}${ext}`;
    cb(null, name);
  }
});

export const upload = multer({ storage });