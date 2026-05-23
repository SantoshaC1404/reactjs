import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = ["Roti", "Vegetables", "Fruits", "Milk", "Eggs", "Fish"];
  let foodItems = [];

  // Conditional rendering using ternary operator
  // if (foodItems.length === 0) {
  //   return <h1>No food items available</h1>;
  // }

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
