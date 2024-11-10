import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map(({name, ...description}, index) => (
        <Tile
          key={index}
          name={name}
          description={description}
        />
      ))}
    </div>
  );
};
