import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export const SemiCircleGauge = ({
  title,
  segmentColors = ["rgb(253,32,32)", "rgb(255,191, 10)", " rgb(71, 189, 77)"],
  width = 500,
  height = 100,
  value = 60,
  maxValue = 100,
  minValue = 0,
  customSegmentStops = [0, 90, 95, 100],
  customSegmentLabels = [
    {
      text: "",
      position: "INSIDE",
    },

    {
      text: "",
      position: "INSIDE",
    },
    {
      text: "",
      position: "INSIDE",
    },
  ],
}) => {
  return (
    <div>
      <ReactSpeedometer
        width={width}
        height={height}
        needleHeightRatio={0.7}
        value={value}
        customSegmentStops={customSegmentStops}
        maxValue={maxValue}
        minValue={minValue}
        startColor="red"
        endColor="green"
        segmentColors={segmentColors}
        currentValueText={title}
        // customSegmentLabels={customSegmentLabels}
        ringWidth={30}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"#a7ff83"}
        textColor={"#d8dee9"}
        
      />
    </div>
  );
};
