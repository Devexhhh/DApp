import React, { FC } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton, WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"
import { Airdrop } from "./Airdrop";
import { ShowSolBalance } from "./ShowBalance";

const endpoint = "https://solana-devnet.g.alchemy.com/v2/dhuFXA2gtsJsGgz7diJSo"

const App = () => {
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="w-max-7xl h-full mt-4 flex flex-col gap-2.5 justify-center items-center">
              <WalletMultiButton />
              <WalletDisconnectButton />
              <div className="flex items-center text-2xl">Wallet Adapter For DApp  </div>
              <Airdrop />
              <ShowSolBalance />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App