import React from "react";

const List = ({ children, heading, subtitle }) => {
  return (
    <div className="list">
      {heading && <p className="heading">{heading}</p>}
      <div className="items">{children}</div>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default List;
