import React, { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{post.title}</h5>
        <span
          className={`${styles.reactionBadge} badge rounded-pill bg-danger`}
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className={styles.cardText}>{post.body}</p>
        <div className={styles.tagList}>
          {post.tags.map((tag) => (
            <span key={tag} className={`${styles.tag} badge text-bg-primary`}>
              {tag}
            </span>
          ))}
        </div>

        <div className={`${styles.reactions} alert alert-success`} role="alert">
          Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
