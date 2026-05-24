import React from "react";
import styles from "./FoodInput.module.css";

const FoodInput = ({ onKeyDown }) => {
  return (
    <div className={styles.foodInput}>
      <input type="text" placeholder="Enter food item" onKeyDown={onKeyDown} />
    </div>
  );
};

export default FoodInput;
