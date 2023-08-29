import React from "react";

import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
} from "react-hexgrid";

export const HexaGridHolder = ({gridData}) => {
  
  return (
    <div className="hexGridHolder sectionBorder">
      <HexGrid width={300} height={405}>
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

