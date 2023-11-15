"use client";
import React from "react";
import { PortfolioView } from "../../common/PortfolioView";
import { PortfolioSummary } from "./PortfolioSummary";

import {
  hygienePortfolioView,
  portfolioSummary,
} from "../../../config/portfolio";

export const HygieneSection = () => {
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
          Application Hygiene
        </h4>
        <div className="col-12">
          <PortfolioView
            data={hygienePortfolioView}
            colorArray={[
              "rgb(128, 0, 0)", //RED
              "rgb(71, 189, 77)", //GREEN
              "rgb(255, 191, 10)", //AMBER
            ]}
            subArcs={[
              { limit: 80, color: "rgb(128, 0, 0)", showTick: true },
              { limit: 100, color: "rgb(71, 189, 77)", showTick: true },
              { color: "rgb(71, 189, 77)" },
            ]}
            minValue={50}
          />
        </div>
        <div className="col-12">
          <PortfolioSummary data={portfolioSummary} />
        </div>
      </div>
    </>
  );
};
