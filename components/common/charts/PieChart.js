import React from "react";
import dynamic from "next/dynamic";
import { colors } from "./BarChart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieChart = ({ series, cols , width}) => {
  const options = {
    labels: cols,
    legend: {
      position: "bottom",
      style: {
        color: "white",
      },
    },
    colors: colors
  };

  const defaultWidth = 200;
  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width={width ? width : defaultWidth}
      height={500}
    />
  );
};
