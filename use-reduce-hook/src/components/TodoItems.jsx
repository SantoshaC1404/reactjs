import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ onDeleteItem }) => {
  const { todoItems } = useContext(TodoItemsContext);
  // console.log("Context Todo Items:", contextTodoItems);
  // const todoItems = contextTodoItems.todoItems;

  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
