import { Request, Response, NextFunction } from 'express';
import { User } from '@prisma/client'; // Assuming this is how you've structured your User model

export const paymentRequired = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (!user) {
        return res.status(403).render('error', { message: 'Authentication required' });
    }

    const balance: bigint = user.balance;
    if (balance <= BigInt(0)) {
        return res.status(403).render('error', { message: 'Payment Required' });
    }

    next();
};
