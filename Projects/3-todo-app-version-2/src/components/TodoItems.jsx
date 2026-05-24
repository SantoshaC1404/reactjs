import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
