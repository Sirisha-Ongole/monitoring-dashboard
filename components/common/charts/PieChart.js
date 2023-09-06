import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieChart = ({ series, cols }) => {
  const options = {
    labels: cols,
    legend: {
      position: "bottom",
      style: {
        color: "white",
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width={200}
      height={500}
    />
  );
};
