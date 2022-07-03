import React, { useContext } from "react";
import { AppContext } from "../Context";
import Button from "../Views/Button";
import { SearchIcon, MenuIcon, AddIcon } from "../Views/Icons";

const TopBar = () => {
  const { setSidebarVisibleMobile } = useContext(AppContext);

  return (
    <div className="flex flex-row justify-between p-10 pb-0">
      <Button
        type="icon"
        className="mobile-only"
        onClick={() => setSidebarVisibleMobile(true)}
      >
        <MenuIcon className="w-6 h-6" />
      </Button>

      <div className="w-full gap-4 center">
        <div className="input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <Button type="primary" className="mobile-only">
        <AddIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default TopBar;
