import { Router } from 'express';
import studentController from '../controllers/Student';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', studentController.store);

export default router;
