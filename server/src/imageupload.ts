
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const tempUploadDir = './uploads/temp';
const finalUploadDir = './uploads';

if (!fs.existsSync(tempUploadDir)) fs.mkdirSync(tempUploadDir, { recursive: true });
if (!fs.existsSync(finalUploadDir)) fs.mkdirSync(finalUploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempUploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueName = `${Date.now()}-${baseName}${ext}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG or PNG files are allowed.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

export async function convertToWebP(inputPath: string, outputName: string): Promise<string> {
  const outputPath = path.join(finalUploadDir, `${outputName}.webp`);

  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  
  return outputPath;
}

export default upload;
