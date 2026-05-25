import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessage}>
      <p>No food items available. Please add some items to get started!</p>
    </div>
  );
};

export default ErrorMessage;
