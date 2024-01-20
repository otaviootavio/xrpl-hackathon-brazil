import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import './passportConfig';
import authRoutes from './routes/authRoutes';
import cors from 'cors';
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
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/auth', authRoutes);

export default app;