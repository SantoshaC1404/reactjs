import React, { useContext } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  // console.log(postList);

  return (
    <div className={styles.postList}>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
