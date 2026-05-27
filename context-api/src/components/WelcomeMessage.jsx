import React from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = contextTodoItems.todoItems;

  return (
    <div className={styles.welcomeMessage}>
      {todoItems.length === 0 ? "Welcome to the Todo App" : ""}
    </div>
  );
};

export default WelcomeMessage;
