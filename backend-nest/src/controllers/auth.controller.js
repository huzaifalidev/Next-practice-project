import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { generateTokens } from '../utils/token.js';

const prisma = new PrismaClient();

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const tokens = generateTokens(user);
  res.status(201).json({ user: { id: user.id, email: user.email }, ...tokens });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const tokens = generateTokens(user);
  res.status(200).json({ user: { id: user.id, email: user.email }, ...tokens });
};
