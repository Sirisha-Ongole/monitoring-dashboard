import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const BarChart = ({ data, title, cols }) => {
  const series = [{ data }];

  const options = {
    labels: cols,
    legend: {
      show: false,
      // position: "bottom",
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    xaxis: {
      style: {
        color: "white",
      },
    },
    colors: colors,
  };

  return (
    <>
      <h5
        style={{
          textAlign: "center",
          // fontWeight: "bold",
        }}
      >
        {title}
      </h5>

      <ApexChart
        options={options}
        series={series}
        type="bar"
        width={200}
        height={300}
        colors={colors}
      />
    </>
  );
};

//Rainbow colors
export const colors = [
  "#47bd4d", //green
  "#800000", //red
  "#ffbf0a", //yellow
  "#FF7F00", //orange

  "#0000FF", //blue
  "#4B0082", //indigo
  "#8F00FF", //violet
];
