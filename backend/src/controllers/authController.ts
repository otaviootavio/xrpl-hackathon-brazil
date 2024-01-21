import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { registerUser } from '../services/authService';
import { User } from '@prisma/client';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await registerUser(username, password);
        if (user) {
            res.redirect('/');
        } else {
            res.render('error', { message: 'Username already taken', status: 400 });
        }
    } catch (error) {
        console.error(error);
        res.render('error', { message: 'An error occurred during registration', status: 500 });
    }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: any, user: Express.User, info: { message: any; }) => {
        if (err) {
            return res.render('error', { message: 'An error occurred during login', status: 500 });
        }
        if (!user) {
            return res.render('error', { message: info.message, status: 401 });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.render('error', { message: 'An error occurred during login', status: 500 });
            }
            res.redirect('/');
        });
    })(req, res, next);
};



export const logout = (req: Request, res: Response) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/');
    });
};

export const status = (req: Request, res: Response) => {
    const user = req.user as User;
    if (req.isAuthenticated() && user && user.username) {
        res.json({ loggedIn: true, username: user.username });
    } else {
        res.json({ loggedIn: false });
    }
}