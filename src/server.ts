import dotenv from 'dotenv';
import app from './app';

dotenv.config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


/*
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/tasks`);
});
*/