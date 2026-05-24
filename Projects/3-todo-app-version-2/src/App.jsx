import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy Milk", date: "2024-06-30" },
    { name: "Go to School", date: "2024-07-01" },
    { name: "Go to Gym", date: "2024-07-02" },
  ];

  return (
    <div>
      <div className={styles.todoContainer}>
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </div>
  );
}

export default App;
