// This file handles the chat functionality for the AI psychologist application
import { messageToAI } from '../config/openai.js';

export async function handleChat(req, res) {
  const { userMessage, userId } = req.body;

  const messages = [
    {
      role: 'system',
      content:
        'Actúa como una psicóloga especializada en violencia de género. Da respuestas empáticas, evita consejos médicos y ofrece recursos reales.'
    },
    { role: 'user', content: userMessage }
  ];

  try {
    const aiResponse = await messageToAI(messages);
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Hubo un problema al procesar tu mensaje.' });
  }
};
