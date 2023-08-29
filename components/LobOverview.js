"use client";
import React from "react";
import { Table } from "react-bootstrap";
import {
  BubbleChart,
  FunnelChart,
  PieChart,
  PieArcSeries,
  PieArcLabel,
} from "reaviz";

export const LobOverview = () => {
  const applicationData = [
    { key: "Standalone", data: 800 },
    { key: "Shared", data: 400 },
    { key: "Total", data: 1200 },
  ];
  const serverData = [
    { key: "GI Servers: 4000", data: 4000 },
    { key: "Windows Servers", data: 600 },
    { key: "Linux Servers", data: 2500 },
    { key: "Solaris Servers", data: 900 },
  ];

  const tableData = [
    { data: applicationData, title: "GI Applications" },
    { data: serverData, title: "GI Servers" },
  ];
  return (
    <div className="sectionBorder">
      {tableData.map((item, index) => (
        <div className="row" key={index}>
          <div className="col">
            <Table striped bordered hover
            >
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
                  <th>Application</th>
                  <th>Count</th>
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
