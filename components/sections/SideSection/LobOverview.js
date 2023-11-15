"use client";
import React from "react";
import { DataTable } from "../../common/DataTable";
import { PieChart } from "../../common/charts/PieChart";

export const LobOverview = () => {
  return (
    <div className="sectionBorder darkmode-background" style={{ marginTop: "1rem" }}>
      {/* <DataTable tableData={tableData} /> */}
      <h5
        style={{
          textAlign: "center",
          // fontWeight: "bold",
        }}
      >GI Applications Landscape</h5>
      <PieChart
        series={[600, 100, 200, 200, 100]}
        cols={["NAM", "LATAM", "Japan", "EMEA", "China"]}
      />
    </div>
  );
};

const rowData = [
  ["NAM", 600],
  ["LATAM", 100],
  ["Japan", 200],
  ["EMEA", 200],
  ["China", 100],
];
const serverData = [
  { key: "GI Servers", value: 4000 },
  { key: "Windows Servers", value: 600 },
  { key: "Linux Servers", value: 2500 },
  { key: "Solaris Servers", value: 900 },
];

const tableData = {
  rowData,
  footerRow: ["Total", 1200],
  title: "GI Applications Landscape",
  cols: ["Region", "Count"],
  // set color for legend
  colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
};
// { data: serverData, title: "GI Servers", cols:["Application", "Count"] },
