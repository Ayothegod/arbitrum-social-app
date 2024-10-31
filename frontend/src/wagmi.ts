import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { createStorage } from "wagmi";
import {
  anvil,
  arbitrum,
  arbitrumSepolia,
  hardhat,
  mainnet,
} from "wagmi/chains";

const projectId = import.meta.env.VITE_PUBLIC_PROJECT_ID as string;
const devTestnets = import.meta.env.VITE_PUBLIC_ONLY_ANVIL_HARDHAT_TESTNETS;
const enableTestnetInProd = import.meta.env.VITE_PUBLIC_ENABLE_TESTNETS

export const config = getDefaultConfig({
  appName: "Arbitrum Posting App",
  projectId: projectId,
  storage: createStorage({
    storage: localStorage,
  }),
  chains:
    devTestnets === "true"
      ? [anvil, hardhat]
      : [
          mainnet,
          arbitrum,
          arbitrumSepolia,
          ...(enableTestnetInProd === "true"
            ? [anvil]
            : []),
        ],
  ssr: false,
});
