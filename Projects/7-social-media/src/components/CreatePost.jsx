import React, { useContext, useRef, useState } from "react";
import styles from "./CreatePost.module.css";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef("");
  const titleElement = useRef("");
  const bodyElement = useRef("");
  const tagsElement = useRef("");
  const reactionsElement = useRef(0);

  const submitHandler = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());
    const reactions = reactionsElement.current.value;

    addPost({ userId, title, body, tags, reactions });

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = 0;
  };

  return (
    <form className={styles.formCard} onSubmit={submitHandler}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.formTitle}>Create a new post</h2>
          <p className={styles.formSubtitle}>
            Share something with your friends — add a title, message, and tags.
          </p>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="postId" className={styles.label}>
          User ID
        </label>
        <input
          id="postId"
          type="text"
          className={styles.input}
          placeholder="User ID"
          ref={userIdElement}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="postTitle" className={styles.label}>
          Post title
        </label>
        <input
          id="postTitle"
          type="text"
          className={styles.input}
          placeholder="Going to the beach this weekend!"
          ref={titleElement}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="postBody" className={styles.label}>
          Post body
        </label>
        <textarea
          id="postBody"
          className={styles.textarea}
          placeholder="Tell everyone what you're planning or what inspired you..."
          ref={bodyElement}
          rows={3}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="reactions" className={styles.label}>
          Reactions
        </label>
        <input
          id="reactions"
          type="number"
          className={styles.input}
          placeholder="0"
          ref={reactionsElement}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="postTags" className={styles.label}>
          Tags
        </label>
        <input
          id="postTags"
          type="text"
          className={styles.input}
          placeholder="beach, weekend, fun"
          ref={tagsElement}
        />
        <div className={styles.helpText}>
          Add comma-separated tags to help others find your post.
        </div>
      </div>

      {status && <div className={styles.statusMessage}>{status}</div>}

      <div className={styles.actions}>
        <button
          type="submit"
          className={`${styles.submitButton} btn btn-primary`}
        >
          Publish post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
