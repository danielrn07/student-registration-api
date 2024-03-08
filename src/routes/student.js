import { Router } from 'express';
import studentController from '../controllers/Student';

const router = new Router();

router.post('/', studentController.store);

export default router;
