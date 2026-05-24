import "./App.module.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";

function App() {
  const foodItems = ["Pizza", "Burger", "Pasta"];

  return (
    <>
      <Container>
        <AppName />
        <FoodInput />
        {foodItems.length === 0 ? (
          <ErrorMessage />
        ) : (
          <FoodItems foodItems={foodItems} />
        )}
      </Container>
      <Container>
        <p>Welcome to the Food App!</p>
      </Container>
    </>
  );
}

export default App;
