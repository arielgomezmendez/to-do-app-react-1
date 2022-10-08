import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import { useState } from "react";
import Button from "./components/Button/Button";
import "./components/Button/Button.css"

function App() {
  const [task, setTask] = useState([]);
  //Clean all tasks
  const cleanAll = () => {
    setTask([])
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Form task={task} setTask={setTask} />
      {task.map((task) => {
        return <Task task={task} setTask={setTask} key={task} />;
      })}
      <Button  children="Clean all" type="button" onClick={cleanAll} typeButton="cleanAll"/>
    </div>
  );
}

export default App;
