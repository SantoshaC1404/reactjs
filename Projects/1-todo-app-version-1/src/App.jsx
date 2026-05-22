import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <div>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
