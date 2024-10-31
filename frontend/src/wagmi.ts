import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, arbitrumSepolia, mainnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Arbitrum Posting App",
  projectId: "37995902ad353a1dfa24c6f0f1aea540",
  chains: [mainnet, arbitrum, arbitrumSepolia],
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
