import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export const GaugeChart = ({
  value,
  colorArray = [
    "rgb(128, 0, 0)", //RED
    "rgb(71, 189, 77)", //GREEN
    "rgb(255, 191, 10)", //AMBER
  ],
  subArcs = [
    { limit: 99, color: "rgb(128, 0, 0)", showTick: true },
    { limit: 100, color: "rgb(71, 189, 77)", showTick: true },
    { color: "rgb(71, 189, 77)" },
  ],
  minValue = 98,
}) => {
  return (
    <div>
      <GaugeComponent
        arc={{
          gradient: false,
          width: 0.15,
          padding: 0,
          subArcs: subArcs,
          colorArray: colorArray,
        }}
        type="semicircle"
        value={value}
        minValue={minValue}
        pointer={{ type: "arrow", elastic: true }}
      />
    </div>
  );
};
