// File for defining chat and history routes
import express from 'express';
const router = express.Router();
import { handleChat } from '../controllers/chat.controller.js';    
import { authMiddleware } from '../middlewares/auth.middlewares.js';
import { getHistory, deleteHistory } from '../controllers/history.controller.js';

// Chat routes
router.post('/message', authMiddleware, handleChat); 

// History routes
router.delete('/history', authMiddleware, deleteHistory);
router.get('/history', authMiddleware, getHistory);

export default router;