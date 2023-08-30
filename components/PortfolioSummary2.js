import React from "react";

import { Table } from "react-bootstrap";

export const PortfolioSummary2 = ({ data }) => {
  return (
    <>
      {
        <div className="sectionBorder">
          <div className="row">
            <div className="col portfolioHeader">
              <p>{data.title}</p>
            </div>
          </div>
          <div className="row">
            {/* <p>Application Count : 200</p> */}
            {
              <Table
                striped
                bordered
                hover
                size="sm"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                <tbody>
                  {data.data.map((item) => {
                    return (
                      <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          </div>
        </div>
      }
    </>
  );
};
