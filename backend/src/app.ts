import express, { Express } from 'express';
import session from 'express-session';
import passport from 'passport';
import './passportConfig';
import authRoutes from './routes/authRoutes';
import cors from 'cors';
import paymentRoutes from './routes/paymentRoutes';
import userRoutes from './routes/userRoutes';
import { isAuthenticated } from './middleware/isAuthenticated';
import path from 'path'
import { paymentRequired } from './middleware/paymentRequired';

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
    origin: ['https://dev-v2gllyit6a-uc.a.run.app'],
    credentials: true
}));

app.use(express.static('public'));
app.use('/auth', authRoutes);
app.use('/payment', isAuthenticated, paymentRoutes)
app.use('/user', isAuthenticated, userRoutes)

app.get('/login', (req, res) => {
    res.render('template', { page: 'login', title: 'Login', user: req.user });
});

app.get('/register', (req, res) => {
    res.render('template', { page: 'register', title: 'Register', user: req.user });
});

app.get('/', (req, res) => {
    res.render('template', { page: 'home', title: 'Home', user: req.user });
});

app.get('/payment', isAuthenticated, (req, res) => {
    const serverWallet = process.env.WALLET_ADDRESS;
    res.render('template', { page: 'payment', title: 'Payment', user: req.user, serverWallet: serverWallet });
});

app.get('/articles/article1', isAuthenticated, paymentRequired, (req, res) => {
    res.render('template', { page: 'articles/article1_full', title: 'Article 1', user: req.user });
});

app.get('/articles/article2', isAuthenticated, paymentRequired, (req, res) => {
    res.render('template', { page: 'articles/article2_full', title: 'Article 2', user: req.user });
});

app.get('/articles/article3', isAuthenticated, paymentRequired, (req, res) => {
    res.render('template', { page: 'articles/article3_full', title: 'Article 3', user: req.user });
});

export default app;