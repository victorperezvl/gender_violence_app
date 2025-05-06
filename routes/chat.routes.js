import express from 'express';
const router = express.Router();
import { handleChat } from '../controllers/chat.controller';    
import { authMiddleware } from '../middlewares/auth.middlewares';

router.post('/chat', authMiddleware, handleChat); 

export default router;