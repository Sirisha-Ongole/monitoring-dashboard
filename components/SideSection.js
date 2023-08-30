import React from "react";
import { Table } from "react-bootstrap";
import { BarChart } from "./charts/BarChart";

export const SideSection = () => {
  return (
    <div
    className="sectionBorder"
      style={{
        marginTop: "1rem",
        fontSize: "0.8rem",
      }}
    >
      <div className="row">
        <div className="col-12">
          <BarChart />
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Business KPI
      </h4>

      <p
        style={{
          textAlign: "center",
        }}
      >
        Discrepancies Bound vs Booked
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Premium</th>
            <th>Reinsurance Premium</th>
            <th>Commission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>- 3%</td>
            <td>- 1%</td>
            <td>+ 0.50%</td>
          </tr>
        </tbody>
      </Table>

      <div className="row">
        <div className="col-8">
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            Issues vs Delivered
          </p>
        </div>
        <div className="col-4">- 0.25%</div>
      </div>
      <div className="row">
        <div className="col-8">
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Issues vs Booked
          </p>
        </div>
        <div className="col-4">- 5%</div>
      </div>
    </div>
  );
};

const categoryData = [
  { key: "Reservation", data: 100 },
  { key: "Rating", data: 150 },
  { key: "Quote", data: 200 },
  { key: "Bind", data: 100 },
  { key: "Book", data: 50 },
  { key: "Issue", data: 80 },
];
