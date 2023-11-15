import React from "react";

import { DataTable } from "../../common/DataTable";

export const PortfolioSummary = ({ data }) => {
  const cols = [
    "Metal Tier",
    "Total App count",
    "No of App compliance",
    "% of App compliance",
  ];

  const rowClick = () => {
    // show alert
    // navigate to state-of-union page in another tab
    window.open("app_hygiene.html", "_blank", "noopener noreferrer");
  };

  const captionClicks = [
    () => {
      // show alert
      // navigate to state-of-union page in another tab
      window.open("app_hygiene.html", "_blank", "noopener noreferrer");
    },
  ];

  const size = "sm";

  const classes = {
    table: ["metricAndIncident"],
  };

  const styles = {
    table: {
      marginBottom: "0.5rem",
      textAlign: "center",
    },
    rowClick: {
      cursor: "pointer",
    },
  };

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
              rowData: data,
              title: "Application Count : 100",
              caption: ["App Hygiene Dashboard"],
            }}
            size={size}
            classes={classes}
            styles={styles}
            onClicks={{ rowClick, captionClick: captionClicks }}
          />
        }
      </div>
    </div>
  );
};
