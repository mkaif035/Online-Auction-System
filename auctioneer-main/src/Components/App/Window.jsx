import React from "react";

const Window = ({ children, sidebar }) => {
  return (
    <div>
      <div className="window sidebar">{sidebar}</div>
      <div className="window content">{children}</div>
    </div>
  );
};

export default Window;
