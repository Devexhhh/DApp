import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export const Airdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const sendAirdropToUser = async () => {
        await connection.requestAirdrop(wallet.publicKey, 1000000000)
        alert("airdropped sol")
    }

    return (
        <>
            <div className="flex flex-row gap-2">
                <input type="text" placeholder="Amount" className="border rounded-sm px-3 py-1"></input>
                <button onClick={sendAirdropToUser} className="cursor-pointer font-semibold border px-3 py-1 rounded-sm bg-violet-800 text-white">Send Airdrop</button>
            </div>
        </>
    )
}