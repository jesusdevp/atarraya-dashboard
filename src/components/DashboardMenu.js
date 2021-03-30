import React from "react";
import { NavLink } from "react-router-dom";

export const DashboardMenu = () => {
  return (
    <header className="dashboard__menu">
      <h3 className="dashboard__menu-title">Dashboards</h3>
      <nav>
        <NavLink
          className="dashboard__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/status"
        >
          Status review
        </NavLink>
        <NavLink
          className="dashboard__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/analisys"
        >
          Analysis
        </NavLink>
        <NavLink
          className="dashboard__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/water"
        >
          Water quality
        </NavLink>
        <NavLink
          className="dashboard__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/performance"
        >
          Performance
        </NavLink>
      </nav>
    </header>
  );
};
