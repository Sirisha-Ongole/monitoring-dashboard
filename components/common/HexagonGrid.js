import React, { useEffect, useState } from "react";

import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

export const HexagonGrid = ({ gridData, setShowView, updateSelected }) => {
  const [viewBox, setViewBox] = useState("0 0 0 0");

  //Calculate viewBox for HexGrid
  useEffect(() => {
    const hexGrid = document.querySelector(".hexGridHolder");
    const hexGridWidth = hexGrid.clientWidth;
    const hexGridHeight = hexGrid.clientHeight;
    const hexGridRatio = hexGridWidth / hexGridHeight;
    const viewBoxWidth = 300;
    const viewBoxHeight = 130;
    const viewBoxRatio = viewBoxWidth / viewBoxHeight;

    const offset = -0.04 * viewBoxWidth * hexGridRatio;

    console.log(hexGridWidth, hexGridHeight, hexGridRatio, viewBoxRatio);

    if (hexGridRatio > viewBoxRatio) {
      setViewBox(`0 0 ${viewBoxWidth} ${viewBoxWidth / hexGridRatio}`);
    } else {
      setViewBox(
        `-${(viewBoxHeight * hexGridRatio) / 2 + offset} -${
          viewBoxHeight / 2
        } ${viewBoxHeight * hexGridRatio} ${viewBoxHeight}`
      );
    }
  }, []);

  return (
    <div
      className="hexGridHolder"
      style={{
        border: "1px solid rgba(var(--callout-border-rgb), 0.3)",
        textAlign: "center",
        marginTop: "0.5rem",
      }}
    >
      <h5
        style={{
          paddingTop: "0.5rem",
        }}
      >
        {gridData.title}
      </h5>
      <HexGrid width={250} height={330} viewBox={viewBox}>
        <Layout size={{ x: 15, y: 15 }} spacing={1.1}>
          <Hexagon q={0} r={0} s={0}>
            <Text>{gridData.title}</Text>
          </Hexagon>
          {gridData.data.map((item) => {
            return (
              <Hexagon
                key={item.name}
                q={item.position.q}
                r={item.position.r}
                s={item.position.s}
                className={item.status}
                // onClick, if clicable, set the state of showRfbView to true
                onClick={() => {
                  if (item.clickable) {
                    setShowView(true);
                    if (updateSelected) updateSelected(item.name);
                  }
                }}
              >
                <Text>{item.name}</Text>
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>
    </div>
  );
};
