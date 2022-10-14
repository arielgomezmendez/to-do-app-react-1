import "./App.css";
import Form from "./components/Form/Form";
import TaskLis from "./components/TaskList/TaskLis";
import Button from "./components/Button/Button";
import { useState } from "react";
import ButtonCustomDelete from "./components/ButtonCustomDelete/ButtonCustomDelete";

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
      <TaskLis task={task} setTask={setTask}/>
      {/*<Button  children="Clean all" type="button" onClick={cleanAll} buttontype="cleanAll"
      /> */}
      <ButtonCustomDelete type="button" onClick={cleanAll}/> 
    </div>
  );
}

export default App;
