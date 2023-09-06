import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInterval } from "usehooks-ts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Dynamic Line Chart with random data
// https://apexcharts.com/docs/dynamic-chart/
// Timeinterval is set to 3 seconds
// xaxis shows time in hh:mm format
// yaxis shows random data between 0 to 100
export const DynamicLineChart = () => {
  const [series, setSeries] = useState([
    {
      data: data.slice(),
    },
  ]);

  const options = {
    chart: {
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Synthetic Monitoring - Response Times (ms)",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: false,
    },
  };

  useInterval(() => {
    getNewSeries(lastDate, { min: 10, max: 90 });

    ApexCharts.exec("realtime", "updateSeries", [
      {
        data: data,
      },
    ]);
  }, 1000);

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate;

  for (var i = 0; i < data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
    data[i].y = 0;
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
}

function resetData() {
  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
  data = data.slice(data.length - 10, data.length);
}

var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
let XAXISRANGE = 777600000;
function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x,
      y,
    });
    lastDate = baseval;
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
  min: 10,
  max: 90,
});

var _seed = 42;
Math.random = function () {
  _seed = (_seed * 16807) % 2147483647;
  return (_seed - 1) / 2147483646;
};
