import rateLimit from "express-rate-limit";

export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
        message: "Too many login attempts. Please try again after 15 minutes.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
export const registerRateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
    message: {
        message: "Too many registration attempts. Try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export const refreshRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20,
    message: {
        message: "Too many refresh attempts. Please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});


export const generalApiRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100,
    message: {
        message: "Too many requests. Slow down and try again shortly.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
