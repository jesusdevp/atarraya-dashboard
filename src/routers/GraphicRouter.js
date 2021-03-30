import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { AnalysisScreen } from "../components/screens/AnalysisScreen";
import { StatusScreen } from "../components/screens/StatusScreen";
import { WaterScreen } from "../components/screens/WaterScreen";
import { PerformanceScreen } from "../components/screens/PerformanceScreen";
import { DashboardMenu } from "../components/DashboardMenu";
import { GraphicsRouter } from "./GraphicsRouter";

export const GraphicRouter = () => {
  return (
    <div>
      <div className="margin__container">
        <DashboardMenu />

        <Switch>
          <Route exact path="/graphic/status" component={StatusScreen} />
          <Route exact path="/graphic/analisys" component={AnalysisScreen} />

          <Route exact path="/graphic/water" component={WaterScreen} />
          <Route
            exact
            path="/graphic/performance"
            component={PerformanceScreen}
          />

          <Route path="/graphic/performance/" component={GraphicsRouter} />

          <Redirect exact to="/graphic/performance" />
        </Switch>
      </div>
    </div>
  );
};
