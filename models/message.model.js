import db from '../config/db.js';

export const insertMessage = async ( userId, message, response ) => {
    return db.query('INSERT INTO messages (user_id, message, response) VALUES (?, ?, ?)', [
        userId,
        message,
        response,
    ]);

};

export const deleteMessage = async ( userId ) => {
    return db.query('DELETE FROM messages WHERE user_id = ?', [
        userId,
    ]);
};

export const getMessages = async ( userId ) => {
    return db.query('SELECT * FROM messages WHERE user_id = ? ORDER BY created_at DESC', [
        userId,
    ]);
};