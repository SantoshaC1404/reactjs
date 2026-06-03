import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);
  // console.log(postList);

  return (
    <div className={styles.postList}>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostList;
