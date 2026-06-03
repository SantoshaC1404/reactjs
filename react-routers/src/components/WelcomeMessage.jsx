import React from "react";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <center className={styles.welcomeMessage}>
      <h1>There are no posts yet!</h1>
    </center>
  );
};

export default WelcomeMessage;
