import React, { createRef, useEffect } from "react";
import { useState } from "react";
import { IncidentView } from "./IncidentView";
import { incidentDataNam } from "../config/incident";
import { DataTable } from "./common/DataTable";

export const OngoingIssueView = () => {
  const [region, setRegion] = useState("NAM");
  const [bundle, setBundle] = useState("");

  const [data, setBundleData] = useState([]);

  const namRef = createRef();

  useEffect(() => {
    if (bundle === "Financial Lines") {
      setBundleData(flData);
    } else if (bundle === "Casualty") {
      setBundleData(csltyData);
    }
  }, [bundle]);

  const boxTitleStyle = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Ongoing Issues View</h3>
        {/* <div className="row">
        {regionData.map((item, index) => {
          return (
            <div
              key={index}
              ref={namRef}
              className="col-4 "
              onClick={() => {
                if (item.clickable) {
                  setRegion("NAM");
                }
              }}
            >
              <div className="">
                <p className={"issueViewItem " + item.css}>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div> */}
        {region === "NAM" && (
          <>
            <div className="issueViewRow">
              <div className="row">
                <div className="col-10 issueViewHeading">
                  <p style={boxTitleStyle}>Bundle</p>
                </div>
              </div>
              <div className="row" style={{ display: "flex" }}>
                {bundleData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-4"
                      onClick={() => {
                        if (item.clickable) {
                          setBundle(item.name);
                        }
                      }}
                    >
                      <div>
                        <p className={`issueViewItem ${item.css}`}>
                          {item.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {bundle !== "" && (
          <>
            <div className="issueViewRow">
              <div className="row">
                <div className="col-10 issueViewHeading">
                  <p style={boxTitleStyle}>Business Function</p>
                </div>
              </div>
              <div className="row">
                {data.businessFunctionData &&
                  data.businessFunctionData.map((item, index) => {
                    return (
                      <div key={index} className="col-2">
                        <div>
                          <p className={`issueViewItem ${item.css}`}>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="issueViewRow">
              <div className="row">
                <div className="col-10 issueViewHeading">
                  <p style={boxTitleStyle}>Applications</p>
                </div>
              </div>
              <div className="row">
                {data.appData &&
                  data.appData.map((item, index) => {
                    return (
                      <div key={index} className="col-4">
                        <div className={`issueViewItem ${item.css}`}>
                          <div>{item.name}</div>
                          <div
                            style={{
                              fontSize: "0.7rem",
                            }}
                          >
                            {item.metal}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="row">
              <div className="issueViewRow col-6">
                <div className="row">
                  <div className="col-10 issueViewHeading">
                    <p style={boxTitleStyle}>Infra Issues</p>
                  </div>
                </div>
                <div className="row">
                  {data.infraData &&
                    data.infraData.map((item, index) => {
                      return (
                        <div key={index} className="col-4">
                          <div>
                            <p className={` issueViewItem ${item.css}`}>
                              {item.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="issueViewRow col-6">
                <div className="row">
                  <div className="col-10 issueViewHeading">
                    <p style={boxTitleStyle}>Component-level Issues</p>
                  </div>
                </div>
                <div className="row">
                  {data.serverData &&
                    data.serverData.map((item, index) => {
                      return (
                        <div key={index} className="col-4">
                          <div>
                            <p className={` issueViewItem ${item.css}`}>
                              {item.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <DataTable
                  tableData={{
                    cols: metricCols,
                    title,
                    rowData: metricsRowData,
                  }}
                  size={size}
                  complexData={true}
                  
                />
              </div>
            </div>
            <div className="row">
              <div
                className="col-12"
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                <p>
                  <span
                    style={{
                      textDecorationLine: "underline",
                    }}
                  >
                    Prediction
                  </span>{" "}
                  : Memory utilization is <strong>99%</strong> utilized
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: "1rem",
              }}
            >
              <div className="col"></div>
              <div className="row">
                <div className="col-12">
                  <IncidentView data={incidentDataNam} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const title = "Metrics";
export const size = "sm";

const metricCols = ["Metric", "Status", "Errors", "Log Url", "Suggestion"];
const metricsRowData = [
  [
    "Application Performance",
    '<div class="box  AMBER"></div>',
    '<div class="box  GREEN"></div>',
    "https://www.google.com",
    "Check the logs",
  ],
  [
    "Application Utilization",
    '<div class="box  GREEN"></div>',
    '<div class="box  GREEN"></div>',
    "https://www.google.com",
    "-",
  ],

  [
    "Application Availability",
    '<div class="box  GREEN"></div>',
    '<div class="box  GREEN"></div>',

    "https://www.google.com",
    "-",
  ],
  [
    "Web Services Performance",
    '<div class="box  GREEN"></div>',
    '<div class="box  GREEN"></div>',

    "https://www.google.com",
    "-",
  ],
];

const regionData = [
  // {
  //   name: "NAM",
  //   css: "issueViewRed",
  //   clickable: true,
  // },
  // {
  //   name: "LATAM",
  //   css: "issueViewGreen",
  // },
  // {
  //   name: "EMEA",
  //   css: "issueViewGreen",
  // },
];

const bundleData = [
  {
    name: "Financial Lines",
    css: "issueViewRed",
    clickable: true,
  },
  {
    name: "Casualty",
    css: "issueViewRed",
    clickable: true,
  },
  {
    name: "Sanctions",
    css: "issueViewGreen",
  },
  {
    name: "Data",
    css: "issueViewGreen",
  },
  {
    name: "Claims",
    css: "issueViewGreen",
  },
  {
    name: "Underwriting",
    css: "issueViewGreen",
  },
];

const flBusinessFunctionData = [
  {
    name: "Rating",
    css: "issueViewGreen",
  },
  {
    name: "Quote",
    css: "issueViewRed",
  },
  {
    name: "Bind",
    css: "issueViewGreen",
  },
  {
    name: "Book",
    css: "issueViewGreen",
  },
  {
    name: "Issuance",
    css: "issueViewGreen",
  },
  {
    name: "Post Bind",
    css: "issueViewGreen",
  },
];

const flApplicationData = [
  {
    name: "FLApp1",
    css: "issueViewRed",
    metal: "Platinum",
  },
  {
    name: "FLApp2",
    css: "issueViewRed",
    metal: "Gold",
  },
  {
    name: "FLApp3",
    css: "issueViewRed",
    metal: "Silver",
  },
];

const csltyApplicationData = [
  {
    name: "CSLTYApp1",
    css: "issueViewRed",
    metal: "Platinum",
  },
  {
    name: "CSLTYApp2",
    css: "issueViewGreen",
    metal: "Gold",
  },
  {
    name: "CSLTYApp3",
    css: "issueViewGreen",
    metal: "Gold",
  },
];
//Mule, Citrix, DataStage
const flInfrastructureData = [
  {
    name: "Mule",
    css: "issueViewRed",
  },
  {
    name: "Citrix",
    css: "issueViewGreen",
  },
  {
    name: "DataStage",
    css: "issueViewGreen",
  },
];

//App Server, Batch Server, Database
const flServerData = [
  {
    name: "App Server",
    css: "issueViewGreen",
  },
  {
    name: "Batch Server",
    css: "issueViewGreen",
  },
  {
    name: "Database",
    css: "issueViewGreen",
  },
];

const flData = {
  businessFunctionData: flBusinessFunctionData,
  appData: flApplicationData,
  serverData: flServerData,
  infraData: flInfrastructureData,
};

//Mule, Citrix, DataStage
const csltyInfrastructureData = [
  {
    name: "Mule",
    css: "issueViewGreen",
  },
  {
    name: "Citrix",
    css: "issueViewGreen",
  },
  {
    name: "DataStage",
    css: "issueViewGreen",
  },
];

//App Server, Batch Server, Database
const csltyServerData = [
  {
    name: "App Server",
    css: "issueViewRed",
  },
  {
    name: "Batch Server",
    css: "issueViewGreen",
  },
  {
    name: "Database",
    css: "issueViewGreen",
  },
];

const csltyBusinessFunctionData = [
  {
    name: "Rating",
    css: "issueViewGreen",
  },
  {
    name: "Quote",
    css: "issueViewGreen",
  },
  {
    name: "Bind",
    css: "issueViewGreen",
  },
  {
    name: "Book",
    css: "issueViewRed",
  },
  {
    name: "Issuance",
    css: "issueViewGreen",
  },
  {
    name: "Post Bind",
    css: "issueViewGreen",
  },
];

const csltyData = {
  businessFunctionData: csltyBusinessFunctionData,
  appData: csltyApplicationData,
  serverData: csltyServerData,
  infraData: csltyInfrastructureData,
};
