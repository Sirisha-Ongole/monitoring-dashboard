import PropTypes from "prop-types";
import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export const CustomCard = ({ cardData }) => {
  return (
    <>
      {cardData && cardData.issues && cardData.issues.length > 0 && (
        <div className="cards">
          <div
            style={{
              color: "white",
              paddingBottom: "0px !important",
              padding: "3rem",
            }}
            className=""
          >
            <Row>
              <p
                style={{
                  fontSize: "1.3rem",
                }}
              >
                {cardData.title}
              </p>
            </Row>
            <Row>
              {cardData.issues.map((issue, index) => {
                return (
                  <Col key={index} xs={2}>
                    <Row>
                      <Col
                        style={{
                          alignContent: "right",
                          textAlign: "right",
                          marginBottom: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <span
                          style={{
                            color: "#d11313",
                            fontSize: "1.5rem",
                          }}
                        >
                          {issue.withIssues}
                        </span>
                        /{issue.total}
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          alignContent: "right",
                          textAlign: "right",
                          fontFamily: "DM Sans-Bold, Helvetica",
                          color: "#888888",
                          fontSize: "1rem",
                          paddingRight: "0px",
                        }}
                      >
                        {issue.title}
                      </Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
            <Row style={{}}>
              <Col
                style={{
                  textAlign: "right",
                  fontSize: "0.7rem",
                }}
                onClick={() => {
                  window.open("aws_console.html", "_blank", "noopener noreferrer");
                }}
              >
                AWS Observability Logs
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};
