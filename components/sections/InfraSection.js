import React from "react";
import { NetworkStatus } from "../NetworkStatus";
import { CustomCard } from "../StatOverviewBox2";
import { randomizeArray } from "../../utils";


export const InfraSection = ({ title }) => {
  return (
    <>
      {infraData.map((data, index) => {
        return (
          <>
          
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
                <CustomCard cardData={data.data} />
              </div>
              <div className="col-8">
                <NetworkStatus sparklineData={randomizeArray(sparklineData)} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const awsData = {
  title: "Problems",
  issues: [
    { title: "EC2", status: "", withIssues: 8, total: 10 },
    { title: "ECS", status: "", withIssues: 2, total: 10 },
    { title: "RDS", status: "", withIssues: 2, total: 10 },
    { title: "EKS", status: "", withIssues: 1, total: 10 },
  ],
};

const onPremData = {
  title: "Problems",
  issues: [
    { title: "App Server", status: "", withIssues: 3, total: 10 },
    { title: "Web Server", status: "", withIssues: 1, total: 10 },
    { title: "DB", status: "", withIssues: 3, total: 10 },
    { title: "Data Stage", status: "", withIssues: 5, total: 10 },
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

const sparklineData = [
  47, 45, 54, 38, 56, 24, 65,

  31, 37, 39, 62, 51, 35, 41, 35, 27, 93,

  53, 61, 27,

  54, 43, 19,
];
