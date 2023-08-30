"use client";
import React, { useEffect, useState } from "react";
import { HexaGridHolder } from "../HexGrid";
import { appHygene, mttr, ongoingIssues, rfbData } from "../../config/hexa-grid";

export const HexaGridsSection = ({
  setShowRfbView,
  setShowIssueView,
  setShowHygieneView,
  setShowMttrView,
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
    }, 5000);
  }, []);

  return (
    <div className="row">
      <div className="col-3">
        <HexaGridHolder
          gridData={rfbDataState}
          setShowView={setShowRfbView}
          updateSelected={updateRfbRegionSelected}
        />
      </div>
      <div className="col-3">
        <HexaGridHolder
          gridData={ongoingIssues}
          setShowView={setShowIssueView}
        />
      </div>
      <div className="col-3">
        <HexaGridHolder gridData={appHygene} setShowView={setShowHygieneView} />
      </div>
      <div className="col-3">
        <HexaGridHolder gridData={mttr} setShowView={setShowMttrView} />
      </div>
    </div>
  );
};
