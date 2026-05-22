import React from "react";

const TodoItem = () => {
  return (
    <div className="list">
      <div className="row">
        <div className="title">Buy Milk</div>
        <div className="date">2024-06-30</div>
        <div className="controls">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>

      <div className="row">
        <div className="title">Go to School</div>
        <div className="date">2024-07-01</div>
        <div className="controls">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
