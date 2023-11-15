import React from "react";

import { DataTable } from "../../common/DataTable";

export const PortfolioSummary2 = ({ data }) => {
  const size = "sm";
  const styles = {
    table: {
      marginBottom: "0.5rem",
    },
  };

  return (
    <>
      {
        <div className="sectionBorder darkmode-background">
          <div className="row">
            <div className="col">
              <h5>{data.title}</h5>
            </div>
          </div>
          <div className="row">
            {
              <DataTable
                tableData={{
                  cols: data.cols,
                  rowData: data.rowData,
                }}
                size={size}
                styles={styles}
                needsectionBorder={false}
              />
            }
          </div>
        </div>
      }
    </>
  );
};
