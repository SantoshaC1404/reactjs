import React from "react";

const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item" key={foodItem}>
      {foodItem}
    </li>
  );
};

export default Item;
