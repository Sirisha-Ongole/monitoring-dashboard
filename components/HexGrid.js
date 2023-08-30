import React from "react";

import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

export const HexaGridHolder = ({ gridData, setShowView, updateSelected }) => {
  return (
    <div className="hexGridHolder sectionBorder">
      <h3>{gridData.title}</h3>
      <HexGrid width={240} height={250}>
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
