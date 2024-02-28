import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
