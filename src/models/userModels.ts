import pool from '../config/database';

interface User {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
}

// List all users
export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows as User[];
};

// Create a new user
export const createUser = async (user: User): Promise<User> => {
  const { name, email } = user;
  const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  const insertId = (result as any).insertId;
  return { id: insertId, name, email };
};

export default User;
