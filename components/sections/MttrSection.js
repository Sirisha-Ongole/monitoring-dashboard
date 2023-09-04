"use client";
import React from "react";
import { PortfolioView } from "../PortfolioView";

import { mttrPortfolioView, mttrportfolioSummary } from "../../config/portfolio";
import { MttrPortfolioSummary } from "../MttrPortfolioSummary";

export const MttrSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <PortfolioView data={mttrPortfolioView} />
        </div>
        <div className="col-8">
          <MttrPortfolioSummary data={mttrportfolioSummary} />
        </div>
      </div>
    </>
  );
};
