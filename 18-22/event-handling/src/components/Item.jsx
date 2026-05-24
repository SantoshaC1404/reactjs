import React from "react";
import styles from "./Item.module.css";

const Item = ({ item, handleBuyButtonClick }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{item}</span>
      <button className={styles.button} onClick={handleBuyButtonClick}>
        buy
      </button>
    </li>
  );
};

export default Item;
