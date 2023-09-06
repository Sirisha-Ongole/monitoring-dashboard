import React, { use, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInterval } from "usehooks-ts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const RadialChartMultiple = ({
  title = "EC2",
  secondTitle = "XX.XX.XX.XX",
}) => {
  const [data, setData] = React.useState([44, 55, 67, 83]);

  useInterval(() => {
    // update the data using the randomizeArray function
    setData(randomizeArray());
  }, 3000);

  var options = {
    
    // show legend
    legend: {
      show: true,
      position: "top",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            // fontSize: "124px",
          },
          value: {
            // fontSize: "16px",
          },
          total: {
            show: true,
            label: title,
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return secondTitle;
            },
          },
        },
      },
    },
    labels: ["Memory", "CPU", "Disk", "Threads"],
  };

  return (
    <div>
      <Chart options={options} series={data} type="radialBar" />
    </div>
  );
};

//Function to generate a random number between 75 to 96
function randomizeArray() {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * (96 - 75 + 1)) + 75);
  }
  return arr;
}
