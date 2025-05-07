// This file is responsible for generating and verifying JWT tokens using the jsonwebtoken library
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_temporal';

export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
