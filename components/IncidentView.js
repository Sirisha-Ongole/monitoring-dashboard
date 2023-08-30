import React from "react";
import { Table } from "react-bootstrap";

export const IncidentView = ({ data = [] }) => {
  return (
    <>
      {data.length > 0 && (
        <Table striped hover className="metricAndIncident"
        style={{
            textAlign: "center",
        }}>
          <thead>
            <tr>
              <th>Incident</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Application</th>
              <th>Aging Hours</th>
              <th>Server Name</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.incident}</td>
                  <td>{item.severity}</td>
                  <td>{item.status}</td>
                  <td>{item.application}</td>
                  <td>{item.agingHours}</td>
                  <td>{item.serverName}</td>
                  <td>{item.assignedTo}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
