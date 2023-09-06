import React from "react";

import { DataTable } from "../components/common/DataTable";

export const ApplicationView = () => {
  const rowData = [
    [1000, "AAAA", "Red", "Green", "One EC2 instance is down from 00:00 hrs"],
    [1001, "BBBB", "Green", "Red", "2 P1 issues opened"],
    [
      1002,
      "CCCC",
      "Red",
      "Red",
      "High Utilization notification. Impact in Performance. <br> Web service sending failure response",
    ],
  ];

  const cols = [
    "Gear ID",
    "Application Name",
    "Infra Status",
    "Operation Status",
    "Reason",
  ];

  return (
    <>
      <div className="portfolioHeader">Claims - Application View</div>
      <DataTable tableData={{ cols, rowData }} />
    </>
  );
};
