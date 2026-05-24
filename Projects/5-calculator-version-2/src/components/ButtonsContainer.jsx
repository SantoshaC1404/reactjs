import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => {
        const extra =
          button === "="
            ? styles.equals
            : button === "C"
              ? styles.clear
              : /[+\-*/]/.test(button)
                ? styles.operator
                : "";
        return (
          <button
            key={button}
            className={`btn ${styles.button} ${extra}`.trim()}
            onClick={() => onButtonClicked(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
