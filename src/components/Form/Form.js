import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";

const Form = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(task);
  }, [task]);
  // Function to create the task
  const createTask = () => {
    if (input != "") {
      setTask([...task, input]);
      setInput("");
    }
  };

  //Function to handle the value of input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="Form">
      <input
        className="input"
        placeholder="task"
        required
        onChange={handleInput}
        value={input}
      ></input>
      <Button
        children="+"
        type="button"
        onClick={() => createTask()}
        typeButton="addTask"
      />
    </form>
  );
};

export default Form;
