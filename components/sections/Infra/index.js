import React, { useEffect } from "react";
import { NetworkStatus } from "./NetworkStatus";
import { CustomCard } from "../../common/CustomCard";
import { RadialChartMultiple } from "../../common/charts/RadialChartMultiple";
import { DynamicLineChart } from "../../common/charts/DynamicLineChart";
import { DataTable } from "../../common/DataTable";
import { PieChart } from "../../common/charts/PieChart";
import { Col, Row } from "react-bootstrap";

export const InfraSection = ({ title }) => {
  // extract title from infraData
  // const infraTitles = infraData.map((data) => data.title);

  const [selectedProblemComponent, setSelectedProblemComponent] =
    React.useState([]);

  const [impactedApps, setImpactedApps] = React.useState(impactedAppsData);

  useEffect(() => {
    const infraTitles = infraData.map((data) => {
      return { title: data.title, selected: data.data.issues[0].title };
    });
    console.log(infraTitles);
    setSelectedProblemComponent(infraTitles);
  }, []);

  // useEffect(() => {
  //   if (selectedProblemComponent.length > 0) {
  //     let selected = selectedProblemComponent.filter(
  //       (data) => data.title === "AWS"
  //     );
  //     console.log(selected);
  //     if (selected[0].selected === "EC2") {
  //       // Copy impactedApps to a new object
  //       impactedApps.cols = ["EC2 (XX.XX.XX.XX) Impacted Applications"];
  //     } else if (selected[0].selected === "ECS") {
  //       impactedApps.cols = ["ECS (XX.XX.XX.XX) Impacted Applications"];
  //     } else if (selected[0].selected === "RDS") {
  //       impactedApps.cols = ["RDS (XX.XX.XX.XX) Impacted Applications"];
  //     } else if (selected[0].selected === "EKS") {
  //       impactedApps.cols = ["EKS (XX.XX.XX.XX) Impacted Applications"];
  //     } else if (selected[0].selected === "VMC") {
  //       impactedApps.cols = ["VMC (XX.XX.XX.XX) Impacted Applications"];
  //     }

  //     selected = selectedProblemComponent.filter(
  //       (data) => data.title === "On-Prem"
  //     );
  //     if (selected[0].selected === "App Server") {
  //       impactedApps.cols = ["App Server (XX.XX.XX.XX) Impacted Applications"];
  //     }
  //     if (selected[0].selected === "Web Server") {
  //       impactedApps.cols = ["Web Server (XX.XX.XX.XX) Impacted Applications"];
  //     }
  //     if (selected[0].selected === "DB") {
  //       impactedApps.cols = ["DB (XX.XX.XX.XX) Impacted Applications"];
  //     }
  //     if (selected[0].selected === "Data Stage") {
  //       impactedApps.cols = ["Data Stage (XX.XX.XX.XX) Impacted Applications"];
  //     }
  //   }
  //   setImpactedApps(impactedApps);
  // }, [selectedProblemComponent]);

  return (
    <>
      {infraData.map((data, index) => {
        return (
          <div
            className="sectionBorder"
            key={index}
            style={{
              backgroundColor: "#262c3f",
              marginTop: "1rem",
            }}
          >
            <div className="row" key={index}>
              <div className="col-12">
                <h4
                  style={{
                    textAlign: "center",
                    // marginTop: "1rem",
                  }}
                >
                  {data.title}
                </h4>
              </div>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <div className="row">
                  <CustomCard
                    cardData={data.data}
                    cardCaption = {data.caption}
                    setSelected={setSelectedProblemComponent}
                    selectionKey={data.title}
                  />
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: "1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#30384f",
                  }}
                >
                  <RadialChartMultiple
                    titles={selectedProblemComponent}
                    selectionKey={data.title}
                  />
                </div>

                <div
                  className="row"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {/* <DynamicLineChart id={data.title + "Chart"} /> */}
                  <DataTable tableData={impactedApps} />
                  {/* <DataTable tableData={serverUtilization} /> */}
                  <div
                    style={{
                      paddingTop: "1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "#30384f",
                    }}
                  >
                    <h5>Service Utilization</h5>
                    <br />
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Row>
                        <Col
                          style={{
                            marginBottom: "1.5rem",
                          }}
                        >
                          <PieChart
                            series={[70, 30]}
                            cols={["EC2 - Utilized", "EC2 - Unutilized"]}
                          />
                        </Col>
                        <Col>
                          <PieChart
                            series={[80, 20]}
                            cols={["RDS - Utilized", "RDS - Unutilized"]}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          style={{
                            marginBottom: "1.5rem",
                          }}
                        >
                          <PieChart
                            series={[90, 10]}
                            cols={["EKS - Utilized", "EKS - Unutilized"]}
                          />
                        </Col>

                        <Col>
                          <PieChart
                            series={[60, 40]}
                            cols={["ECS - Utilized", "ECS - Unutilized"]}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <NetworkStatus />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const impactedAppsData = {
  rowData: [["App 1"], ["App 2"], ["App 3"], ["App 4"], ["App 5"]],
  cols: ["(XX.XX.XX.XX) - Impacted Applications"],
};

const serverUtilization = {
  rowData: [["Under Utilized"]],
  cols: ["Server Utilization"],
};
const awsData = {
  title: "Problems",
  issues: [
    { title: "EC2", status: "", withIssues: 1, total: 10 },
    { title: "ECS", status: "", withIssues: 1, total: 10 },
    { title: "RDS", status: "", withIssues: 0, total: 10 },
    { title: "EKS", status: "", withIssues: 1, total: 10 },
    { title: "VMC", status: "", withIssues: 1, total: 10 },
  ],
};

const onPremData = {
  title: "Problems",
  issues: [
    { title: "App Server", status: "", withIssues: 1, total: 10 },
    { title: "Web Server", status: "", withIssues: 1, total: 10 },
    { title: "DB", status: "", withIssues: 1, total: 10 },
    { title: "Data Stage", status: "", withIssues: 1, total: 10 },
  ],
};

const infraData = [
  {
    title: "AWS",
    data: awsData,
    caption:{
      name: "AWS Observability Logs",
      link: "aws_console.html"
    }
  },
  {
    title: "On-Prem",
    data: onPremData,
  },
];
