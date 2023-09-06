"use client";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { Header } from "./Header";
import { OngoingIssueView } from "./sections/OngoingIssues";
import { SideSection } from "./sections/SideSection/SideSection";
import { HexaGridsSection } from "./sections/HexGrids";
import { RfbSection } from "./sections/RfbSection";
import { HygieneSection } from "./sections/Hygiene";
import { MttrSection } from "./sections/Mttr";
import { InfraSection } from "./sections/Infra";

export const MainContainer = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showRfbView, setShowRfbView] = React.useState(false);
  const [showIssueView, setShowIssueView] = React.useState(false);
  const [showHygieneView, setShowHygieneView] = React.useState(false);
  const [showMttrView, setShowMttrView] = React.useState(false);
  const [showInfraView, setShowInfraView] = React.useState(false);

  const [rfbRegionSelected, updateRfbRegionSelected] = React.useState(null);

  useEffect(() => {
    if (showRfbView) {
      setShowIssueView(false);
      setShowHygieneView(false);
      setShowMttrView(false);
      setShowInfraView(false);
    }
    if (showIssueView) {
      setShowRfbView(false);
      setShowHygieneView(false);
      setShowMttrView(false);
      setShowInfraView(false);
    }
    if (showHygieneView) {
      setShowRfbView(false);
      setShowIssueView(false);
      setShowMttrView(false);
      setShowInfraView(false);
    }
    if (showMttrView) {
      setShowRfbView(false);
      setShowIssueView(false);
      setShowHygieneView(false);
      setShowInfraView(false);
    }
    if (showInfraView) {
      setShowRfbView(false);
      setShowIssueView(false);
      setShowHygieneView(false);
      setShowMttrView(false);
    }
  }, [
    showRfbView,
    showIssueView,
    showHygieneView,
    showMttrView,
    showInfraView,
  ]);

  return (
    <Container
      fluid
      style={{
        fontFamily: "DM Sans-Bold, Helvetica",
      }}
      
    >
      <Header setIsVisible={setIsVisible} />
      <div className="row" style={{
        paddingTop: "80px",
      }}>
        <div className="col-12">
          {isVisible && (
            <>
              <div className="row">
                <HexaGridsSection
                  setShowRfbView={setShowRfbView}
                  setShowIssueView={setShowIssueView}
                  setShowHygieneView={setShowHygieneView}
                  setShowMttrView={setShowMttrView}
                  setShowInfraView={setShowInfraView}
                  updateRfbRegionSelected={updateRfbRegionSelected}
                />
              </div>
              <div className="row">
                <div className="col-2">
                  <SideSection />
                </div>
                <div className="col-10">
                  {showRfbView && (
                    <RfbSection rfbRegionSelected={rfbRegionSelected} />
                  )}
                  {showInfraView && <InfraSection />}
                  {showHygieneView && <HygieneSection />}
                  {showIssueView && <OngoingIssueView />}
                  {showMttrView && <MttrSection />}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
