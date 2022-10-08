import React from "react";
import "./Button.css";

const Button = ({ type, onClick, children,typeButton}) => {
  return (
    <button
      typeButton= {typeButton}
      children={children}
      onClick={onClick}
      type={type}
      //dinamic changes of class
      className={`${typeButton=="cleanAll" && 'cleanAll'} ${typeButton=="addTask" && 'addTask'}`}
      
    />
  );
};

export default Button;
