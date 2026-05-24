import React from "react";
import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleInputChange = (event) => {
    console.log("Input value:", event.target.value);
  };

  return (
    <div className={styles.foodInput}>
      <input
        type="text"
        placeholder="Enter food item"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FoodInput;
