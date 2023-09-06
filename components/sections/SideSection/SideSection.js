"use client";
import React from "react";
import { LobOverview } from "./LobOverview";
import { BarChart } from "../../common/charts/BarChart";
import { BusinessKpi } from "./BusinessKpi";

export const SideSection = () => {
  return (
    <>
      <LobOverview />
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
              <BarChart
                className=""
                data={[100, 150, 200, 100, 50, 80]}
                title="Active Tickets by Business functions"
                cols = {["Reservation", "Rating", "Quote", "Bind", "Book", "Issue"]}
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
