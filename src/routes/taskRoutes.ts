import { Router } from 'express';
import { getTasks, createTaskController, deleteTask, updateTask } from '../controllers/taskController';


const router = Router();

// Rotas existentes
router.get('/', getTasks);
router.post('/', createTaskController);
router.put('/:id', updateTask)
router.delete('/:id', deleteTask);

export default router;
