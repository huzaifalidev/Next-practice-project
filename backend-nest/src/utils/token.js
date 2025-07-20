import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt.config.js';

export const generateTokens = (user) => {
  const payload = { userId: user.id, email: user.email };

  const accessToken = jwt.sign(payload, jwtConfig.accessTokenSecret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });

  const refreshToken = jwt.sign(payload, jwtConfig.refreshTokenSecret, {
    expiresIn: jwtConfig.refreshTokenExpiry,
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) =>
  jwt.verify(token, jwtConfig.accessTokenSecret);

export const verifyRefreshToken = (token) =>
  jwt.verify(token, jwtConfig.refreshTokenSecret);
