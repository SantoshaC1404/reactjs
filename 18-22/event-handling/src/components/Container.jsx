import React from "react";
import styles from "./Container.module.css";
import AppName from "./AppName";
import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
