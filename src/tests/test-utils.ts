
import jwt from 'jsonwebtoken';

import { config } from 'dotenv';
config();

const JWT_SECRET = process.env.JWT_SECRET || 'a8ebdce345efdc7120145b584945d245fc0091e9e78c58f9acaaa2a4b075e0a6';

export const generateTestToken = (payload: object = { id: 'test-id', userType: 'User' }) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};
