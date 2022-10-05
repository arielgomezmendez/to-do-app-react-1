import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css"

const Form = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(task);
  }, [task]);

  const createTask = () => {
    if (input != "") {
      setTask([...task, input]);
      setInput("");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="Form">
      <form>
        <input
          placeholder="task"
          required
          onChange={handleInput}
          value={input}
        ></input>

        <Button children="+" type="button" onClick={() => createTask()} />
      </form>
    </div>
  );
};

export default Form;
