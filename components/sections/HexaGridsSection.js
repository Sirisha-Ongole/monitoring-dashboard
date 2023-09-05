"use client";
import React, { useEffect, useState } from "react";
import { HexagonGrid } from "../common/HexagonGrid";
import {
  appHygene,
  mttr,
  ongoingIssues,
  rfbData,
  infraData,
} from "../../config/hexa-grid";

export const HexaGridsSection = ({
  setShowRfbView,
  setShowIssueView,
  setShowHygieneView,
  setShowMttrView,
  setShowInfraView,
  updateRfbRegionSelected,
}) => {
  const [rfbDataState, setRfbData] = useState(rfbData);

  useEffect(() => {
    //Change status of a NAM region to RED after 5 seconds
    setTimeout(() => {
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
    }, 5000);
  }, []);

  return (
    <>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="col-2"
        >
          <HexagonGrid
            gridData={rfbDataState}
            setShowView={setShowRfbView}
            updateSelected={updateRfbRegionSelected}
          />
        </div>
        <div className="col-2">
          <HexagonGrid gridData={infraData} setShowView={setShowInfraView} />
        </div>
        <div className="col-2">
          <HexagonGrid
            gridData={ongoingIssues}
            setShowView={setShowIssueView}
          />
        </div>
        <div className="col-2">
          <HexagonGrid gridData={appHygene} setShowView={setShowHygieneView} />
        </div>
        <div className="col-2">
          <HexagonGrid gridData={mttr} setShowView={setShowMttrView} />
        </div>
      </div>
    </>
  );
};
