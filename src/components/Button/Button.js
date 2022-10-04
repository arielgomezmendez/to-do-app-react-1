import React from "react";
import { useState } from "react";

const Button = ({ type, onClick, children }) => {
  return (
    <div>
      <button children={children} onClick={onClick} type={type} />
    </div>
  );
};

export default Button;
