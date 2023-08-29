"use client";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Header } from "./Header";
import { LobOverview } from "./LobOverview";
import { HexaGridHolder } from "./HexGrid";
import { ongoingIssues, rfbData } from "../config/hexa-grid";
import { PortfolioView } from "./PortfolioView";
import { PortfolioSummary } from "./PortfolioSummary";
import { portfolioSummary, portfolioView } from "../config/portfolio";
import { ApplicationView } from "./ApplicationView";

export const MainContainer = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Container>
      <Header setIsVisible={setIsVisible} />
      {/* if isVisible is true then render the following */}
      {isVisible && (
        <>
          <div className="row">
            <div className="col-4">
              <LobOverview />
            </div>

            <div className="col-4">
              <HexaGridHolder gridData={rfbData} />
            </div>
            <div className="col-4">
              <HexaGridHolder gridData={ongoingIssues} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <PortfolioView data={portfolioView}/>
            </div>
            <div className="col-6">
              <PortfolioSummary data={portfolioSummary}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ApplicationView />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
