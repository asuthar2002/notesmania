import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};
export const generateRefreshToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
}
export const verifyAccessToken = (token: string): string | jwt.JwtPayload => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error) {
        throw new Error('Invalid access token');
    }
}
export const verifyRefreshToken = (token: string): string | jwt.JwtPayload => {
    try {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
}   