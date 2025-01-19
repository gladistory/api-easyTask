import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Criação do pool de conexões
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DB,
  port: Number(process.env.PORT) || 3001,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000,
});

pool.getConnection()
  .then(() => console.log('Connected to MySQL database'))
  .catch((err) => {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1); // Fecha a aplicação em caso de falha
  });

export default pool;
