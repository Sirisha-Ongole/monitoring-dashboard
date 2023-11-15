"use client";
import React from "react";
import { LobOverview } from "./LobOverview";
import { BarChart } from "../../common/charts/BarChart";
import { BusinessKpi } from "./BusinessKpi";

export const SideSection = () => {
  const businessFunctions = [
    "Func 1",
    "Func 2",
    "Func 3",
    "Func 4",
    "Func 5",
    "Func 6",
  ];
  return (
    <>
      <LobOverview />
      <div
        className="darkmode-background"
        style={{
          borderRadius: "0.5rem",
        }}
      >
        <div
          className="sectionBorder"
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
          }}
        >
          <div className="row ">
            <div className="col-12 ">
              <BarChart
                className=""
                data={[100, 150, 200, 100, 50, 80]}
                title="Active Tickets by Business functions"
                cols={businessFunctions}
              />
            </div>
          </div>
        </div>
        <BusinessKpi discrepanciesData={discrepanciesData} />
      </div>
    </>
  );
};

const discrepanciesData = [
  ["Premium", "- 3%"],
  ["Reinsurance Premium", "- 1%"],
  ["Commission", "+ 0.50%"],
];
