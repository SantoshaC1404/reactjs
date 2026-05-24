import React from "react";
import styles from "../App.module.css";

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <div className={styles.title}>{todoName}</div>
        <div className={styles.date}>{todoDate}</div>
        <div className={styles.controls}>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
