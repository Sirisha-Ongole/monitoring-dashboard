import React from "react";

import { Table } from "react-bootstrap";

export const MttrPortfolioSummary = ({ data }) => {
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
                <td>MTTR</td>
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
                    <td>{item.mttr}</td>
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
