import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount, useAccountEffect } from "wagmi";
import PostForm from "../components/PostForm";
import styles from "../styles/Custom.module.css";

export default function Forum() {
  const [account, setAccount] = useState(useAccount()?.address);
  useAccountEffect({
    onConnect(data) {
      setAccount(data.address);
    },
    onDisconnect() {
      console.log("Account Disconnected");
      setAccount(undefined);
    },
  });

  return (
    <>
      <div className={styles.main}>
        <header>
          <nav>
            <ConnectButton
              label={account === undefined ? "Connect Wallet To Post" : ""}
            />
          </nav>
        </header>

        <div>{account && <PostForm account={account} />}</div>
      </div>
    </>
  );
}
