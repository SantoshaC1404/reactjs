import React from "react";
import styles from "./FoodItems.module.css";
import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ foodItems, handleBuyButtonClick }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButtonClick = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <div className={styles.foodItems}>
      <ul className={styles.list}>
        {foodItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            handleBuyButtonClick={(event) => onBuyButtonClick(item, event)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
