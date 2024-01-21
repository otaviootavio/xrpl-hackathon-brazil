import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated() && req.user) {
        const user = req.user as User;
        if ('id' in user) {
            return next();
        }
    }
    return res.status(403).render('error', { message: 'Authentication required' });
}