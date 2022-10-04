import React from "react";

const Task = ({ task, setTask }) => {
  return (
    <div>
      <ul>
        Tasks
        <li>{task}</li>
      </ul>
    </div>
  );
};

export default Task;
