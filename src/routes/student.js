import { Router } from 'express';
import studentController from '../controllers/Student';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', loginRequired, studentController.store);
router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.delete('/:id', loginRequired, studentController.delete);

export default router;
