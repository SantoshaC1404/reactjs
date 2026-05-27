import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContexProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContexProvider>
      <div>
        <div className={styles.todoContainer}>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContexProvider>
  );
}

export default App;
