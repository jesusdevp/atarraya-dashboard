import React from "react";
import { Graphics } from "../Graphics";
import { Overview } from "../Overview";

export const PerformanceScreen = () => {
  return (
    <div className="performanceScreen">
      <Overview />
      <Graphics />
    </div>
  );
};
