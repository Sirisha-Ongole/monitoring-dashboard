import React from "react";

import { DataTable } from "./common/DataTable";

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
    window.open("state.html", "_blank", "noopener noreferrer");
  };

  const size = "sm";

  const classes = {
    table: ["metricAndIncident"],
  };

  const styles = {
    table: {
      marginBottom: "0.5rem",
      textAlign: "center",
    },
  };

  return (
    <div className="sectionBorder">
      <div className="row">
        <div className="col portfolioHeader">
          <p>Summary by Metal Tier</p>
        </div>
      </div>
      <div className="row">
        {
          <DataTable
            tableData={{
              cols,
              rowData: data,
              title: "Application Count : 100",
            }}
            size={size}
            classes={classes}
            styles={styles}
            onClicks={{ rowClick }}
          />
        }
      </div>
    </div>
  );
};
