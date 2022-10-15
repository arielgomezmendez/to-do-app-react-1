import React from "react";
import "./Task.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <span className="span-deleteTask" onClick={() => deleteTask(task)}>
        <div className="delteIcon">
          <FaPlus />
        </div>
      </span>
    </div>
  );
};

export default Task;
