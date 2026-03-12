import React, { FC } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton, WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"
import { Airdrop } from "./Airdrop";
import { ShowSolBalance } from "./ShowBalance";
import { SendTokens } from "./SendTokens";
import { SignMessage } from "./SignMessage";

const endpoint = "https://solana-devnet.g.alchemy.com/v2/dhuFXA2gtsJsGgz7diJSo"

const App = () => {
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="w-max-7xl h-full mt-4 flex flex-col gap-2.5">
              <div className="flex flex-row gap-2 px-10">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="font-semibold text-2xl font-sans">Wallet adapter for DApp</div>
                <Airdrop />
                <ShowSolBalance />
                <SendTokens />
                <SignMessage />
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App