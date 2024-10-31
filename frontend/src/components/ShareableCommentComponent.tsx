import styles from "../styles/Custom.module.css";
import CommonVoteStubs from "./CommonVoteStubs";
import type { CommentDetails, PostDetails } from "../types/posts/types";
import { Link } from "react-router-dom";

export default function ShareableCommentComponent({
  comment,
  post,
}: {
  comment: CommentDetails;
  post: PostDetails;
}) {
  return (
    <article key={comment.id} className={styles.cardPlain}>
      <h2>
        {comment.title} on{" "}
        <Link to={`/posts/${encodeURIComponent(post.id.toString())}`}>
          {post.title}
        </Link>
      </h2>
      <h3>
        from <span className={styles.address}>{comment.owner}</span>
      </h3>
      <p>{comment.description}</p>
      <CommonVoteStubs
        key={comment.id}
        id={comment.id}
        likes={comment.likes}
        upVoteFn={"upVoteComment"}
        downVoteFn={"downVoteComment"}
        getFn={"getComment"}
      />
    </article>
  );
}
