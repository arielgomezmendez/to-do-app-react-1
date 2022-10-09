import React from "react";
import Task from "../Task/Task";

const TaskLis = ({ task, setTask }) => {
  return(
    <div>
      {
      task.map((task) => {
        return <Task task={task} setTask={setTask} key={task} />;
      })
    }
    </div>
    
  )
 
};

export default TaskLis;
