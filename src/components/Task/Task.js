import React from "react";

const Task = ({ task}) => {
  return(
    <div className="task">
        <p>{task}</p>
        <span>X</span>
    </div>
    
  ) 
};

export default Task;
