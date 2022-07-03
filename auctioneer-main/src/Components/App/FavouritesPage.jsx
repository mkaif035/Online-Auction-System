import React from "react";
import { SearchIcon } from "../Views/Icons";

const FavouritesPage = () => {
  return (
    <div className="content">
      <div className="center w-full">
        <div className="input">
          <SearchIcon />
          <input placeholder="Search Favourites" />
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
