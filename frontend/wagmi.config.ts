import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

const toTitleCase = (str: string) => {
	return str
    	.toLocaleLowerCase()
    	.replace(/\b\w/g, (char: string) => char.toUpperCase());
};

export default defineConfig({
	out: "src/contracts/generated.ts",
	contracts: [],
	plugins: [
    	foundry({
        	project: "../contract",
    	}),
    	react({
        	getHookName(options) {
            	return `use${toTitleCase(options.type)}${options.contractName}${options.itemName}`;
        	},

    	}),
	],
});