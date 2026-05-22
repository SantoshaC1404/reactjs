import React from "react";

const ClockTime = () => {
  let time = new Date();
  return (
    <div>
      <p className="display-5">Current time: {time.toLocaleTimeString()}</p>
      <p className="display-5">Current Date: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default ClockTime;
