import React from "react";

export const Overview = () => {
  return (
    <div className="overview">
      <h1 className="title overview__title">Overview</h1>
      <div className="overview__cards">
        <div className="overview__card">
          <div className="overview__card-content">
            <p>Estimated Biomas</p>
            <h3>2,050Kg</h3>
            <div className="overview__card-bottom">
              <p>
                {" "}
                <i className="fas fa-arrow-up"></i>2.4%
              </p>
            </div>
          </div>
        </div>
        <div className="overview__card">
          <div className="overview__card-content">
            <p>Current Size</p>
            <h3>2,050Kg</h3>
            <div className="overview__card-bottom">
              <p>
                {" "}
                <i className="fas fa-arrow-down"></i>2.4%
              </p>
            </div>
          </div>
        </div>
        <div className="overview__card">
          <div className="overview__card-content">
            <p>Estimated FCR</p>
            <h3>2,050Kg</h3>
            <div className="overview__card-bottom">
              <p>
                {" "}
                <i className="fas fa-arrow-down"></i>2.4%
              </p>
            </div>
          </div>
        </div>
        <div className="overview__card">
          <div className="overview__card-content">
            <p>d</p>
            <h3>d</h3>
            <div className="overview__card-bottom">
              <p>s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
