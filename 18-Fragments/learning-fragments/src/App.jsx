function App() {
  let foodItems = ["Roti", "Vegetables", "Fruits", "Milk", "Eggs", "Fish"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
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
