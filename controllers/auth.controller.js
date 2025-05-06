import db from '../config/db.js';
import bcrypt from 'bcrypt'; 
import { generateToken } from '../config/jwt.js';
import { verifyToken } from '../config/jwt.js';

export async function register(req, res) {
    const { email, password, name } = req.body;
  
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
  
    try {
      const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      if (existingUser.length > 0) {
        return res.status(409).json({ error: 'El usuario ya existe' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await db.query('INSERT INTO users (email, password, name) VALUES (?, ?, ?)', [
        email,
        hashedPassword,
        name,
      ]);
  
      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error('Error en el registro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  
  export async function login(req, res) {
    const { email, password } = req.body;
  
    if (!email || !password) return res.status(400).json({ error: 'Email y contraseña requeridos' });
  
    try {
      const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  
      if (users.length === 0) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      const user = users[0];
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      const token = generateToken({ id: user.id, email: user.email });
  
      res.status(200).json({
        message: 'Login exitoso',
        token,
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Error en el login:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }