import React, { useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export const DynamicSparklines = ({ title }) => {
  const [sparkLineData, setSparkLineData] = React.useState([]);

  useEffect(() => {
    setInterval(() => {
      setSparkLineData((sparkLineData) => {
        const data = sparkLineData.concat([boxMullerRandom()]);
        return data.slice(Math.max(data.length - 20, 0));
      });
    }, 1000);
  }, []);
  return (
    <div>
      <p>{title}</p>
      <Sparklines data={sparkLineData} limit={20} height={40}>
        <SparklinesLine color="#1c8cdc" />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
};

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w,
    z;

  return (function () {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}
