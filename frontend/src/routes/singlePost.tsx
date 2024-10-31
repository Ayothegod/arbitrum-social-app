import { deployedAddress } from "../contracts/deployed-contract";
import { useEffect, useState } from "react";
import ShareablePostComponent from "../components/ShareablePostComponent";
import Comments from "../components/Comments";
import type { ParsedUrlQuery } from "node:querystring";
import { getAccount } from "@wagmi/core";
import { config } from "../wagmi";
import styles from "../styles/Custom.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadForumGetPost } from "../contracts/generated";
import CommentForm from "../components/CommentForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import Poll from "../components/Poll";

export interface PostIdParams extends ParsedUrlQuery {
  id: string;
}

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const account = getAccount(config);
  // const router = useRouter();
  const [postId, setPostId] = useState<string>("0");

  console.log("id:", id)

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
    if (id) {
      setPostId(id);
    }
    // const { id: postId } = id as PostIdParams;
  }, [navigate, id]);

  const { data: postDetails, isError: isErrorLoadingPost } =
    useReadForumGetPost({
      address: deployedAddress,
      args: [BigInt(Number.parseInt(postId?.trim(), 10))],
    });

  return (
    <>
      {postDetails?.id && (
        <div className={styles.main}>
          <ConnectButton />
          {isErrorLoadingPost && "Failed to load post"}
          <h3>
            <Link to="/forum">Go back to forum</Link>{" "}
            <Link to={"/comments"}>See all comments</Link>
          </h3>
          <ShareablePostComponent post={postDetails} />
          <Poll postId={postDetails.id} />
          <div className={styles.card}>
            {account.isConnected ? (
              <CommentForm post={postDetails} />
            ) : (
              <h3>You must sign in to comment</h3>
            )}
          </div>
          <h3>⇓⇓⇓ Comments ⇓⇓⇓</h3>
          <Comments post={postDetails} />
        </div>
      )}
    </>
  );
}
