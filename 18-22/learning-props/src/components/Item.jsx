import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{item}</span>
    </li>
  );
};

export default Item;
