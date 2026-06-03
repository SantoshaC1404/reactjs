import React, { useEffect, useState } from "react";

const ClockTime = () => {
  // let time = new Date();
  const [time, setTime] = useState(new Date());
  console.log("ClockTime component rendered...");

  useEffect(() => {
    console.log("Setting up interval...");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Cleaning up interval...");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className="display-5">Current time: {time.toLocaleTimeString()}</p>
      <p className="display-5">Current Date: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default ClockTime;
