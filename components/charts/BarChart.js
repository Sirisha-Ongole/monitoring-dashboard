import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const BarChart = ({ data, title }) => {
  const series = [{ data }];
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}
      </p>

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
const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFBF00",
  "#008000",
  "#0000FF",
  "#4B0082",
  "#8F00FF",
];

const options = {
  labels: ["Reservation", "Rating", "Quote", "Bind", "Book", "Issue"],
  legend: {
    position: "bottom",
  },
  plotOptions: {
    bar: {
      distributed: true,
    },
  },
  xaxis: {
    style: {
      color: "white",
    }
  },
  colors: colors,
};
