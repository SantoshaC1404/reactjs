import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`New item added: ${itemName} with date ${itemDate}`);
    const newItem = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newItem);
  };

  const handleDeleteItem = (itemName) => {
    const newItem = todoItems.filter((item) => item.name !== itemName);
    console.log(`Item deleted: ${itemName}`);
    setTodoItems(newItem);
  };

  return (
    <div>
      <div className={styles.todoContainer}>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  );
}

export default App;
