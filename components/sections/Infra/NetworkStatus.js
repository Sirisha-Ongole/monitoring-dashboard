import React from "react";
import { SparkChart } from "../../common/charts/SparkChart";
import { DynamicSparklines } from "../../common/charts/DynamicSparklines";
import dynamic from "next/dynamic";

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
          className="col-4"
          style={{
            paddingRight: "0px",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
            }}
          >
            Network Performance
          </p>
        </div>
        <div
          className="col-8"
          style={{
            paddingLeft: "0px",
          }}
        >
          {/* Dotted line */}
          <hr className="dottedLine" />
        </div>
      </div>
      <div className="row">
        {/* <div
          className="col-2"
          style={{
            //right border with dotted lines
            borderRight: "1px dotted grey",
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
              4500
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
        </div> */}
        <div className="col-12">
          {dynamicSparklineTitles.map((title, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid grey",
                  marginBottom: "1rem",
                  padding: "1rem",
                  // shadow
                  boxShadow: "0 0 10px rgba(0,0,0,0.9)",
                }}
              >
                <DynamicSparklines title={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const dynamicSparklineTitles = ["Latency", "Throughput", "Bandwidth", "Speed"];
