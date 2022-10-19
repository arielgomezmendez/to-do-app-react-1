import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";
import { FaPlus } from "react-icons/fa";

const Form = ({ task, setTask }) => {
  const [input, setInput] = useState("");

  // Use the useEffect hook to show in console the task added
  useEffect(() => {
    //console.log(task);
  }, [task]);

  // Function to create the task
  const createTask = () => {
    if (input != "") {
      //fill the array of task
      setTask([...task, input]);
      setInput("");
    }
  };

  //Save tasks in localstorage
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("task"));
    if(data){
      setTask(data)
      console.log("aqui" + data)
    }
  }, []);

  //Function to handle the value of input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="Form">
      <input
        className="input"
        placeholder="Add a task"
        required
        onChange={handleInput}
        value={input}
      ></input>
      <Button
        children={<FaPlus />}
        type="button"
        onClick={() => createTask()}
        buttontype="addTask"
      />
    </form>
  );
};

export default Form;
