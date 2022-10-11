import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <span onClick={deleteTask}>X</span>
    </div>
  );
};

export default Task;
