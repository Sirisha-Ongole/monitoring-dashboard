import React from "react";

import { Table } from "react-bootstrap";

export const ApplicationView = () => {
  const data = [
    {
      gearId: 1000,
      applicationName: "AAAA",
      infraCss: "appViewRed",
      infraStatus: "Red",
      opCss: "appViewGreen",
      opStatus: "Green",
      reason: "One EC2 instance is down from 00:00 hrs",
    },
    {
      gearId: 1001,
      applicationName: "BBBB",
      infraCss: "appViewGreen",
      infraStatus: "Green",
      opCss: "appViewRed",
      opStatus: "Red",
      reason: "2 P1 issues opened",
    },
    {
      gearId: 1002,
      applicationName: "CCCC",
      infraCss: "appViewRed",
      infraStatus: "Red",
      opCss: "appViewRed",
      opStatus: "Red",
      reason:
        "High Utilization notification. Impact in Performance. <br> Web service sending failure response",
    },
  ];
  return (
    <>
      <div className="portfolioHeader">Claims - Application View</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Gear ID</th>
            <th>Application Name</th>
            <th>Infra Status</th>
            <th>Operation Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.gearId}>
                <td>{item.gearId}</td>
                <td>{item.applicationName}</td>
                <td className={item.infraCss}>{item.infraStatus}</td>
                <td className={item.opCss}>{item.opStatus}</td>
                <td>{item.reason}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
