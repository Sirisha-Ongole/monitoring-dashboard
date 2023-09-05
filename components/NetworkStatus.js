import React from "react";
import { SparkChart } from "./charts/SparkChart";

export const NetworkStatus = ({ sparklineData }) => {
  return (
    <div
      className="cards"
      style={{
        backgroundColor: "lightgrey",
        height: "100%",
        color: "white",
        padding: "1rem",
      }}
    >
      <div className="row">
        <div
          className="col-5"
          style={{
            paddingRight: "0px",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
            }}
          >
            Network Status
          </p>
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
              fontSize: "1rem",
            }}
          >
            Talkers
          </p>
          <p>
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              45
            </span>{" "}
            Processes
          </p>
          <p>
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              8
            </span>{" "}
            Hosts
          </p>
        </div>
        <div className="col-8">
          <SparkChart sparklineData={sparklineData} />
        </div>
      </div>
    </div>
  );
};
