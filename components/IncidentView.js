import React from "react";
import { DataTable } from "./common/DataTable";

export const IncidentView = ({ data = [] }) => {
  const tableClass = ["metricAndIncident"];
  const tableStyle = {
    textAlign: "center",
  };

  return (
    <div className="darkmode-background">
      <DataTable
        tableData={data}
        classes={{ table: tableClass }}
        styles={{ table: tableStyle }}
      />
    </div>
  );
};
