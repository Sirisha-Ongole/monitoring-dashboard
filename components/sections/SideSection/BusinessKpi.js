import React from "react";
import { DataTable } from "../../common/DataTable";

export const BusinessKpi = ({ discrepanciesData }) => {
  return (
    <div
      className="sectionBorder"
      style={{
        marginTop: "1rem",
        fontSize: "0.8rem",
      }}
    >
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Business KPI
      </h4>

      <DataTable
        needsectionBorder={false}
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
            Issues vs Delivered:
          </p>
        </div>
        <div className="col-4">-0.25%</div>
      </div>
      <div className="row">
        <div className="col-8">
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Issues vs Booked:
          </p>
        </div>
        <div className="col-4">-5%</div>
      </div>
    </div>
  );
};
