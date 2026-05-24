import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClicked = (button) => {
    if (button === "C") {
      setCalValue("");
    } else if (button === "=") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(calValue);
        setCalValue(result.toString());
      } catch (error) {
        setCalValue("Error");
      }
    } else {
      setCalValue((prev) => prev + button);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.card}>
          <Display displayValue={calValue} />
          <ButtonsContainer onButtonClicked={onButtonClicked} />
        </div>
      </div>
    </>
  );
}

export default App;
