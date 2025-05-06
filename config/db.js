import mysql from 'mysql2/promise';

async function db() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    });
    return connection;
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
    throw error;
  }
}

export default db;