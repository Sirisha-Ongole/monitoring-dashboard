import React from "react";
import { SemiCircleGauge } from "./charts/SemiCircleGauge";
import { GaugeChart } from "./charts/GaugeChart";

export const PortfolioView = ({
  data = [],
  setShowMore,
  showTextGrid = false,
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
    <div className="sectionBorder darkmode-background" style={{}}>
      <div className="row">
        <div className="col">
          <h5>Portfolios</h5>
        </div>
      </div>
      <div className="row">
        {showTextGrid ? (
          <GenericView data={data} setShowMore={setShowMore} />
        ) : (
          data.map((item) => {
            return (
              <div
                className="col-2"
                key={item.name}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (item.clickable) setShowMore(true);
                }}
              >
                {/* <SemiCircleGauge
                  title={item.name}
                  width={200}
                  height={150}
                  value={item.value}
                  maxValue={maxValue}
                  minValue={minValue}
                  customSegmentStops={customSegmentStops}
                  segmentColors={segmentColors}
                /> */}
                <h6
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </h6>
                <GaugeChart
                  value={item.value}
                  colorArray={colorArray}
                  subArcs={subArcs}
                  minValue={minValue}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const GenericView = ({ data, setShowMore }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="col-6"
            key={item.name}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              if (item.clickable) setShowMore(true);
            }}
          >
            <p className={"portfolioItem " + item.status}>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};
