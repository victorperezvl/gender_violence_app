// This file is responsible for the database operations related to messages
import db from '../config/db.js';

// Insert a new message into the database
export const insertMessage = async ( userId, message, response ) => {
    return db.query('INSERT INTO messages (user_id, message, response) VALUES (?, ?, ?)', [
        userId,
        message,
        response,
    ]);

};

// Delete all messages for a specific user
export const deleteMessage = async ( userId ) => {
    return db.query('DELETE FROM messages WHERE user_id = ?', [
        userId,
    ]);
};

// Get all messages for a specific user, ordered by creation date
export const getMessages = async ( userId ) => {
    return db.query('SELECT * FROM messages WHERE user_id = ? ORDER BY created_at DESC', [
        userId,
    ]);
};