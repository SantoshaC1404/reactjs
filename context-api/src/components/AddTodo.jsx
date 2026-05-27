import React, { useRef } from "react";
import styles from "../App.module.css";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const { addNewItem, deleteItem } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleBuyButtonClick = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  // const handleBuyButtonClick = (event) => {
  //   event.preventDefault();
  //   const todoName = todoNameElement.current.value;
  //   const todoDate = todoDateElement.current.value;
  //   todoNameElement.current.value = "";
  //   todoDateElement.current.value = "";
  //   onNewItem(todoName, todoDate);
  // };

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
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default AddTodo;
