import { Router } from 'express';
import { getTasks, createTaskController, deleteTask } from '../controllers/taskController';

const router = Router();

// Rotas existentes
router.get('/', getTasks);
router.post('/', createTaskController);
router.delete('/:id', deleteTask);

export default router;
