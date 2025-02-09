import express, { Application } from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks', taskRoutes);

app.get('/api', (req, res) => {
    res.send('API is working. Use /api/users to interact with the endpoints.');
  });

export default app;
