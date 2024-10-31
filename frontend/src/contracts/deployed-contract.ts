import type { Address } from "viem";
import { forumAbi } from "./generated";

const deployedAddress = import.meta.env
	.VITE_PUBLIC_DEPLOYED_CONTRACT_ADDRESS as Address;

// Type inference correctly
const ABI = forumAbi;
export { ABI, deployedAddress };