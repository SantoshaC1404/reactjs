import React, { useRef } from "react";
import styles from "../App.module.css";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleTodoNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleTodoDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  // const handleBuyButtonClick = () => {
  //   onNewItem(todoName, todoDate);
  //   setTodoName("");
  //   setTodoDate("");
  // };/

  const handleBuyButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className={styles.addRow}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Todo Here"
        ref={todoNameElement}
      />
      <input type="date" name="" id="" ref={todoDateElement} />
      <button className="btn btn-success" onClick={handleBuyButtonClick}>
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default AddTodo;
