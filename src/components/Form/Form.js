import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

const Form = ({ task, setTask }) => {
  const [input, setInput] = useState("");
  const createTask = () => {
    if (input != "") {
      //console.log(input);
      setTask([...task, input]);
      console.log(task);
      setInput("");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  return (
    <div>
      <form>
        <input
          placeholder="task"
          required
          //onChange={(e) => setInput(e.target.value)}
          onChange={handleInput}
          value={input}
        ></input>

        <Button children="+" type="button" onClick={()=>createTask()} />
      </form>
    </div>
  );
};

export default Form;
