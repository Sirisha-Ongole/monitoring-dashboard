"use client";
import React from "react";
import { Table } from "react-bootstrap";

export const DataTable = ({
  tableData,
  classes = {},
  styles = {},
  size = "",
  onClicks = {},
  complexData = false,
  needsectionBorder = true,
}) => {
  const titleRowStyle = {
    textAlign: "center",
    backgroundColor: "lightblue",
  };

  const rowStyle = { textAlign: "center" };

  const headStyle = { textAlign: "center" };

  const footerStyle = { fontWeight: "bold", textAlign: "center" };

  return (
    <>
      {tableData && (
        <div className={needsectionBorder ? "sectionBorder" : ""}>
          <Table
            striped
            bordered
            hover
            size={size}
            className={classes.table && classes.table.join(" ")}
            style={styles.table}
          >
            <thead>
              <tr>
                {tableData.title && (
                  <th
                    colSpan={
                      tableData.cols
                        ? tableData.cols.length
                        : tableData.rowData[0].length
                    }
                    style={
                      styles.titleRowStyle
                        ? styles.titleRowStyle
                        : titleRowStyle
                    }
                    className={classes.titleRowStyle}
                  >
                    {tableData.title}
                  </th>
                )}
              </tr>
              <tr>
                {tableData.cols &&
                  tableData.cols.map((col) => (
                    <th
                      style={styles.headStyle ? styles.headStyle : headStyle}
                      className={classes.headStyle}
                      key={col}
                    >
                      {col}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rowData &&
                tableData.rowData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={onClicks.rowClick}
                    style={styles.rowStyle ? styles.rowStyle : rowStyle}
                  >
                    {item.map((col, index) =>
                      complexData ? (
                        <td
                          key={index}
                          dangerouslySetInnerHTML={{ __html: col }}
                        ></td>
                      ) : (
                        <td key={index}>{col}</td>
                      )
                    )}
                  </tr>
                ))}
              {tableData.footerRow && (
                <tr style={footerStyle}>
                  {tableData.footerRow.map((col, index) => (
                    <td key={index}>{col}</td>
                  ))}
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};
