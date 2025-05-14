import express from 'express';
import dotenv from 'dotenv';
import openai from 'openai';
import authRoutes from './routes/auth.routes.js';
import chatRoutes from './routes/chat.routes.js';

const app = express();
app.use(express.json());
dotenv.config();

const PORT = 3000;

app.get('/', (req, res) => {

    res.send ("server running")
});

app.listen (PORT, () => {

    console.log ("server running")
});

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);