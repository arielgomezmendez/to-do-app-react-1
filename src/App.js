//import './App.css';
import Form from './components/Form/Form';
import Task from './components/Task/Task';



function App({setTask}) {


  return (
    <div className="App">
      <Form/>
      <ul> Task list
        {/*setTask === "task" &&
          <Task
          setTask={setTask}
          />
        */}
        
      </ul>
    </div>
  );
}

export default App;
