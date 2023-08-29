"use client";
import React from "react";

import { Navbar, Nav } from "react-bootstrap";

export const Header = ({ setIsVisible }) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand href="#home">AUTO MONITORING DASHBOARD</Navbar.Brand>
      </Navbar>
      <Navbar bg="primary" data-bs-theme="dark">
        {/* Navbar with 3 tabs */}
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">GI</Nav.Link> */}
          {/* Above must be active/selected */}
          <Nav.Link href="#home" onClick={() => setIsVisible(true)}>
            GI
          </Nav.Link>
          <Nav.Link href="#features" onClick={() => setIsVisible(false)}>Corp</Nav.Link>
          <Nav.Link href="#about" onClick={() => setIsVisible(false)}>International</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
