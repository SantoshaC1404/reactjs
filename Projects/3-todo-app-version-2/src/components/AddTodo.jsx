import React from "react";
import styles from "../App.module.css";

const AddTodo = () => {
  return (
    <div className={styles.addRow}>
      <input type="text" name="" id="" placeholder="Enter Todo Here" />
      <input type="date" name="" id="" />
      <button className="btn btn-success">Add Todo</button>
    </div>
  );
};

export default AddTodo;
