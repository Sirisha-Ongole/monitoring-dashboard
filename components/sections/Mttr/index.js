"use client";
import React from "react";
import { PortfolioView } from "../../common/PortfolioView";

import {
  mttrPortfolioView,
  mttrportfolioSummary,
} from "../../../config/portfolio";
import { MttrPortfolioSummary } from "./MttrPortfolioSummary";

export const MttrSection = () => {
  return (
    <>
      <div className="row" style={{
          marginTop: "1rem",
          backgroundColor: "#262c3f",
          borderRadius: "0.5rem",
        }}>
        <div className="col-4">
          <PortfolioView
            data={mttrPortfolioView}
            showTextGrid={true}
            maxValue={150}
            customSegmentStops={[0, 100, 120, 150]}
            segmentColors={[
              "rgb(71, 189, 77)",
              "rgb(255,191, 10)",
              "rgb(128,0,0)",
            ]}
          />
        </div>
        <div className="col-8">
          <MttrPortfolioSummary data={mttrportfolioSummary} />
        </div>
      </div>
    </>
  );
};
