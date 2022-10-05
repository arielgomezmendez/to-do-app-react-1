import './App.css';
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Form task={task} setTask={setTask} />
      {task.map((task)=>{
        return(
          <Task task={task} setTask={setTask} key={task}/>
        )
      })}
      
    </div>
  );
}

export default App;
