import "./App.module.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // const foodItems = ["Pizza", "Burger", "Pasta"];

  let [textToShow, setTextToShow] = useState("");
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newItem];
      setFoodItems(newFoodItems);
    }
  };

  return (
    <>
      <Container>
        <AppName />
        <FoodInput onKeyDown={onKeyDown} />
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
