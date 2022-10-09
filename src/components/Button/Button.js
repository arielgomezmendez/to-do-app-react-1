import React from "react";
import "./Button.css";

const Button = ({ type, onClick, children, buttontype }) => {
  return (
    <button
      buttontype={buttontype}
      children={children}
      onClick={onClick}
      type={type}
      //dinamic changes of class
      className={`${buttontype == "cleanAll" && "cleanAll"} ${
        buttontype == "addTask" && "addTask"
      }`}
    />
  );
};

export default Button;
