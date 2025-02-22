import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Criação do pool de conexões
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || '',
  database: process.env.MYSQL_DB || 'api_teste',
});

pool.getConnection()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Fecha a aplicação se o banco não conectar
  });

export default pool;