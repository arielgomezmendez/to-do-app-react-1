import React from "react";
import Button from "../Button/Button";
import Task from "../Task/Task";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";

const Form = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  // Use the useEffect hook to show in console the task added
  useEffect(() => {
    console.log(task);
  }, [task]);

  // Function to create the task
  const createTask = () => {
    if (input != "") {
      //fill the array of task
      setTask([...task, input]);
      setInput("");
    }
  };

  //Function to handle the value of input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //Function to delete th task
  const deleteTask = () => {
    console.log(task);
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
        buttontype="addTask"
      />
    </form>
  );
};

export default Form;
