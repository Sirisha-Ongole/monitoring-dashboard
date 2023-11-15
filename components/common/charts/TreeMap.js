import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TreeMap = ({ data, title }) => {
  const series = [
    {
      data,
    },
  ];

  const options = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    toolbar: {
        show: false,
    },
    title: {
      text: title,
      align: "center",
    },
    colors: ["#F96300", " rgb(71, 189, 77)", "rgb(209, 172, 10)"],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="treemap" />
    </div>
  );
};
