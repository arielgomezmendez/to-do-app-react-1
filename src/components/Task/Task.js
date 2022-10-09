import React from "react";
import "./Task.css";

const Task = ({ task, setTask }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <span>X</span>
    </div>
  );
};

export default Task;
