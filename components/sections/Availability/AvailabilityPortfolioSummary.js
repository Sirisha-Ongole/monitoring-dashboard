import React from "react";

import { DataTable } from "../../common/DataTable";

export const AvailabilityPortfolioSummary = ({ data }) => {
  const tableStyle = {
    marginBottom: "0.5rem",
    textAlign: "center",
  };
  const size = "sm";

  const tableClass = ["metricAndIncident"];

  const cols = ["Metal Tier", "Availability"];

  const rowClick = () => {
    // show alert
    // navigate to state-of-union page in another tab
    window.open("state.html", "_blank", "noopener noreferrer");
  };

  const captionClicks = [
    () => {
      // show alert
      // navigate to state-of-union page in another tab
      window.open(
        "availability-dashboard.html",
        "_blank",
        "noopener noreferrer"
      );
    },
  ];

  return (
    <div className="">
      <div className="row">
        {/* <div className="col"> */}
        <h5
          style={{
            marginTop: "1rem",
          }}
        >
          Summary by Metal Tier
        </h5>
        {/* </div> */}
      </div>
      <div className="row">
        {
          <DataTable
            tableData={{
              cols,
              rowData: data,
              caption: ["Avaiability Report"],
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
