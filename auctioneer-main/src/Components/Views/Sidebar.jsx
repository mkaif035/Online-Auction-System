import React, { useState } from "react";

const Sidebar = ({ children, className, mobileVisible }) => {
  const [mobile, setMobile] = useState("");

  window.onresize = (e) => {
    if (window.innerWidth < 768) {
      setMobile("sidebar-mobile");
    } else {
      setMobile("");
    }
  };

  return (
    <div
      className={
        `sidebar ${mobile}-${mobileVisible ? "visible" : "hidden"} ` + className
      }
    >
      {children}
    </div>
  );
};

export default Sidebar;
