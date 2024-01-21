import { Request, Response } from "express";
import { User } from "@prisma/client";

export const getUserController = async (req: Request, res: Response) => {
    try {
        const user = req.user as User;
        const balance = (user.balance).toString()
        res.status(200).send({ username: user.username, balance: balance })
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during registration');
    }
}