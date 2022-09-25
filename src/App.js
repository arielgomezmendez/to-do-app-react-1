import './App.css';
import Form from './components/Form/Form';
import Task from './components/Task/Task';

function App() {
  return (
    <div className="App">
      <Form/>
      <ul> Task list
        <Task/>
        
      </ul>
    </div>
  );
}

export default App;
