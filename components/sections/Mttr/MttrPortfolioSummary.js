import React from "react";

import { DataTable } from "../../common/DataTable";

export const MttrPortfolioSummary = ({ data }) => {
  const tableStyle = {
    marginBottom: "0.5rem",
    textAlign: "center",
  };
  const size = "sm";

  const tableClass = ["metricAndIncident"];

  const cols = ["Metal Tier", "MTTR"];
  const title = "Application Count : 100";

  const rowClick = () => {
    // show alert
    // navigate to state-of-union page in another tab
    window.open("state.html", "_blank", "noopener noreferrer");
  };

  const captionClicks = [
    () => {
      // show alert
      // navigate to state-of-union page in another tab
      window.open("kpi.html", "_blank", "noopener noreferrer");
    },
  ];

  return (
    <div className="sectionBorder">
      <div className="row">
        <div className="col">
          <h5>Summary by Metal Tier</h5>
        </div>
      </div>
      <div className="row">
        {
          <DataTable
            tableData={{
              cols,
              title,
              rowData: data,
              caption: ["KPI Metrics"],
            }}
            size={size}
            classes={{ table: tableClass }}
            onClicks={{ rowClick, captionClick: captionClicks }}
          />
        }
      </div>
    </div>
  );
};
