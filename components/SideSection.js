import React from "react";
import { BarChart } from "./charts/BarChart";
import { PieChart } from "./charts/PieChart";
import { BusinessKpi } from "./BusinessKpi";

export const SideSection = () => {
  // const discrepanciesCols = ["Premium", "Reinsurance Premium", "Commission"];
  const discrepanciesData = [
    ["Premium", "- 3%"],
    ["Reinsurance Premium", "- 1%"],
    ["Commission", "+ 0.50%"],
  ];

  return (
    <div className="darkmode-background">
      <div
        className="sectionBorder"
        style={{
          marginTop: "1rem",
          fontSize: "0.8rem",
        }}
      >
        <div className="row ">
          <div className="col-12 ">
            <BarChart className="" data={[100, 150, 200, 100, 50, 80]} title="Active Tickets by Business functions"/>
          </div>
        </div>
      </div>
      <BusinessKpi discrepanciesData={discrepanciesData} />
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
