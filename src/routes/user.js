import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);

export default router;
