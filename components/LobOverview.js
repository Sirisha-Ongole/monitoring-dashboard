"use client";
import React from "react";
import { DataTable } from "./common/DataTable";

export const LobOverview = () => {
  return <DataTable tableData={tableData} />;
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
};
// { data: serverData, title: "GI Servers", cols:["Application", "Count"] },
