import React from "react";

import { Table } from "react-bootstrap";

export const PortfolioSummary = ({ data }) => {
  
  return (
    <div className="sectionBorder">
      <div className="row">
        <div className="col portfolioHeader">
          <p>Portfolio Summary - Claims</p>
        </div>
      </div>
      <div className="row">
        <p>Application Count : 200</p>
        {
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Criticality</th>
                <th>Danger</th>
                <th>Amber</th>
                <th>Healthy</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.criticality}>
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
