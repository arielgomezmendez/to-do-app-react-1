import React from "react";
import "./Task.css";
import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <span onClick={() => deleteTask(task)}><FaTrashAlt/></span>
    </div>
  );
};

export default Task;
