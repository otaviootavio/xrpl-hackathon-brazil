import { Prisma, PrismaClient, User } from "@prisma/client";
import { Client } from "xrpl";

const client = new Client('wss://s.altnet.rippletest.net:51233');
const prisma = new PrismaClient();

export const addBalanceToUserByTx = async (user: User, tx: string) => {
    await client.connect();

    const { result }: { result: any } = await client.request({
        "command": "tx",
        "transaction": tx,
        "binary": false
    });

    if (!result) throw new Error('Tx not found');
    // const account = result.Account
    const amount = BigInt(result.Amount) + user.balance
    const destination = result.Destination
    const serverWallet = process.env.WALLET_ADDRESS

    if (destination !== serverWallet) {
        throw new Error('The destination is not our server')
    }

    const username = user.username
    const { balance } = await prisma.user.update({ where: { username }, data: { balance: amount } })

    await client.disconnect();
    return { balance }
};

export const chargeUser = async (user: User) => {
    await client.connect();
    const tenSecondsInXrp: bigint = BigInt(process.env.TEN_SECONDS_IN_XRP || "1000")
    if (user.balance < tenSecondsInXrp) {
        return false
    }
    const username = user.username
    const newAmount = user.balance - tenSecondsInXrp
    await prisma.user.update({ where: { username }, data: { balance: newAmount } })

    await client.disconnect();
    return true
}