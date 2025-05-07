import express from 'express';
const router = express.Router();
import { handleChat } from '../controllers/chat.controller.js';    
import { authMiddleware } from '../middlewares/auth.middlewares.js';

router.post('/chat', authMiddleware, handleChat); 

export default router;