import React from "react";
import styles from "./FoodItems.module.css";
import Item from "./Item";

const FoodItems = ({ foodItems, handleBuyButtonClick }) => {
  return (
    <div className={styles.foodItems}>
      <ul className={styles.list}>
        {foodItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            handleBuyButtonClick={(handleBuyButtonClick) =>
              console.log(`Buying ${item}`)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
