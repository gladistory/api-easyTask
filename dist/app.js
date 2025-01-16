import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.get('/api', (req, res) => {
    res.send('API is working. Use /api/users to interact with the endpoints.');
});
export default app;
