import React from "react";

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h3>No food items available</h3> : null};</>;
};

export default ErrorMessage;
