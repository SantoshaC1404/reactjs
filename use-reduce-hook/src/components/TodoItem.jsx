import React from "react";
import styles from "../App.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <div className={styles.title}>{todoName}</div>
        <div className={styles.date}>{todoDate}</div>
        <div className={styles.controls}>
          <button
            className="btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
