import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const ShowSolBalance = () => {
    const { connection } = useConnection();
    const wallet = useWallet();

    const getBalance = async () => {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    getBalance();
    return (
        <div className="flex flex-row gap-2 text-l font-semibold">
            <p>SOL Balance: </p><div id="balance"></div>
        </div >
    )
}