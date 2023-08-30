"use client";
import React from "react";
import { LobOverview } from "../LobOverview";
import { SideSection } from "../SideSection";

export const SideSectionHolder = () => {
  return (
    <>
      <LobOverview />
      <SideSection />
    </>
  );
};
