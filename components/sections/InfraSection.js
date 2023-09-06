import React from "react";
import { NetworkStatus } from "../NetworkStatus";
import { CustomCard } from "../StatOverviewBox2";
import { randomizeArray } from "../../utils";
import { RadialChartMultiple } from "../charts/RadialChartMultiple";
import { DynamicLineChart } from "../charts/DynamicLineChart";

export const InfraSection = ({ title }) => {
  return (
    <>
      {infraData.map((data, index) => {
        return (
          <div className="sectionBorder" key={index}>
            <div className="row" key={index}>
              <div className="col-12">
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  {data.title}
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <CustomCard cardData={data.data} />
                </div>
                <div className="row">
                  <RadialChartMultiple />
                </div>
                <div className="row">
                  <DynamicLineChart />
                </div>
              </div>
              <div className="col-8">
                <NetworkStatus />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const awsData = {
  title: "Problems",
  issues: [
    { title: "EC2", status: "", withIssues: 1, total: 10 },
    { title: "ECS", status: "", withIssues: 1, total: 10 },
    { title: "RDS", status: "", withIssues: 1, total: 10 },
    { title: "EKS", status: "", withIssues: 1, total: 10 },
    { title: "VMC", status: "", withIssues: 1, total: 10 },
  ],
};

const onPremData = {
  title: "Problems",
  issues: [
    { title: "App Server", status: "", withIssues: 1, total: 10 },
    { title: "Web Server", status: "", withIssues: 1, total: 10 },
    { title: "DB", status: "", withIssues: 1, total: 10 },
    { title: "Data Stage", status: "", withIssues: 1, total: 10 },
  ],
};

const infraData = [
  {
    title: "AWS",
    data: awsData,
  },
  {
    title: "On-Prem",
    data: onPremData,
  },
];
