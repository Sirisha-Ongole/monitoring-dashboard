"use client";
import React from "react";
import { PortfolioView } from "../../common/PortfolioView";

import {
  availabilityPortfolioSummary,
  availabilityPortfolioView,
} from "../../../config/portfolio";
import { AvailabilityPortfolioSummary } from "./AvailabilityPortfolioSummary";

export const AvailabilitySection = () => {
  return (
    <>
      <div
        className="row"
        style={{
          marginTop: "1rem",
          backgroundColor: "#262c3f",
          borderRadius: "0.5rem",
        }}
      >
        <h4
          style={{
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          Application Availability
        </h4>
        <div className="col-12">
          <PortfolioView data={availabilityPortfolioView} />
        </div>
        <div className="col-12">
          <AvailabilityPortfolioSummary data={availabilityPortfolioSummary} />
        </div>
      </div>
    </>
  );
};
