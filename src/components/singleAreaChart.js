import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SingleAreaChart = () => {
  const chartData = useSelector(
    (state) => state.chartsData.singleAreaChartData
  );
  const dates = [
    "2023-05-01",
    "2023-05-02",
    "2023-05-03",
    "2023-05-04",
    "2023-05-05",
    "2023-05-06",
    "2023-05-07",
    "2023-05-08",
    "2023-05-09",
  ];
  const series = [
    {
      name: "STOCK ABC",
      data: chartData,
    },
  ];
  const options = {
    chart: {
      type: "area",
      height: 350,
      animations: {
        easing: "easeInOutQuad",
        speed: 2000,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Hide the download data toggler
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      show: false, // Hide background lines
    },
    labels: dates,
    xaxis: {
      type: "datetime",
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis footer line
      },
      axisTicks: {
        show: false, // Hide x-axis footer ticks
      },
      stroke: {
        show: false, // Hide x-axis footer line
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        show: false, // Hide y-axis labels
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    colors: ["#A68BEF"],
  };

  return (
    <div>
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="area"
          width={200}
          height={150}
        />
      )}
    </div>
  );
};
export default SingleAreaChart;
