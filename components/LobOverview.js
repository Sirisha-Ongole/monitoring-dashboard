"use client";
import React from "react";
import { Table } from "react-bootstrap";

export const LobOverview = () => {
  return (
    <div className="sectionBorder">
      {tableData.map((item, index) => (
        <div className="row" key={index}>
          <div className="col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    style={{
                      textAlign: "center",
                      backgroundColor: "lightblue",
                    }}
                  >
                    {item.title}
                  </th>
                </tr>
                <tr>
                  {item.cols.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.data.map((item) => (
                  <tr key={item.key}>
                    <td>{item.key}</td>
                    <td>{item.data}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
};

const applicationData = [
  { key: "NAM", data: 600 },
  { key: "LATAM", data: 100 },
  { key: "Japan", data: 200 },
  { key: "EMEA", data: 200 },
  { key: "China", data: 100 },
  { key: "Total", data: 1200 },
];
const serverData = [
  { key: "GI Servers", data: 4000 },
  { key: "Windows Servers", data: 600 },
  { key: "Linux Servers", data: 2500 },
  { key: "Solaris Servers", data: 900 },
];

const tableData = [
  {
    data: applicationData,
    title: "GI Applications Landscape",
    cols: ["Region", "Count"],
  },
  // { data: serverData, title: "GI Servers", cols:["Application", "Count"] },
];
