import React from "react";
import "./Task.css";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <span onClick={() => deleteTask(task)}>X</span>
    </div>
  );
};

export default Task;
