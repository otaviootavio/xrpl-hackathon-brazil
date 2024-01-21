import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import './passportConfig';
import authRoutes from './routes/authRoutes';
import cors from 'cors';
import paymentRoutes from './routes/paymentRoutes';
import userRoutes from './routes/userRoutes';
import { isAuthenticated } from './middleware/isAuthenticated';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    credentials: true
}));

app.use('/auth', authRoutes);
app.use('/payment', isAuthenticated, paymentRoutes)
app.use('/user', isAuthenticated, userRoutes)

export default app;