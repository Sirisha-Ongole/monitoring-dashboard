"use client";
import Image from "next/image";
import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import "../public/css/header.css";

export const Header = ({ setIsVisible }) => {
  return (
    <>
      {/* Image: banner.png */}
      {/* <img
        src="banner.png"
        alt="banner"
        width="100%"
        height="200px"
        style={
          {
            // filter: "blur(80px)",
          }
        }
      /> */}

      <Navbar
        data-bs-theme="dark"
        fixed="top"
        style={{
          //background opacity
          backgroundColor: "rgb(0,24,112)",
        }}
      >
        <Container>
          <Nav className="mr-auto">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {/* Add Image */}
              {/* <Image
                src="icon-aig-logo-white.png"
                alt="logo"
                width={100}
                height={50}
                style={{
                  marginRight: "1rem",
                }}
              /> */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--paynes-gray)",
              }}>
                <BsCodeSlash />
                <p className="logoText" style={{margin:"0 1rem"}}>Sirisha</p>
              </div>
              <Navbar.Brand
                href="#home"
                style={{
                  // marginLeft: "200px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0.5rem",
                  backgroundColor: "rgba(0, 0, 255, 0.5)",
                }}
              >
                One Stop IT Platform
              </Navbar.Brand>
            </Navbar.Collapse>
            <Nav.Link href="#home" onClick={() => setIsVisible(true)}>
              GI
            </Nav.Link>
            <Nav.Link href="#features" onClick={() => setIsVisible(false)}>
              Corp
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
