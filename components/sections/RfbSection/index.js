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

  const captionClicks = [
    () => {
      // show alert
      // navigate to state-of-union page in another tab
      window.open("rfb.html", "_blank", "noopener noreferrer");
    },
    () => {
      // show alert
      // navigate to state-of-union page in another tab
      window.open("bmd.html", "_blank", "noopener noreferrer");
    },
  ];

  const makeP4 = (rowData) => {
    return rowData.map((row) => {
      return row.map((col, i) => {
        if (i === 1) {
          return col === "P1" || col === "P2" ? "P4" : col;
        }
        return col;
      });
    });
  };

  useEffect(() => {
    if (rfbRegionSelected === "NAM") {
      setPortfolioViewData(portfolioViewNam);
      setPortfolioSummaryData(portfolioSummaryNam);

      incidentDataNam.rowData = makeP4(incidentDataNam.rowData);
      setIncidentData(incidentDataNam);
    } else if (rfbRegionSelected === "LATAM") {
      setPortfolioViewData(portfolioViewLatam);
      setPortfolioSummaryData(portfolioSummaryLatam);

      incidentDataLatam.rowData = makeP4(incidentDataLatam.rowData);
      setIncidentData(incidentDataLatam);
    } else if (rfbRegionSelected === "APAC") {
      setPortfolioViewData(portfolioViewApac);
      setPortfolioSummaryData(portfolioSummaryApac);

      incidentDataApac.rowData = makeP4(incidentDataApac.rowData);
      setIncidentData(incidentDataApac);
    }
    setShowMore(false);
  }, [rfbRegionSelected]);

  return (
    <div
      style={{
        backgroundColor: "#262c3f",
        marginTop: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <h4 style={{ paddingTop: "1rem", textAlign: "center" }}>Health Checks</h4>
      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="col-4">
          <PortfolioView
            data={portfolioViewData}
            setShowMore={setShowMore}
            showTextGrid={true}
          />
        </div>
        {showMore && (
          <div className="col-8">
            <PortfolioSummary2 data={portfolioSummaryData} />
          </div>
        )}
        {/* </div> */}
        {showMore && (
          // <div className="row">
          <div className="col-12" style={{ borderRadius: "0.5rem" }}>
            <IncidentView
              data={incidentData}
              caption={{
                captionClick: captionClicks,
                text: ["RFB Dashboard", "BMD Dashboard"],
              }}
            />
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};
