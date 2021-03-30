import React from "react";
import { GraphicMenu } from "./GraphicMenu";
import { GraphicWeekly } from "./GraphicWeekly";

export const Graphics = () => {
  return (
    <div className="graphic__container">
      <GraphicMenu />
      <GraphicWeekly />
    </div>
  );
};
