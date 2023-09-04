import React from "react";

import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

export const HexagonGrid = ({ gridData, setShowView, updateSelected }) => {
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
      <HexGrid width={250} height={250} viewBox="-30 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} spacing={1.1}>
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
