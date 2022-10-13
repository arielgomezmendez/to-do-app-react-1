import React from "react";
import Task from "../Task/Task";
import "./TaskLis.css";

const TaskLis = ({ task, setTask }) => {
  const deleteTask = (t) => {
    // The filter method create a new array of tasks without the task eliminated
    const remainingTasks = task.filter((e) => e != t);
    setTask(remainingTasks);
  };
  return (
    <div className="tasklis">
      {task.map(function (task, index) {
        return (
          <Task
            task={task}
            setTask={setTask}
            key={index}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskLis;
