import { ed25519 } from "@noble/curves/ed25519.js";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58"
import React from "react";

export const SignMessage = () => {
    const { publicKey, signMessage } = useWallet();

    const onClick = async () => {
        if (!publicKey) {
            alert("Wallet not connected!");
            return;
        }
        if (!signMessage) {
            alert("Wallet doesn't support message signing!");
            return;
        }
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            alert("Message signature invalid!");
            return;
        }
        alert(`Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <>
            <div className="flex flex-row gap-2">
                <input id="message" type="text" placeholder="Message" className="border rounded-sm px-29 py-1"></input>
                <button onClick={onClick} className="cursor-pointer font-semibold border px-3 py-1 rounded-sm bg-violet-800 text-white">Sign Message</button>
            </div>
        </>
    )
}