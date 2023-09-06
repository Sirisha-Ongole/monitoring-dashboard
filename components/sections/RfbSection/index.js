"use client";
import React, { useEffect } from "react";
import { PortfolioView } from "../../common/PortfolioView";
import { PortfolioSummary2 } from "./PortfolioSummary";
import { IncidentView } from "../../common/IncidentView";
import {
  portfolioSummary,
  portfolioSummaryLatam,
  portfolioSummaryNam,
  portfolioViewLatam,
  portfolioViewNam,
  portfolioViewApac,
  portfolioSummaryApac,
} from "../../../config/portfolio";
import {
  incidentDataNam,
  incidentDataLatam,
  incidentDataApac,
  cols,
} from "../../../config/incident";

export const RfbSection = ({ rfbRegionSelected }) => {
  const [showMore, setShowMore] = React.useState(false);
  const [portfolioViewData, setPortfolioViewData] = React.useState([]);
  const [portfolioSummaryData, setPortfolioSummaryData] = React.useState([]);
  const [incidentData, setIncidentData] = React.useState([]);

  useEffect(() => {
    if (rfbRegionSelected === "NAM") {
      setPortfolioViewData(portfolioViewNam);
      setPortfolioSummaryData(portfolioSummaryNam);
      setIncidentData(incidentDataNam);
    } else if (rfbRegionSelected === "LATAM") {
      setPortfolioViewData(portfolioViewLatam);
      setPortfolioSummaryData(portfolioSummaryLatam);
      setIncidentData(incidentDataLatam);
    } else if (rfbRegionSelected === "APAC") {
      setPortfolioViewData(portfolioViewApac);
      setPortfolioSummaryData(portfolioSummaryApac);
      setIncidentData(incidentDataApac);
    }
    setShowMore(false);
  }, [rfbRegionSelected]);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <PortfolioView
            data={portfolioViewData}
            setShowMore={setShowMore}
          />
        </div>
        {showMore && (
          <div className="col-8">
            <PortfolioSummary2 data={portfolioSummaryData} />
          </div>
        )}
      </div>
      {showMore && (
        <div className="row">
          <div className="col-12">
            <IncidentView data={incidentData} />
          </div>
        </div>
      )}
    </>
  );
};
