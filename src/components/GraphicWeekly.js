import React from "react";
import { Chart } from "primereact/chart";

export const GraphicWeekly = () => {
  const lineData = {
    labels: ["", "Week1", "Week 2", "Week 3", "Week 4", "Week 5", ""],
    datasets: [
      {
        label: "Weekly Biomas Growth",
        boxWidth: 50,
        data: [45, 60, 80, 48, 40, 28, 19],
        fill: true,
        backgroundColor: "#FCE1D0",
        borderColor: "#FCE1D0",
        lineTension: 0,
      },
    ],
  };

  return (
    <div>
      <div>
        <Chart type="line" data={lineData} />
      </div>
    </div>
  );
};
