import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteItem }) => {
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
