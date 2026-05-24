import React from "react";
import styles from "../App.module.css";
import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleBuyButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className={styles.addRow}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Todo Here"
        value={todoName}
        onChange={handleTodoNameChange}
      />
      <input
        type="date"
        name=""
        id=""
        value={todoDate}
        onChange={handleTodoDateChange}
      />
      <button className="btn btn-success" onClick={handleBuyButtonClick}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
