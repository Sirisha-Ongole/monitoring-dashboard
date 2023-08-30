import dynamic from "next/dynamic";


// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), {
//   ssr: false,
// });

// const ResponsiveContainer = dynamic(
//   () => import("recharts").then((mod) => mod.ResponsiveContainer),
//   { ssr: false }
// );
// const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), {
//   ssr: false,
// });
// const BarSeries = dynamic(
//   () => import("recharts").then((mod) => mod.BarSeries),
//   {
//     ssr: false,
//   }
// );
// const TooltipArea = dynamic(
//   () => import("recharts").then((mod) => mod.Tooltip),
//   {
//     ssr: false,
//   }
// );
// const ChartTooltip = dynamic(
//   () => import("recharts").then((mod) => mod.Tooltip),
//   {
//     ssr: false,
//   }
// );
// const GridlineSeries = dynamic(
//   () => import("recharts").then((mod) => mod.Grid),
//   {
//     ssr: false,
//   }
// );
// const Gridline = dynamic(() => import("recharts").then((mod) => mod.Grid), {
//   ssr: false,
// });
// const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), {
//   ssr: false,
// });
// const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), {
//   ssr: false,
// });
// const CartesianGrid = dynamic(
//   () => import("recharts").then((mod) => mod.CartesianGrid),
//   {
//     ssr: false,
//   }
// );
// const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), {
//   ssr: false,
// });
// const Legend = dynamic(() => import("recharts").then((mod) => mod.Legend), {
//   ssr: false,
// });

export const Chart = () => (
  <>
    <p
      style={{
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Active Tickets by Business functions
    </p>

    {/* <ApexChart
      options={optionsApexBar}
      series={series}
     
    /> */}

    {/* <BarChart 
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 70,
        left: -50,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="key" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="data" fill="#8884d8" />
    </BarChart> */}

    {/* <BarChart
      height={300}
      // width={300}
      data={[
        { key: "Reservation", data: 100 },
        { key: "Rating", data: 150 },
        { key: "Quote", data: 200 },
        { key: "Bind", data: 100 },
        { key: "Book", data: 50 },
        { key: "Issue", data: 80 },
      ]}
      series={
        <BarSeries
          bar={<Bar colorScheme={["#00bfff"]} />}
          // tooltip={
          //   <TooltipArea
          //     tooltip={
          //       <ChartTooltip
          //         followCursor={true}
          //         modifiers={{
          //           offset: "5px, 5px",
          //         }}
          //       />
          //     }
          //   />
          // }
        />
      }
      
      gridlines={<GridlineSeries line={<Gridline direction="x" />} />}
    /> */}
  </>
);

const data = [
  { key: "Reservation", data: 100 },
  { key: "Rating", data: 150 },
  { key: "Quote", data: 200 },
  { key: "Bind", data: 100 },
  { key: "Book", data: 50 },
  { key: "Issue", data: 80 },
];

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
