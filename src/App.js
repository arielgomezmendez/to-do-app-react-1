//import './App.css';
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <Form task={task} setTask={setTask} />
      <Task task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
