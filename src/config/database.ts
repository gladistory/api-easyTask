import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Obtém a URL do MySQL do arquivo .env
const mysqlUrl = process.env.MYSQL_URL;

if (!mysqlUrl) {
  throw new Error('A variável de ambiente MYSQL_URL não está definida.');
}

// Cria o pool de conexões usando a URL
const pool = mysql.createPool(mysqlUrl);

// Testando a conexão
pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database using public URL');
    connection.release();
  })
  .catch((err) => {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1); // Finaliza a aplicação caso a conexão falhe
  });

export default pool;
