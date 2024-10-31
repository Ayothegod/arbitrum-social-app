// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { readContract } from "@wagmi/core";
// import { json } from "react-router-dom";
// import { ABI, deployedAddress } from "../contracts/deployed-contract";
// import type { PostDetails } from "../types/posts/types";
// import { config } from "../wagmi";


// export async function Loader() {
//   const postIdIncrement = (await readContract(config, {
//     abi: ABI,
//     address: deployedAddress,
//     functionName: "postIdIncrement",
//     args: [],
//   })) as bigint;

//   const posts: Promise<PostDetails | undefined>[] = [];
//   // the first post was already initialised with 0x000000000
//   for (let i = 1; i < postIdIncrement; i++) {
//     const post: Promise<PostDetails | undefined> = readContract(config, {
//       abi: ABI,
//       address: deployedAddress,
//       functionName: "getPost",
//       args: [BigInt(i)],
//     }) as Promise<PostDetails | undefined>;

//     posts.push(post);
//   }
//   const allPosts = await Promise.all(posts).then((values) => {
//     const binding = values.filter((post): post is PostDetails => !!post);
//     return binding;
//   });

//   return json(allPosts);
//   // return null;
// }