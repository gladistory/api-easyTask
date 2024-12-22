import { Router } from 'express';
import { getUsers, createUserController } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUserController);

export default router;
