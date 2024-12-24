import { Request, Response } from 'express';
import TaskModels, {Task} from '../models/taskModels';
import taskModels from '../models/taskModels';


// Get all tasks
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await TaskModels.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};


// Create a new task
export const createTaskController = async (req: Request, res: Response): Promise<void> => {
  const { title, description, time, status } = req.body;

  if (!title || !description || !time || !status) {
    res.status(400).json({ message: 'title, description, time are required' });
    return;
  }

  try {
    const user = await TaskModels.createTask({ title, description, time, status });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

// Deletar/Concluir Task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await TaskModels.delete(Number(id));
    if (deleted) {
      res.json({ message: `Task with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ error: `Task with ID ${id} not found` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete Task' });
  }
};

// Atualizar tarefa
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, time, status } = req.body;

  if (!title || !description || !time || !status) {
    res.status(400).json({ error: 'Title, description, time, and status are required.' });
    return;
  }

  try {
    const updated = await TaskModels.update(Number(id), { title, description, time, status });
    if (updated) {
      res.json({ message: `Task with ID ${id} updated successfully` });
    } else {
      res.status(404).json({ error: `Task with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};



