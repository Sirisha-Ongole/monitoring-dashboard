import React from "react";
import { BarChart } from "./charts/BarChart";
import { DataTable } from "./common/DataTable";

export const SideSection = () => {
  // const discrepanciesCols = ["Premium", "Reinsurance Premium", "Commission"];
  const discrepanciesData = [
    ["Premium", "- 3%"],
    ["Reinsurance Premium", "- 1%"],
    ["Commission", "+ 0.50%"],
  ];

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

      <DataTable
        tableData={{
          // cols: discrepanciesCols,
          rowData: discrepanciesData,
          title: "Discrepancies Bound vs Booked",
          styles: {
            table: {
              width: "90px",
              textAlign: "center",
            },
          },
        }}
        size="sm"
      />

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
