import React from "react";
import Chip from "../Views/Chip";
import Button from "../Views/Button";
import { FavouritesIcon, ShoppingIcon } from "../Views/Icons";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card h-min">
      <img src={item.images[0]} className="rounded-t-xl" />
      <div className="flex flex-col gap-3 p-4 border-bottom">
        <p className="text-2xl font-bold">{item.name}</p>
        {item.description}
      </div>
      <div className="p-4 border-bottom">
        Tags
        <div className="flex flex-wrap gap-2 pt-4">
          {item.tags && item.tags.map((t, i) => <Chip key={i}>{t}</Chip>)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Button className="expanded" type="primary" disabled={!item.active}>
            <ShoppingIcon />
            {item.active ? "New Bid" : "Sold"}
          </Button>
          <Button type="primary" disabled={true}>
            <FavouritesIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
