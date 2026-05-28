import React from "react";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <form className={styles.formCard}>
      <div className={styles.formGroup}>
        <label htmlFor="exampleInputEmail1" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          className={`${styles.input} form-control`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className={styles.helpText}>
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="exampleInputPassword1" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          className={`${styles.input} form-control`}
          id="exampleInputPassword1"
        />
      </div>

      <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
