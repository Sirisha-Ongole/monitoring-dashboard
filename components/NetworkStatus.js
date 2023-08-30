import React from "react";
import { SparkChart } from "./charts/SparkChart";

export const NetworkStatus = ({sparklineData}) => {
  return (
    <div
      className="sectionBorder"
      style={{
        backgroundColor: "lightgrey",
        height: "100%",
      }}
    >
      <div className="row">
        <div
          className="col-5"
          style={{
            paddingRight: "0px",
          }}
        >
          <h5>Network Status</h5>
        </div>
        <div
          className="col-7"
          style={{
            paddingLeft: "0px",
          }}
        >
          {/* Dotted line */}
          <hr className="dottedLine" />
        </div>
      </div>
      <div className="row">
        <div
          className="col-4"
          style={{
            //right border with dotted lines
            borderRight: "1px dotted #000",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
            }}
          >
            Talkers
          </p>
          <p>
            <span
              style={{
                fontSize: "1.1rem",
              }}
            >
              45
            </span>{" "}
            Processes
          </p>
          <p>
            <span
              style={{
                fontSize: "1.1rem",
              }}
            >
              8
            </span>{" "}
            Hosts
          </p>
        </div>
        <div className="col-8">
          <SparkChart sparklineData={sparklineData}/>
        </div>
      </div>
    </div>
  );
};
