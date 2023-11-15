import PropTypes from "prop-types";
import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export const CustomCard = ({
  cardData,
  cardCaption,
  setSelected,
  selectionKey,
}) => {
  return (
    <>
      {cardData && cardData.issues && cardData.issues.length > 0 && (
        <div className="cards">
          <div
            style={{
              color: "white",
              paddingTop: "1rem",
              paddingBottom: "0px !important",
              // padding: "3rem",
            }}
            className=""
          >
            <Row>
              <h5
                style={
                  {
                    // fontSize: "1.3rem",
                  }
                }
              >
                {cardData.title}
              </h5>
            </Row>
            <Row>
              {cardData.issues.map((issue, index) => {
                return (
                  <Col
                    key={index}
                    xs={2}
                    style={{
                      marginRight: "0rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelected((prev) => {
                        //Based on the key, we can set the selected component
                        prev.forEach((element) => {
                          if (element.title === selectionKey) {
                            element.selected = issue.title;
                          }
                        });
                        console.log([...prev]);
                        return [...prev];
                      });
                    }}
                  >
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

            <Row style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
              <>
                {cardCaption && (
                  <Col
                    style={{
                      textAlign: "right",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      color: "#888888",
                    }}
                    onClick={() => {
                      window.open(
                        cardCaption.link,
                        "_blank",
                        "noopener noreferrer"
                      );
                    }}
                  >
                    {cardCaption.name}
                  </Col>
                )}
              </>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};
