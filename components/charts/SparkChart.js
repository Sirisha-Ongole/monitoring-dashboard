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
      <Chart options={optionsSpark3} series={series} type="area" height={110}/>
    </div>
  );
};

var optionsSpark3 = {
  chart: {
    type: "area",
    // height: 130,
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
    text: "0.1ms",
    offsetX: 0,
    style: {
      fontSize: "14px",
      color: "white",
    },
  },
  subtitle: {
    text: "Latency",
    offsetX: 0,
    style: {
      fontSize: "14px",
      color: "white",
    },
  },
};
