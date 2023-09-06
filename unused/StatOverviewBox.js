import React from "react";

export const StatOverviewBox = ({data}) => {
  return (
    <div
      className="statBoxOutline"
      style={{
        height: "100%",
      }}
    >
      <div className="row">
        <div className="col-3">
          <p className="statBoxTitle">{data.title}</p>
        </div>
        <div className="col-9">
          <hr className="dottedLine" />
        </div>
      </div>
      <div
        className="row"
        style={{
          padding: "1.8rem",
          //   align items bottom
        //   alignItems: "flex-end",
        }}
      >
        {data.issues.map((issue, index) => {
          return (
            <div className="col-3" key={index}>
              {/* <div className="col-8">
                <p className="statBoxStatus">{issue.status}</p>
              </div> */}
              {/* <div className="col-12"> */}
              <div
                className="row"
                style={{
                  textAlign: "right",
                }}
              >
                <span className="statBoxIssue">
                  {issue.withIssues}
                  <span className="statBoxTotal">/{issue.total}</span>
                </span>
              </div>
              <div className="row">
                <span className="statBoxIssueTitle">{issue.title}</span>
              </div>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
