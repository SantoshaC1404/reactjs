import React from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {/* rendering food items using map() */}
      {items.map((item) => {
        return <Item key={item} foodItem={item}></Item>;
      })}
    </ul>
  );
};

export default FoodItems;
