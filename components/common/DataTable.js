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
    color: "black",
  };

  const rowStyle = { textAlign: "center", backgroundColor: "#30384f" };

  const headStyle = {
    textAlign: "center",
    backgroundColor: "#444f6f",
    color: "white",
  };

  const captionStyle = {
    textAlign: "right",
    fontSize: "0.6rem",
    paddingBottom: "0rem",
    marginBottom: "0.2rem",
    cursor: "pointer",
    marginLeft: "0.5rem",
    display: "inline",
  };

  const footerStyle = { fontWeight: "bold", textAlign: "center" };

  return (
    <>
      {tableData && (
        <div className={needsectionBorder ? "sectionBorder" : ""}>
          { (
            <h6
              style={{
                textAlign: "center",
                // fontWeight: "bold",
              }}
            >
              {tableData.title}
              {tableData.caption && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {tableData.caption.map((caption, index) => (
                    <p
                      key={index}
                      style={
                        styles.captionStyle ? styles.captionStyle : captionStyle
                      }
                      onClick={onClicks.captionClick[index]}
                    >
                      {caption}
                    </p>
                  ))}
                </div>
              )}
            </h6>
          )}

          <></>
          <Table
            striped
            // bordered
            hover
            size={size}
            className={classes.table && classes.table.join(" ")}
            style={styles.table}
          >
            <thead>
              {/* <tr>
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
              </tr> */}
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
                        <td
                          key={index} // if needsattention is defined, check if the value of the column is equal to the value defined in needsattention.value
                          style={
                            tableData.needsAttention &&
                            tableData.needsAttention.styleOn === index &&
                            item[tableData.needsAttention.checkCol] ===
                              tableData.needsAttention.value
                              ? styles.needsAttention
                                ? styles.needsAttention
                                : {
                                    // flasing red
                                    animation: "blinker 1s linear infinite",
                                    backgroundColor: "red",
                                  }
                              : styles.rowStyle
                              ? styles.rowStyle
                              : rowStyle
                          }
                        >
                          {col}
                        </td>
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
