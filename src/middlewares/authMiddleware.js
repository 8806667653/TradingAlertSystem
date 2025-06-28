import jwt from 'jsonwebtoken';
import { findById } from '../repositories/userRepository.js';

const JWT_SECRET = process.env.JWT_SECRET;

export default async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await findById(decoded.id);
    if (!user) return res.status(401).json({ error: 'Invalid token' });
    req.user = { id: user._id, username: user.username };
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
