import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const BarChart = () => (
  <>
    <p
      style={{
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Active Tickets by Business functions
    </p>

    <ApexChart options={optionsApexBar} series={series} type="bar" />
  </>
);

//Rainbow colors
const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8F00FF",
];

const series = [
  {
    name: "Active Tickets",
    data: [100, 150, 200, 100, 50, 80],
  },
];

const optionsApexBar = {
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    xaxis: {
      categories: ["Reservation", "Rating", "Quote", "Bind", "Book", "Issue"],
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
    },
  },
};
