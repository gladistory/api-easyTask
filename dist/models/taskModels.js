import pool from '../config/database';
class taskModels {
    // List all tasks
    static getAllTasks = async () => {
        const [rows] = await pool.query('SELECT * FROM tasks');
        return rows;
    };
    static findById = async (id) => {
        // Especificamos que o retorno esperado é um array de objetos (RowDataPacket)
        const [rows] = await pool.execute('SELECT * FROM tasks WHERE id = ?', [id]);
        // Verificamos se existem resultados e retornamos o primeiro
        if (rows.length > 0) {
            return rows[0];
        }
        return null; // Se nenhum resultado for encontrado, retorna null
    };
    // Create a new task
    static createTask = async (task) => {
        const { title, description, time, status } = task;
        const [result] = await pool.query('INSERT INTO tasks (title, description, time, status) VALUES (?, ?, ?, ?)', [title, description, time, status]);
        const insertId = result.insertId;
        return { id: insertId, title, description, time, status };
    };
    // Deletar task por ID
    static async delete(id) {
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
    // Atualizar uma task por ID
    static async update(id, task) {
        const [result] = await pool.query('UPDATE tasks SET title = ?, description = ?, time = ?, status = ? WHERE id = ?', [
            task.title,
            task.description,
            task.time,
            task.status,
            id,
        ]);
        return result.affectedRows > 0;
    }
}
export default taskModels;
