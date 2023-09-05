"use client";
import React from "react";
import { PortfolioView } from "../../PortfolioView";
import { PortfolioSummary } from "../../PortfolioSummary";

import { hygienePortfolioView, portfolioSummary } from "../../../config/portfolio";

export const HygieneSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <PortfolioView data={hygienePortfolioView} />
        </div>
        <div className="col-8">
          <PortfolioSummary data={portfolioSummary} />
        </div>
      </div>
    </>
  );
};
