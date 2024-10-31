import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useRouteError } from "react-router-dom";

import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";

export default function Index() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.stackup}>StackUp</span> x{" "}
          <span className={styles.arbitrum}>Arbitrum</span> Forums
        </h1>
        <ConnectButton label="Sign In" />
        <br />
        <p className={styles.description}>
          {useAccount().isConnected && (
            <>
              You are connected. Head to our{" "}
              <Link className={styles.glitter} to="/forum">
                Forum
              </Link>{" "}
              now!
            </>
          )}
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          Step into Arbitrum campaign, brought to you by{" "}
          <a href="https://stackup.dev" target="_blank" rel="noreferrer">
            StackUp
          </a>{" "}
          ❤️ in partnership with{" "}
          <a href="https://arbitrum.io" rel="noreferrer" target="_blank">
            Arbitrum!
          </a>{" "}
          💙🧡
        </p>
      </footer>
    </div>
  );
}

export async function Loader() {
  return null;
}

export function RootError() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find this page.</p>

        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
}
