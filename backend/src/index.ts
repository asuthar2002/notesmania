import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/user.Router';
import authRoutes from './routes/auth.Router'
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API is running ');
});
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
