import React from "react";
import Task from "../Task/Task";
import "./TaskLis.css";

const TaskLis = ({ task, setTask }) => {
  return(
    <div className="tasklis">
      {
      task.map((task) => {
        return <Task task={task} setTask={setTask} key={task} />;
      })
    }
    </div>
    
  )
 
};

export default TaskLis;
