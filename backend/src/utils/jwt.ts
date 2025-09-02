import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

interface TokenPayload {
    id: string;
}

export const generateAccessToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const generateRefreshToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string): TokenPayload => {
    try {
        const payload = jwt.verify(token, JWT_SECRET) as TokenPayload;
        return payload;
    } catch (err) {
        throw new Error('Invalid access token');
    }
};

export const verifyRefreshToken = (token: string): TokenPayload => {
    try {
        const payload = jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
        return payload;
    } catch (err) {
        throw new Error('Invalid refresh token');
    }
};
