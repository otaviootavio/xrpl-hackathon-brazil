import { Request, Response } from "express";
import { addBalanceToUserByTx, chargeUser } from "../services/paymentService";
import { User } from "@prisma/client";

export const paymentByTxController = async (req: Request, res: Response) => {
    try {
        const { tx } = req.body
        const user = req.user as User;
        const { balance } = await addBalanceToUserByTx(user, tx);
        const name = user.username
        res.status(200).send({ balance: balance.toString(), name })
    } catch (error) {
        console.error(error);
        const errorMsg = error as Error
        res.status(500).send({ msg: 'An error occurred during registration', error: errorMsg.message });
    }
}


export const chargeUserController = async (req: Request, res: Response) => {
    try {
        const user = req.user as User;
        const hasCharged = await chargeUser(user);
        if (hasCharged) {
            return res.status(200).send({ hasCharged, msg: "User charged successfully" })
        } else {
            return res.status(403).send({ hasCharged, msg: "Failed to charge user" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during registration');
    }
}