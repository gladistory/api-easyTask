import pool from '../config/database';
// List all users
export const getAllUsers = async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
};
// Create a new user
export const createUser = async (user) => {
    const { name, email } = user;
    const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    const insertId = result.insertId;
    return { id: insertId, name, email };
};
