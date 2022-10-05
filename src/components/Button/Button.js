import React from "react";
import "./Button.css"

const Button = ({ type, onClick, children }) => {
  return (
    <div className="Button">
      <button children={children} onClick={onClick} type={type} />
    </div>
  );
};

export default Button;
