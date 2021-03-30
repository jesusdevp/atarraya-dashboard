import React from "react";
import { Switch, Route } from "react-router";
import { GraphicWeekly } from "../components/GraphicWeekly";

export const GraphicsRouter = () => {
  return (
    <div>
      <div className="margin__container">
        <Switch>
          <Route exact path="/graphic/performance/" component={GraphicWeekly} />
        </Switch>
      </div>
    </div>
  );
};
