import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    console.log(`New item added: ${itemName} with date ${itemDate}`);
    const newItem = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newItem);
  };

  const deleteItem = (itemName) => {
    const newItem = todoItems.filter((item) => item.name !== itemName);
    console.log(`Item deleted: ${itemName}`);
    setTodoItems(newItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <div>
        <div className={styles.todoContainer}>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
