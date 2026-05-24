import React from "react";
import styles from "../App.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteItem }) => {
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <div className={styles.title}>{todoName}</div>
        <div className={styles.date}>{todoDate}</div>
        <div className={styles.controls}>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
