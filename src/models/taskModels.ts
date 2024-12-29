import pool from '../config/database';
import { RowDataPacket } from 'mysql2/promise';

export interface Task {
    id?: number;
    title: string;
    description: string;
    time: string;
    status: string;
    created_at?: Date;
}

class taskModels {
    
    // List all tasks
    static getAllTasks = async (): Promise<Task[]> => {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows as Task[];
    }

    static findById = async (id: number): Promise<Task | null> => {
      // Especificamos que o retorno esperado é um array de objetos (RowDataPacket)
    const [rows] = await pool.execute<RowDataPacket[]>(
    'SELECT * FROM tasks WHERE id = ?',
    [id]
  );

  // Verificamos se existem resultados e retornamos o primeiro
  if (rows.length > 0) {
    return rows[0] as Task;
  }
  return null; // Se nenhum resultado for encontrado, retorna null
    };
  
// Create a new task
    static createTask = async (task: Task): Promise<Task> => {
    const { title, description, time, status } = task;
    const [result] = await pool.query('INSERT INTO tasks (title, description, time, status) VALUES (?, ?, ?, ?)', [title, description, time, status]);
    const insertId = (result as any).insertId;
    return { id: insertId, title, description, time, status };
    }
  
    // Deletar task por ID
    static async delete(id: number): Promise<boolean> {
      const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
      return (result as any).affectedRows > 0;
    }

     // Atualizar uma task por ID
    static async update(id: number, task: Task): Promise<boolean> {
    const [result] = await pool.query('UPDATE tasks SET title = ?, description = ?, time = ?, status = ? WHERE id = ?', [
      task.title,
      task.description,
      task.time,
      task.status,
      id,
    ]);
    return (result as any).affectedRows > 0;
  }
}  

export default taskModels;