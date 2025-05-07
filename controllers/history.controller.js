// This file contains the controller functions for handling message history
import { deleteMessage, getMessages } from "../models/message.model.js";

// Delete message history 
export async function deleteHistory(req, res) {

  try {
    await deleteMessage(req.user.id);
    res.status(200).json({ message: "Historial de mensajes eliminado" });
  } catch (error) {
    console.error("Error al eliminar el historial:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Get message history
export async function getHistory(req, res) {
    try {
        const messages = await getMessages(req.user.id);
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error al obtener el historial:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};