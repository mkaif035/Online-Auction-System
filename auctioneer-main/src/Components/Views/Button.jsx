import React from "react";

const Button = ({ type, children, onClick, className, disabled }) => {
  return (
    <div
      className={
        "btn " +
        type +
        " " +
        className +
        " " +
        (disabled ? "opacity-20 pointer-events-none cursor-not-allowed" : "")
      }
      onClick={() => {
        if (!disabled) onClick();
      }}
    >
      {children}
    </div>
  );
};

export default Button;
