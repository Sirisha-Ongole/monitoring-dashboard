"use client";
import React, { useEffect, useState } from "react";
import { HexagonGrid } from "../../common/HexagonGrid";
import {
  appHygene,
  mttr,
  ongoingIssues,
  rfbData,
  infraData,
  availability,
} from "../../../config/hexa-grid";
import { useInterval } from "usehooks-ts";
import { TreeMap } from "../../common/charts/TreeMap";

export const HexaGridsSection = ({
  setShowRfbView,
  setShowIssueView,
  setShowHygieneView,
  setShowMttrView,
  setShowInfraView,
  setShowAvailabilityView,
  updateRfbRegionSelected,
}) => {
  const [rfbDataState, setRfbData] = useState(rfbData);
  const [infraDataState, setInfraData] = useState(infraData);
  const [appHygeneDataState, setAppHygeneData] = useState(appHygene);
  const [mttrDataState, setMttrData] = useState(mttr);
  const [availabilityDataState, setAvailabilityData] = useState(availability);

  const [ongoingIssuesDataState, setOngoingIssuesData] =
    useState(ongoingIssues);

  //Change status of a NAM region to RED after 5 seconds
  useInterval(() => {
    //Iterate over the rfbData.data array and find the NAM region
    const namRegion = rfbData.data.find((region) => region.name === "NAM");
    //Update the status of the NAM region to RED
    namRegion.status = "RED";
    //Add namRegion to the rfbDataState.data
    setRfbData((old) => {
      return { ...old, data: [...old.data, namRegion] };
    });

    //Same logic as above, but for infraData
    const namRegionInfra = infraData.data.find(
      (region) => region.name === "NAM"
    );
    namRegionInfra.status = "RED";
    setRfbData((old) => {
      return { ...old, data: [...old.data, namRegionInfra] };
    });

    setRfbData((old) => changeRegionStatus(old, ["NAM"]));
    setInfraData((old) => changeRegionStatus(old, ["NAM"]));
    // setAppHygeneData((old) => changeRegionStatus(old));
    // setMttrData((old) => changeRegionStatus(old));
    setOngoingIssuesData((old) =>
      changeRegionStatus(old, ["NAM"], ["RED", "GREEN"])
    );
  }, 20000);

  return (
    <>
      {/* <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-2">
          <TreeMap data={data} title="Health Checks" />
        </div>
        <div className="col-2">
          <TreeMap data={data} title="Infrastructure Health" />
        </div>
        <div className="col-2">
          <TreeMap data={data} title="P1/P2 Issues" />
        </div>
        <div className="col-2">
          <TreeMap data={data} title="App Hygiene" />
        </div>
        <div className="col-2">
          <TreeMap data={data} title="MTTR - 98hrs" />
        </div>
      </div> */}
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-2">
          <HexagonGrid
            gridData={rfbDataState}
            setShowView={setShowRfbView}
            updateSelected={updateRfbRegionSelected}
          />
        </div>
        <div className="col-2">
          <HexagonGrid
            gridData={ongoingIssuesDataState}
            setShowView={setShowIssueView}
          />
        </div>
        <div className="col-2">
          <HexagonGrid
            gridData={infraDataState}
            setShowView={setShowInfraView}
          />
        </div>
        <div className="col-2">
          <HexagonGrid
            gridData={appHygeneDataState}
            setShowView={setShowHygieneView}
          />
        </div>
        <div className="col-2">
          <HexagonGrid
            gridData={availabilityDataState}
            setShowView={setShowAvailabilityView}
          />
        </div>
        <div className="col-2">
          <HexagonGrid gridData={mttrDataState} setShowView={setShowMttrView} />
        </div>
      </div>
    </>
  );
};

function changeRegionStatus(old, noChange, colors = ["RED", "AMBER", "GREEN"]) {
  const randomIndex = Math.floor(Math.random() * old.data.length);
  const region = old.data[randomIndex];
  if (!noChange.includes(region.name)) {
    const randomStatus = colors[Math.floor(Math.random() * colors.length)];
    region.status = randomStatus;
    return { ...old, data: [...old.data, region] };
  } else return old;
}

const data = [
  {
    x: "NAM",
    y: 218,
  },
  {
    x: "APAC",
    y: 149,
  },
  {
    x: "EMEA",
    y: 184,
  },
  {
    x: "Japan",
    y: 55,
  },
  {
    x: "Germany",
    y: 84,
  },
  {
    x: "LATAM",
    y: 31,
  },
];
