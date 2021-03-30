import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ConfigPage } from "../components/ConfigPage";
import { DataPage } from "../components/DataPage";
import { Sidebar } from "../components/Sidebar";
import { UserPage } from "../components/UserPage";
import { GraphicRouter } from "./GraphicRouter";

export const DashboardRoutes = () => {
  return (
    <div className="layout__main">
      <Sidebar className="sidebar" />
      <div>
        <Switch>
          <Route path="/graphic" component={GraphicRouter} />
          <Route path="/data" component={DataPage} />
          <Route path="/config" component={ConfigPage} />
          <Route path="/user" component={UserPage} />
          <Redirect exact to="/graphic/performance" />
        </Switch>
      </div>
    </div>
  );
};
