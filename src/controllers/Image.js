import multer from 'multer';
import multerConfig from '../config/multer';
import ImageModel from '../models/Image';

const upload = multer(multerConfig).single('image');

class Image {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      const image = await ImageModel.create({ originalname, filename, student_id });

      return res.json(image);
    });
  }
}

export default new Image();
