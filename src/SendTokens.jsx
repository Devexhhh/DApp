import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export const SendTokens = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const sendToken = async () => {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (
        <>
            <div className="flex flex-row gap-2">
                <input id="to" type="text" placeholder="To" className="border rounded-sm px-3 py-1"></input>
                <input id="amount" type="text" placeholder="Amount" className="border rounded-sm px-3 py-1"></input>
                <button onClick={sendToken} className="cursor-pointer font-semibold border px-3 py-1 rounded-sm bg-violet-800 text-white">Send Tokens</button>
            </div>
        </>
    )
}

