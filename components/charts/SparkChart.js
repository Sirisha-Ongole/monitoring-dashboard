import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const SparkChart = ({ sparklineData }) => {
  const series = [
    {
      data: sparklineData,
    },
  ];
  return (
    <div>
      <Chart options={optionsSpark3} series={series} type="area" />
    </div>
  );
};



var optionsSpark3 = {
  chart: {
    type: "area",
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "straight",
  },
  fill: {
    opacity: 0.3,
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  yaxis: {
    min: 0,
  },
  title: {
    text: "$135,965",
    offsetX: 0,
    style: {
      fontSize: "24px",
    },
  },
  subtitle: {
    text: "Profits",
    offsetX: 0,
    style: {
      fontSize: "14px",
    },
  },
};
