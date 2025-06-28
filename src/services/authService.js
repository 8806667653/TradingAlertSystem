import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findByUsername } from '../repositories/userRepository.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async ({ username, password }) => {
  const existing = await findByUsername(username);
  if (existing) throw new Error('User exists');
  const hashed = await bcrypt.hash(password, 10);
  const user = await createUser(username, hashed);
  return { id: user._id, username: user.username };
};

export const login = async ({ username, password }) => {
  const user = await findByUsername(username);
  if (!user) throw new Error('Invalid credentials');
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
};
