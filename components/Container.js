"use client";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { Header } from "./Header";
import { OngoingIssueView } from "./OngoingIssueView";
import { SideSectionHolder } from "./sections/SideSectionHolder";
import { HexaGridsSection } from "./sections/HexaGridsSection";
import { RfbSection } from "./sections/RfbSection";
import { HygieneSection } from "./sections/HygieneSection";
import { MttrSection } from "./sections/MttrSection";

export const MainContainer = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showRfbView, setShowRfbView] = React.useState(false);
  const [showIssueView, setShowIssueView] = React.useState(false);
  const [showHygieneView, setShowHygieneView] = React.useState(false);
  const [showMttrView, setShowMttrView] = React.useState(false);

  const [rfbRegionSelected, updateRfbRegionSelected] = React.useState(null);

  useEffect(() => {
    if (showRfbView) {
      setShowIssueView(false);
      setShowHygieneView(false);
      setShowMttrView(false);
    }
    if (showIssueView) {
      setShowRfbView(false);
      setShowHygieneView(false);
      setShowMttrView(false);
    }
    if (showHygieneView) {
      setShowRfbView(false);
      setShowIssueView(false);
      setShowMttrView(false);
    }
    if (showMttrView) {
      setShowRfbView(false);
      setShowIssueView(false);
      setShowHygieneView(false);
    }
  }, [showRfbView, showIssueView, showHygieneView, showMttrView]);

  return (
    <Container fluid>
      <Header setIsVisible={setIsVisible} />
      <div className="row">
        <div className="col-12">
          {isVisible && (
            <>
              <div className="row">
                <HexaGridsSection
                  setShowRfbView={setShowRfbView}
                  setShowIssueView={setShowIssueView}
                  setShowHygieneView={setShowHygieneView}
                  setShowMttrView={setShowMttrView}
                  updateRfbRegionSelected={updateRfbRegionSelected}
                />
              </div>
              <div className="row">
                <div className="col-3">
                  <SideSectionHolder />
                </div>
                <div className="col-9">
                  {showRfbView && (
                    <RfbSection rfbRegionSelected={rfbRegionSelected} />
                  )}
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