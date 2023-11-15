import React from "react";
import { DataTable } from "./DataTable";

export const IncidentView = ({ data = [], caption }) => {
  const tableClass = ["metricAndIncident"];
  const tableStyle = {
    textAlign: "center",
  };
  if (caption) {
    data.caption = {};
    data.caption = caption.text;
  }
  return (
    <DataTable
      tableData={data}
      classes={{ table: tableClass }}
      styles={{ table: tableStyle }}
      onClicks={{
        captionClick: caption && caption.captionClick,
      }}
    />
  );
};
