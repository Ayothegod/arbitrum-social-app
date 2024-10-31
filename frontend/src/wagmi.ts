import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  arbitrumSepolia,
  mainnet,
  anvil,
  hardhat,
} from "wagmi/chains";

const projectId = "37995902ad353a1dfa24c6f0f1aea540" as string;

export const config = getDefaultConfig({
  appName: "Arbitrum Posting App",
  projectId: projectId,
  chains:
    process.env.NEXT_PUBLIC_ONLY_ANVIL_HARDHAT_TESTNETS === "true"
      ? [anvil, hardhat]
      : [
          mainnet,
          arbitrum,
          ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
            ? [arbitrumSepolia, anvil]
            : []),
        ],
  ssr: false,
});

// chains: [
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
// ],
