import dotenv from 'dotenv';
import app from './app';

// Carregar variáveis de ambiente
dotenv.config();

// Middleware para configurar headers de CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Ajuste para a origem que desejar
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Definir a porta, com fallback para 3306
const PORT = Number(process.env.PORT) || 3306;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/tasks`);
});
