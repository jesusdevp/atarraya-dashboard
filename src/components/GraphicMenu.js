import React from "react";
import { NavLink } from "react-router-dom";

export const GraphicMenu = () => {
  return (
    <header>
      <nav className="graphic__menu">
        <NavLink
          className="graphic__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/performance/"
        >
          Weekly Biomas Growth
        </NavLink>
        <NavLink
          className="graphic__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/performance/"
        >
          Current Size
        </NavLink>
        <NavLink
          className="graphic__menu-item"
          activeClassName="active"
          activeStyle={{
            fontWeight: "bold",
            color: "#252733",
          }}
          exact
          to="/graphic/performance/"
        >
          Estimated FCR
        </NavLink>
      </nav>
    </header>
  );
};
