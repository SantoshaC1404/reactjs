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
      <ul className="list-group">
        {/* ternary operator for conditional rendering */}
        {foodItems.length === 0 ? <h3>No food items available</h3> : null}

        {/* rendering food items using map() */}
        {foodItems.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
