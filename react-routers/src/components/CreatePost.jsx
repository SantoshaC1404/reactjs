import { Form, redirect } from "react-router-dom";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <Form method="POST" className={styles.formCard}>
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
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
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
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(",").map((tag) => tag.trim());
  console.log("Form data received in action:", postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("Post created successfully:", post);
    });

  return redirect("/");
}

export default CreatePost;
