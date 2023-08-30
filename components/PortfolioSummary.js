import React from "react";

import { Table } from "react-bootstrap";

export const PortfolioSummary = ({ data }) => {
  return (
    <div className="sectionBorder">
      <div className="row">
        <div className="col portfolioHeader">
          <p>Summary by Metal Tier</p>
        </div>
      </div>
      <div className="row">
        <p>Application Count : 100</p>
        {
          <Table
            striped
            hover
            size="sm"
            className="metricAndIncident"
            style={{
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <td>Metal Tier</td>
                <td>Total App count</td>
                <td>No of App compliance</td>
                <td>% of App compliance</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr
                    key={item.criticality}
                    onClick={
                      // show alert
                      () => {
                        //navigate to state-of-union page in another tab
                        window.open(
                          "state.html",
                          "_blank",
                          "noopener noreferrer"
                        );

                      }
                    }
                  >
                    <td>{item.criticality}</td>
                    <td>{item.danger}</td>
                    <td>{item.amber}</td>
                    <td>{item.healthy}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        }
      </div>
    </div>
  );
};